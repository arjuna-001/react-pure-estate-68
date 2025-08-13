import React, { useState } from 'react';

const Locations: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const locations = [
    {
      id: 1,
      name: "Gurgaon",
      state: "Haryana",
      averagePrice: "₹8,500/sq ft",
      growthRate: "+12%",
      image: "/api/placeholder/400/300",
      description: "India's millennium city with world-class infrastructure and corporate hubs.",
      topSectors: [
        { name: "Sector 45", avgPrice: "₹9,200/sq ft", properties: 150 },
        { name: "Sector 28", avgPrice: "₹12,500/sq ft", properties: 89 },
        { name: "Sector 15", avgPrice: "₹7,800/sq ft", properties: 210 },
        { name: "Golf Course Road", avgPrice: "₹15,000/sq ft", properties: 65 }
      ],
      connectivity: {
        metro: "Yellow Line, Blue Line",
        airport: "15 km to IGI Airport",
        highways: "NH-8, NH-248A",
        railways: "Gurgaon Railway Station"
      },
      amenities: ["Shopping Malls", "Hospitals", "Schools", "IT Parks", "Entertainment"],
      propertyTypes: [
        { type: "Apartments", percentage: 65 },
        { type: "Villas", percentage: 20 },
        { type: "Plots", percentage: 15 }
      ]
    },
    {
      id: 2,
      name: "Noida",
      state: "Uttar Pradesh",
      averagePrice: "₹6,200/sq ft",
      growthRate: "+8%",
      image: "/api/placeholder/400/300",
      description: "Planned city with excellent connectivity and emerging IT hub.",
      topSectors: [
        { name: "Sector 22", avgPrice: "₹7,100/sq ft", properties: 180 },
        { name: "Sector 37", avgPrice: "₹6,800/sq ft", properties: 165 },
        { name: "Sector 62", avgPrice: "₹5,900/sq ft", properties: 240 },
        { name: "Sector 18", avgPrice: "₹8,500/sq ft", properties: 95 }
      ],
      connectivity: {
        metro: "Blue Line, Magenta Line",
        airport: "25 km to IGI Airport",
        highways: "DND Flyway, FNG Expressway",
        railways: "Hazrat Nizamuddin 20km"
      },
      amenities: ["Tech Parks", "Malls", "Healthcare", "Educational Institutes"],
      propertyTypes: [
        { type: "Apartments", percentage: 70 },
        { type: "Villas", percentage: 18 },
        { type: "Plots", percentage: 12 }
      ]
    },
    {
      id: 3,
      name: "Dwarka",
      state: "Delhi",
      averagePrice: "₹9,800/sq ft",
      growthRate: "+10%",
      image: "/api/placeholder/400/300",
      description: "Modern sub-city of Delhi with planned infrastructure and green spaces.",
      topSectors: [
        { name: "Sector 12", avgPrice: "₹11,200/sq ft", properties: 120 },
        { name: "Sector 6", avgPrice: "₹9,500/sq ft", properties: 145 },
        { name: "Sector 23", avgPrice: "₹8,800/sq ft", properties: 167 },
        { name: "Sector 10", avgPrice: "₹10,500/sq ft", properties: 98 }
      ],
      connectivity: {
        metro: "Blue Line Airport Express",
        airport: "8 km to IGI Airport",
        highways: "NH-8, Ring Road",
        railways: "Dwarka Railway Station"
      },
      amenities: ["Airport Proximity", "Metro Connectivity", "Parks", "Sports Complex"],
      propertyTypes: [
        { type: "Apartments", percentage: 75 },
        { type: "Builder Floors", percentage: 20 },
        { type: "Plots", percentage: 5 }
      ]
    },
    {
      id: 4,
      name: "Faridabad",
      state: "Haryana",
      averagePrice: "₹4,800/sq ft",
      growthRate: "+15%",
      image: "/api/placeholder/400/300",
      description: "Industrial hub with affordable housing options and growing infrastructure.",
      topSectors: [
        { name: "Sector 8", avgPrice: "₹5,200/sq ft", properties: 200 },
        { name: "Sector 12", avgPrice: "₹4,900/sq ft", properties: 185 },
        { name: "Sector 15", avgPrice: "₹4,600/sq ft", properties: 220 },
        { name: "Sector 31", avgPrice: "₹5,800/sq ft", properties: 155 }
      ],
      connectivity: {
        metro: "Violet Line (upcoming)",
        airport: "35 km to IGI Airport",
        highways: "NH-19, Faridabad Bypass",
        railways: "Faridabad Railway Station"
      },
      amenities: ["Industrial Areas", "Affordable Housing", "Educational Hubs"],
      propertyTypes: [
        { type: "Apartments", percentage: 60 },
        { type: "Independent Houses", percentage: 25 },
        { type: "Plots", percentage: 15 }
      ]
    }
  ];

  const overallStats = {
    totalProperties: "2,500+",
    averageROI: "12-15%",
    priceAppreciation: "+11%",
    availableLocations: "50+"
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Prime Locations
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Explore the best residential locations with detailed insights on connectivity, amenities, and growth potential
            </p>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
              Market Overview
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="card-elevated text-center">
              <div className="text-3xl font-bold text-primary mb-2">{overallStats.totalProperties}</div>
              <p className="text-foreground-muted">Total Properties</p>
            </div>
            <div className="card-elevated text-center">
              <div className="text-3xl font-bold text-secondary mb-2">{overallStats.averageROI}</div>
              <p className="text-foreground-muted">Average ROI</p>
            </div>
            <div className="card-elevated text-center">
              <div className="text-3xl font-bold text-accent mb-2">{overallStats.priceAppreciation}</div>
              <p className="text-foreground-muted">Price Appreciation</p>
            </div>
            <div className="card-elevated text-center">
              <div className="text-3xl font-bold text-primary mb-2">{overallStats.availableLocations}</div>
              <p className="text-foreground-muted">Available Locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
              Featured Locations
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Detailed insights on top residential locations in NCR
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location) => (
              <div key={location.id} className="card-elevated">
                <div className="relative mb-6">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-green-600">{location.growthRate} growth</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-playfair font-bold">{location.name}</h3>
                    <span className="text-sm text-foreground-muted">{location.state}</span>
                  </div>
                  <p className="text-foreground-muted mb-4">{location.description}</p>
                  <div className="flex justify-between items-center p-4 bg-accent/5 rounded-lg">
                    <div>
                      <p className="text-sm text-foreground-muted">Average Price</p>
                      <p className="text-lg font-bold text-accent">{location.averagePrice}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-foreground-muted">YoY Growth</p>
                      <p className="text-lg font-bold text-green-600">{location.growthRate}</p>
                    </div>
                  </div>
                </div>

                {selectedLocation === location.name && (
                  <div className="space-y-6 animate-fade-in">
                    {/* Top Sectors */}
                    <div>
                      <h4 className="font-semibold mb-3">Top Sectors</h4>
                      <div className="space-y-2">
                        {location.topSectors.map((sector, index) => (
                          <div key={index} className="flex justify-between items-center p-3 bg-background-alt rounded-lg">
                            <div>
                              <p className="font-medium">{sector.name}</p>
                              <p className="text-sm text-foreground-muted">{sector.properties} properties</p>
                            </div>
                            <p className="font-semibold text-primary">{sector.avgPrice}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Connectivity */}
                    <div>
                      <h4 className="font-semibold mb-3">Connectivity</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Metro</p>
                            <p className="text-xs text-foreground-muted">{location.connectivity.metro}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-secondary/10 text-secondary-foreground rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Airport</p>
                            <p className="text-xs text-foreground-muted">{location.connectivity.airport}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-accent/10 text-accent rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Highways</p>
                            <p className="text-xs text-foreground-muted">{location.connectivity.highways}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Railways</p>
                            <p className="text-xs text-foreground-muted">{location.connectivity.railways}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Property Types Distribution */}
                    <div>
                      <h4 className="font-semibold mb-3">Property Types</h4>
                      <div className="space-y-2">
                        {location.propertyTypes.map((type, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-sm">{type.type}</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-24 h-2 bg-background-alt rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-primary rounded-full"
                                  style={{ width: `${type.percentage}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium w-8">{type.percentage}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Amenities */}
                    <div>
                      <h4 className="font-semibold mb-3">Key Amenities</h4>
                      <div className="flex flex-wrap gap-2">
                        {location.amenities.map((amenity, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => setSelectedLocation(
                      selectedLocation === location.name ? null : location.name
                    )}
                    className="flex-1 btn-primary text-sm py-2"
                  >
                    {selectedLocation === location.name ? 'Show Less' : 'View Details'}
                  </button>
                  <button className="flex-1 btn-outline text-sm py-2">
                    View Properties
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Insights */}
      <section className="py-16 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-playfair font-bold text-secondary-foreground mb-6">
              Why Invest in NCR?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary-foreground mb-2">High Growth Potential</h3>
                <p className="text-secondary-foreground/80">Average 12-15% annual appreciation in property values</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary-foreground mb-2">Infrastructure Development</h3>
                <p className="text-secondary-foreground/80">Ongoing metro expansion and highway connectivity projects</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary-foreground mb-2">Employment Hub</h3>
                <p className="text-secondary-foreground/80">Major IT and corporate presence ensuring steady rental demand</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;