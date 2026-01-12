import React from 'react';
import { motion } from 'framer-motion';
import { Code, Monitor, UserCheck, Server, Shield, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies (React, Node.js, Python) to ensure scalability and performance.',
      icon: <Code size={40} className="text-accent" />
    },
    {
      title: 'Web Designing',
      description: 'Creative and intuitive UI/UX designs that provide seamless user experiences across all devices.',
      icon: <Monitor size={40} className="text-accent" />
    },
    {
      title: 'IT Recruitment',
      description: 'Strategic staffing solutions to find the best technical talent for your permanent or contract roles.',
      icon: <UserCheck size={40} className="text-accent" />
    },
    {
      title: 'IT Consultancy',
      description: 'Strategic advice on technology adoption, digital transformation, and IT infrastructure optimization.',
      icon: <Server size={40} className="text-accent" />
    },
    {
      title: 'Cybersecurity Services',
      description: 'Protecting your digital assets with comprehensive security assessments and solutions.',
      icon: <Shield size={40} className="text-accent" />
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      icon: <Smartphone size={40} className="text-accent" />
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1.0 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive IT solutions tailored to drive your business growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}

              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
            >
              <div className="mb-6 p-4 bg-gray-50 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
