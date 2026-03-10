import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Zap, Shield, CheckCircle, Users, TrendingUp, Gauge } from 'lucide-react';
import { motion } from 'framer-motion';
import { ds } from '../designSystem';

const Home: React.FC = () => {
  const [pageLoadTime, setPageLoadTime] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);

  useEffect(() => {
    // Simulate page load time counter
    const loadTimer = setInterval(() => {
      setPageLoadTime(prev => {
        if (prev >= 1.2) {
          clearInterval(loadTimer);
          return 1.2;
        }
        return prev + 0.1;
      });
    }, 100);

    // Animate projects completed counter
    const projectTimer = setInterval(() => {
      setProjectsCompleted(prev => {
        if (prev >= 100) {
          clearInterval(projectTimer);
          return 847;
        }
        return prev + 12;
      });
    }, 50);

    return () => {
      clearInterval(loadTimer);
      clearInterval(projectTimer);
    };
  }, []);

  const workflowSteps = [
    { title: 'You Describe', description: 'Tell us your vision', icon: Users },
    { title: 'We Build', description: 'Fast, professional execution', icon: Zap },
    { title: 'You Launch', description: 'Go live in 100 hours', icon: TrendingUp }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU5LDEzMCwyNDYsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Performance Counter */}
              <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-md border border-gray-100">
                <Gauge className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">Pages load under</span>
                <span className="ml-1 text-lg font-bold text-blue-600">{pageLoadTime.toFixed(1)}s</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Websites That Load
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Faster </span>
                  Than Your Coffee Brews
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Get lightning-fast, conversion-optimized websites built specifically for Service Business Owners. 
                  Zero technical overwhelm. Fixed 100-hour delivery. Ready to scale your agency.
                </p>
              </div>

              {/* 100-Hour Guarantee Badge */}
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center shadow-lg">
                  <Clock className="w-5 h-5 mr-2" />
                  100-Hour Launch Guarantee
                </div>
                <div className="flex items-center space-x-1 text-green-600">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live Support Available</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/examples"
                  className={`${ds.primaryButton} px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105`}
                >
                  See Live Examples <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/contact"
                  className={`${ds.secondaryButton} px-8 py-4 flex items-center justify-center`}
                >
                  Start Building Now
                </Link>
              </div>
            </motion.div>

            {/* Stats & Visual */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{projectsCompleted}</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">42%</div>
                    <div className="text-sm text-gray-600">Faster Load Times</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">15min</div>
                    <div className="text-sm text-gray-600">Avg Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">99.9%</div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 text-center shadow-md">
                  <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <div className="text-sm font-medium">Secure</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-md">
                  <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-sm font-medium">Fast</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-md">
                  <CheckCircle className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-sm font-medium">Reliable</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Zero Tech Overwhelm Workflow */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              0 Tech Overwhelm Workflow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process eliminates technical complexity while delivering professional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">{step.title}</div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-blue-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Agencies Choose ElevateHQ
            </h2>
            <p className="text-xl text-gray-600">
              Speed • Simplicity • Instant Results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Zero Maintenance</h3>
              <p className="text-gray-600 leading-relaxed">
                We handle updates, security patches, and performance optimization. 
                You focus on growing your business while we keep everything running smoothly.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pre-built for Your Industry</h3>
              <p className="text-gray-600 leading-relaxed">
                Industry-specific templates optimized for conversion. From fitness to real estate, 
                we've got proven designs that work in your niche.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile-Perfect Out the Box</h3>
              <p className="text-gray-600 leading-relaxed">
                Responsive design that looks stunning on every device. No additional mobile optimization needed - 
                it just works beautifully everywhere.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            100 Hours From 'Go' to Grow
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join hundreds of agencies who've eliminated technical headaches and accelerated their growth. 
            Your next high-converting website is just 100 hours away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/examples"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg"
            >
              View Our Portfolio
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
