import React, { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

const Toast = ({ message, isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
        <div className="toast-container" style={{
            position: 'fixed',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#10b981', // Emerald green for success
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '50px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            zIndex: 3000,
            animation: 'slideUp 0.3s ease-out forwards',
            minWidth: '300px',
            justifyContent: 'center'
        }}>
            <CheckCircle size={24} />
            <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>{message}</span>
            <button
                onClick={onClose}
                style={{
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    marginLeft: 'auto',
                    padding: '0.2rem',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <X size={20} />
            </button>
            <style>{`
        @keyframes slideUp {
          from { transform: translate(-50%, 100%); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
      `}</style>
        </div>
    );
};

export default Toast;
