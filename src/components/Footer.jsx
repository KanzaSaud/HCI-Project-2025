import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="col">
                    <h4>{t('footerTitle1')}</h4>
                    <p dangerouslySetInnerHTML={{ __html: t('footerDesc1') }} />
                </div>
                <div className="col">
                    <h4>{t('footerTitle2')}</h4>
                    <p dangerouslySetInnerHTML={{ __html: t('footerDesc2') }} />
                </div>
                <div className="col">
                    <h4>{t('footerTitle3')}</h4>
                    <p dangerouslySetInnerHTML={{ __html: t('footerDesc3') }} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
