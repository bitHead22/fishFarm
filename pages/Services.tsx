import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-slate-950">
      <div className="bg-slate-50 dark:bg-slate-900 py-20 px-4 md:px-12 lg:px-20 relative overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white dark:bg-slate-800 -skew-x-12 translate-x-1/3 opacity-50"></div>
        
        <div className="max-w-[1440px] mx-auto relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-6">Our Expertise</span>
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight max-w-4xl leading-tight mb-6">
            Premium Aquaculture <br /> Solutions & Support
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            We provide tailored freshwater fish supply chain solutions, ensuring quality from our ponds to your business.
          </p>
        </div>
      </div>

      <div className="px-4 md:px-12 lg:px-20 py-16 -mt-10 relative z-20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-800 flex flex-col items-start h-full">
            <div className="size-14 rounded-xl bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-3xl">assignment</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Custom Orders</h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
              Tailored bulk orders to meet specific size and species requirements. We work closely with restaurants and distributors.
            </p>
            <a href="#" className="flex items-center gap-2 text-cyan-600 font-bold text-sm hover:gap-3 transition-all">
              Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-800 flex flex-col items-start h-full">
            <div className="size-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-3xl">local_shipping</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Supply Chain</h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
              Reliable, temperature-controlled logistics ensuring live delivery. We guarantee freshness upon arrival anywhere in the region.
            </p>
            <a href="#" className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
              Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-800 flex flex-col items-start h-full">
            <div className="size-14 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-3xl">verified_user</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Quality Assurance</h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
              Rigorous health monitoring and organic feed practices. Our fish are hormone-free, sustainably raised, and 100% compliant.
            </p>
            <a href="#" className="flex items-center gap-2 text-emerald-600 font-bold text-sm hover:gap-3 transition-all">
              Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>

        </div>
      </div>
      
      {/* Visual Separator */}
      <div className="w-full h-24 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
    </div>
  );
};

export default Services;