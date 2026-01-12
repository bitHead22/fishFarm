import React from 'react';

const testimonials = [
  {
    text: "The quality of the Rohu and Catla we receive from Hare Krishna Fish Farm is unmatched. Our customers specifically ask for their catch because of the freshness.",
    author: "Rajesh Patel",
    role: "Restaurant Owner",
    initials: "RP",
    color: "bg-primary/10",
    textColor: "text-primary",
    stars: 5
  },
  {
    text: "Reliability is key in my wholesale business. Their 24h delivery window is not just a promise, it's a guarantee. I've never had a delayed shipment.",
    author: "Amit Singh",
    role: "Fish Wholesaler",
    initials: "AS",
    color: "bg-blue-50",
    textColor: "text-blue-600",
    stars: 5
  },
  {
    text: "Switching to Hare Krishna Fish Farm was the best decision for our hotel chain. The organic feed they use really makes a difference.",
    author: "Priya Mehta",
    role: "Hotel Manager",
    initials: "PM",
    color: "bg-teal-50",
    textColor: "text-teal-600",
    stars: 4.5
  },
  {
    text: "Excellent service and truly fresh produce. Their team is knowledgeable and helps us select the best seasonal fish for our market stall.",
    author: "Vikram Kumar",
    role: "Market Vendor",
    initials: "VK",
    color: "bg-orange-50",
    textColor: "text-orange-600",
    stars: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="w-full bg-slate-mist dark:bg-slate-800/50 py-20 border-t border-slate-100 dark:border-slate-800">
      <div className="px-4 md:px-40 flex justify-center">
        <div className="max-w-[1200px] flex flex-col w-full">
          <div className="flex flex-col items-center mb-12 text-center">
            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Testimonials</span>
            <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              Trusted by Local Businesses
            </h2>
            <div className="h-1 w-20 bg-primary mt-6 rounded-full"></div>
          </div>
          
          <div className="relative w-full">
            <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 scroll-smooth no-scrollbar">
              {testimonials.map((t, i) => (
                <div key={i} className="snap-center shrink-0 w-[300px] md:w-[380px] flex flex-col p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-800 h-full relative group hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-6xl">format_quote</span>
                  </div>
                  
                  <div className="flex flex-col h-full z-10">
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(5)].map((_, starIndex) => (
                        <span 
                          key={starIndex}
                          className="material-symbols-outlined text-xl text-yellow-400" 
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          {starIndex + 0.5 === t.stars ? 'star_half' : 'star'}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8 flex-grow italic">
                      "{t.text}"
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto">
                      <div className={`size-12 rounded-full ${t.color} flex items-center justify-center ${t.textColor} font-bold text-lg`}>
                        {t.initials}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">{t.author}</h4>
                        <p className="text-xs font-bold uppercase tracking-wide text-primary">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;