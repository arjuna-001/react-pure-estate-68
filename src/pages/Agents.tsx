import React from 'react';

const Agents: React.FC = () => {
  const agents = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Property Consultant",
      experience: "8+ years",
      specialization: "Luxury Residential",
      rating: 4.9,
      reviews: 127,
      image: "/api/placeholder/300/300",
      properties: 89,
      languages: ["English", "Hindi", "Spanish"],
      areas: ["Gurgaon", "Delhi", "Noida"],
      phone: "+91 98765 43210",
      email: "sarah.johnson@pureestate.com",
      bio: "Specializing in luxury residential properties with a track record of successful high-value transactions. Known for personalized service and market expertise.",
      achievements: ["Top Performer 2023", "Customer Choice Award", "Million Dollar Club"],
      certifications: ["RERA Certified", "Real Estate License", "Negotiation Expert"]
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Investment Advisor",
      experience: "12+ years",
      specialization: "Commercial & Investment",
      rating: 4.8,
      reviews: 203,
      image: "/api/placeholder/300/300",
      properties: 156,
      languages: ["English", "Mandarin", "Hindi"],
      areas: ["Gurgaon", "Faridabad", "Greater Noida"],
      phone: "+91 98765 43211",
      email: "michael.chen@pureestate.com",
      bio: "Expert in commercial real estate and investment properties. Helps clients build profitable real estate portfolios with strategic market insights.",
      achievements: ["Commercial Expert 2023", "Investment Guru", "Client Satisfaction Award"],
      certifications: ["Commercial Real Estate", "Investment Analysis", "RERA Certified"]
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Residential Specialist",
      experience: "6+ years",
      specialization: "First-time Buyers",
      rating: 4.9,
      reviews: 98,
      image: "/api/placeholder/300/300",
      properties: 124,
      languages: ["Hindi", "English", "Punjabi"],
      areas: ["Noida", "Ghaziabad", "Delhi"],
      phone: "+91 98765 43212",
      email: "priya.sharma@pureestate.com",
      bio: "Dedicated to helping first-time buyers navigate the property market. Known for patience, transparency, and making complex processes simple.",
      achievements: ["Rising Star 2023", "First-time Buyer Expert", "Trust Builder"],
      certifications: ["Home Buyer Counseling", "RERA Certified", "Customer Service Excellence"]
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Luxury Property Expert",
      experience: "15+ years",
      specialization: "High-end Villas & Penthouses",
      rating: 5.0,
      reviews: 78,
      image: "/api/placeholder/300/300",
      properties: 67,
      languages: ["English", "Spanish", "Hindi"],
      areas: ["Gurgaon", "South Delhi", "Dwarka"],
      phone: "+91 98765 43213",
      email: "david.rodriguez@pureestate.com",
      bio: "Luxury property specialist with extensive experience in high-end residential sales. Caters to HNI clients seeking premium properties.",
      achievements: ["Luxury Specialist", "Premium Club Member", "Elite Performer"],
      certifications: ["Luxury Property Specialist", "HNI Client Management", "RERA Gold"]
    },
    {
      id: 5,
      name: "Anjali Patel",
      role: "Rental Specialist",
      experience: "5+ years",
      specialization: "Rental & Leasing",
      rating: 4.7,
      reviews: 145,
      image: "/api/placeholder/300/300",
      properties: 98,
      languages: ["Hindi", "Gujarati", "English"],
      areas: ["Faridabad", "Ghaziabad", "Noida"],
      phone: "+91 98765 43214",
      email: "anjali.patel@pureestate.com",
      bio: "Rental market expert helping both tenants and landlords. Specializes in quick tenant matching and hassle-free rental agreements.",
      achievements: ["Rental Expert 2023", "Fast Closer", "Tenant Satisfaction Award"],
      certifications: ["Rental Agreement Specialist", "Property Management", "RERA Certified"]
    },
    {
      id: 6,
      name: "Rajesh Kumar",
      role: "Property Consultant",
      experience: "10+ years",
      specialization: "Affordable Housing",
      rating: 4.6,
      reviews: 167,
      image: "/api/placeholder/300/300",
      properties: 189,
      languages: ["Hindi", "English", "Bengali"],
      areas: ["Greater Noida", "Faridabad", "Ghaziabad"],
      phone: "+91 98765 43215",
      email: "rajesh.kumar@pureestate.com",
      bio: "Focuses on affordable housing solutions for middle-income families. Known for finding value-for-money properties and flexible payment options.",
      achievements: ["Value Champion", "People's Choice", "Affordable Housing Expert"],
      certifications: ["Affordable Housing Specialist", "Home Loan Expert", "RERA Certified"]
    }
  ];

  const teamStats = {
    totalAgents: "25+",
    averageExperience: "8+ years",
    propertiesSold: "2,500+",
    clientSatisfaction: "98%"
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Expert real estate professionals dedicated to making your property dreams come true
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="card-elevated">
              <div className="text-3xl font-bold text-primary mb-2">{teamStats.totalAgents}</div>
              <p className="text-foreground-muted">Expert Agents</p>
            </div>
            <div className="card-elevated">
              <div className="text-3xl font-bold text-primary mb-2">{teamStats.averageExperience}</div>
              <p className="text-foreground-muted">Average Experience</p>
            </div>
            <div className="card-elevated">
              <div className="text-3xl font-bold text-primary mb-2">{teamStats.propertiesSold}</div>
              <p className="text-foreground-muted">Properties Sold</p>
            </div>
            <div className="card-elevated">
              <div className="text-3xl font-bold text-primary mb-2">{teamStats.clientSatisfaction}</div>
              <p className="text-foreground-muted">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
              Our Expert Agents
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Get matched with the right agent for your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <div key={agent.id} className="card-elevated">
                {/* Agent Photo & Basic Info */}
                <div className="text-center mb-6">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-1">{agent.name}</h3>
                  <p className="text-primary font-medium mb-2">{agent.role}</p>
                  <div className="flex items-center justify-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(agent.rating)
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
                    <span className="ml-2 text-sm font-medium">{agent.rating}</span>
                    <span className="ml-1 text-sm text-foreground-muted">({agent.reviews} reviews)</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                  <div className="p-3 bg-background-alt rounded-lg">
                    <div className="text-lg font-bold text-primary">{agent.experience}</div>
                    <div className="text-sm text-foreground-muted">Experience</div>
                  </div>
                  <div className="p-3 bg-background-alt rounded-lg">
                    <div className="text-lg font-bold text-primary">{agent.properties}</div>
                    <div className="text-sm text-foreground-muted">Properties</div>
                  </div>
                </div>

                {/* Specialization */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Specialization</h4>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                    {agent.specialization}
                  </span>
                </div>

                {/* Areas */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Operating Areas</h4>
                  <div className="flex flex-wrap gap-1">
                    {agent.areas.map((area, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-1">
                    {agent.languages.map((language, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-secondary/10 text-secondary-foreground rounded text-xs border border-secondary/20"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">About</h4>
                  <p className="text-sm text-foreground-muted">{agent.bio}</p>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Achievements</h4>
                  <div className="space-y-1">
                    {agent.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center text-xs">
                        <svg className="w-3 h-3 text-secondary mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 btn-primary text-sm py-2">
                    Contact Agent
                  </button>
                  <button className="flex-1 btn-outline text-sm py-2">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Matching */}
      <section className="py-16 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
              Find Your Perfect Agent Match
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Tell us what you're looking for and we'll connect you with the right specialist
            </p>
          </div>

          <div className="max-w-2xl mx-auto card-elevated">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">I want to</label>
                  <select className="input-field">
                    <option>Buy a property</option>
                    <option>Sell a property</option>
                    <option>Rent a property</option>
                    <option>Invest in property</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Property Type</label>
                  <select className="input-field">
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Townhouse</option>
                    <option>Plot</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Location</label>
                  <select className="input-field">
                    <option>Gurgaon</option>
                    <option>Noida</option>
                    <option>Delhi</option>
                    <option>Faridabad</option>
                    <option>Ghaziabad</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Budget Range</label>
                  <select className="input-field">
                    <option>₹50L - ₹1Cr</option>
                    <option>₹1Cr - ₹2Cr</option>
                    <option>₹2Cr - ₹5Cr</option>
                    <option>₹5Cr+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Additional Requirements</label>
                <textarea
                  className="input-field"
                  rows={3}
                  placeholder="Tell us about your specific needs, timeline, or preferences..."
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary">
                Find My Agent Match
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Why Our Agents */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
              Why Choose Our Agents?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-elevated text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Certified Professionals</h3>
              <p className="text-foreground-muted">
                All our agents are RERA certified and undergo regular training to stay updated with market trends.
              </p>
            </div>
            <div className="card-elevated text-center">
              <div className="w-16 h-16 bg-secondary/10 text-secondary-foreground rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Market Expertise</h3>
              <p className="text-foreground-muted">
                Deep knowledge of local markets, pricing trends, and property insights to guide your decisions.
              </p>
            </div>
            <div className="card-elevated text-center">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Personalized Service</h3>
              <p className="text-foreground-muted">
                Dedicated support throughout your journey with regular updates and transparent communication.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agents;