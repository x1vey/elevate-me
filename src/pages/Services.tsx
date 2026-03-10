import React, { useState } from 'react';
import { Clock, CheckCircle, Zap, Users, ArrowRight, Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState('pro');
  const [expandedAddOn, setExpandedAddOn] = useState<string | null>(null);

  const serviceTiers = [
   /* {
      id: 'express',
      name: 'Express',
      duration: '72 hours',
      price: '$997',
      description: 'Pre-built templates customized for your brand',
      features: [
        'Pre-built industry template',
        'Brand customization',
        'Mobile optimization',
        'Basic SEO setup',
        'Contact form integration',
        '1 revision round',
        '30-day support'
      ],
      popular: false
    },
*/
    {
      id: 'PUSH TOOL',
      name: 'PUSH TOOL',
      duration: '100 hours',
      price: '$97/m',
      description: 'Custom-designed solutions tailored to your needs',
      features: 
      [
        'Winning design Template and Fast deployment',
        'Add on funnel integration',
        'Our Website Builder',
        'Analytics & tracking setup',
        'Speed optimization',
        '3 revision rounds',
        'Ongoing support',
        'Training session included',
        'Unlimited Website builder',
        'Unlimited Funnel Builder',
        'ALL IN ONE Social Media management/planner (Monday)',
        'Private Community space',
        'CRM + Pipeline management (Hubspot)',
        'Add unlimited staff members',
        'Social Media custom DM automation (Manychat)',
        'Appointment booking system like Calendly Pro',
        'Mailing + SMS + AI services (Add-ons)',
      ],
      popular: true
    },
  /*
    {
      id: 'enterprise',
      name: 'Enterprise',
      duration: '2 weeks',
      price: '$4,997',
      description: 'Complex multi-page funnels and advanced features',
      features: [
        'Multi-page funnel system',
        'Advanced automation setup',
        'Custom integrations',
        'A/B testing setup',
        'Advanced analytics',
        'Unlimited revisions',
        '6-month support',
        'Dedicated project manager',
        'Monthly performance review'
      ],
      popular: false
    }
  */
 ];
  const addOns = [
    {
      id: 'speed-boost',
      name: 'Speed Boost Pack',
      price: '$497',
      description: 'Advanced performance optimization for sub-1s load times',
      features: [
        'Advanced image optimization',
        'Code minification & compression',
        'CDN setup & configuration',
        'Database query optimization',
        'Core Web Vitals improvement'
      ]
    },
    {
      id: 'seo-pro',
      name: 'SEO Pro Setup',
      price: '$797',
      description: 'Complete SEO foundation for maximum visibility',
      features: [
        'Technical SEO audit',
        'Meta optimization',
        'Schema markup',
        'Sitemap generation',
        'Google Analytics & Search Console setup'
      ]
    },
    {
      id: 'maintenance',
      name: 'Monthly Maintenance',
      price: '$297/month',
      description: 'Ongoing updates, security, and performance monitoring',
      features: [
        'Security updates',
        'Performance monitoring',
        'Backup management',
        'Content updates (5/month)',
        'Priority support'
      ]
    }
  ];

  const processSteps = [
    { title: 'Discovery Call', description: '15-minute consultation to understand your needs', duration: '15 min' },
    { title: 'Planning & Design', description: 'Wireframes and design mockups for approval', duration: '1-2 days' },
    { title: 'Development', description: 'Building your high-performance website', duration: '2-10 days' },
    { title: 'Review & Revisions', description: 'Your feedback and our refinements', duration: '1-3 days' },
    { title: 'Launch & Training', description: 'Go live with full handoff and training', duration: '1 day' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Done-For-You • Fixed Timelines • Ongoing Support
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose your perfect package. All tiers include our signature speed optimization 
            and 24/7 launch support to ensure your success.
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">No-Tech Setup Process</h2>
            <p className="text-xl text-gray-600">Our streamlined 5-step process eliminates complexity</p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2 hidden lg:block"></div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="bg-white border-4 border-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="font-bold text-blue-600">{index + 1}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                  <div className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                    {step.duration}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Package</h2>
            <p className="text-xl text-gray-600">All packages include 24/7 launch support</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                  tier.popular ? 'ring-4 ring-blue-600 scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 font-medium">
                    Most Popular
                  </div>
                )}

                <div className={`p-8 ${tier.popular ? 'pt-12' : ''}`}>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-blue-600 mb-2">{tier.price}</div>
                    <div className="flex items-center justify-center space-x-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{tier.duration}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-center mb-6">{tier.description}</p>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedTier(tier.id)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      tier.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Choose {tier.name}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Power-Up Your Package</h2>
            <p className="text-xl text-gray-600">Optional add-ons to supercharge your website</p>
          </div>

          <div className="space-y-6">
            {addOns.map((addOn) => (
              <div
                key={addOn.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedAddOn(expandedAddOn === addOn.id ? null : addOn.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Zap className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{addOn.name}</h3>
                        <p className="text-gray-600">{addOn.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl font-bold text-blue-600">{addOn.price}</div>
                      {expandedAddOn === addOn.id ? (
                        <Minus className="w-5 h-5 text-gray-400" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>

                {expandedAddOn === addOn.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-gray-200 p-6 bg-gray-50"
                  >
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {addOn.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Add to Package
                    </button>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">24/7 Launch Support Guarantee</h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">15-Minute Response</h3>
                <p className="text-gray-600">Get answers fast during your launch window</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dedicated Team</h3>
                <p className="text-gray-600">Your personal launch specialist</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Emergency Hotfix</h3>
                <p className="text-gray-600">Same-day fixes for critical issues</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Launch in 72 Hours?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of agencies who've accelerated their growth with our proven system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg flex items-center justify-center"
            >
              Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="/examples"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              View Examples
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
