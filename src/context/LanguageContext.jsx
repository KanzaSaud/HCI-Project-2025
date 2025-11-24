import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
    en: {
        deliverTo: "Deliver To",
        location: "📍 Karachi, Pakistan",
        searchPlaceholder: "Search for groceries...",
        cartText: "🛒 Cart",
        greeting: "👋 Hello, Maheen",
        heroTitle: "Fresh Groceries Delivered to Your Door",
        heroLead: "Shop from our wide selection of fresh produce, pantry staples, and household essentials with an easy-to-use interface designed for your comfort.",
        trendingTitle: "✨ Trending Products",
        card1Title: "🥬 Fresh Produce",
        card1Desc: "Farm-fresh fruits and vegetables delivered daily",
        shopNow: "Shop Now →",
        card2Title: "🥛 Dairy & Eggs",
        card2Desc: "Fresh dairy products and farm eggs",
        card3Title: "🥖 Bakery",
        card3Desc: "Freshly baked bread, pastries, and treats",
        quickShopTitle: "⚡ Quick Shopping Options",
        browseCategories: "📂 Browse All Categories",
        reorderItems: "🔄 Reorder Previous Items",
        shopByList: "📝 Shop by List",
        footerTitle1: "Bazaar",
        footerDesc1: "Fresh groceries delivered to your door with an accessible shopping experience for all. Your trusted partner in daily essentials.",
        footerTitle2: "Customer Service",
        footerDesc2: "📞 Phone: 1-800-BAZAAR\n📧 Email: help@bazaar.com\n💬 Live Chat Available 24/7",
        footerTitle3: "Delivery Info",
        footerDesc3: "🚚 Same-day delivery available on orders before 2pm\n🎁 Free delivery on orders over PKR 2,500",
        langSwitch: "اردو",
        tapToHear: "Tap to hear page content",
        listening: "Listening...",
        cartEmpty: "Your cart is empty",
        total: "Total",
        checkout: "Proceed to Checkout",
        continueShopping: "Continue Shopping",
        orderReceived: "Order Received!",
        trackOrder: "Track Order",
        items: "Items",
        price: "Price",
        addToCart: "Add to Cart",
        added: "Added!",
        viewCart: "View Cart",
        orderTracking: "Order Tracking",
        orderStatus: "Order Status",
        preparing: "Preparing",
        outForDelivery: "Out for Delivery",
        delivered: "Delivered",
        shopByListDesc: "Add items to your list and order them all at once.",
        addItem: "Add Item",
        myList: "My List",
        orderAll: "Order All Items",
        reorderDesc: "Quickly reorder items from your past purchases.",
        pastOrders: "Past Orders",
        reorder: "Reorder",
        orderDetails: "Order Details",
        paymentMethod: "Payment Method",
        cod: "Cash on Delivery",
        online: "Online Payment",
        placeOrder: "Place Order",
        backToHome: "Back to Home",
        accessibilityMode: "Accessibility Mode",
        marketplace: "Marketplace",
        marketplaceDesc: "Explore our complete collection of fresh groceries and essentials.",
        categories: "Categories",
        allCategories: "All Categories",
        freshProduce: "Fresh Produce",
        bakery: "Bakery",
        dairyEggs: "Dairy & Eggs",
        pantryStaples: "Pantry Staples",
        apple: "Red Apples (1kg)",
        banana: "Bananas (Dozen)",
        spinach: "Fresh Spinach (Bunch)",
        bread: "Whole Wheat Bread",
        croissant: "Butter Croissant",
        milk: "Fresh Milk (1L)",
        eggs: "Farm Eggs (Dozen)",
        rice: "Basmati Rice (1kg)",
        add: "Add",
        myProfile: "My Profile",
        goldMember: "Gold Member",
        memberSince: "Member Since",
        accountSettings: "Account Settings",
        manageAddresses: "Manage Addresses",
        preferences: "Preferences",
        logout: "Log Out",
    },
    ur: {
        deliverTo: "ڈیلیور کریں",
        location: "📍 کراچی، پاکستان",
        searchPlaceholder: "گروسری تلاش کریں...",
        cartText: "🛒 کارٹ",
        greeting: "👋 خوش آمدید، ماہین",
        heroTitle: "تازہ گروسری آپ کے دروازے پر",
        heroLead: "ہماری تازہ پیداوار، پینٹری کی ضروری اشیاء، اور گھریلو ضروریات کے وسیع انتخاب سے خریداری کریں جو آپ کے آرام کے لیے ڈیزائن کیا گیا ہے۔",
        trendingTitle: "✨ مشہور مصنوعات",
        card1Title: "🥬 تازہ پیداوار",
        card1Desc: "روزانہ ڈیلیور ہونے والے فارم کے تازہ پھل اور سبزیاں",
        shopNow: "ابھی خریدیں ←",
        card2Title: "🥛 دودھ اور انڈے",
        card2Desc: "تازہ دودھ کی مصنوعات اور فارمی انڈے",
        card3Title: "🥖 بیکری",
        card3Desc: "تازہ پکی ہوئی روٹی، پیسٹری، اور دیگر اشیاء",
        quickShopTitle: "⚡ فوری خریداری کے اختیارات",
        browseCategories: "📂 تمام کیٹیگریز دیکھیں",
        reorderItems: "🔄 پچھلی اشیاء دوبارہ آرڈر کریں",
        shopByList: "📝 فہرست کے مطابق خریدیں",
        footerTitle1: "بازار",
        footerDesc1: "تازہ گروسری آپ کے دروازے پر پہنچائی جاتی ہے، سب کے لیے ایک قابل رسائی خریداری کے تجربے کے ساتھ۔ روزمرہ کی ضروریات میں آپ کا قابل اعتماد پارٹنر۔",
        footerTitle2: "کسٹمر سروس",
        footerDesc2: "📞 فون: 1-800-BAZAAR\n📧 ای میل: help@bazaar.com\n💬 لائیو چیٹ 24/7 دستیاب ہے",
        footerTitle3: "ڈیلیوری کی معلومات",
        footerDesc3: "🚚 دوپہر 2 بجے سے پہلے کے آرڈرز پر اسی دن ڈیلیوری دستیاب ہے\n🎁 PKR 2,500 سے زیادہ کے آرڈرز پر مفت ڈیلیوری",
        langSwitch: "English",
        tapToHear: "صفحہ کا مواد سننے کے لیے تھپتھپائیں",
        listening: "سن رہا ہے...",
        cartEmpty: "آپ کی ٹوکری خالی ہے",
        total: "کل",
        checkout: "چیک آؤٹ پر جائیں",
        continueShopping: "خریداری جاری رکھیں",
        orderReceived: "آرڈر موصول ہو گیا!",
        trackOrder: "آرڈر ٹریک کریں",
        items: "اشیاء",
        price: "قیمت",
        addToCart: "ٹوکری میں شامل کریں",
        added: "شامل کر دیا گیا!",
        viewCart: "ٹوکری دیکھیں",
        orderTracking: "آرڈر ٹریکنگ",
        orderStatus: "آرڈر کی حیثیت",
        preparing: "تیاری",
        outForDelivery: "ڈیلیوری کے لیے روانہ",
        delivered: "پہنچا دیا گیا",
        shopByListDesc: "اپنی فہرست میں اشیاء شامل کریں اور ان سب کا ایک ساتھ آرڈر کریں۔",
        addItem: "آئٹم شامل کریں",
        myList: "میری فہرست",
        orderAll: "تمام اشیاء کا آرڈر دیں",
        reorderDesc: "اپنی ماضی کی خریداریوں سے اشیاء کو جلدی سے دوبارہ ترتیب دیں۔",
        pastOrders: "ماضی کے آرڈرز",
        reorder: "دوبارہ آرڈر کریں",
        orderDetails: "آرڈر کی تفصیلات",
        paymentMethod: "ادائیگی کا طریقہ",
        cod: "کیش آن ڈیلیوری",
        online: "آن لائن ادائیگی",
        placeOrder: "آرڈر دیں",
        backToHome: "گھر واپس جائیں",
        accessibilityMode: "رسائی موڈ",
        marketplace: "مارکیٹ پلیس",
        marketplaceDesc: "تازہ گروسری اور ضروریات کا ہمارا مکمل مجموعہ دریافت کریں۔",
        categories: "کیٹیگریز",
        allCategories: "تمام کیٹیگریز",
        freshProduce: "تازہ پیداوار",
        bakery: "بیکری",
        dairyEggs: "دودھ اور انڈے",
        pantryStaples: "پینٹری کا سامان",
        apple: "سرخ سیب (1 کلو)",
        banana: "کیلے (درجن)",
        spinach: "تازہ پالک (گچھی)",
        bread: "گندم کی روٹی",
        croissant: "مکھن کروسینٹ",
        milk: "تازہ دودھ (1 لیٹر)",
        eggs: "فارمی انڈے (درجن)",
        rice: "باسمتی چاول (1 کلو)",
        add: "شامل کریں",
        myProfile: "میری پروفائل",
        goldMember: "گولڈ ممبر",
        memberSince: "رکنیت کب سے",
        accountSettings: "اکاؤنٹ کی ترتیبات",
        manageAddresses: "پتے کا انتظام کریں",
        preferences: "ترجیحات",
        logout: "لاگ آؤٹ",
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        const savedLang = localStorage.getItem('language');
        if (savedLang) {
            setLanguage(savedLang);
        }
    }, []);

    useEffect(() => {
        document.documentElement.lang = language;
        document.body.dir = language === 'ur' ? 'rtl' : 'ltr';
        document.body.className = language === 'ur' ? 'lang-ur' : '';
        localStorage.setItem('language', language);
    }, [language]);

    const t = (key) => translations[language][key] || key;

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'en' ? 'ur' : 'en'));
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
