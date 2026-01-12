import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Monitor, UserCheck, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const services = [
    {
      title: 'IT Consultancy',
      description: 'Expert guidance to transform your business with the latest technology strategies.',
      icon: <Server size={40} className="text-accent" />
    },
    {
      title: 'Web Development',
      description: 'Robust, scalable, and secure web applications tailored to your specific needs.',
      icon: <Code size={40} className="text-accent" />
    },
    {
      title: 'Web Designing',
      description: 'Stunning, user-friendly, and responsive designs that captivate your audience.',
      icon: <Monitor size={40} className="text-accent" />
    },
    {
      title: 'IT Recruitment',
      description: 'Connecting you with top-tier IT talent to drive your projects forward.',
      icon: <UserCheck size={40} className="text-accent" />
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute top-40 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            >
              Innovate. Build. <span className="text-accent">Recruit.</span>
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-300 mb-8"
            >
              Your one-stop solution for IT Consultancy, Project Recruitment, and Premium Web Services. We bridge the gap between talent and technology.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex justify-center gap-4"
            >
              <Link to="/contact" className="px-8 py-3 bg-accent hover:bg-blue-600 text-white rounded-full font-medium transition-colors flex items-center gap-2">
                Get Started <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-colors backdrop-blur-sm">
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Our Expertise
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver comprehensive IT solutions designed to help your business thrive in the digital age.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="mb-6 p-3 bg-blue-50 w-fit rounded-lg">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose SPOC Recruiters?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Proven Expertise</h3>
                    <p className="text-gray-600">Years of experience delivering top-notch IT solutions and successful placements.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Client-Centric Approach</h3>
                    <p className="text-gray-600">We tailor our services to meet your unique business goals and challenges.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">End-to-End Support</h3>
                    <p className="text-gray-600">From concept to deployment and recruitment, we are with you every step.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="Team working together"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help you with your next project or recruitment needs.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/contact" className="px-8 py-4 bg-white text-accent rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
