'use client';

import Card from '@/components/Card'
import React from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/Button';

const pastries = [
    {
         id:1,
         image:"https://lh3.googleusercontent.com/aida-public/AB6AXuCfnOvq0j6GkhgIwUxAHk7tBbbKvU1WAeGEaLiLKrMXv-_4YTv7aUX4y3AusGgA6kRtKT7ykCL4M9JPFWqJXlpFiz5KdEWyS5qz9fHoni_yNjJRJFLCZIA5mrcyVijBoZn3Hxpe0Zf5wWOTyGOByzfyzfGNsF6OgClfZ563ecVI8CxiXTW8WPAUEIOreHnSFGdZXgJeQ0BtCAqJPbStLLfQ8kkZeXs2pDSZrkVYjC2R6K71rxbiZNzl50EAIqXsTHW3GY0dNazi64Y",
         title:"Croissant" ,
         description:"Flaky, buttery pastry, perfect for breakfast." 
    },
    {
         id:2,
         image:"https://lh3.googleusercontent.com/aida-public/AB6AXuAfsgV0l5Chx3rLBdDFxDek2q4SEYyGf1TBVkXB8LSzLCatomH4o2WZqiXiwEMYTXXrlcpKgbxWZ3r2n6oyxyn95gve_CXnk3Z-YtaZXQg3jzuhRZsDcpsI4oxVmTucheKInAD2WTuzpqbM-WEb1Xz8sWDsydnxhIFtODPA-iQipk5iRhw4ygTnsVvGDUN6k1SsjJcOOR8XMJ3CRi5_skGm048cVhY_dSsFbO0CrudeDhQQ1FOn6NVQhOr3WXTaQGhVMnvv_lY8L0Q",
         title:"Pain au Chocolat" ,
         description:"Classic French pastry with rich chocolate filling." 
    },
    {
         id:3,
         image:"https://lh3.googleusercontent.com/aida-public/AB6AXuBHQKtxfccaUgZM0UX9qrov218liUN_IzQm8TIzspwX9DLKzYlYur1UQioOKPqdFhJgSBaIddOwSV4W9YqormU0YOJEMieNnuCae_1dlQWhyYYfvYGG2YuFDLsMEwVi0XnRxBxiJWq_QWxG_J30Xa5dBPdB4HaoMIVY_86Q9NKzf6Yg-uMQbHCw5dMeJjwlDnR5ZYGs_c9ZQlhISX5gkiWB4eFhMVba5707Fo0qj4sqwY_GkmuPl0OwF3MHsgkQpd_mbqq8aN7EOUU",
         title:"Almond Croissant" ,
         description:"Croissant filled with almond cream and topped with sliced almonds." 
    },
    {
         id:4,
         image:"https://lh3.googleusercontent.com/aida-public/AB6AXuDrBtT_j9s2PRe6MW2v5GYmtVku8vGfeQ7S_tKcbIPie_5v8MuNR0XfLWsdZahGkD5VVW1RtnXQkNLPPEaldafrasgVr2txqOJQTfnSKHpMLka1GduWVOGcFn3PJF7Ah2pKH4MasiHfcyT5lnfNukIJS-yb7sbUGE86gU-JEV7oKe1s9rQ0rK6u0ae72vGg_i-BEeLbGYqEHRsec1YlqO9fZ_2lZamPD_hXZSbm4KSoTSbkN_WCpuxNkKB6fj0M0pcwzPvAwg6namk",
         title:"Cinnamon Roll" ,
         description:"Swirl of sweet dough with cinnamon and icing." 
    },
]

const cakes = [
    {
        id:1,

        image:"https://lh3.googleusercontent.com/aida-public/AB6AXuD9YQpwYoZHD0LdvwnXBlpgT5FzTPT-3SbjsOx29H_W2GEkbY4brZWuHlHk1b7E0lN0OnIGcMgHy4C3PoMWuEu5cYBwFpey5OOSI48n5Skdd4DrI8za6c1V3C4zXd-fa3O-7qpVcxYEFIeK510-b3oS0dbNUutugrEKoxUBfaL6tCWHU5mUf5HL4v88udtvAS8dbgXFSr_xRsbo3a3KEz8QROgWBABH80zTVdffomvoL7uRu7YVManUzpiRth7TqgG65el9HHXsDbA",
        title:"Chocolate Cake" ,
        description:"Rich chocolate cake with chocolate buttercream frosting." 
    },
    {
        id:2,

        image:"https://lh3.googleusercontent.com/aida-public/AB6AXuASDkTh9NA8R17UG56vmtI0AQkVM5Xs8lcEgKwXZ7yiLbDB5pse3HKE1-LuCIl_hyTzpHNCGF3zRVAC2IhZKXfrx9-w7x2yC2CJF2siTQ4N8iOoQzHJBRGYP4oaT_yV0bhW_YnwQwTbGczg3m4KRaTp6PtfQCa0lR0NghQjgqDxzBR0ZOCo0hk7Ww8OwCMGH4U-GZ2BUu4ftLkZaXr8I2huRfWA2DSyrMor0CU9f3t-BozWmez9uWGPu55WOGOw77WMTy7um6iz0n8",
        title:"Vanilla Cake" ,
        description:"Classic vanilla cake with vanilla buttercream frosting." 
    },
    {
        id:3,

        image:"https://lh3.googleusercontent.com/aida-public/AB6AXuBXiAOHcyi0WGGPiRQXz449d9EXVg8Dn_PumuBxCiH6TYD7NtHEE_K-TEgvDAnFEihtt7ps-bHqnrh1Dn_DPE_YDAP9NZ8g_cUA5rSIs1vdbeNzMs4QDs5BJPOaE-GL11VNr5HSAX-wJ6lHoSWo3ifZgyCNTw0NvFDGpilAQtoCOiCCMqrWEgzOra6zGA59He8ynyGfg-JCWF4h-1_B9qevbhvm3269XuqJW2h1AaMJAa3HNbeQSY4dfRVHJybCfxx1UySzXZ4qTPg",
        title:"Red Velvet Cake" ,
        description:"Red velvet cake with cream cheese frosting." 
    },
    {
        id:4,

        image:"https://lh3.googleusercontent.com/aida-public/AB6AXuACfE7j4EtXgmI4OUDn0s4ccdanfe-Mrd1DcNx66MNT-otkkTAAP5dhWJpJHSOp0yAF13SJ0jcPa_SJ7Lm190iKbrV4WRquaq02exCLS3hV4dyazM8sOxifgzrD6BscYHpXE0URvISgV41-dE_Och5D_RJiiAnV-zLNWwBRl4VyoEuDqUs_nzE-U37QLyWS62LXZl_mWMai7boPqHNUAb5mu1FirG3fnBF4Kubq8SU7ur9aQI7YN0w75EkX-5l3cXFvo0201Lxg5RE",
        title:"Carrot Cake" ,
        description:"Moist carrot cake with cream cheese frosting." 
    },
]

const cookies = [
    {
        id: 1,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCljF9ptb9CThnPe8Fpe2FwcNT_En50BED1OEFXsDF3QAdEbySj34JQmn9oDisZLUDKcYwmqe5qPqGqEmM6bD3bbOGxIu0gZgTsfUrkf8_bX1BHsjJYSKZT2e4B8p8V6Y3Tdq7zCuBDs0bkVZEAxYjZqjh4OT9a802Cjycykfw7Z4LSmyV159aOZ-__yJ9GT9GaTUfxuCiwxyM28ZW7ERKZR3r-SnLfsSjjbOrgiP4MfUH-CzzXCdHj3EzTzGUFhYvq2KomGUvkzak",
        title: "Chocolate Chip Cookie",
        description: "Classic cookie with chocolate chips."
    },
    {
        id: 2,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPOf2ZzOp65h3cm1WSb0XMTyfGarOTqCE1D5G1QAl-OIZ8fOCbU8jEtGtJAnOzIGVLqd_jHLG3eamULOwCJcq-eOUdWv8zxIBaGmkztJZpe8x9ojtcq2tEVWqPYBDI33YOyWvs-9CousUoE7ZUAOVB5O7YX0SPT8Vwa9FADhKGC0_r_Bcj1vLumrvBW6KLnUfdJUPA1fp96NJ8ZbxZC7g9VNXKLA6hPj4OPE9Ho09zWQHzCb1ejpPZOzDelQUhna_J6_SPdMp3020",
        title: "Oatmeal Raisin Cookie",
        description: "Chewy cookie with oats and raisins."
    },
    {
        id: 3,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAMsCpagKMb3dxXUnlOoBePKOVvCs3MzCCgbmPEby6c4wuqNWQ7NN9Mtoq-HNEcHvIxXvF53EEk7M9gUnvqHZkSd8QAVhUjDOrUOO7TNKfc2AMTW0yvWE6gGf3QTXgAgpOwYYx_vjnTNT3SF4JeLPt-1wbaFD3RbfuU7UDc0DCUmDkgy1q-Kj_gMKEwereYKDEIdhPQHyOb6x0EQ4_fKikiFsjDzJidgnXvhZjaTNhwzR0pyhOBNSZfjwHI4ar6J1wUbQFKHyMDhg",
        title: "Peanut Butter Cookie",
        description: "Cookie with peanut butter."
    },
    {
        id: 4,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKWtj9I-bw6-VywM9DK3snTWkDMkjvdgY1zGOtihmhXKYA9dA5mEtFIetJNKUoyvbYTpxhYZUrMdXpCvmh97GzW6YQLRWNYei5pAT7Z7zgUl4Kz3keEQy7COPcfGAv3MzGMDv7YSuCWPxk2dwsq-fqnO7papr3_Eyq2Wn1G-oshSSpvuTtPkWRJzbfha_kQsxyhg8lgiLH1MEVjIhzq609wEFFFWRbX-a42QQ85hyDWO-qOHw4bZVXRqbYRKM7nFN32EBq4sF7j10",
        title: "Sugar Cookie",
        description: "Sweet cookie with a simple glaze."
    }
]

const services = [
    {
        id:1,
        title:"Catering",
        description:"We offer catering services for events of all sizes. Contact us to discuss your needs and create a custom menu.",
        image:"https://lh3.googleusercontent.com/aida-public/AB6AXuAQonUKc0tXrxMdsdnBbrYy2hJ4YYPLtlW2mHw69N4upMWHAw1-LxTaJT5ZJ82bDZl-AHQoT0ec2Uvt7dhOHQSIjlQUj8EfP5uAu8e3VCmJS-AYFMHYPyTub_DYIdrDFV_ugKYEhLxGlYB2A9u5-OzPYfRQ5JJLHKFr0zlc1zjCwuE68iNHz7ArjJxSiJfBtY6pH0qHYelVA4tE34iv6H_4LvrmzEAQOQg240vrx4HV1XY_D_GrDKm0XmVZFqwspvlXUK1PcmeVdRI"
    },
    {
        id:2,
        title:"Custom Orders",
        description:"Need a special cake or a unique assortment of baked goods? We can create custom orders to meet your specific requests.",
        image:"https://lh3.googleusercontent.com/aida-public/AB6AXuBouu2-x9F6gAbs2OyG6RxUieKWmZtWF6spxMTZROq4qjGDzF2T5qXmrfv-0PrNaIKnlEOyQe0SHFBBfyOdi2yA1P5pZjDcuceldUK8AsL6mHlZYWThNR8s3OHVvyyVeoGsYc0MQxwZEzG-7IZJmrzdLnDZ-V29nR4rBu8mB7Ad3YUr06f-EyheqLbvLiavKbPS7N_21pAfDqcuSs6ZFAD7LNoE__abWxpRTCGAFaYxA2q9_j-daibJ0__Qb85900-zh1wmB1mkhP4"
    }
]
// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

const pageContainerVariants = {
  hidden: { opacity: 0 },
  visible: { 
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

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12
    }
  }
};

const headingVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15
    }
  }
};

export default function page() {
  return (
    <motion.div 
      className='our-menu flex flex-col justify-center mt-20 px-4'
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageContainerVariants}
    >
      <motion.div className="flex flex-col gap-2 mb-10" variants={headingVariants}>
        <h1 className="title text-2xl font-bold text-center lg:text-left">Our Menu</h1>
        <p className="description text-gray-400/50 text-center lg:text-left">
          Explore our delicious selection of freshly baked goods, made with love and the finest ingredients.
        </p>
      </motion.div>

      <motion.div className="pastries-cards py-5" variants={headingVariants}>
        <h1 className="title text-center lg:text-left text-2xl font-bold">
          Pastries
        </h1>
        <motion.div 
          className="cards flex flex-col lg:grid grid-cols-2 justify-between my-5"
          variants={containerVariants}
        >
          {pastries.map(p => (
            <motion.div key={p.id} variants={itemVariants} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Card 
                image={p.image}
                title={p.title}
                description={p.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="cakes-cards py-5" variants={headingVariants}>
        <h1 className="title text-center lg:text-left text-2xl font-bold">
          Cakes
        </h1>
        <motion.div 
          className="cards flex flex-col lg:grid grid-cols-2 justify-between my-5"
          variants={containerVariants}
        >
          {cakes.map(c => (
            <motion.div key={c.id} variants={itemVariants} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Card 
                image={c.image}
                title={c.title}
                description={c.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="cookies-cards py-5" variants={headingVariants}>
        <h1 className="title text-center lg:text-left text-2xl font-bold">
          Cookies
        </h1>
        <motion.div 
          className="cards flex flex-col lg:grid grid-cols-2 justify-between my-5"
          variants={containerVariants}
        >
          {cookies.map(c => (
            <motion.div key={c.id} variants={itemVariants} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Card 
                image={c.image}
                title={c.title}
                description={c.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="services">
        <h1 className="title text-center lg:text-left text-2xl font-bold">
            Services 
        </h1>
        <motion.div 
          className="cards flex flex-col justify-between my-5 w-full"
          variants={containerVariants}
        >
          {services.map(s => (
            <motion.div key={s.id} variants={itemVariants} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Card 
              direction='row'
                image={s.image}
                title={s.title}
                description={s.description}
                button='Learn More'
                 buttonBgColor='#F5F2F0'
                 buttonColor='black'
                 
              />
            </motion.div>
          ))}
        </motion.div>
  </motion.div>
    </motion.div>
  )
}