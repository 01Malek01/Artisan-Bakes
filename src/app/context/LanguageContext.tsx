'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

// We'll use Record<string, string> instead of a specific TranslationKey type for more flexibility

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

// Default translations
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.about': 'About',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.orderNow': 'Order Now',
    // Common
    'brand.name': 'Artisan Bakes',
    // Homepage
    'home.hero.title': 'Freshly Baked Goodness Every Day',
    'home.hero.description': 'Welcome to The Daily Crumb, where we craft artisanal breads, pastries, and cakes with the finest ingredients. Indulge in our daily selection of freshly baked delights, perfect for any occasion.',
    'home.hero.button': 'View Our Menu',
    'home.specialties.title': 'Our Specialties',
    'home.specialties.description': 'Discover our signature items, from our crusty sourdough bread to our delicate macarons and flaky croissants. Each item is made with care and attention to detail.',
    'home.specialties.bread.title': 'Artisanal Breads',
    'home.specialties.bread.description': 'Our breads are made using traditional methods and the finest flours, resulting in a perfect crust and a soft interior.',
    'home.specialties.pastries.title': 'Delicate Pastries',
    'home.specialties.pastries.description': 'Our pastries are made with the finest ingredients, resulting in a perfect texture and a delicious flavor.',
    'home.specialties.croissants.title': 'Flaky Croissants',
    'home.specialties.croissants.description': 'Our croissants are made with the finest ingredients, resulting in a perfect texture and a delicious flavor.',
    // Login Page
    'login.title': 'Welcome Back',
    'login.email': 'Email Address',
    'login.password': 'Password',
    'login.forgotPassword': 'Forgot Password?',
    'login.button': 'Log In',
    'login.newUser': 'New to The Daily Crumb?',
    'login.signupLink': 'Sign Up',
    // Signup Page
    'signup.title': 'Create Your Account',
    'signup.fullName': 'Full Name',
    'signup.email': 'Email Address',
    'signup.password': 'Password',
    'signup.confirmPassword': 'Confirm Password',
    'signup.button': 'Sign Up',
    'signup.existingUser': 'Already have an account?',
    'signup.loginLink': 'Log In',
    // Form Placeholders
    'placeholder.fullName': 'Enter your full name',
    'placeholder.email': 'Enter your email',
    'placeholder.password': 'Enter your password',
    'placeholder.createPassword': 'Create a password',
    'placeholder.confirmPassword': 'Confirm your password',
    // Menu Page
    'menu.title': 'Our Menu',
    'menu.description': 'Explore our delicious selection of freshly baked goods, made with love and the finest ingredients.',
    'menu.pastries': 'Pastries',
    'menu.cakes': 'Cakes',
    'menu.cookies': 'Cookies',
    'menu.services': 'Services',
    'menu.button.learnMore': 'Learn More',
    // Menu Cards - Pastries
    'menu.pastry.croissant.title': 'Croissant',
    'menu.pastry.croissant.description': 'Flaky, buttery pastry, perfect for breakfast.',
    'menu.pastry.painAuChocolat.title': 'Pain au Chocolat',
    'menu.pastry.painAuChocolat.description': 'Classic French pastry with rich chocolate filling.',
    'menu.pastry.almondCroissant.title': 'Almond Croissant',
    'menu.pastry.almondCroissant.description': 'Croissant filled with almond cream and topped with sliced almonds.',
    'menu.pastry.cinnamonRoll.title': 'Cinnamon Roll',
    'menu.pastry.cinnamonRoll.description': 'Swirl of sweet dough with cinnamon and icing.',
    // Menu Cards - Cakes
    'menu.cake.chocolate.title': 'Chocolate Cake',
    'menu.cake.chocolate.description': 'Rich chocolate cake with chocolate buttercream frosting.',
    'menu.cake.vanilla.title': 'Vanilla Cake',
    'menu.cake.vanilla.description': 'Classic vanilla cake with vanilla buttercream frosting.',
    'menu.cake.redVelvet.title': 'Red Velvet Cake',
    'menu.cake.redVelvet.description': 'Red velvet cake with cream cheese frosting.',
    'menu.cake.carrot.title': 'Carrot Cake',
    'menu.cake.carrot.description': 'Moist carrot cake with cream cheese frosting.',
    // Menu Cards - Cookies
    'menu.cookie.chocolate.title': 'Chocolate Chip Cookie',
    'menu.cookie.chocolate.description': 'Classic cookie with chocolate chips.',
    'menu.cookie.oatmeal.title': 'Oatmeal Raisin Cookie',
    'menu.cookie.oatmeal.description': 'Hearty cookie with oats and raisins.',
    'menu.cookie.peanutButter.title': 'Peanut Butter Cookie',
    'menu.cookie.peanutButter.description': 'Cookie with peanut butter.',
    'menu.cookie.sugar.title': 'Sugar Cookie',
    'menu.cookie.sugar.description': 'Sweet cookie with a simple glaze.',
    // Menu Cards - Services
    'menu.service.catering.title': 'Catering',
    'menu.service.catering.description': 'We offer catering services for events of all sizes. Contact us to discuss your needs and create a custom menu.',
    'menu.service.custom.title': 'Custom Orders',
    'menu.service.custom.description': 'Need a special cake or a unique assortment of baked goods? We can create custom orders to meet your specific requests.',
    // Contact Page
    'contact.visitUs': 'Visit Us',
    'contact.visitUs.description': 'Find us at our main location in the heart of downtown. We\'re open seven days a week to serve you the freshest baked goods.',
    'contact.info': 'Contact Information',
    'contact.address': 'Address',
    'contact.addressValue': '123 Bakery Street, Downtown, City, 12345',
    'contact.phone': 'Phone',
    'contact.phoneValue': '+1 (555) 123-4567',
    'contact.email': 'Email',
    'contact.emailValue': 'info@artisanbakes.com',
    'contact.hours': 'Business Hours',
    'contact.hoursValue': 'Monday - Sunday: 7:00 AM - 8:00 PM',
    'contact.getInTouch': 'Get In Touch',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.message': 'Your Message',
    'contact.form.send': 'Send Message',
    // About Page
    'about.ourStory': 'Our Story',
    'about.ourStory.content': 'At Artisan Bakes, our journey began with a simple dream: to create exceptional baked goods that bring joy to every bite. Founded in 2010 by Sarah Miller, a passionate baker with a love for traditional techniques and high-quality ingredients, our bakery has grown from a small home kitchen to a beloved local institution.',
    'about.ourValues': 'Our Values',
    'about.ourValues.content': 'We believe in the power of fresh, locally sourced ingredients and time-honored baking methods. Our commitment to quality means every pastry, bread, and cake is made with care and attention to detail. We strive to create a warm and welcoming atmosphere where customers feel like part of our extended family.',
    'about.ourMission': 'Our Mission',
    'about.ourMission.content': 'Our mission is to delight our customers with delicious, handcrafted baked goods that celebrate the art of baking. We aim to be a cornerstone of our community, providing a place where people can gather, enjoy exceptional treats, and create lasting memories.',
    // Gallery Page
    'gallery.title': 'Gallery',
    'gallery.description': 'A visual journey through our bakery\'s creations and moments.',
    // Gallery Items
    'gallery.item.bread.title': 'Artisan Breads',
    'gallery.item.bread.description': 'Our daily selection of handcrafted breads.',
    'gallery.item.pastry.title': 'Pastry Delights',
    'gallery.item.pastry.description': 'Freshly baked pastries to satisfy your sweet tooth.',
    'gallery.item.cake.title': 'Cake Creations',
    'gallery.item.cake.description': 'Custom cakes for any occasion.',
    'gallery.item.ambiance.title': 'Bakery Ambiance',
    'gallery.item.ambiance.description': 'Experience the warm and inviting atmosphere of our bakery.',
    'gallery.item.events.title': 'Special Events',
    'gallery.item.events.description': 'Highlights from our special events and workshops.',
    'gallery.item.customers.title': 'Customer Moments',
    'gallery.item.customers.description': 'Capturing the joy of our customers enjoying our treats.',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.menu': 'القائمة',
    'nav.about': 'من نحن',
    'nav.gallery': 'معرض الصور',
    'nav.contact': 'اتصل بنا',
    'nav.orderNow': 'اطلب الآن',
    // Common
    'brand.name': 'خبز الحرفيين',
    // Homepage
    'home.hero.title': 'خبز طازج كل يوم',
    'home.hero.description': 'مرحباً بك في خبز الحرفيين، حيث نصنع الخبز والمعجنات والكعك بأجود المكونات. استمتع بمجموعتنا اليومية من المخبوزات الطازجة، المناسبة لأي مناسبة.',
    'home.hero.button': 'عرض قائمتنا',
    'home.specialties.title': 'تخصصاتنا',
    'home.specialties.description': 'اكتشف منتجاتنا المميزة، من خبز العجين المخمر إلى حلويات الماكرون والكرواسون المقشر. يتم صنع كل عنصر بعناية واهتمام بالتفاصيل.',
    'home.specialties.bread.title': 'خبز حرفي',
    'home.specialties.bread.description': 'يتم صنع خبزنا باستخدام الطرق التقليدية وأجود أنواع الدقيق، مما ينتج عنه قشرة مثالية وداخل ناعم.',
    'home.specialties.pastries.title': 'معجنات رقيقة',
    'home.specialties.pastries.description': 'يتم صنع معجناتنا بأجود المكونات، مما ينتج عنه قوام مثالي ونكهة لذيذة.',
    'home.specialties.croissants.title': 'كرواسون مقشر',
    'home.specialties.croissants.description': 'يتم صنع كرواسوننا بأجود المكونات، مما ينتج عنه قوام مثالي ونكهة لذيذة.',
    // Login Page
    'login.title': 'مرحباً بعودتك',
    'login.email': 'البريد الإلكتروني',
    'login.password': 'كلمة المرور',
    'login.forgotPassword': 'نسيت كلمة المرور؟',
    'login.button': 'تسجيل الدخول',
    'login.newUser': 'جديد في خبز الحرفيين؟',
    'login.signupLink': 'إنشاء حساب',
    // Signup Page
    'signup.title': 'إنشاء حسابك',
    'signup.fullName': 'الاسم الكامل',
    'signup.email': 'البريد الإلكتروني',
    'signup.password': 'كلمة المرور',
    'signup.confirmPassword': 'تأكيد كلمة المرور',
    'signup.button': 'إنشاء حساب',
    'signup.existingUser': 'لديك حساب بالفعل؟',
    'signup.loginLink': 'تسجيل الدخول',
    // Form Placeholders
    'placeholder.fullName': 'أدخل اسمك الكامل',
    'placeholder.email': 'أدخل بريدك الإلكتروني',
    'placeholder.password': 'أدخل كلمة المرور',
    'placeholder.createPassword': 'إنشاء كلمة مرور',
    'placeholder.confirmPassword': 'تأكيد كلمة المرور',
    // Menu Page
    'menu.title': 'قائمتنا',
    'menu.description': 'استكشف مجموعتنا اللذيذة من المخبوزات الطازجة، المصنوعة بحب وأجود المكونات.',
    'menu.pastries': 'معجنات',
    'menu.cakes': 'كيك',
    'menu.cookies': 'كوكيز',
    'menu.services': 'خدمات',
    'menu.button.learnMore': 'اعرف المزيد',
    // Menu Cards - Pastries
    'menu.pastry.croissant.title': 'كرواسون',
    'menu.pastry.croissant.description': 'معجنات هشة وزبدة، مثالية للإفطار.',
    'menu.pastry.painAuChocolat.title': 'كرواسون بالشوكولاتة',
    'menu.pastry.painAuChocolat.description': 'معجنات فرنسية كلاسيكية مع حشوة شوكولاتة غنية.',
    'menu.pastry.almondCroissant.title': 'كرواسون باللوز',
    'menu.pastry.almondCroissant.description': 'كرواسون محشو بكريمة اللوز ومغطى بشرائح اللوز.',
    'menu.pastry.cinnamonRoll.title': 'لفائف القرفة',
    'menu.pastry.cinnamonRoll.description': 'لفة من العجين الحلو مع القرفة والتزيين.',
    // Menu Cards - Cakes
    'menu.cake.chocolate.title': 'كيكة الشوكولاتة',
    'menu.cake.chocolate.description': 'كيكة شوكولاتة غنية مع كريمة زبدة الشوكولاتة.',
    'menu.cake.vanilla.title': 'كيكة الفانيليا',
    'menu.cake.vanilla.description': 'كيكة فانيليا كلاسيكية مع كريمة زبدة الفانيليا.',
    'menu.cake.redVelvet.title': 'كيكة الريد فيلفيت',
    'menu.cake.redVelvet.description': 'كيكة الريد فيلفيت مع كريمة الجبن.',
    'menu.cake.carrot.title': 'كيكة الجزر',
    'menu.cake.carrot.description': 'كيكة جزر رطبة مع كريمة الجبن.',
    // Menu Cards - Cookies
    'menu.cookie.chocolate.title': 'كوكيز بقطع الشوكولاتة',
    'menu.cookie.chocolate.description': 'كوكيز كلاسيكي مع قطع الشوكولاتة.',
    'menu.cookie.oatmeal.title': 'كوكيز الشوفان بالزبيب',
    'menu.cookie.oatmeal.description': 'كوكيز غني بالشوفان والزبيب.',
    'menu.cookie.peanutButter.title': 'كوكيز زبدة الفول السوداني',
    'menu.cookie.peanutButter.description': 'كوكيز مع زبدة الفول السوداني.',
    'menu.cookie.sugar.title': 'كوكيز السكر',
    'menu.cookie.sugar.description': 'كوكيز حلو مع طبقة بسيطة من السكر.',
    // Menu Cards - Services
    'menu.service.catering.title': 'خدمات الضيافة',
    'menu.service.catering.description': 'نقدم خدمات الضيافة للمناسبات بجميع أحجامها. اتصل بنا لمناقشة احتياجاتك وإنشاء قائمة مخصصة.',
    'menu.service.custom.title': 'طلبات مخصصة',
    'menu.service.custom.description': 'هل تحتاج إلى كعكة خاصة أو تشكيلة فريدة من المخبوزات؟ يمكننا إنشاء طلبات مخصصة لتلبية احتياجاتك الخاصة.',
    // Contact Page
    'contact.visitUs': 'زورونا',
    'contact.visitUs.description': 'جدنا في موقعنا الرئيسي في قلب وسط المدينة. نحن مفتوحون سبعة أيام في الأسبوع لتقديم أطيب المخبوزات الطازجة.',
    'contact.info': 'معلومات الاتصال',
    'contact.address': 'العنوان',
    'contact.addressValue': '123 شارع المخبز، وسط المدينة، المدينة، 12345',
    'contact.phone': 'الهاتف',
    'contact.phoneValue': '966501234567+',
    'contact.email': 'البريد الإلكتروني',
    'contact.emailValue': 'info@artisanbakes.com',
    'contact.hours': 'ساعات العمل',
    'contact.hoursValue': 'الاثنين - الأحد: 7:00 صباحًا - 8:00 مساءً',
    'contact.getInTouch': 'تواصل معنا',
    'contact.form.name': 'الاسم',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.message': 'رسالتك',
    'contact.form.send': 'إرسال الرسالة',
    // About Page
    'about.ourStory': 'قصتنا',
    'about.ourStory.content': 'في خبز الحرفيين، بدأت رحلتنا بحلم بسيط: صنع مخبوزات استثنائية تجلب السعادة في كل قضمة. تأسست في عام 2010 على يد سارة ميلر، خبازة شغوفة تحب التقنيات التقليدية والمكونات عالية الجودة، نمت مخبزنا من مطبخ منزلي صغير إلى مؤسسة محلية محبوبة.',
    'about.ourValues': 'قيمنا',
    'about.ourValues.content': 'نؤمن بقوة المكونات الطازجة المحلية وطرق الخبز التقليدية. التزامنا بالجودة يعني أن كل معجنات وخبز وكعكة مصنوعة بعناية واهتمام بالتفاصيل. نسعى لخلق جو دافئ ومرحب حيث يشعر العملاء كأنهم جزء من عائلتنا الممتدة.',
    'about.ourMission': 'مهمتنا',
    'about.ourMission.content': 'مهمتنا هي إسعاد عملائنا بمخبوزات لذيذة مصنوعة يدويًا تحتفي بفن الخبز. نهدف إلى أن نكون حجر الزاوية في مجتمعنا، نوفر مكانًا يمكن للناس التجمع فيه والاستمتاع بالمأكولات الاستثنائية وخلق ذكريات دائمة.',
    // Gallery Page
    'gallery.title': 'معرض الصور',
    'gallery.description': 'رحلة بصرية عبر إبداعات ولحظات مخبزنا.',
    // Gallery Items
    'gallery.item.bread.title': 'خبز حرفي',
    'gallery.item.bread.description': 'اختيارنا اليومي من الخبز المصنوع يدوياً.',
    'gallery.item.pastry.title': 'لذائذ المعجنات',
    'gallery.item.pastry.description': 'معجنات طازجة لتلبية رغباتك الحلوة.',
    'gallery.item.cake.title': 'إبداعات الكيك',
    'gallery.item.cake.description': 'كعكات مخصصة لأي مناسبة.',
    'gallery.item.ambiance.title': 'أجواء المخبز',
    'gallery.item.ambiance.description': 'اختبر الأجواء الدافئة والجذابة لمخبزنا.',
    'gallery.item.events.title': 'الفعاليات الخاصة',
    'gallery.item.events.description': 'أبرز لحظات فعالياتنا وورش العمل الخاصة.',
    'gallery.item.customers.title': 'لحظات العملاء',
    'gallery.item.customers.description': 'توثيق فرحة عملائنا وهم يستمتعون بمنتجاتنا.'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Initialize with browser language or default to English
  const [language, setLanguage] = useState<Language>('en');

  // Load saved language preference from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage);
      // Set HTML dir attribute and lang attribute
      document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = savedLanguage;
    }
  }, []);

  // Save language preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('language', language);
    // Update HTML dir attribute and lang attribute
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
