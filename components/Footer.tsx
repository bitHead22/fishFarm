import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
 <footer className="w-full bg-slate-900 text-white py-16" id="contact">
        <div className="px-4 md:px-40 flex justify-center">
          <div className="max-w-[1200px] flex flex-col w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="size-6 text-primary">
                    <span className="material-symbols-outlined text-2xl">water_drop</span>
                  </div>
                  <h3 className="text-xl font-bold">Hare Krishna Fish Farm</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">Sustainable aquaculture solutions for a healthier tomorrow.</p>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-lg font-bold text-white">Quick Links</h4>
                <div className="flex flex-col gap-2">
                  <a className="text-slate-400 hover:text-primary transition-colors text-sm" href="/">Home</a>
                  <a className="text-slate-400 hover:text-primary transition-colors text-sm" href="catalog">Our Products</a>
                  <a className="text-slate-400 hover:text-primary transition-colors text-sm" href="About">About Us</a>
                  <a className="text-slate-400 hover:text-primary transition-colors text-sm" href="contact">Contact Sales</a>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-lg font-bold text-white">Contact Us</h4>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-slate-400 text-sm">
                    <span className="material-symbols-outlined text-lg text-primary">location_on</span>
                    <span>123 Aqua Road, River Valley Dist.</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 text-sm">
                    <span className="material-symbols-outlined text-lg text-primary">call</span>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 text-sm">
                    <span className="material-symbols-outlined text-lg text-primary">mail</span>
                    <span>hello@harekrishnafish.com</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-lg font-bold text-white">Stay Updated</h4>
                <p className="text-slate-400 text-sm">Get the latest harvest updates.</p>
                <div className="flex gap-2">
                  <input className="bg-slate-800 border-none rounded-lg text-sm px-4 py-2 w-full focus:ring-1 focus:ring-primary text-white" placeholder="Email address" type="email" />
                  <button className="bg-primary hover:bg-teal-600 rounded-lg px-3 py-2 text-white transition-colors">
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm">© 2024 Hare Krishna Fish Farm. All rights reserved.</p>
              <div className="flex gap-6">
                <a className="text-slate-500 hover:text-white transition-colors text-sm" href="#">Privacy Policy</a>
                <a className="text-slate-500 hover:text-white transition-colors text-sm" href="#">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;