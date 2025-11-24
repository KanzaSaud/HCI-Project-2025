import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { User, MapPin, Phone, Mail, Clock, Settings, LogOut } from 'lucide-react';

const ProfilePage = () => {
    const { t } = useLanguage();

    const user = {
        name: 'Maheen',
        email: 'maheen@example.com',
        phone: '+92 300 1234567',
        address: 'House 123, Street 4, DHA Phase 6, Karachi',
        memberSince: 'January 2023'
    };

    return (
        <main className="container">
            <section className="hero" style={{ padding: '2rem' }}>
                <h1>{t('myProfile')}</h1>
            </section>

            <div className="profile-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {/* Personal Info Card */}
                <div className="quick-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ width: '80px', height: '80px', background: '#e0f2fe', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                            <User size={40} />
                        </div>
                        <div>
                            <h2 style={{ margin: 0 }}>{user.name}</h2>
                            <p style={{ color: '#666' }}>{t('goldMember')}</p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#4b5563' }}>
                            <Mail size={20} /> <span>{user.email}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#4b5563' }}>
                            <Phone size={20} /> <span>{user.phone}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#4b5563' }}>
                            <MapPin size={20} /> <span>{user.address}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#4b5563' }}>
                            <Clock size={20} /> <span>{t('memberSince')} {user.memberSince}</span>
                        </div>
                    </div>
                </div>

                {/* Settings & Actions Card */}
                <div className="quick-card">
                    <h3 style={{ marginBottom: '1.5rem' }}>{t('accountSettings')}</h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <button className="btn" style={{ background: '#f3f4f6', color: '#1f2937', display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'flex-start' }}>
                            <MapPin size={20} /> {t('manageAddresses')}
                        </button>
                        <button className="btn" style={{ background: '#f3f4f6', color: '#1f2937', display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'flex-start' }}>
                            <Settings size={20} /> {t('preferences')}
                        </button>
                        <button className="btn" style={{ background: '#fee2e2', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'flex-start', marginTop: '1rem' }}>
                            <LogOut size={20} /> {t('logout')}
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProfilePage;
