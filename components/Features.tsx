import React from 'react';

const features = [
  {
    icon: 'verified_user',
    title: 'Quality Assurance',
    description: 'We rigorously test water quality and fish health daily to ensure the highest standards of freshness for every harvest.'
  },
  {
    icon: 'eco',
    title: 'Sustainable Farming',
    description: 'Our eco-friendly practices protect the local ecosystem while yielding healthier, tastier fish stocks naturally.'
  },
  {
    icon: 'local_shipping',
    title: 'Reliable Logistics',
    description: 'Our specialized cold-chain logistics network ensures your order arrives fresh and on time, every single time.'
  }
];

const Features: React.FC = () => {
  return (
    <div className="w-full bg-white dark:bg-background-dark py-16">
      <div className="px-4 md:px-40 flex justify-center">
        <div className="max-w-[1200px] flex flex-col w-full">
          <div className="flex flex-col items-center md:items-start mb-12">
            <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-tight">
              Why Choose Us
            </h2>
            <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group flex flex-col gap-4 rounded-xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-8 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 dark:text-white text-lg font-bold">{feature.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;