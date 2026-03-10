import React, { Fragment, useMemo, useState } from 'react';
import { ExternalLink, Clock, Zap, TrendingUp, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { examples, industries, funnelTypes, type ExampleSite } from '../data/examples';
import { ds } from '../designSystem';

const Examples: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedFunnelType, setSelectedFunnelType] = useState('All');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filteredExamples = useMemo(
    () =>
      examples.filter((example) => {
        const matchesIndustry = selectedIndustry === 'All' || example.industry === selectedIndustry;
        const matchesFunnelType =
          selectedFunnelType === 'All' || example.funnelType === selectedFunnelType;
        return matchesIndustry && matchesFunnelType;
      }),
    [selectedIndustry, selectedFunnelType],
  );

  const gridRemainder = filteredExamples.length % 3;

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            See It Live • Proven Performance • Quick Deployment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Browse our portfolio of high-converting websites built for agencies like yours. 
            Each site loads fast, converts well, and was delivered on time.
          </p>
          
          {/* Client Results Bar */}
          <div className="bg-white rounded-lg p-6 shadow-lg inline-block">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">42%</div>
                <div className="text-sm text-gray-600">Faster Page Loads</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">89%</div>
                <div className="text-sm text-gray-600">Avg Conversion Boost</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">100hrs</div>
                <div className="text-sm text-gray-600">Avg Delivery Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-700">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filter by:</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Funnel Type</label>
                <select
                  value={selectedFunnelType}
                  onChange={(e) => setSelectedFunnelType(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {funnelTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:items-stretch">
            {filteredExamples.map((example, index) => {
              const isLast = index === filteredExamples.length - 1;
              const isInLastTwo =
                gridRemainder === 2 && index >= filteredExamples.length - 2;

              // For 1 item in last row: center by spanning all 3 columns on large screens
              const singleRemainderClasses =
                gridRemainder === 1 && isLast ? 'lg:col-span-3 lg:max-w-xl lg:mx-auto' : '';

              if (gridRemainder === 2 && isInLastTwo) {
                // For 2 items in last row: render them inside a centered inner grid
                if (index === filteredExamples.length - 2) {
                  const lastTwo = filteredExamples.slice(-2);
                  return (
                    <div
                      key="last-two-wrapper"
                      className="lg:col-span-3 flex justify-center"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
                        {lastTwo.map((item, innerIndex) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: (index + innerIndex) * 0.1 }}
                            onHoverStart={() => setHoveredCard(item.id)}
                            onHoverEnd={() => setHoveredCard(null)}
                            className={`${ds.card} overflow-hidden transform hover:scale-[1.02]`}
                          >
                            {/* Image with Hover Preview */}
                            <div className="relative h-48 overflow-hidden">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                              />
                              {hoveredCard === item.id && (
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                  <div className="text-white text-center">
                                    <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                                    <div className="font-medium">Preview Site</div>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Content */}
                            <div className="p-6">
                              <div className="flex items-start justify-between mb-4">
                                <div>
                                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                                    {item.title}
                                  </h3>
                                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <span>{item.industry}</span>
                                    <span>•</span>
                                    <span>{item.funnelType}</span>
                                  </div>
                                </div>
                                <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium">
                                  {item.conversionRate}
                                </div>
                              </div>

                              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                {item.description}
                              </p>

                              {/* Metrics */}
                              <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="text-center">
                                  <Clock className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                                  <div className="text-xs text-gray-600">Built In</div>
                                  <div className="font-semibold text-sm">{item.buildTime}</div>
                                </div>
                                <div className="text-center">
                                  <Zap className="w-4 h-4 text-green-600 mx-auto mb-1" />
                                  <div className="text-xs text-gray-600">Load Speed</div>
                                  <div className="font-semibold text-sm">{item.loadSpeed}</div>
                                </div>
                                <div className="text-center">
                                  <TrendingUp className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                                  <div className="text-xs text-gray-600">Conversion</div>
                                  <div className="font-semibold text-sm">
                                    {item.conversionRate}
                                  </div>
                                </div>
                              </div>

                              {/* Tech Stack */}
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex flex-wrap gap-2">
                                  {item.techStack.map((tech) => (
                                    <span
                                      key={tech}
                                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* View Live Site Button */}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${ds.primaryButton} w-full mt-1`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {item.ctaLabel || 'View Live Site'}
                  </a>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  );
                }
                // Skip rendering the very last card since it's already in the wrapper above
                return <Fragment key={example.id} />;
              }

              return (
                <motion.div
                  key={example.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredCard(example.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className={`${ds.card} overflow-hidden transform hover:scale-[1.02] ${singleRemainderClasses}`}
                >
                {/* Image with Hover Preview */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={example.image}
                    alt={example.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  {hoveredCard === example.id && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="text-white text-center">
                        <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                        <div className="font-medium">Preview Site</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{example.title}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span>{example.industry}</span>
                        <span>•</span>
                        <span>{example.funnelType}</span>
                      </div>
                    </div>
                    <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium">
                      {example.conversionRate}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {example.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <Clock className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                      <div className="text-xs text-gray-600">Built In</div>
                      <div className="font-semibold text-sm">{example.buildTime}</div>
                    </div>
                    <div className="text-center">
                      <Zap className="w-4 h-4 text-green-600 mx-auto mb-1" />
                      <div className="text-xs text-gray-600">Load Speed</div>
                      <div className="font-semibold text-sm">{example.loadSpeed}</div>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                      <div className="text-xs text-gray-600">Conversion</div>
                      <div className="font-semibold text-sm">{example.conversionRate}</div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      {example.techStack.map(tech => (
                        <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Live Site Button */}
                  <a
                    href={example.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${ds.primaryButton} w-full mt-1`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {example.ctaLabel || 'View Live Site'}
                  </a>
                </div>
                </motion.div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredExamples.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-4">No examples match your current filters</div>
              <button
                onClick={() => {
                  setSelectedIndustry('All');
                  setSelectedFunnelType('All');
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to See Your Industry in Action?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's build something amazing for your agency. Fast delivery, proven results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              View Packages
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Examples;
