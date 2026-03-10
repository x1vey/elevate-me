import React, { useState } from 'react';
import { Download, Clock, Settings, Star, Filter, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Resources: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popular');

  const categories = ['All', 'HTML Templates', 'GHL Blueprints', 'CSS Snippets', 'JavaScript Modules'];

  const resources = [
    {
      id: '1',
      title: 'High-Converting Landing Page Template',
      category: 'HTML Templates',
      description: 'Complete HTML/CSS template optimized for conversions with integrated forms',
      installTime: '5 min',
      difficulty: 2,
      downloads: 1247,
      rating: 4.9,
      type: 'template',
      featured: true
    },
    {
      id: '2',
      title: 'GoHighLevel Sales Funnel Blueprint',
      category: 'GHL Blueprints',
      description: 'Pre-configured funnel setup for service businesses with automation sequences',
      installTime: '10 min',
      difficulty: 3,
      downloads: 892,
      rating: 4.8,
      type: 'blueprint',
      featured: true
    },
    {
      id: '3',
      title: 'CSS Animation Library',
      category: 'CSS Snippets',
      description: 'Collection of smooth animations and micro-interactions for better UX',
      installTime: '2 min',
      difficulty: 1,
      downloads: 2156,
      rating: 4.7,
      type: 'snippet',
      featured: false
    },
    {
      id: '4',
      title: 'Multi-Step Form Component',
      category: 'JavaScript Modules',
      description: 'Vanilla JS multi-step form with validation and progress indicator',
      installTime: '8 min',
      difficulty: 3,
      downloads: 634,
      rating: 4.6,
      type: 'module',
      featured: false
    },
    {
      id: '5',
      title: 'Fitness Studio Website Template',
      category: 'HTML Templates',
      description: 'Complete fitness website with class scheduling and member portal',
      installTime: '12 min',
      difficulty: 4,
      downloads: 445,
      rating: 4.9,
      type: 'template',
      featured: true
    },
    {
      id: '6',
      title: 'Restaurant Booking Blueprint',
      category: 'GHL Blueprints',
      description: 'Table reservation system with automated confirmations and reminders',
      installTime: '15 min',
      difficulty: 4,
      downloads: 278,
      rating: 4.5,
      type: 'blueprint',
      featured: false
    }
  ];

  const filteredResources = resources.filter(resource => {
    return selectedCategory === 'All' || resource.category === selectedCategory;
  });

  const sortedResources = [...filteredResources].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.downloads - a.downloads;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return parseInt(b.id) - parseInt(a.id);
      default:
        return 0;
    }
  });

  const getDifficultyStars = (difficulty: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Settings key={i} className={`w-3 h-3 ${i < difficulty ? 'text-yellow-500' : 'text-gray-300'}`} />
    ));
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'template': return 'bg-blue-100 text-blue-700';
      case 'blueprint': return 'bg-green-100 text-green-700';
      case 'snippet': return 'bg-purple-100 text-purple-700';
      case 'module': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Plug-and-Play • Zero Configuration • Time Saved
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Access our library of pre-built templates, funnel blueprints, and code snippets. 
            Everything you need to build faster and launch sooner.
          </p>
          
          {/* Quick Stats */}
          <div className="bg-white rounded-lg p-6 shadow-lg inline-block">
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">100+</div>
                <div className="text-sm text-gray-600">Ready-to-Use Assets</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">5min</div>
                <div className="text-sm text-gray-600">Avg Install Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">10k+</div>
                <div className="text-sm text-gray-600">Total Downloads</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-700">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Copy-Paste Solutions:</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="popular">Most Downloaded</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Most Copied Solutions</h2>
            <p className="text-blue-100">Our top-performing templates and blueprints</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.filter(r => r.featured).slice(0, 3).map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(resource.type)}`}>
                    {resource.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{resource.rating}</span>
                  </div>
                </div>
                
                <h3 className="font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{resource.description}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{resource.installTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="w-3 h-3" />
                    <span>{resource.downloads}</span>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 6) * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                    {resource.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{resource.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{resource.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <Clock className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                    <div className="text-xs text-gray-600">Install</div>
                    <div className="font-semibold text-sm">{resource.installTime}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-1">
                      {getDifficultyStars(resource.difficulty)}
                    </div>
                    <div className="text-xs text-gray-600">Difficulty</div>
                    <div className="font-semibold text-sm">{resource.difficulty}/5</div>
                  </div>
                  <div className="text-center">
                    <Download className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                    <div className="text-xs text-gray-600">Downloads</div>
                    <div className="font-semibold text-sm">{resource.downloads.toLocaleString()}</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center text-sm font-medium">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                  <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center text-sm font-medium">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-medium">
              Load More Resources
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Need Something Custom Built?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Can't find what you're looking for? We'll build it for you in 72 hours or less.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Request Custom Build
            </a>
            <a
              href="/services"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;