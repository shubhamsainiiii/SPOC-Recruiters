import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Monitor, UserCheck, Server, Cloud, Database, Shield, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import HireTalent from '../components/HireTalent';

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

  const stats = [
    { number: '500+', label: 'IT Placements' },
    { number: '100+', label: 'Projects Delivered' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' }
  ];

  const technologies = [
    { name: 'React & Modern Frontend', icon: <Code size={32} /> },
    { name: 'Node.js & Backend', icon: <Server size={32} /> },
    { name: 'Cloud & AWS', icon: <Cloud size={32} /> },
    { name: 'Database Management', icon: <Database size={32} /> },
    { name: 'Cybersecurity', icon: <Shield size={32} /> },
    { name: 'Mobile Development', icon: <Smartphone size={32} /> },
  ];


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
      <section className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          {/* Tech Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-[100px]"></div>
          <div className="absolute top-40 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium"
            >
              Leading IT Consultancy & Recruitment Firm
            </motion.div>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight"
            >
              Innovate. Build. <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Recruit.</span>
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Your strategic partner for IT Consultancy, Project Recruitment, and Premium Web Services. We bridge the gap between exceptional talent and cutting-edge technology.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link to="/contact" className="px-8 py-4 bg-accent hover:bg-blue-600 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2">
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition-all border border-slate-700 flex items-center justify-center">
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800/50">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="p-4"
              >
                <div className="text-3xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-400 text-sm md:text-base font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Technology</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Technologies We Master</h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all group"
              >
                <div className="mb-3 text-slate-400 group-hover:text-accent transition-colors">
                  {tech.icon}
                </div>
                <span className="text-sm font-semibold text-slate-700 text-center">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              Our Expertise
            </motion.h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
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
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-1"
              >
                <div className="mb-6 p-4 bg-slate-50 rounded-xl group-hover:bg-accent/10 transition-colors w-fit">
                  <div className="text-slate-900 group-hover:text-accent transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-accent font-medium text-sm opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <HireTalent limit={3} showCTA />

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-50 text-accent text-sm font-semibold">
                Why Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Partner with the Best in IT Recruitment & Consultancy
              </h2>
              <div className="space-y-8">
                <div className="flex gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-100 group-hover:border-accent/20 group-hover:bg-accent/5 transition-all">
                    <span className="text-slate-900 group-hover:text-accent font-bold text-xl transition-colors">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Proven Expertise</h3>
                    <p className="text-slate-600 leading-relaxed">Years of experience delivering top-notch IT solutions and successful placements across various industries.</p>
                  </div>
                </div>
                <div className="flex gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-100 group-hover:border-accent/20 group-hover:bg-accent/5 transition-all">
                    <span className="text-slate-900 group-hover:text-accent font-bold text-xl transition-colors">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Client-Centric Approach</h3>
                    <p className="text-slate-600 leading-relaxed">We tailor our services to meet your unique business goals and challenges, ensuring a perfect fit.</p>
                  </div>
                </div>
                <div className="flex gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-100 group-hover:border-accent/20 group-hover:bg-accent/5 transition-all">
                    <span className="text-slate-900 group-hover:text-accent font-bold text-xl transition-colors">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">End-to-End Support</h3>
                    <p className="text-slate-600 leading-relaxed">From concept to deployment and recruitment, we are with you every step of the journey.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative h-[500px] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="Team working together"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <p className="text-lg font-medium">"SPOC Recruiters helped us build our dream team in record time."</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold">JD</div>
                    <div>
                      <div className="font-bold">John Doe</div>
                      <div className="text-sm text-blue-200">CTO, TechCorp</div>
                    </div>
                  </div>
                </div>
              </div>
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
