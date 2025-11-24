import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { CheckCircle, Truck, Package } from 'lucide-react';

const OrderTrackingPage = () => {
    const { t } = useLanguage();

    return (
        <main className="container">
            <section className="hero" style={{ padding: '2rem' }}>
                <h1>{t('orderReceived')}</h1>
                <p className="lead">{t('trackOrder')}</p>
            </section>

            <div className="quick-card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', marginBottom: '3rem', marginTop: '2rem' }}>
                    {/* Progress Line */}
                    <div style={{ position: 'absolute', top: '50%', left: '0', width: '100%', height: '4px', background: '#e5e7eb', zIndex: 0 }}></div>
                    <div style={{ position: 'absolute', top: '50%', left: '0', width: '50%', height: '4px', background: '#3b82f6', zIndex: 0 }}></div>

                    {/* Steps */}
                    <div style={{ position: 'relative', zIndex: 1, background: 'white', padding: '0.5rem' }}>
                        <div style={{ width: '50px', height: '50px', background: '#3b82f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', margin: '0 auto' }}>
                            <CheckCircle />
                        </div>
                        <p style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>{t('preparing')}</p>
                    </div>

                    <div style={{ position: 'relative', zIndex: 1, background: 'white', padding: '0.5rem' }}>
                        <div style={{ width: '50px', height: '50px', background: '#3b82f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', margin: '0 auto' }}>
                            <Truck />
                        </div>
                        <p style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>{t('outForDelivery')}</p>
                    </div>

                    <div style={{ position: 'relative', zIndex: 1, background: 'white', padding: '0.5rem' }}>
                        <div style={{ width: '50px', height: '50px', background: '#e5e7eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', margin: '0 auto' }}>
                            <Package />
                        </div>
                        <p style={{ marginTop: '0.5rem', color: '#999' }}>{t('delivered')}</p>
                    </div>
                </div>

                <Link to="/" className="btn btn-blue">
                    {t('backToHome')}
                </Link>
            </div>
        </main>
    );
};

export default OrderTrackingPage;
