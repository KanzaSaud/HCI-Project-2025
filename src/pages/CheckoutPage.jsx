import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link, useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
    const { t } = useLanguage();
    const navigate = useNavigate();

    const handlePlaceOrder = () => {
        // Simulate API call
        setTimeout(() => {
            navigate('/tracking');
        }, 1000);
    };

    return (
        <main className="container">
            <section className="hero" style={{ padding: '2rem' }}>
                <h1>{t('checkout')}</h1>
            </section>

            <div className="quick-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h3 style={{ marginBottom: '1.5rem' }}>{t('paymentMethod')}</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '15px', cursor: 'pointer' }}>
                        <input type="radio" name="payment" defaultChecked />
                        <span style={{ fontWeight: 'bold' }}>{t('cod')}</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '15px', cursor: 'pointer' }}>
                        <input type="radio" name="payment" />
                        <span style={{ fontWeight: 'bold' }}>{t('online')}</span>
                    </label>
                </div>

                <button onClick={handlePlaceOrder} className="btn btn-green full">
                    {t('placeOrder')}
                </button>
            </div>
        </main>
    );
};

export default CheckoutPage;
