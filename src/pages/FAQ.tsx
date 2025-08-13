import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqCategories = [
    {
      id: 'buying',
      title: 'Buying Property',
      faqs: [
        {
          question: "What documents do I need to buy a property?",
          answer: "Essential documents include: Identity proof (Aadhar, PAN), Address proof, Income proof (salary slips, ITR), Bank statements, Property documents (title deed, NOC, approved plans), and Home loan pre-approval letter if applicable."
        },
        {
          question: "How do I verify if a property is legally clear?",
          answer: "Verify through: Title deed verification, Revenue records check, Encumbrance certificate, NOC from relevant authorities, RERA registration check, Property tax receipts, and hire a legal expert for due diligence."
        },
        {
          question: "What are the additional costs involved in buying a property?",
          answer: "Additional costs include: Registration charges (1-5% of property value), Stamp duty (5-10%), Legal fees, Home loan processing fees, Insurance, Property tax, Maintenance charges, and GST if applicable."
        },
        {
          question: "How long does the property buying process take?",
          answer: "Typically 30-45 days from agreement to registration, including: Documentation (7-10 days), Home loan approval (15-20 days), Legal verification (5-7 days), Registration (1-2 days), and final handover."
        }
      ]
    },
    {
      id: 'selling',
      title: 'Selling Property',
      faqs: [
        {
          question: "How do I determine the right price for my property?",
          answer: "Consider: Recent sales of similar properties in your area, Current market conditions, Property condition and age, Location advantages, Amenities and infrastructure, and get a professional valuation from certified experts."
        },
        {
          question: "What documents do I need to sell my property?",
          answer: "Required documents: Original sale deed, Property tax receipts, NOC from society/builder, Encumbrance certificate, Khata/Revenue records, Identity and address proof, and any loan closure documents if applicable."
        },
        {
          question: "How can I find genuine buyers for my property?",
          answer: "Effective ways include: List with reputable real estate agents, Online property portals, Professional photography and virtual tours, Network referrals, Social media marketing, and proper documentation preparation."
        },
        {
          question: "What are the tax implications of selling property?",
          answer: "Tax considerations: Short-term capital gains (if sold within 2 years), Long-term capital gains (if sold after 2 years), Exemptions under Section 54/54F, TDS applicability, and consult a tax advisor for optimization."
        }
      ]
    },
    {
      id: 'renting',
      title: 'Renting Property',
      faqs: [
        {
          question: "What should I look for in a rental agreement?",
          answer: "Key elements: Rent amount and due date, Security deposit amount, Maintenance responsibilities, Lock-in period, Rent escalation clause, Notice period, Furnishing details, and utility bill responsibilities."
        },
        {
          question: "How much security deposit is standard?",
          answer: "Typically: 1-3 months rent for unfurnished properties, 3-6 months for furnished properties, varies by location and landlord preference, negotiable based on tenant profile, and should be mentioned in the agreement."
        },
        {
          question: "What are tenant rights and responsibilities?",
          answer: "Tenant rights: Peaceful possession, Timely maintenance, Reasonable notice for landlord visits. Responsibilities: Timely rent payment, Property care, No unauthorized modifications, and maintaining good relationship with neighbors."
        },
        {
          question: "How can I ensure my security deposit is returned?",
          answer: "Best practices: Document property condition during move-in, Maintain the property well, Pay rent on time, Give proper notice before vacating, Do any necessary repairs, and maintain all payment receipts."
        }
      ]
    },
    {
      id: 'legal',
      title: 'Legal & Documentation',
      faqs: [
        {
          question: "What is RERA and how does it protect buyers?",
          answer: "RERA (Real Estate Regulatory Authority) ensures: Project registration mandatory, Transparent marketing, Timely delivery commitments, Financial transparency, Grievance redressal mechanism, and standardized carpet area definition."
        },
        {
          question: "What is the difference between carpet area, built-up area, and super built-up area?",
          answer: "Carpet area: Actual usable floor area. Built-up area: Carpet area + walls thickness. Super built-up area: Built-up area + common areas share. RERA mandates selling based on carpet area for transparency."
        },
        {
          question: "What are the different types of property titles?",
          answer: "Common titles: Clear title (no legal disputes), Marketable title (can be sold easily), Defective title (legal issues), and Disputed title (under litigation). Always verify title status before purchase."
        },
        {
          question: "How do I check for property encumbrances?",
          answer: "Obtain encumbrance certificate from Sub-Registrar office for the last 20-30 years, which shows all transactions on the property, ensuring no hidden claims or disputes exist."
        }
      ]
    },
    {
      id: 'investment',
      title: 'Property Investment',
      faqs: [
        {
          question: "Which locations offer the best ROI for property investment?",
          answer: "Consider: Upcoming infrastructure projects, Employment hubs proximity, Educational institutions nearby, Transportation connectivity, Government development plans, and emerging micro-markets with growth potential."
        },
        {
          question: "What is a good rental yield for property investment?",
          answer: "Rental yield benchmarks: 2-4% in metro cities, 4-6% in tier-2 cities, calculate as (Annual rental income / Property cost) × 100, and compare with other investment options for decision making."
        },
        {
          question: "Should I invest in under-construction or ready-to-move properties?",
          answer: "Under-construction: Lower prices, appreciation potential, risks of delay. Ready-to-move: Immediate possession, clear picture, higher prices. Choose based on your risk appetite and investment timeline."
        },
        {
          question: "How do I calculate the total return on property investment?",
          answer: "Consider: Capital appreciation + Rental income - Maintenance costs - Taxes - Interest on loans. Factor in opportunity cost compared to other investments and inflation impact over time."
        }
      ]
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Find answers to common questions about buying, selling, renting, and investing in real estate
            </p>
          </div>
        </div>
      </section>

      {/* Search FAQ */}
      <section className="py-12 bg-background-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-elevated">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Can't find what you're looking for?
            </h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                className="w-full pl-12 pr-4 py-4 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-lg"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground-muted w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="text-center mt-4">
              <p className="text-foreground-muted">
                Still have questions? 
                <a href="/contact" className="text-primary hover:underline ml-1">
                  Contact our experts
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
              Browse by Category
            </h2>
          </div>

          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={category.id} className="card-elevated">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-playfair font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    return (
                      <div
                        key={faqIndex}
                        className="border border-border rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md"
                      >
                        <button
                          onClick={() => toggleFaq(globalIndex)}
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-background-alt transition-colors"
                        >
                          <span className="text-lg font-medium">{faq.question}</span>
                          <svg
                            className={`w-5 h-5 transition-transform duration-200 ${
                              openFaq === globalIndex ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        {openFaq === globalIndex && (
                          <div className="px-6 pb-4 animate-fade-in">
                            <div className="pt-4 border-t border-border">
                              <p className="text-foreground-muted leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-16 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
              Need Immediate Help?
            </h2>
            <p className="text-xl text-foreground-muted">
              Choose the best way to get in touch with our experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-elevated text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Call Us</h3>
              <p className="text-foreground-muted mb-6">
                Speak directly with our property experts
              </p>
              <p className="text-lg font-semibold text-primary mb-4">+91 1800-123-4567</p>
              <p className="text-sm text-foreground-muted">Mon-Sat, 9 AM - 7 PM</p>
            </div>

            <div className="card-elevated text-center">
              <div className="w-16 h-16 bg-secondary/10 text-secondary-foreground rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Live Chat</h3>
              <p className="text-foreground-muted mb-6">
                Get instant answers to your questions
              </p>
              <button className="btn-secondary text-sm">Start Chat</button>
              <p className="text-sm text-foreground-muted mt-2">Available 24/7</p>
            </div>

            <div className="card-elevated text-center">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Email Support</h3>
              <p className="text-foreground-muted mb-6">
                Detailed queries and documentation help
              </p>
              <p className="text-lg font-semibold text-accent mb-4">support@pureestate.com</p>
              <p className="text-sm text-foreground-muted">Response within 2 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
              Legal Resources & Guides
            </h2>
            <p className="text-xl text-foreground-muted">
              Download comprehensive guides and legal documents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-elevated text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Property Checklist</h4>
              <p className="text-sm text-foreground-muted mb-4">Complete verification checklist for buyers</p>
              <button className="btn-outline text-xs py-1 px-3">Download PDF</button>
            </div>

            <div className="card-elevated text-center">
              <div className="w-12 h-12 bg-secondary/10 text-secondary-foreground rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Rental Agreement</h4>
              <p className="text-sm text-foreground-muted mb-4">Standard rental agreement template</p>
              <button className="btn-outline text-xs py-1 px-3">Download PDF</button>
            </div>

            <div className="card-elevated text-center">
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Cost Calculator</h4>
              <p className="text-sm text-foreground-muted mb-4">Calculate all property buying costs</p>
              <button className="btn-outline text-xs py-1 px-3">Use Calculator</button>
            </div>

            <div className="card-elevated text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">RERA Guide</h4>
              <p className="text-sm text-foreground-muted mb-4">Understanding RERA regulations</p>
              <button className="btn-outline text-xs py-1 px-3">Read Guide</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;