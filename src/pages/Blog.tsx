import React, { useState } from 'react';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'market-trends', name: 'Market Trends' },
    { id: 'buying-tips', name: 'Buying Tips' },
    { id: 'investment', name: 'Investment' },
    { id: 'legal', name: 'Legal Guide' },
    { id: 'location', name: 'Location Insights' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Real Estate Market Outlook 2024: Key Trends to Watch",
      excerpt: "Discover the emerging trends shaping India's real estate market in 2024, from affordable housing growth to smart city developments.",
      category: "market-trends",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
      tags: ["Market Analysis", "Trends", "Investment"]
    },
    {
      id: 2,
      title: "First-Time Home Buyer's Complete Guide",
      excerpt: "Everything you need to know about buying your first home, from budgeting and financing to legal procedures and final registration.",
      category: "buying-tips",
      author: "Priya Sharma",
      date: "March 12, 2024",
      readTime: "12 min read",
      image: "/api/placeholder/400/250",
      tags: ["First-time Buyers", "Home Loan", "Guide"]
    },
    {
      id: 3,
      title: "Gurgaon vs Noida: Which is Better for Investment?",
      excerpt: "A detailed comparison of investment opportunities in Gurgaon and Noida, analyzing growth potential, infrastructure, and ROI prospects.",
      category: "investment",
      author: "Michael Chen",
      date: "March 10, 2024",
      readTime: "10 min read",
      image: "/api/placeholder/400/250",
      tags: ["Investment", "Gurgaon", "Noida", "ROI"]
    },
    {
      id: 4,
      title: "Understanding RERA: Your Rights as a Property Buyer",
      excerpt: "Learn about RERA regulations, your rights as a buyer, and how this law protects you from fraudulent practices in real estate.",
      category: "legal",
      author: "David Rodriguez",
      date: "March 8, 2024",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      tags: ["RERA", "Legal Rights", "Buyer Protection"]
    },
    {
      id: 5,
      title: "Top 5 Emerging Locations in NCR for Real Estate Investment",
      excerpt: "Explore the most promising upcoming locations in NCR that offer excellent growth potential and attractive investment opportunities.",
      category: "location",
      author: "Anjali Patel",
      date: "March 5, 2024",
      readTime: "9 min read",
      image: "/api/placeholder/400/250",
      tags: ["NCR", "Emerging Areas", "Investment Opportunities"]
    },
    {
      id: 6,
      title: "Home Loan Interest Rates: What to Expect in 2024",
      excerpt: "Analysis of current home loan trends, interest rate predictions, and tips to get the best financing deals for your property purchase.",
      category: "buying-tips",
      author: "Rajesh Kumar",
      date: "March 3, 2024",
      readTime: "7 min read",
      image: "/api/placeholder/400/250",
      tags: ["Home Loan", "Interest Rates", "Financing"]
    },
    {
      id: 7,
      title: "Commercial Real Estate: Office Spaces Post-Pandemic",
      excerpt: "How the pandemic has reshaped commercial real estate demand and what it means for office space investments in the new normal.",
      category: "market-trends",
      author: "Sarah Johnson",
      date: "February 28, 2024",
      readTime: "11 min read",
      image: "/api/placeholder/400/250",
      tags: ["Commercial", "Office Spaces", "Post-Pandemic"]
    },
    {
      id: 8,
      title: "Property Documentation Checklist: Don't Miss These Papers",
      excerpt: "Essential documents you must verify before buying a property to ensure legal compliance and avoid future complications.",
      category: "legal",
      author: "Priya Sharma",
      date: "February 25, 2024",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
      tags: ["Documentation", "Legal Check", "Property Papers"]
    },
    {
      id: 9,
      title: "Rental Yield Analysis: Best Cities for Property Investment",
      excerpt: "Compare rental yields across major Indian cities to identify the best locations for generating steady rental income from property investments.",
      category: "investment",
      author: "Michael Chen",
      date: "February 22, 2024",
      readTime: "10 min read",
      image: "/api/placeholder/400/250",
      tags: ["Rental Yield", "Investment Cities", "ROI Analysis"]
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Real Estate Insights
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Stay informed with the latest market trends, expert advice, and comprehensive guides
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
              Featured Article
            </h2>
          </div>

          <div className="card-elevated">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {categories.find(cat => cat.id === featuredPost.category)?.name}
                  </span>
                  <span className="text-sm text-foreground-muted">{featuredPost.readTime}</span>
                </div>
                <h3 className="text-3xl font-playfair font-bold mb-4">{featuredPost.title}</h3>
                <p className="text-lg text-foreground-muted mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src="/api/placeholder/40/40"
                      alt={featuredPost.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{featuredPost.author}</p>
                      <p className="text-sm text-foreground-muted">{featuredPost.date}</p>
                    </div>
                  </div>
                  <button className="btn-primary">Read Article</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background-alt text-foreground-muted hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <article key={post.id} className="card-elevated">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                    {categories.find(cat => cat.id === post.category)?.name}
                  </span>
                  <span className="text-sm text-foreground-muted">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h3>
                
                <p className="text-foreground-muted mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-background-alt text-foreground-muted rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img
                      src="/api/placeholder/32/32"
                      alt={post.author}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium">{post.author}</p>
                      <p className="text-xs text-foreground-muted">{post.date}</p>
                    </div>
                  </div>
                  <button className="btn-outline text-sm py-1 px-3">
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length > 9 && (
            <div className="text-center mt-12">
              <button className="btn-outline">Load More Articles</button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-playfair font-bold text-secondary-foreground mb-6">
            Stay Updated with Market Insights
          </h2>
          <p className="text-xl text-secondary-foreground/80 mb-8">
            Get the latest real estate trends and expert advice delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-secondary-foreground/20 bg-white/90"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-secondary-foreground/70 mt-4">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>

      {/* Market Resources */}
      <section className="py-16 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
              Market Resources
            </h2>
            <p className="text-xl text-foreground-muted">
              Essential tools and guides for your real estate journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-elevated text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Market Reports</h3>
              <p className="text-foreground-muted mb-6">
                Quarterly market analysis and price trend reports for major cities
              </p>
              <button className="btn-outline text-sm">Download Reports</button>
            </div>

            <div className="card-elevated text-center">
              <div className="w-16 h-16 bg-secondary/10 text-secondary-foreground rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">EMI Calculator</h3>
              <p className="text-foreground-muted mb-6">
                Calculate your home loan EMI and plan your property budget effectively
              </p>
              <button className="btn-outline text-sm">Calculate EMI</button>
            </div>

            <div className="card-elevated text-center">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Buyer's Guide</h3>
              <p className="text-foreground-muted mb-6">
                Comprehensive guides for first-time buyers and property investors
              </p>
              <button className="btn-outline text-sm">Get Guide</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;