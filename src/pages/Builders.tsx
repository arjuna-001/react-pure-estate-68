import React from 'react';

const Builders: React.FC = () => {
  const builders = [
    {
      id: 1,
      name: "Sterling Homes",
      established: "2010",
      projects: 25,
      rating: 4.8,
      logo: "/api/placeholder/200/100",
      description: "Leading luxury residential developer with a focus on premium locations and world-class amenities.",
      specializations: ["Luxury Apartments", "Villas", "Penthouses"],
      completedProjects: ["Azure Heights", "Golden Towers", "Sterling Plaza"],
      locations: ["Gurgaon", "Delhi", "Noida"],
      certifications: ["ISO 9001", "RERA Certified", "Green Building"]
    },
    {
      id: 2,
      name: "Emerald Developers",
      established: "2008",
      projects: 18,
      rating: 4.6,
      logo: "/api/placeholder/200/100",
      description: "Sustainable and eco-friendly construction with innovative design solutions for modern living.",
      specializations: ["Eco-Friendly Homes", "Smart Apartments", "Affordable Housing"],
      completedProjects: ["Green Valley", "Emerald Gardens", "Nature's Nest"],
      locations: ["Noida", "Ghaziabad", "Faridabad"],
      certifications: ["IGBC Certified", "RERA Registered", "ISO 14001"]
    },
    {
      id: 3,
      name: "Pinnacle Construction",
      established: "2012",
      projects: 22,
      rating: 4.7,
      logo: "/api/placeholder/200/100",
      description: "Modern architecture meets functionality with cutting-edge construction technology and timely delivery.",
      specializations: ["High-Rise Buildings", "Commercial Spaces", "Mixed Development"],
      completedProjects: ["Pinnacle Towers", "Sky Residences", "Metro Heights"],
      locations: ["Delhi", "Dwarka", "Rohini"],
      certifications: ["BIS Certified", "RERA Approved", "Quality Excellence"]
    },
    {
      id: 4,
      name: "Golden Gate Builders",
      established: "2015",
      projects: 12,
      rating: 4.5,
      logo: "/api/placeholder/200/100",
      description: "Affordable luxury housing with focus on value for money and quality construction standards.",
      specializations: ["Mid-Segment Housing", "Budget Apartments", "Townhouses"],
      completedProjects: ["Golden Gate Apartments", "Value Homes", "Budget Bliss"],
      locations: ["Faridabad", "Ghaziabad", "Greater Noida"],
      certifications: ["RERA Certified", "Quality Assurance", "Timely Delivery"]
    },
    {
      id: 5,
      name: "Azure Properties",
      established: "2009",
      projects: 20,
      rating: 4.9,
      logo: "/api/placeholder/200/100",
      description: "Premium real estate development with focus on architectural excellence and customer satisfaction.",
      specializations: ["Luxury Condos", "Premium Villas", "Serviced Apartments"],
      completedProjects: ["Azure Residency", "Blue Heights", "Premium Palace"],
      locations: ["Gurgaon", "Mumbai", "Pune"],
      certifications: ["ISO 9001", "RERA Gold", "Excellence Award"]
    },
    {
      id: 6,
      name: "Urban Spaces",
      established: "2011",
      projects: 16,
      rating: 4.4,
      logo: "/api/placeholder/200/100",
      description: "Contemporary urban living solutions with smart home integration and modern amenities.",
      specializations: ["Smart Homes", "Urban Apartments", "Co-living Spaces"],
      completedProjects: ["Urban Oasis", "City Central", "Metro Connect"],
      locations: ["Delhi", "Bangalore", "Hyderabad"],
      certifications: ["Smart City Certified", "RERA Registered", "Tech Innovation"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Trusted Builders
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Partner with industry-leading developers known for quality, innovation, and timely delivery
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="card-elevated">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-foreground-muted">Verified Builders</p>
            </div>
            <div className="card-elevated">
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <p className="text-foreground-muted">Completed Projects</p>
            </div>
            <div className="card-elevated">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <p className="text-foreground-muted">Years Experience</p>
            </div>
            <div className="card-elevated">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <p className="text-foreground-muted">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Builders Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
              Featured Builders
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Discover our curated list of premium builders and developers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {builders.map((builder) => (
              <div key={builder.id} className="card-elevated">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Logo and Basic Info */}
                  <div className="md:w-1/3">
                    <img
                      src={builder.logo}
                      alt={builder.name}
                      className="w-full h-32 object-contain bg-gray-50 rounded-lg mb-4"
                    />
                    <div className="text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(builder.rating)
                                  ? 'text-secondary'
                                  : 'text-gray-300'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-2 text-sm font-medium">{builder.rating}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-foreground-muted">Established</p>
                          <p className="font-semibold">{builder.established}</p>
                        </div>
                        <div>
                          <p className="text-foreground-muted">Projects</p>
                          <p className="font-semibold">{builder.projects}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-playfair font-bold mb-3">{builder.name}</h3>
                    <p className="text-foreground-muted mb-4">{builder.description}</p>

                    {/* Specializations */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Specializations</h4>
                      <div className="flex flex-wrap gap-2">
                        {builder.specializations.map((spec, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Locations */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Operating Locations</h4>
                      <div className="flex flex-wrap gap-2">
                        {builder.locations.map((location, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          >
                            {location}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Certifications */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Certifications</h4>
                      <div className="flex flex-wrap gap-2">
                        {builder.certifications.map((cert, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-secondary/10 text-secondary-foreground rounded-full text-sm border border-secondary/20"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button className="btn-primary text-sm py-2 px-4">
                        View Projects
                      </button>
                      <button className="btn-outline text-sm py-2 px-4">
                        Contact Builder
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Builders */}
      <section className="py-16 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
              Why Choose Our Partner Builders?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-elevated text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Verified & Trusted</h3>
              <p className="text-foreground-muted">
                All our partner builders are thoroughly verified for legal compliance, 
                financial stability, and track record.
              </p>
            </div>
            <div className="card-elevated text-center">
              <div className="w-16 h-16 bg-secondary/10 text-secondary-foreground rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Timely Delivery</h3>
              <p className="text-foreground-muted">
                Our builders have a proven track record of delivering projects 
                on time with no delays or excuses.
              </p>
            </div>
            <div className="card-elevated text-center">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
              <p className="text-foreground-muted">
                Premium construction quality with the best materials and 
                adherence to international building standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Builders;