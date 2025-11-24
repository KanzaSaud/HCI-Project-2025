import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';

const CartPage = () => {
    const { t } = useLanguage();
    const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

    return (
        <main className="container">
            <section className="hero" style={{ padding: '2rem' }}>
                <h1>{t('cartText')}</h1>
            </section>

            <div className="quick-card" style={{ maxWidth: '900px', margin: '0 auto' }}>
                {cartItems.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '2rem' }}>
                        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '1rem' }}>{t('cartEmpty')}</p>
                        <Link to="/shop" className="btn btn-blue">{t('continueShopping')}</Link>
                    </div>
                ) : (
                    <>
                        {cartItems.map((item) => (
                            <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid #eee' }}>
                                <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', borderRadius: '10px', objectFit: 'cover' }} />
                                <div style={{ flex: 1 }}>
                                    <h3>{item.name}</h3>
                                    <p className="muted">PKR {item.price}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ background: '#f5f5f5', border: 'none', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer' }}><Minus size={16} /></button>
                                    <span style={{ fontWeight: 'bold', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ background: '#f5f5f5', border: 'none', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer' }}><Plus size={16} /></button>
                                </div>
                                <div style={{ fontWeight: 'bold', fontSize: '1.2rem', minWidth: '100px', textAlign: 'right' }}>
                                    PKR {item.price * item.quantity}
                                </div>
                                <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', marginLeft: '1rem' }}>
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        ))}

                        <div style={{ marginTop: '2rem', textAlign: 'right', fontSize: '1.5rem', fontWeight: 'bold' }}>
                            {t('total')}: PKR {cartTotal}
                        </div>

                        <div className="row" style={{ marginTop: '2rem' }}>
                            <Link to="/shop" className="btn btn-blue" style={{ textAlign: 'center', textDecoration: 'none' }}>
                                {t('continueShopping')}
                            </Link>
                            <Link to="/checkout" className="btn btn-green" style={{ textAlign: 'center', textDecoration: 'none' }}>
                                {t('checkout')}
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </main>
    );
};

export default CartPage;
