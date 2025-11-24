import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ProductCard = ({ image, titleKey, descKey, price }) => {
    const { t } = useLanguage();

    return (
        <article className="card">
            <img src={image} alt={t(titleKey)} />
            <h3>{t(titleKey)}</h3>
            <p className="muted">{t(descKey)}</p>
            {price && <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#3b82f6', marginBottom: '1rem' }}>{price}</p>}
            <span className="btn btn-green">{t('shopNow')}</span>
        </article>
    );
};

export default ProductCard;
