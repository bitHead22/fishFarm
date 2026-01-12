import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 py-16 md:py-24">
      <div className="px-4 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
                Partner with <br /> Hare Krishna Fish Farm
              </h1>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg">
                Ready to scale your business with premium freshwater fish? Visit us or send a message to discuss your requirements.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="size-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Our Location</h4>
                  <p className="text-slate-500 text-sm mt-1">123 Aqua Valley, Freshwater District <br /> West Bengal, India 700001</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                 <div className="size-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Phone</h4>
                  <p className="text-slate-500 text-sm mt-1">+91 987 654 3210  |  +91 987 654 3211</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                 <div className="size-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Email</h4>
                  <p className="text-slate-500 text-sm mt-1">orders@harekrishnafish.com</p>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-3xl overflow-hidden h-64 md:h-80 w-full relative shadow-lg group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Map Location" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <button className="bg-white text-slate-900 font-bold px-4 py-2 rounded-lg shadow-md flex items-center gap-2 hover:bg-slate-50 transition-colors text-sm">
                  <span className="material-symbols-outlined text-lg">map</span> View on Google Maps
                </button>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Request a Quote</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Full Name</label>
                  <input type="text" placeholder="Enter your name" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Company (Optional)</label>
                  <input type="text" placeholder="Your company" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                <input type="email" placeholder="you@company.com" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Service Interested In</label>
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
                    <option>Bulk Fish Order</option>
                    <option>Contract Farming</option>
                    <option>Logistics Support</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Message</label>
                <textarea rows={4} placeholder="Tell us about your requirements..." className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"></textarea>
              </div>
              
              <button type="button" className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all flex items-center justify-center gap-2">
                Send Message <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;