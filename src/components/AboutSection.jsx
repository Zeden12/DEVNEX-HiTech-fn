import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaBullseye, FaEye, FaFlag } from 'react-icons/fa'; // Icons for Vision, Mission, and Goals
import aboutImage from '../assets/about.jpg';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sectionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-[#1a1f26] text-white py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-10 items-center">
        <div className="relative">

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mb-10 text-left"
          >
            <h1 className="text-5xl font-bold">
              <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
                WHY CHOOSE US
              </span>
              <div className="w-3/4 mt-2 h-1.5 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full"></div>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="overflow-hidden rounded-xl shadow-lg relative"
          >
            <img src={aboutImage} alt="About Us" className="w-full rounded-xl" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
                Your Choice, Our Priority
              </h3>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Hello, We Are{' '}
            <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
              Devnex Hitech
            </span>
          </h2>
          <p className="mb-6 leading-8 text-lg md:text-xl">
            We are a team of passionate software developers dedicated to delivering
            innovative digital solutions that set businesses apart. Our commitment
            to excellence and creativity makes us the best choice for your projects.
          </p>
          <p className="mb-6 leading-8 text-lg md:text-xl">
            At Devnex Hitech, we believe in the power of technology to transform businesses. 
            Our mission is to provide cutting-edge solutions that drive growth, efficiency, 
            and success. With a focus on quality and innovation, we strive to exceed our 
            clients' expectations and deliver exceptional results.
          </p>
          {[
            {
              title: 'Our Vision',
              icon: <FaEye className="text-sky-500 text-2xl" />,
              content:
                'Our vision is to become the leading tech company globally, recognized for delivering premium digital solutions that transform industries. We aim to push the boundaries of innovation and set new standards in technology, ensuring our clients stay ahead in the digital race.',
            },
            {
              title: 'Our Mission',
              icon: <FaBullseye className="text-sky-500 text-2xl" />,
              content:
                'Our mission is to empower businesses with high-quality, reliable, and innovative software solutions. We strive to understand our clients’ unique needs and provide tailored solutions that drive growth, efficiency, and success in an ever-evolving digital landscape.',
            },
            {
              title: 'Our Goals',
              icon: <FaFlag className="text-sky-500 text-2xl" />,
              content:
                'Our primary goal is to create world-class products that exceed client expectations and improve digital experiences. We are committed to fostering long-term relationships with our clients, delivering exceptional value, and continuously improving our processes to achieve excellence in everything we do.',
            },
          ].map((item, index) => (
            <div key={index} className="mb-4 border-b border-sky-500 pb-4">
              <div
                className="flex justify-between items-center cursor-pointer hover:text-sky-500 transition-all"
                onClick={() => toggleSection(item.title)}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                {openSection === item.title ? <ChevronUp /> : <ChevronDown />}
              </div>
              <motion.div
                initial="hidden"
                animate={openSection === item.title ? 'visible' : 'hidden'}
                variants={sectionVariants}
                className="overflow-hidden text-gray-300 text-lg pt-3"
              >
                {item.content}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;