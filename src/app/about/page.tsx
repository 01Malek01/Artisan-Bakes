'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const pageContainerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren"
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

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const page: React.FC = () => {
  return (
    <motion.div 
      className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageContainerVariants}
    >
      <motion.div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <motion.div 
          className="flex flex-wrap justify-between gap-3 p-4"
          variants={sectionVariants}
        >
          <motion.p 
            className="text-[#181411] tracking-light text-[32px] font-bold leading-tight min-w-72"
            variants={textVariants}
          >
            Our Story
          </motion.p>
        </motion.div>
        <motion.p 
          className="text-[#917E6B] text-base font-normal leading-normal pb-3 pt-1 px-4"
          variants={textVariants}
        >
          At Artisan Bakes, our journey began with a simple dream: to create exceptional baked goods that bring joy to every bite. Founded in 2010 by Sarah Miller, a passionate
          baker with a love for traditional techniques and high-quality ingredients, our bakery has grown from a small home kitchen to a beloved local institution.
        </motion.p>
        <motion.div 
          className="flex w-full grow bg-white @container py-3"
          variants={imageVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="w-full gap-1 overflow-hidden bg-white @[480px]:gap-2 aspect-[3/2] flex rounded-lg">
            <div
              className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-lg flex-1 hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBati4lP6FKhPgmQykVtz-wEoj7e1B8coRcJkuseRgjChIrOaQXqwO_09Y7rMWDj_iuNL5kzLpQTZGx0imjwUnazCsyBpCjPHcfKRyfhztzTfxPrGdjqS9-b9DmvItw0IdIHrvj2pXIJj8VsdW-h-NT8Ck6Eb2EhB1cTTwuCQ-gb-e8ICO7vlvaOXhzLCTLAEr16Y2QTjbQsOLDpg_EIhfh3VcKdkLkJ_jigt1Jcg2Fzu8SSKeyw1gaGK0uQwZs7iVVgD5j_17DJy0")' }}
            ></div>
          </div>
        </motion.div>
        <motion.h2 
          className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
          variants={sectionVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, margin: "-50px" }}
        >
          Our Values
        </motion.h2>
        <motion.p 
          className="text-[#917E6B] text-base font-normal leading-normal pb-3 pt-1 px-4"
          variants={textVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, margin: "-50px" }}
        >
          We believe in the power of fresh, locally sourced ingredients and time-honored baking methods. Our commitment to quality means every pastry, bread, and cake is made
          with care and attention to detail. We strive to create a warm and welcoming atmosphere where customers feel like part of our extended family.
        </motion.p>
        <motion.div 
          className="flex w-full grow bg-white @container py-3"
          variants={imageVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="w-full gap-1 overflow-hidden bg-white @[480px]:gap-2 aspect-[3/2] flex rounded-lg">
            <div
              className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-lg flex-1 hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBp_9N_dLy7pd8-EFODPhs58lrAgmM5gsDJFtVs9qecChyvp3gg2iEGGl2m1Iyala2rIBixB0Qypg1_cANpflMp9ziu9Y-v9tUucQi5_wkt6gH8n-XvQktb7xblsoC5k3BKRC5GnS_EPxEenWFBfZbHWQyUdiYXMa0AYCElvvgRT2NRz_HeTl_atEHqW_9alldyfYVvU3TnOgjzDN2UdfyFzVItrPJ1OOIKIKgbEP4uUODmcJy2n8GaeKRSKbpU0ghLi6-T0kob4bs")' }}
            ></div>
          </div>
        </motion.div>
        <motion.h2 
          className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
          variants={sectionVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, margin: "-50px" }}
        >
          Our Mission
        </motion.h2>
        <motion.p 
          className="text-[#917E6B] text-base font-normal leading-normal pb-3 pt-1 px-4"
          variants={textVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, margin: "-50px" }}
        >
          Our mission is to delight our customers with delicious, handcrafted baked goods that celebrate the art of baking. We aim to be a cornerstone of our community,
          providing a place where people can gather, enjoy exceptional treats, and create lasting memories.
        </motion.p>
        <motion.div 
          className="flex w-full grow bg-white @container py-3"
          variants={imageVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="w-full gap-1 overflow-hidden bg-white @[480px]:gap-2 aspect-[3/2] flex rounded-lg">
            <div
              className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-lg flex-1 hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnbj6Sq4k8YOj-CALfZVXr-3zgNxUpXx4DB4-3eoz5GAs8PcE4uFas1nv4nXb3XRrBgC85uctrSNdIePdiowK-SuoTrsHDKwzmL3iIS-w43lKUXBxYQqsyVOdva68Z2SK8WdDfG7xEq_WSM2kmepAIg9At7xryETupOOgb-IHTpEcI7Qhc7ekeNejSGD9AhL0_hsDGn88FBDgHVRO4eK7eG46fc0mCNhQppI2t1zzdu-lHGZGvZ-9J4qXOI-t3my5heIZh9nU7p8g")' }}
            ></div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default page;