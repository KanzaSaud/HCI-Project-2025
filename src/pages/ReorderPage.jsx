import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const ReorderPage = () => {
    const { t } = useLanguage();

    const pastOrders = [
        { id: 1, date: '2023-10-25', items: ['Milk', 'Bread', 'Eggs'], total: 'PKR 450' },
        { id: 2, date: '2023-11-02', items: ['Apples', 'Bananas', 'Yogurt'], total: 'PKR 600' },
    ];

    return (
        <main className="container">
            <section className="hero" style={{ padding: '2rem' }}>
                <h1>{t('pastOrders')}</h1>
                <p className="lead">{t('reorderDesc')}</p>
            </section>

            <div className="cards">
                {pastOrders.map((order) => (
                    <div key={order.id} className="card" style={{ animationDelay: '0s' }}>
                        <h3>{t('orderDetails')} #{order.id}</h3>
                        <p className="muted">{order.date}</p>
                        <ul style={{ listStyle: 'none', marginBottom: '1rem', padding: 0 }}>
                            {order.items.map((item, idx) => (
                                <li key={idx} style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>{item}</li>
                            ))}
                        </ul>
                        <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>{t('total')}: {order.total}</p>
                        <Link to="/cart" className="btn btn-green" style={{ textAlign: 'center', display: 'block', textDecoration: 'none' }}>
                            {t('reorder')}
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default ReorderPage;
