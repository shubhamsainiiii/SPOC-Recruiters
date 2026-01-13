import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const defaultRoles = [
  { title: 'Java Developer', skills: ['Spring Boot', 'Microservices', 'REST'] },
  { title: 'Python Developer', skills: ['Django/Flask', 'APIs', 'Data'] },
  { title: 'Full Stack Developer', skills: ['React', 'Node.js', 'SQL/NoSQL'] },
  { title: 'Node.js Developer', skills: ['Express/Nest', 'APIs', 'Microservices'] },
  { title: 'React Developer', skills: ['React', 'Hooks', 'UI/UX'] },
  { title: 'AWS/DevOps Engineer', skills: ['CI/CD', 'Docker', 'Kubernetes'] },
  { title: 'Data Engineer', skills: ['ETL', 'Pipelines', 'Big Data'] },
  { title: 'QA Automation Engineer', skills: ['Selenium', 'Cypress', 'API Tests'] },
  { title: 'Android/iOS Developer', skills: ['Kotlin/Swift', 'React Native', 'Flutter'] },
];

const HireTalent = ({ roles = defaultRoles, limit, showCTA = false }) => {
  const visibleRoles = typeof limit === 'number' ? roles.slice(0, limit) : roles;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">Hire Talent</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">Hire Experienced Developers Across Stacks</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-3">Java, Python, Full Stack, Node.js, React, DevOps/AWS, QA, Mobile and more.</p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {visibleRoles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.8 }}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-lg hover:shadow-accent/10 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-accent transition-colors">{role.title}</h3>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent">Available</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {role.skills.map((s) => (
                  <span key={s} className="px-3 py-1 text-xs font-medium rounded-full bg-white border border-slate-200 text-slate-700">
                    {s}
                  </span>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-white font-semibold hover:bg-blue-600 transition-colors">
                Hire Now <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {showCTA && roles.length > visibleRoles.length && (
          <div className="text-center mt-10">
            <Link to="/hire-talent" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors">
              Explore More <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default HireTalent;
