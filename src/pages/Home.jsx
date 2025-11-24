import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const { t } = useLanguage();

    return (
        <main className="container">
            <section className="hero">
                <h1>{t('heroTitle')}</h1>
                <p className="lead">{t('heroLead')}</p>
            </section>

            <section className="trending">
                <h2>{t('trendingTitle')}</h2>
                <div className="cards">
                    <Link to="/shop" state={{ category: 'produce' }} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ProductCard
                            image="https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=500&h=300&fit=crop"
                            titleKey="card1Title"
                            descKey="card1Desc"
                        />
                    </Link>
                    <Link to="/shop" state={{ category: 'dairy' }} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ProductCard
                            image="https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=500&h=300&fit=crop"
                            titleKey="card2Title"
                            descKey="card2Desc"
                        />
                    </Link>
                    <Link to="/shop" state={{ category: 'bakery' }} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ProductCard
                            image="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&h=300&fit=crop"
                            titleKey="card3Title"
                            descKey="card3Desc"
                        />
                    </Link>
                </div>
            </section>

            <section className="quick">
                <h2>{t('quickShopTitle')}</h2>
                <div className="quick-card">
                    <Link to="/shop" className="btn btn-blue full" style={{ display: 'block', textDecoration: 'none' }}>
                        {t('browseCategories')}
                    </Link>
                    <div className="row">
                        <Link to="/reorder" className="btn btn-blue" style={{ display: 'block', textDecoration: 'none' }}>
                            {t('reorderItems')}
                        </Link>
                        <Link to="/shop-by-list" className="btn btn-orange" style={{ display: 'block', textDecoration: 'none' }}>
                            {t('shopByList')}
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
