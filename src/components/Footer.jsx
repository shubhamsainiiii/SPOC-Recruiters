import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Desc */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold flex items-center gap-2 mb-4">
              <Briefcase className="text-accent" />
              <span>SPOC Recruiters</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for IT consultancy, project recruitment, and cutting-edge web solutions. We build the future with you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">IT Consultancy</li>
              <li className="text-gray-300">Web Development</li>
              <li className="text-gray-300">Web Designing</li>
              <li className="text-gray-300">IT Recruitment</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <Mail size={18} className="text-accent" />
                <span>info@spocrecruiters.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone size={18} className="text-accent" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin size={18} className="text-accent mt-1" />
                <span>123 Tech Park, Innovation City, India</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} SPOC Recruiters. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
