import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Clock, Shield, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">ElevateHQ</span>
                <div className="text-xs text-blue-400 font-medium">Zero-Tech-Overflow</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Fast-Loading, Done-For-You Websites Without Technical Headaches
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3 text-blue-400" />
                <span>Quick Response</span>
              </div>
            </div>
          </div>

          {/*Quick Links*/ }
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/examples" className="text-gray-300 hover:text-white transition-colors">Examples</Link></li>
              <li><Link to=" " className="text-gray-300 hover:text-white transition-colors"> </Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Express (100hr)</li>
              <li className="text-gray-300">Speed Boost Pack</li>
              <li className="text-gray-300">Launch Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">mail@subhadeeppathak.store</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300"> </span>
              </div>
              <div className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md text-center hover:bg-blue-700 transition-colors cursor-pointer">
                Start Your Project
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} ElevateHQ. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0 text-sm">
            <div className="flex items-center space-x-1">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-gray-300">99.9% Uptime</span>
            </div>
            <span className="text-gray-400">•</span>
            <span className="text-gray-300">GDPR Compliant</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-300">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
