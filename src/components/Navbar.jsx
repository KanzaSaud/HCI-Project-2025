import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { Search, Mic, ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
    const { t, toggleLanguage, language } = useLanguage();
    const { cartCount } = useCart();
    const [searchQuery, setSearchQuery] = useState('');
    const [isListening, setIsListening] = useState(false);

    const handleVoiceSearch = () => {
        if (!('webkitSpeechRecognition' in window)) {
            alert('Voice search is not supported in this browser.');
            return;
        }

        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = language === 'ur' ? 'ur-PK' : 'en-US';
        recognition.start();
        setIsListening(true);

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setSearchQuery(transcript);
            setIsListening(false);
            // In a real app, you would trigger the search here
            console.log('Searching for:', transcript);
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error', event.error);
            setIsListening(false);
        };

        recognition.onend = () => {
            setIsListening(false);
        };
    };

    return (
        <header className="topbar">
            <div className="topbar-inner">
                <div className="left">
                    <Link to="/" className="logo-delivery" style={{ textDecoration: 'none' }}>
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z'/%3E%3C/svg%3E" alt="Bazaar Logo" />
                        <div className="deliver">
                            {t('deliverTo')} <span className="location">{t('location')}</span>
                        </div>
                    </Link>
                </div>

                <div className="center" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    <div className="search">
                        <input
                            type="text"
                            placeholder={t('searchPlaceholder')}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button
                            className={`mic-btn ${isListening ? 'listening' : ''}`}
                            onClick={handleVoiceSearch}
                            title="Voice Search"
                            style={{ background: 'transparent', color: '#666' }}
                        >
                            <Mic size={20} />
                        </button>
                        <button id="searchBtn">
                            <Search size={20} />
                        </button>
                    </div>
                </div>

                <div className="right">
                    <button className="lang-btn" onClick={toggleLanguage}>
                        {t('langSwitch')}
                    </button>

                    <Link to="/cart" className="cart-btn" style={{ textDecoration: 'none' }}>
                        <ShoppingCart size={20} />
                        <span>{t('cartText')} ({cartCount})</span>
                    </Link>

                    <Link to="/profile" className="profile" style={{ textDecoration: 'none' }}>
                        {t('greeting')}
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
