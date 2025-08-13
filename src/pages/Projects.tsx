import React, { useState } from 'react';

const Projects: React.FC = () => {
  const [filters, setFilters] = useState({
    builder: '',
    sector: '',
    status: '',
    priceRange: '',
    propertyType: ''
  });

  const projects = [
    {
      id: 1,
      name: "Azure Heights",
      builder: "Sterling Homes",
      location: "Sector 45, Gurgaon",
      price: "₹2.1 Cr onwards",
      area: "1,800 - 3,200 sq ft",
      bedrooms: "3-4 BHK",
      status: "Under Construction",
      completion: "Dec 2025",
      image: "/api/placeholder/400/300",
      amenities: ["Swimming Pool", "Gym", "Club House", "Gardens"]
    },
    {
      id: 2,
      name: "Green Valley Residences",
      builder: "Emerald Developers",
      location: "Sector 22, Noida",
      price: "₹1.8 Cr onwards",
      area: "1,600 - 2,800 sq ft",
      bedrooms: "2-3 BHK",
      status: "Ready to Move",
      completion: "Completed",
      image: "/api/placeholder/400/300",
      amenities: ["Parking", "Security", "Power Backup", "Lift"]
    },
    {
      id: 3,
      name: "Pinnacle Towers",
      builder: "Pinnacle Construction",
      location: "Sector 12, Dwarka",
      price: "₹3.5 Cr onwards",
      area: "2,400 - 4,000 sq ft",
      bedrooms: "3-5 BHK",
      status: "Launch Soon",
      completion: "Mar 2026",
      image: "/api/placeholder/400/300",
      amenities: ["Spa", "Tennis Court", "Kids Play Area", "Jogging Track"]
    },
    {
      id: 4,
      name: "Golden Gate Apartments",
      builder: "Golden Gate Builders",
      location: "Sector 8, Faridabad",
      price: "₹95 Lakh onwards",
      area: "1,200 - 1,800 sq ft",
      bedrooms: "2-3 BHK",
      status: "Under Construction",
      completion: "Aug 2025",
      image: "/api/placeholder/400/300",
      amenities: ["Community Hall", "CCTV", "Garden", "Maintenance"]
    },
    {
      id: 5,
      name: "Skyline Residency",
      builder: "Azure Properties",
      location: "Sector 15, Ghaziabad",
      price: "₹1.2 Cr onwards",
      area: "1,400 - 2,200 sq ft",
      bedrooms: "2-4 BHK",
      status: "Ready to Move",
      completion: "Completed",
      image: "/api/placeholder/400/300",
      amenities: ["Elevator", "Water Supply", "Parking", "Security"]
    },
    {
      id: 6,
      name: "Luxury Manor",
      builder: "Sterling Homes",
      location: "Sector 28, Gurgaon",
      price: "₹4.2 Cr onwards",
      area: "3,000 - 5,500 sq ft",
      bedrooms: "4-6 BHK",
      status: "Under Construction",
      completion: "Jan 2027",
      image: "/api/placeholder/400/300",
      amenities: ["Private Pool", "Home Theater", "Wine Cellar", "Smart Home"]
    }
  ];

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ready to Move':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Under Construction':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Launch Soon':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Discover premium residential projects from trusted builders across prime locations
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-elevated">
            <h3 className="text-lg font-semibold mb-6">Filter Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Builder</label>
                <select
                  value={filters.builder}
                  onChange={(e) => handleFilterChange('builder', e.target.value)}
                  className="input-field"
                >
                  <option value="">All Builders</option>
                  <option value="sterling">Sterling Homes</option>
                  <option value="emerald">Emerald Developers</option>
                  <option value="pinnacle">Pinnacle Construction</option>
                  <option value="golden">Golden Gate Builders</option>
                  <option value="azure">Azure Properties</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Location</label>
                <select
                  value={filters.sector}
                  onChange={(e) => handleFilterChange('sector', e.target.value)}
                  className="input-field"
                >
                  <option value="">All Locations</option>
                  <option value="gurgaon">Gurgaon</option>
                  <option value="noida">Noida</option>
                  <option value="dwarka">Dwarka</option>
                  <option value="faridabad">Faridabad</option>
                  <option value="ghaziabad">Ghaziabad</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Status</label>
                <select
                  value={filters.status}
                  onChange={(e) => handleFilterChange('status', e.target.value)}
                  className="input-field"
                >
                  <option value="">All Status</option>
                  <option value="ready">Ready to Move</option>
                  <option value="construction">Under Construction</option>
                  <option value="launch">Launch Soon</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Budget</label>
                <select
                  value={filters.priceRange}
                  onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                  className="input-field"
                >
                  <option value="">Any Budget</option>
                  <option value="50-100">₹50L - ₹1Cr</option>
                  <option value="100-200">₹1Cr - ₹2Cr</option>
                  <option value="200-300">₹2Cr - ₹3Cr</option>
                  <option value="300+">₹3Cr+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Type</label>
                <select
                  value={filters.propertyType}
                  onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                  className="input-field"
                >
                  <option value="">All Types</option>
                  <option value="2bhk">2 BHK</option>
                  <option value="3bhk">3 BHK</option>
                  <option value="4bhk">4 BHK</option>
                  <option value="5bhk">5+ BHK</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <button className="btn-primary">Apply Filters</button>
              <button className="btn-outline">Clear All</button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-playfair font-bold">Available Projects</h2>
              <p className="text-foreground-muted">{projects.length} projects found</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-foreground-muted">Sort by:</span>
              <select className="input-field w-auto">
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Ready to Move</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="property-card">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(project.status)}`}>
                      {project.status}
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
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
                    <p className="text-sm text-primary font-medium">by {project.builder}</p>
                    <p className="text-foreground-muted text-sm">{project.location}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-sm text-foreground-muted">Price</span>
                      <span className="font-semibold">{project.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-foreground-muted">Size</span>
                      <span className="font-semibold">{project.area}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-foreground-muted">Config</span>
                      <span className="font-semibold">{project.bedrooms}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-foreground-muted">Completion</span>
                      <span className="font-semibold text-sm">{project.completion}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-2">Key Amenities</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.amenities.slice(0, 3).map((amenity, index) => (
                        <span key={index} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                          {amenity}
                        </span>
                      ))}
                      {project.amenities.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          +{project.amenities.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 btn-primary text-sm py-2">
                      View Details
                    </button>
                    <button className="flex-1 btn-outline text-sm py-2">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-outline">Load More Projects</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;