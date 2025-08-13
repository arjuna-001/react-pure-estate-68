import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Buy Property",
      description: "Find your dream home with our extensive database of verified properties",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      features: [
        "Property search & filtering",
        "Virtual & physical tours",
        "Legal verification",
        "Price negotiation",
        "Documentation support",
        "Home loan assistance"
      ],
      process: [
        "Define your requirements",
        "Property shortlisting",
        "Site visits & evaluation", 
        "Price negotiation",
        "Legal due diligence",
        "Registration & handover"
      ]
    },
    {
      id: 2,
      title: "Sell Property",
      description: "Get the best market value for your property with our expert guidance",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      features: [
        "Free property valuation",
        "Professional photography",
        "Multi-platform listing",
        "Buyer screening",
        "Negotiation support",
        "Legal assistance"
      ],
      process: [
        "Property evaluation",
        "Market price analysis",
        "Professional listing",
        "Buyer identification",
        "Offer negotiation",
        "Sale completion"
      ]
    },
    {
      id: 3,
      title: "Rent Property",
      description: "Find rental properties or list your property for rent hassle-free",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      features: [
        "Tenant/landlord matching",
        "Rental agreements",
        "Background verification",
        "Security deposit handling",
        "Maintenance coordination",
        "Rent collection support"
      ],
      process: [
        "Property/tenant profile",
        "Matching & shortlisting",
        "Property viewing",
        "Agreement drafting",
        "Security & advance",
        "Move-in coordination"
      ]
    }
  ];

  const whyChooseUs = [
    {
      title: "Transparent Pricing",
      description: "No hidden charges. Clear, upfront pricing for all our services.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Expert Consultation",
      description: "Professional guidance from experienced real estate consultants.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "End-to-End Support",
      description: "Complete assistance from property search to final registration.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Legal Compliance",
      description: "All transactions are legally verified and compliant with regulations.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Comprehensive real estate solutions for buying, selling, and renting properties
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Professional real estate services tailored to your needs
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Service Info */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-playfair font-bold">{service.title}</h3>
                  </div>
                  <p className="text-lg text-foreground-muted mb-8">{service.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-4">What We Provide</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <svg className="w-4 h-4 text-accent mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Process */}
                    <div>
                      <h4 className="font-semibold mb-4">Our Process</h4>
                      <ol className="space-y-2">
                        {service.process.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start text-sm">
                            <span className="w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                              {stepIndex + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <div className="mt-8">
                    <button className="btn-primary mr-4">Get Started</button>
                    <button className="btn-outline">Learn More</button>
                  </div>
                </div>

                {/* Service Image */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="card-elevated">
                    <img
                      src="/api/placeholder/600/400"
                      alt={service.title}
                      className="w-full h-80 object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
              Why Choose PureEstate?
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              We're committed to providing exceptional service and value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="card-elevated text-center">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{reason.title}</h3>
                <p className="text-foreground-muted text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brokerage Transparency */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-elevated">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-foreground-muted">
                No hidden costs. Here's our simple pricing structure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 border border-border rounded-xl">
                <h3 className="text-xl font-semibold mb-2">Buying</h3>
                <div className="text-3xl font-bold text-primary mb-4">1%</div>
                <p className="text-foreground-muted text-sm mb-4">of property value</p>
                <ul className="text-sm space-y-2">
                  <li>✓ Property search</li>
                  <li>✓ Site visits</li>
                  <li>✓ Legal verification</li>
                  <li>✓ Documentation</li>
                </ul>
              </div>
              <div className="text-center p-6 border-2 border-primary rounded-xl relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
                <h3 className="text-xl font-semibold mb-2">Selling</h3>
                <div className="text-3xl font-bold text-primary mb-4">1.5%</div>
                <p className="text-foreground-muted text-sm mb-4">of sale value</p>
                <ul className="text-sm space-y-2">
                  <li>✓ Property valuation</li>
                  <li>✓ Marketing & listing</li>
                  <li>✓ Buyer screening</li>
                  <li>✓ Sale completion</li>
                </ul>
              </div>
              <div className="text-center p-6 border border-border rounded-xl">
                <h3 className="text-xl font-semibold mb-2">Renting</h3>
                <div className="text-3xl font-bold text-primary mb-4">50%</div>
                <p className="text-foreground-muted text-sm mb-4">of 1 month rent</p>
                <ul className="text-sm space-y-2">
                  <li>✓ Tenant matching</li>
                  <li>✓ Background check</li>
                  <li>✓ Agreement drafting</li>
                  <li>✓ Move-in support</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-foreground-muted mb-6">
                All prices include taxes. No additional charges or hidden fees.
              </p>
              <button className="btn-primary">Get Quote</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-secondary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-secondary-foreground/80 mb-8">
            Let our experts help you with your real estate journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Contact Us Today</button>
            <button className="btn-outline border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;