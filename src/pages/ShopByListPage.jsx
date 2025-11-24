import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ShopByListPage = () => {
    const { t } = useLanguage();
    const [item, setItem] = useState('');
    const [list, setList] = useState([]);

    const addItem = () => {
        if (item.trim()) {
            setList([...list, item]);
            setItem('');
        }
    };

    const removeItem = (index) => {
        const newList = list.filter((_, i) => i !== index);
        setList(newList);
    };

    return (
        <main className="container">
            <section className="hero" style={{ padding: '2rem' }}>
                <h1>{t('shopByList')}</h1>
                <p className="lead">{t('shopByListDesc')}</p>
            </section>

            <div className="quick-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                    <input
                        type="text"
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                        placeholder={t('addItem')}
                        style={{
                            flex: 1,
                            padding: '1rem',
                            borderRadius: '50px',
                            border: '1px solid #ddd',
                            fontSize: '1rem'
                        }}
                        onKeyPress={(e) => e.key === 'Enter' && addItem()}
                    />
                    <button onClick={addItem} className="btn btn-blue" style={{ padding: '0 1.5rem', borderRadius: '50%' }}>
                        <Plus />
                    </button>
                </div>

                <div style={{ background: 'white', borderRadius: '20px', padding: '1rem', minHeight: '200px', marginBottom: '2rem' }}>
                    <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>{t('myList')}</h3>
                    {list.length === 0 ? (
                        <p style={{ color: '#999', textAlign: 'center', marginTop: '2rem' }}>List is empty</p>
                    ) : (
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {list.map((listItem, index) => (
                                <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.8rem 0', borderBottom: '1px solid #f5f5f5' }}>
                                    <span>{listItem}</span>
                                    <button onClick={() => removeItem(index)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}>
                                        <Trash2 size={18} />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {list.length > 0 && (
                    <Link to="/cart" className="btn btn-green full" style={{ display: 'block', textDecoration: 'none', textAlign: 'center' }}>
                        {t('orderAll')}
                    </Link>
                )}
            </div>
        </main>
    );
};

export default ShopByListPage;
