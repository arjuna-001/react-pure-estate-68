import React, { useState } from 'react';
import heroImage from '../assets/hero-real-estate.jpg';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search:', { searchQuery, location, propertyType });
  };

  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Penthouse",
      location: "Downtown District",
      price: "$2,850,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "3,200 sq ft",
      image: "/api/placeholder/400/300",
      status: "For Sale"
    },
    {
      id: 2,
      title: "Modern Villa",
      location: "Green Valley",
      price: "$1,750,000",
      bedrooms: 5,
      bathrooms: 4,
      area: "4,500 sq ft",
      image: "/api/placeholder/400/300",
      status: "For Sale"
    },
    {
      id: 3,
      title: "Elegant Townhouse",
      location: "Heritage Park",
      price: "$950,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "2,100 sq ft",
      image: "/api/placeholder/400/300",
      status: "For Rent"
    }
  ];

  const topBuilders = [
    { name: "Sterling Homes", logo: "/api/placeholder/150/80" },
    { name: "Pinnacle Construction", logo: "/api/placeholder/150/80" },
    { name: "Emerald Developers", logo: "/api/placeholder/150/80" },
    { name: "Azure Properties", logo: "/api/placeholder/150/80" },
    { name: "Golden Gate Builders", logo: "/api/placeholder/150/80" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Home Buyer",
      content: "PureEstate made finding our dream home effortless. Their team's expertise and dedication exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Property Investor",
      content: "Outstanding service and market insights. They helped me build a profitable real estate portfolio.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center hero-gradient hero-pattern"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
              Find Your
              <span className="block bg-gradient-secondary bg-clip-text text-transparent">
                Dream Property
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Discover premium real estate opportunities with trusted builders and expert guidance every step of the way.
            </p>
          </div>

          {/* Search Bar */}
          <div className="animate-slide-up max-w-4xl mx-auto">
            <form onSubmit={handleSearch} className="card-glass p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <input
                    type="text"
                    placeholder="Search properties..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input-field"
                  />
                </div>
                <div>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="input-field"
                  >
                    <option value="">All Locations</option>
                    <option value="downtown">Downtown</option>
                    <option value="greenvalley">Green Valley</option>
                    <option value="heritagepark">Heritage Park</option>
                    <option value="oceanview">Ocean View</option>
                  </select>
                </div>
                <div>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="input-field"
                  >
                    <option value="">Property Type</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="penthouse">Penthouse</option>
                  </select>
                </div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <button type="submit" className="btn-secondary">
                  Search Properties
                </button>
                <button type="button" className="btn-glass">
                  Advanced Filters
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div key={property.id} className="property-card">
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      property.status === 'For Sale' 
                        ? 'bg-secondary text-secondary-foreground'
                        : 'bg-accent text-accent-foreground'
                    }`}>
                      {property.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                  <p className="text-foreground-muted mb-3">{property.location}</p>
                  <p className="text-2xl font-bold text-primary mb-4">{property.price}</p>
                  <div className="flex justify-between text-sm text-foreground-muted">
                    <span>{property.bedrooms} beds</span>
                    <span>{property.bathrooms} baths</span>
                    <span>{property.area}</span>
                  </div>
                  <button className="w-full mt-6 btn-outline text-sm py-3">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary">View All Properties</button>
          </div>
        </div>
      </section>

      {/* Top Builders */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Trusted Builders
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Partner with industry-leading developers and builders
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {topBuilders.map((builder, index) => (
              <div key={index} className="card-elevated text-center hover:scale-105 transition-transform duration-300">
                <img
                  src={builder.logo}
                  alt={builder.name}
                  className="w-full h-16 object-contain mb-4"
                />
                <p className="font-semibold text-sm">{builder.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Why Choose PureEstate?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Verified Properties</h3>
              <p className="text-white/80">All properties are thoroughly verified for authenticity and legal compliance.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Guidance</h3>
              <p className="text-white/80">Professional advice from experienced real estate consultants.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Best Prices</h3>
              <p className="text-white/80">Transparent pricing with no hidden fees or commission surprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Hear from our satisfied clients about their property journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-elevated">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground-muted mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-foreground-muted">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-secondary-foreground mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl text-secondary-foreground/80 mb-8">
            Connect with our expert agents and start your property journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Get Started</button>
            <button className="btn-outline border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              Contact Agent
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;