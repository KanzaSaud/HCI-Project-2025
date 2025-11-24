import React, { useState, useEffect } from 'react';
import { Volume2, StopCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TTSButton = () => {
    const { t, language } = useLanguage();
    const [speaking, setSpeaking] = useState(false);

    useEffect(() => {
        // Cancel speech when component unmounts or language changes
        window.speechSynthesis.cancel();
        setSpeaking(false);
    }, [language]);

    const handleSpeak = () => {
        if (speaking) {
            window.speechSynthesis.cancel();
            setSpeaking(false);
            return;
        }

        // Gather readable text, prioritizing the main content area
        const contentElement = document.querySelector('main') || document.body;
        const textToRead = contentElement.innerText;

        if (!textToRead) return;

        const utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.lang = language === 'ur' ? 'ur-PK' : 'en-US';

        // Adjust rate/pitch if needed, but defaults are usually fine
        utterance.rate = 0.9;

        utterance.onend = () => setSpeaking(false);
        utterance.onerror = (e) => {
            console.error("TTS Error:", e);
            setSpeaking(false);
        };

        window.speechSynthesis.speak(utterance);
        setSpeaking(true);
    };

    return (
        <button
            onClick={handleSpeak}
            className="btn-blue"
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2000,
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
            }}
            title={t('tapToHear')}
        >
            {speaking ? <StopCircle size={24} /> : <Volume2 size={24} />}
        </button>
    );
};

export default TTSButton;
