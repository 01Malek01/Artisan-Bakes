'use client'
import Card from '@/components/Card'
import React from 'react'
import { motion } from 'framer-motion'

const gallery = [
    {
        id: 1,
        title: "Artisan Breads",
        description: "Our daily selection of handcrafted breads.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa-lcasxWmAxDEDNgvQwMcNDM-Pdu3WCgpsTyc6zxkttaJp6XlVSCPTUgJSaPw392uEaJf4iVF_Q26kg8eENAFPKvEo_0hc99ToBZarjD7bms6Kwji_wkOX8Nrw_P0JyaFqnKuIpWZE7uCy9kvuGanm_tThRsnS0jT6T4AoYP10zesbZCksHe36p45XK6TwytXWpjwPqhG6zZWJVmxD45l6FnJ4JUOwZyrJ6PJVGpNp45JPM3CHdyrfrgbi4dv7mHBpF_zXiwFP3E"
    },
    {
        id: 2,
        title: "Pastry Delights",
        description: "Freshly baked pastries to satisfy your sweet tooth.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZLN6jZQ5OjHXyWMRS5mQBCblXKId1sM09zOW5-vlTfiYdNYdBlNK9ujxy5syoG3GVp9AaTfNaMRwE_MwnC7PQc1Y7DnawfkQ6R2ewbibmxZ55chqw8fvU8mjUM0YxZnHRpka9n4J8juHI3--_LmhLq8BjOqqkdmBglMnjspekf3vn3h6MqEasHGrKlPwXGyeioHtdDhRQOD9Qw-9yg31_XbqH-1G49BD1-uWBYibp9eNdMRvKcWVQhZXd0JpoHll-ULxNQ_7bFjk"
    },
    {
        id: 3,
        title: "Cake Creations",
        description: "Custom cakes for any occasion.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBprLwLRIi06SXurBYKldTGkXdoCJtzncbiQiy-mUx83LJEBfjhaezZwBSxZkBnkRtHmZRzzJ1Er2_TJcq7hmkdfhQG00A4_MI6Ls3m5IQk8Fw3jI-0AVaMcY6Ah4M84IndQaL3CrNzRBHMqpDLmKYR7erWjjXGEXCt90rkXiWGp00jKFTkthCbooL-U4sXq5P0NnZZJRZ6GPl9CVZ9_Ce4He_YB5O9k49OOJmDFUnqw9W5oc7JhBWMS1pkXz2l4TZzgdRri84uBdU"
    },
    {
        id: 4,
        title: "Bakery Ambiance",
        description: "Experience the warm and inviting atmosphere of our bakery.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmmlvGwASCFwBmh9guL9zVXar7AZKxQ0ERCwW_CpkcIQ2LAc77-LfWDvThvim9wfVV4anMKnJWmyXHW4qpDU9KNIW5G3Zoq8d2cotrVwKrJ91WNIQzGuSaOwcqDQRDHqfo66cQvUNMfgXeNHiUB3m863q5bymjf4k-j5BlR1u1RKxBdEnlUI6yNq0fLdJAPFvCR0TgmwLGOBWymxckaqXy3OkBCeVm0y4D_rmm5bDYAc3-k2aNfYtbD6sB4qzcTdPjqHKvncUZNUE"
    },
    {
        id: 5,
        title: "Special Events",
        description: "Highlights from our special events and workshops.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRWoTCt6mLFzGGGjZZxc9QwoxeIJDZRSoJIfjd0cJzaKotu5ioLYedF2yKPu1bm1yhdB19R9RJfyOyyTnlXJN5hf0BRyFfkZabhxTxopxTNntjcL0Pl0_2r-t0KrePYvx_TcKd5gNlYpqzaA60JWjyt6iDxoJW_FhLj3xBuRYZ7MJm-OHprGKHVauBGFLOY4M9-sedwp70sFxy9-6murQcRwdms1LIsoReN1G1JLmaZlqTpch9dszqPO_EcjJ7p-Ink3jbQoOPD4M"
    },
    {
        id: 6,
        title: "Customer Moments",
        description: "Capturing the joy of our customers enjoying our treats.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkifxSJ58s_8O2pWODTfLoqaT_4AdG6pjwtu7z_uM6vdUN5FCtZEM7zDm3cZ3z2xfwR_nFXfLfOyEpJEnmt43O3AyWQmR0IeoHVI7MMlUd5whU51pIAyIDDuNe7t1hRXBNujFakHg5dZqBETL_Xyb7Goxq12E7zVW45wnKRPWWSUh3fKlW2JdLzytzFlHeYRRRqOtiE8Hw8AgPFEhhCVI5yQGgvQxMFEkrznnyInDGzWHK0OctSRqOPoX_reGW8PubEkay83yAsJY"
    }
]

export default function page() {
  return (
    <motion.div className='gallery  py-5' variants={containerVariants} initial="hidden" animate="visible">
        <div className="header">
            <h1 className="title text-2xl font-bold text-center lg:text-left">
                Gallery
            </h1>
            <p className='description text-gray-400 text-center lg:text-left'>
                A visual journey through our bakery&apos;s creations and moments.
            </p>
        </div>
        <div className="cards py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                gallery.map((item) => (
                    <motion.div key={item.id} variants={itemVariants} initial="hidden" animate="visible" whileHover="hover">
                        <Card image={item.image} title={item.title} description={item.description} />
                    </motion.div>
                ))
            }
        </div>
    </motion.div>
  )
}

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
        hover: {
        scale: 1.05,
        transition: {
            duration: 0.2,
            ease: 'easeInOut'
        }
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeInOut'
        }
    }
}
const containerVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.1,
            duration: 0.5,
            ease: 'easeInOut'
        }
    }
}