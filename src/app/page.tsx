'use client'
import Button from "@/components/Button";
import Card from "@/components/Card";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const pageContainerVariants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: { 
      duration: 0.8,
      ease: "easeOut" 
    }
  },
  exit: { 
    opacity: 0,
    transition: { 
      duration: 0.5,
      ease: "easeIn" 
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  const { t , language} = useLanguage();
  const isRTL = language === 'ar';
  return (
    <motion.div 
      className="flex items-center justify-center  py-5"
      initial="hidden"
      animate="show"
      exit="exit"
      variants={pageContainerVariants}
    >
      <main className="flex flex-col items-center justify-center w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero relative min-h-[15rem] h-[480px] rounded-lg overflow-hidden  w-full max-w-7xl mx-auto"
        >
          <div className="absolute inset-0  ">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC887IPNlEicLekQlI6_IGobOIq9Dx40dSbxDbSfOr1LlDYWa0QtXT5VXbcpn5EvWANT66Pe8rlEn1xUlkbRab_7JH1Uv465PFhHurkjjhAXA5jQETzUYt3z5UbzczsZbmIV7QIQZMjsU2CZCnTI9NslUg_XwW2y9VlyegY-YiUpureDSI9mAR986OtGe5VD4ALg3zdnbkTQVaJP9yCOqnaE1rZ9_YDW3W_ZFtFx1lyrFLYAJxFQWIFHuA12uYCln8TYtHhJTtViyQ"
              alt="Freshly baked bakery items"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          <div className="relative z-10 text-white p-8 flex flex-col items-center justify-center h-full text-center">
            <h1  dir={isRTL ? 'rtl' : 'ltr'} style={{ textAlign: isRTL ? 'right' : 'left' }} className="text-4xl md:text-5xl font-bold mb-4">{t('home.hero.title')}</h1>
            <p dir={isRTL ? 'rtl' : 'ltr'} style={{ textAlign: isRTL ? 'right' : 'left' }} className="text-sm max-w-2xl">
              {t('home.hero.description')}
            </p>
            <Link href="/menu">
            <Button title={t('home.hero.button')} bgColor="#ED8C29" color="black" styles="cursor-pointer mt-10"/>
            </Link>
          </div>
        </motion.div>
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="our-specialties flex flex-col justify-center mt-20 items-center lg:items-start gap-4 w-full max-w-7xl mx-auto px-4"
          dir={isRTL ? 'rtl' : 'ltr'} style={{ textAlign: isRTL ? 'right' : 'left' }}
        >
          <motion.h1 variants={item} dir={isRTL ? 'rtl' : 'ltr'} style={{ textAlign: isRTL ? 'right' : 'left' }} className="text-3xl font-bold text-center lg:text-left w-full">{t('home.specialties.title')}</motion.h1>
          <motion.p variants={item} dir={isRTL ? 'rtl' : 'ltr'} style={{ textAlign: isRTL ? 'right' : 'left' }} className="text-center lg:text-left max-w-3xl">
            {t('home.specialties.description')}
          </motion.p>
          <motion.div 
            variants={container}
            className="our-specialties-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center w-full mt-8"
          >
            <motion.div variants={item} whileHover={{ y: -5 }} whileTap={{ scale: 0.98 }}>
              <Card 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuCp9HgOsabDAcBj5Ed1sSinm9bqfj6-Ed5_Y52EgBWe_CKcWReWk4Afv92n2dLU0RvSnD2kDF5rTzKGk33b6JY-0y7RLCcIYQHLU5tyU5B6QUpvDDFeEzndgh7AnyPnpkI59U4jevJxWnEPPksuwY1sQ8IMhCxRQvkoC4oek87RlW92biVSeGspoWoHpG7f7-C28RpLOkWq1GceWdtuOZQKfpPejY139Qw4d9rUShszO7KTUfZw_ZFsnwLoxXTRv34xZjLGGE1CoEY" 
                title={t('home.specialties.bread.title')} 
                description={t('home.specialties.bread.description')} 
              />
            </motion.div>
            <motion.div variants={item} whileHover={{ y: -5 }} whileTap={{ scale: 0.98 }}>
              <Card 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuA1RBj8K0ZpaAKF_T4wM4R3qLIiKAiCAFl83q8WoCmEIAFpXkUpdpI1pCYM4w7GrDi1N-GwqVEu_kdmq0b7I-9yMJJykPbs8Ba6fEKUxVQnOjZ3F5BonBqBfQhsATKg_qpm19j6_ScstsrbnJvfAZOnyLU-XZFiZtMCjG0DrjoKGM1z-qj9Ssow7oG4SNfkleuN8pW-I_e8L6FWzu5JSQe8n-PS7qDCQcD-fxUg66VgqgXe6w6WX69ActB8L2YxW_lqGF5OlGHdmbc" 
                title={t('home.specialties.pastries.title')} 
                description={t('home.specialties.pastries.description')} 
              />
            </motion.div>
            <motion.div variants={item} whileHover={{ y: -5 }} whileTap={{ scale: 0.98 }} className="md:col-span-2 lg:col-span-1">
              <Card 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDxlB9-sEtFCnGIIGAp8eWt5wzeJ88ZjwVyAlvkKaHNdCuhtZDtocrtzWKSv9tA60TukJm1ZHCvDSj09xSkqGWsvrEcgJlMCBYbdLJ3E0fxO4Jmt1LiKz1QRn7x3c8mVf125zZahwfDXJOuoMNTJ5FIlxEHfrLzN_waOPezppCC4oX_Q4rENlAy0C8mawPjzm7jivFRziCV3Jbuinj0077Qf2bFfk42DWUrCijOSVvplnwIf2X9cLXzNu5v1XArXhro_gSkPWplg2U" 
                title={t('home.specialties.croissants.title')} 
                description={t('home.specialties.croissants.description')} 
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
    </motion.div>
  );
}
