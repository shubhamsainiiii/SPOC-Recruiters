import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            About SPOC Recruiters
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1.0 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We are dedicated to bridging the gap between exceptional talent and innovative technology.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              SPOC Recruiters is a premier IT consultancy and recruitment firm. We specialize in providing end-to-end IT services, from custom web development and design to finding the perfect candidates for your technical teams.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our mission is to empower businesses by leveraging the power of technology and human potential. Whether you need a stunning website, a complex software solution, or a team of skilled developers, we have the expertise to deliver.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
            className="bg-gray-100 h-80 rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
              alt="Modern office space"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Values */}
        <div className="bg-gray-50 rounded-3xl p-10 lg:p-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-sm text-center"
            >
              <h3 className="text-xl font-bold mb-4 text-accent">Integrity</h3>
              <p className="text-gray-600">We conduct our business with the highest standards of honesty and transparency.</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-sm text-center"
            >
              <h3 className="text-xl font-bold mb-4 text-accent">Innovation</h3>
              <p className="text-gray-600">We constantly strive to adopt new technologies and improve our solutions.</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-sm text-center"
            >
              <h3 className="text-xl font-bold mb-4 text-accent">Excellence</h3>
              <p className="text-gray-600">We are committed to delivering superior quality in everything we do.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
