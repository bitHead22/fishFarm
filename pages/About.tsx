
import React from 'react';
import { useNavigate } from "react-router-dom";


const About: React.FC = () => {
  const navigate=useNavigate();
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#131616] dark:text-gray-100 font-display transition-colors duration-200">
      {/* Hero Section */}
      <header className="relative w-full overflow-hidden bg-surface-light dark:bg-surface-dark pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 dark:bg-primary/10 -skew-x-12 translate-x-20"></div>
        <div className="px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col gap-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 w-fit">
                <span className="size-2 rounded-full bg-primary"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Est. 2017</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#131616] dark:text-white leading-[1.1]">
                Sustainable Aquaculture for a <span className="text-primary relative inline-block">Healthier
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" preserveAspectRatio="none" viewBox="0 0 100 10">
                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
                  </svg>
                </span> Tomorrow
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">Hare Krishna Fish Farm combines deep-rooted tradition with modern aquaculture science. We are redefining freshwater farming to deliver premium quality while nurturing our local ecosystem.</p>
              <div className="flex gap-4 pt-2">
                <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-0.5">Our Story</button>
                <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 text-[#131616] dark:text-white text-base font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" onClick={() => navigate("/catalog")}>View Products</button>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                <img alt="Serene fish farm pond surrounded by lush greenery at sunset" className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb87KVkwVV7PvoNIN-f-65lUPAXqz-GOYmImZrJOplnOT_NcwdVoUlLoDXuQh6DL7_VWR2JJrYXrJEsShQY8JKuvZS4SqS49Mr5Ulrje3JoO67uTeDHpG1H28-wMtkgIny6pXolA5jnj0upFYu4VLOSiVXPDy056G79fjVjdEayJomxWViGzNpI0aGrsl5DRoFi-wZRpq2qv3oBr6R-7xOMpkpc_pV0rhdij3VWRN4aZzJiEO8ovBW2E6ulitvYs2o96otUEiEEIA" />
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="flex items-center gap-2 text-white/90 backdrop-blur-md bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">
                    <span className="material-symbols-outlined text-[20px]">water_drop</span>
                    <span className="text-sm font-medium">99% Water Purity</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="w-full bg-primary py-12 dark:bg-primary/90">
        <div className="px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20 text-white">
            <div className="flex flex-col items-center md:items-start px-4 first:pl-0">
              <span className="text-4xl sm:text-5xl font-bold tracking-tight mb-1">9+</span>
              <span className="text-sm sm:text-base font-medium opacity-90 text-center md:text-left">Years of Excellence</span>
            </div>
            <div className="flex flex-col items-center md:items-start px-4">
              <span className="text-4xl sm:text-5xl font-bold tracking-tight mb-1">500<span className="text-2xl align-top pt-2">kg</span></span>
              <span className="text-sm sm:text-base font-medium opacity-90 text-center md:text-left">Daily Capacity</span>
            </div>
            <div className="flex flex-col items-center md:items-start px-4">
              <span className="text-4xl sm:text-5xl font-bold tracking-tight mb-1">100<span className="text-2xl align-top pt-2">%</span></span>
              <span className="text-sm sm:text-base font-medium opacity-90 text-center md:text-left">Organic Feed</span>
            </div>
            <div className="flex flex-col items-center md:items-start px-4">
              <span className="text-4xl sm:text-5xl font-bold tracking-tight mb-1">50+</span>
              <span className="text-sm sm:text-base font-medium opacity-90 text-center md:text-left">Partner Vendors</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 lg:py-28 bg-background-light dark:bg-background-dark">
        <div className="px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined text-3xl">spa</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-[#131616] dark:text-white leading-tight">Our Mission <br className="hidden lg:block"/> & Core Values</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">We believe in farming that respects nature while providing the highest quality produce to our partners. Our philosophy is simple: healthy environment, healthy fish.</p>
            </div>
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
              {/* Value Card 1 */}
              <div className="group p-8 rounded-2xl bg-surface-light dark:bg-surface-dark hover:bg-white dark:hover:bg-[#363b42] border border-transparent hover:border-gray-100 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-primary text-2xl">verified</span>
                </div>
                <h3 className="text-xl font-bold text-[#131616] dark:text-white mb-3">Uncompromised Quality</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">From fry to harvest, every step involves rigorous quality checks. We ensure freshness that you can taste and trust in every delivery.</p>
              </div>
              {/* Value Card 2 */}
              <div className="group p-8 rounded-2xl bg-surface-light dark:bg-surface-dark hover:bg-white dark:hover:bg-[#363b42] border border-transparent hover:border-gray-100 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-primary text-2xl">eco</span>
                </div>
                <h3 className="text-xl font-bold text-[#131616] dark:text-white mb-3">Sustainable Practices</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Our eco-friendly farming techniques, including water recycling and organic feeds, preserve the local ecosystem for future generations.</p>
              </div>
              {/* Value Card 3 */}
              <div className="group p-8 rounded-2xl bg-surface-light dark:bg-surface-dark hover:bg-white dark:hover:bg-[#363b42] border border-transparent hover:border-gray-100 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-primary text-2xl">handshake</span>
                </div>
                <h3 className="text-xl font-bold text-[#131616] dark:text-white mb-3">Community First</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">We are dedicated to supporting local supply chains, creating jobs in our region, and empowering local farmers with knowledge.</p>
              </div>
              {/* Value Card 4 */}
              <div className="group p-8 rounded-2xl bg-surface-light dark:bg-surface-dark hover:bg-white dark:hover:bg-[#363b42] border border-transparent hover:border-gray-100 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-primary text-2xl">science</span>
                </div>
                <h3 className="text-xl font-bold text-[#131616] dark:text-white mb-3">Innovation Led</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Investing in modern aeration and monitoring tech allows us to maintain optimal conditions 24/7, maximizing health and yield.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life at the Farm (Gallery) */}
      <section className="py-20 bg-surface-light dark:bg-surface-dark">
        <div className="px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Gallery</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#131616] dark:text-white mb-4">Life at the Farm</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">A glimpse into our daily operations and the pristine environment where our fish thrive.</p>
            </div>
            <a className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors" href="#">View Full Gallery <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Item 1 (Large) */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-2xl cursor-pointer">
              <img alt="Top down view of fish swimming in clear water" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAUDlKEzl6WmnOMNTW0u_7YBixSbw42ahGWwdOFJv9uN_L5RCb2b2Wf5BOQAdbubk4aIHsXobIhEIQf1ZrojAftWFgkjqwNFgZBO8i0Xg6gZiwR1mrMWM7NN2iKYdvyREDpkkRR0jn5hFuwehfSb3bNx-0idYb_pFn_iS1b7riawuRkqIQxuE8nI53M8Y9J-td8-LUH4YPHn6WB-f4liwwpsryKPIlFor_A13RMiv6QLbXqismo0F0LEq6mGShV6M-4QHbepK-Zrc" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6 sm:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-xl font-bold mb-1">State-of-the-Art Facilities</h3>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Modern filtration ensures optimal water quality.</p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
              <img alt="Close up of fresh raw fish fillets" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEgrcYdGIvXGlnFwPEKVHIwoJ4y-4WE64QYvtEcH8LpUJXJM2UTj8ZJwXAl6CMF56TJZG7YCCwU56cZWyPalI83xD8AESxkldBXcRKYKFdNacjG8M-Db0c0ZtAAyF1ApP-6vVkDyKed3cjHwQjqgliCH2bUyyVOaGx4LoUAcU8Oa0fQ2vNYFaq96lsO9a0YiKFtcx27_j2rXStiejQC3fX4yn1wecTKGkgzp76jHLtV0qXQN-Z1nepqqlGBi4gp1W-e0yG1cAHbdY" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6 sm:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-xl font-bold mb-1">Premium Yield</h3>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Harvested at peak freshness.</p>
              </div>
            </div>
            {/* Item 3 */}
            <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
              <img alt="Worker checking water quality in pond" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4mG6DTL_c3EOIQ2o7uhJWtCXz_660dev7s4FRKxzJlrte19eecHfzy6795RZ8qFQl0g6_K2xqV7E8P5_v7iECYAiVwL3Vx7D0DxFP6hcdiEO_qAmQ66HAgiec0kUHi36ShDlkMXhjNHdOvzr3wvPb8eruiuOyx_C1vKbdbR17XL0F9Uw_fccmZ8tGFK4L_uRqAmh7GleOTIFVu3H3LRJ_MFmJ7U1j_j8HcO2_9I2QUyoPM6U4vXsIZbULpp7Z2gujl9i74IRWiHA" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6 sm:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-xl font-bold mb-1">Expert Care</h3>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Managed by experienced aquaculturists.</p>
              </div>
            </div>
            {/* Item 4 (Large) */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-2xl cursor-pointer">
              <img alt="Lush green landscape of the fish farm area" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYDDoSom2sC_7BD5s9SZrV61HznyRveavrNB3yEKqXzTiWMocKD0Gens2DWwNSlQj0Ev8tuICcmyd-K8NgnM4ehAm-kGJ-pYpw_1oBhJujuwhjPZZklsl8zC1zkh9pIoq4OjONm_6W7n2XOyeYhGxIpYii0tzzHVpG9o4so9_1nvsi0Rxymck91EGLxyGWnru2IJ2duad93xcC1BzIOBneu7E09_QHQWwOhpAh-tPWbXTEp6RX3GUIfGdCd67tz2gGMJMS7t_QT0Q" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6 sm:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-xl font-bold mb-1">Harmony with Nature</h3>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Designed to blend into the local ecosystem.</p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center md:hidden">
            <a className="inline-flex items-center gap-2 text-primary font-bold" href="#">View Full Gallery <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
          </div>
        </div>
      </section>

      {/* Location/CTA Section */}
      <section className="py-20 lg:py-28 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800">
        <div className="px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto text-center">
          <div className="max-w-3xl mx-auto flex flex-col gap-6 items-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide">READY TO PARTNER?</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#131616] dark:text-white leading-tight">Bring freshness to your table with Hare Krishna Fish Farm.</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Whether you are a local market vendor, a restaurant owner, or a bulk distributor, we have the capacity and quality you need.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <button className="flex items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-lg font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:-translate-y-1">Request Price List</button>
              <button className="flex items-center justify-center rounded-xl h-14 px-8 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-[#131616] dark:text-white text-lg font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all hover:-translate-y-1" onClick={()=> navigate("/contact")}>Contact Support</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;