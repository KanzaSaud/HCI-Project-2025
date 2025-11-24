import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { Filter, Plus } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const ShopPage = () => {
    const { t, language } = useLanguage();
    const { addToCart } = useCart();
    const location = useLocation();
    const [activeCategory, setActiveCategory] = useState('all');

    useEffect(() => {
        if (location.state && location.state.category) {
            setActiveCategory(location.state.category);
        }
    }, [location]);

    const categories = [
        { id: 'all', nameKey: 'allCategories' },
        { id: 'produce', nameKey: 'freshProduce' },
        { id: 'bakery', nameKey: 'bakery' },
        { id: 'dairy', nameKey: 'dairyEggs' },
        { id: 'pantry', nameKey: 'pantryStaples' },
    ];

    const products = [
        { id: 1, category: 'produce', nameKey: 'apple', price: 250, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop' },
        { id: 2, category: 'produce', nameKey: 'banana', price: 120, image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&h=300&fit=crop' },
        { id: 3, category: 'produce', nameKey: 'spinach', price: 80, image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=300&fit=crop' },
        { id: 4, category: 'bakery', nameKey: 'bread', price: 150, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop' },
        { id: 5, category: 'bakery', nameKey: 'croissant', price: 200, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop' },
        { id: 6, category: 'dairy', nameKey: 'milk', price: 180, image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=300&fit=crop' },
        { id: 7, category: 'dairy', nameKey: 'eggs', price: 300, image: 'https://images.unsplash.com/photo-1582722878654-02fd23747033?w=400&h=300&fit=crop' },
        { id: 8, category: 'pantry', nameKey: 'rice', price: 450, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop' },
    ];

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <main className="container">
            <section className="hero" style={{ padding: '2rem', marginBottom: '2rem' }}>
                <h1>{t('marketplace')}</h1>
                <p className="lead">{t('marketplaceDesc')}</p>
            </section>

            <div className="shop-layout" style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '2rem' }}>
                {/* Sidebar Categories */}
                <aside className="categories-sidebar">
                    <div className="quick-card" style={{ padding: '1.5rem', position: 'sticky', top: '100px' }}>
                        <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Filter size={20} /> {t('categories')}
                        </h3>
                        <ul style={{ listStyle: 'none' }}>
                            {categories.map(cat => (
                                <li key={cat.id} style={{ marginBottom: '0.5rem' }}>
                                    <button
                                        onClick={() => setActiveCategory(cat.id)}
                                        style={{
                                            width: '100%',
                                            textAlign: language === 'ur' ? 'right' : 'left',
                                            padding: '0.8rem 1rem',
                                            background: activeCategory === cat.id ? '#3b82f6' : 'transparent',
                                            color: activeCategory === cat.id ? 'white' : '#666',
                                            border: 'none',
                                            borderRadius: '10px',
                                            cursor: 'pointer',
                                            fontWeight: activeCategory === cat.id ? '600' : '400',
                                            transition: 'all 0.2s'
                                        }}
                                    >
                                        {t(cat.nameKey)}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="products-grid">
                    <div className="cards" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
                        {filteredProducts.map(product => (
                            <article key={product.id} className="card" style={{ padding: '1.5rem' }}>
                                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '15px', marginBottom: '1rem' }}>
                                    <img
                                        src={product.image}
                                        alt={t(product.nameKey)}
                                        style={{ width: '100%', height: '180px', objectFit: 'cover', transition: 'transform 0.3s' }}
                                    />
                                </div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{t(product.nameKey)}</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                                    <span style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#3b82f6' }}>PKR {product.price}</span>
                                    <button
                                        onClick={() => addToCart({ ...product, name: t(product.nameKey) })}
                                        className="btn btn-green"
                                        style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                                    >
                                        <Plus size={16} /> {t('add')}
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Category styles would go here in a real app (media queries) */}
            <style>{`
        @media (max-width: 768px) {
          .shop-layout {
            grid-template-columns: 1fr !important;
          }
          .categories-sidebar {
            margin-bottom: 2rem;
          }
          .categories-sidebar ul {
            display: flex;
            overflow-x: auto;
            gap: 0.5rem;
            padding-bottom: 0.5rem;
          }
          .categories-sidebar li {
            flex: 0 0 auto;
            margin-bottom: 0 !important;
          }
          .categories-sidebar button {
            white-space: nowrap;
          }
        }
      `}</style>
        </main>
    );
};

export default ShopPage;
