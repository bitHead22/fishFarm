import React from "react";
import { useNavigate } from "react-router-dom";

// Product data from provided JSON
const products = [
  {
    id: "tilapia-fish-seed",
    name: "Tilapia Fish Seed",
    price_per_piece: 1,
    minimum_order_quantity: 10000,
    specifications: {
      genus: "Cyprinus",
      fish_type: "Tilapia Fish",
      water_temperature_celsius: 25,
      usage: "Fish Farming",
      color: "Light Brown and Black",
      packaging_type: "Loose",
      shelf_life: "6 Months",
      storage_temperature_celsius: 20,
      storage_condition: "Store in Cool Place",
    },
  },
  {
    id: "pangasius-fish-seed",
    name: "Fresh Pangasius Fish Seed",
    price_per_piece: 2,
    minimum_order_quantity: 1000,
    specifications: {
      size: "1 Inch",
      genus: "Pangasius",
      usage: "Fish Farming",
      packaging_type: "Loose",
      water_temperature_celsius: 30,
      shelf_life: "6 Months",
      storage_condition: "Store in Cool Place",
      color: "Grey and Silver",
    },
  },
  {
    id: "pabda-fish-seed",
    name: "Pabda Fish Seed",
    price_per_piece: 1.3,
    minimum_order_quantity: 10000,
    specifications: {
      fish_type: "Pabda Fish",
      genus: "Cyprinus",
      size: "1 Inch",
      packaging_type: "Loose",
      shelf_life: "6 Months",
      color: "Black",
      moisture: "10%",
      usage: "Fish Farming",
      storage_condition: "Store in Cool Place",
      water_temperature_celsius: 25,
    },
  },
];

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-dark dark:text-gray-100 overflow-x-hidden antialiased">
      {/* Hero Section */}
      <section className="w-full">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
              <div className="@container">
                <div className="@[480px]:p-0">
                  <div
                    className="flex min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl md:rounded-2xl items-start justify-center px-6 md:px-12 pb-10 shadow-xl overflow-hidden relative group"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuB0LI8aYQzSUQd_IkeCp7UV2EMx3SRQddD4d-0fKsEtoUcgPOGU_1BfLEvuV5qb1RClHTOW9uo5QbRaFW47QHoZtvjTdDRtz4_vq3lJ6nVk06TYb1r_YfDaXhsxNpzgs_c-6xzTS8OoK-resAsigalcP8jCUA3k7N7UsEPeQOlBuHuaPbMygLD0RUPG3S9hxL18jm07b6QLXO3G-_-zxEgs6rK9AveRhziw54jHjX_BtIByhXGBLe8yOdJBoXGMVqn9_GbwCLl1ohk')`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent pointer-events-none"></div>
                    <div className="relative z-10 flex flex-col gap-4 text-left max-w-2xl">
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-xs font-bold uppercase tracking-wider mb-2 w-fit">
                        Established 2017
                      </span>
                      <h1 className="text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-[-0.02em] drop-shadow-sm">
                        Premium Freshwater <br /> Fish Supplier
                      </h1>
                      <h2 className="text-gray-100 text-lg font-medium leading-relaxed max-w-lg">
                        Sustainable aquaculture delivering the freshest, highest
                        quality harvest directly to your business or market.
                      </h2>
                      <div className="flex flex-wrap gap-4 mt-4">
                        <button
                          className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-teal-500 text-white text-base font-bold transition-all shadow-lg hover:shadow-teal-500/30 hover:-translate-y-0.5"
                          onClick={() => navigate("/catalog")}
                        >
                          View Products
                        </button>
                        <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-base font-bold transition-all hover:-translate-y-0.5" onClick={() => navigate("/contact")}>
                          Contact Sales
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-slate-mist dark:bg-slate-800/50 py-12 border-y border-slate-100 dark:border-slate-800">
        <div className="px-4 md:px-40 flex justify-center">
          <div className="max-w-[1200px] w-full grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-4xl font-black text-primary tracking-tight">
                9+
              </span>
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mt-1">
                Years Experience
              </span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-4xl font-black text-primary tracking-tight">
                500+
              </span>
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mt-1">
                Happy Clients
              </span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-4xl font-black text-primary tracking-tight">
                100%
              </span>
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mt-1">
                Organic Feed
              </span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-4xl font-black text-primary tracking-tight">
                24h
              </span>
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mt-1">
                Delivery Window
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full bg-white dark:bg-background-dark py-16">
        <div className="px-4 md:px-40 flex justify-center">
          <div className="max-w-[1200px] flex flex-col w-full">
            <div className="flex flex-col items-center md:items-start mb-12">
              <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-tight">
                Why Choose Us
              </h2>
              <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group flex flex-col gap-4 rounded-xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-8 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-300">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-2xl">
                    verified_user
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 dark:text-white text-lg font-bold">
                    Quality Assurance
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    We rigorously test water quality and fish health daily to
                    ensure the highest standards of freshness for every harvest.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col gap-4 rounded-xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-8 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-300">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-2xl">
                    eco
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 dark:text-white text-lg font-bold">
                    Sustainable Farming
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    Our eco-friendly practices protect the local ecosystem while
                    yielding healthier, tastier fish stocks naturally.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col gap-4 rounded-xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-8 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-300">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-2xl">
                    local_shipping
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 dark:text-white text-lg font-bold">
                    Reliable Logistics
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    Our specialized cold-chain logistics network ensures your
                    order arrives fresh and on time, every single time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Products Section */}
      <section
        className="w-full bg-slate-mist dark:bg-slate-900 py-16"
        id="products"
      >
        <div className="px-4 md:px-40 flex justify-center">
          <div className="max-w-[1200px] flex flex-col w-full">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-tight">
                  Top Products
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mt-2">
                  Fresh from our ponds to your plate.
                </p>
              </div>
              <a
                className="hidden md:flex items-center gap-1 text-primary font-bold hover:gap-2 transition-all"
                href="/catalog"
              >
                View All Products{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, idx) => (
                <div
                  key={product.id}
                  className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="h-56 w-full bg-slate-200 overflow-hidden relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                    {/* Optionally, you can add a product image here if available in the future */}
                    <span className="material-symbols-outlined text-7xl text-primary/30">
                      set_meal
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {product.name}
                      </h3>
                      {idx === 0 && (
                        <span className="bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300 text-xs font-bold px-2 py-1 rounded-full">
                          Top Seller
                        </span>
                      )}
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                      {product.specifications.usage ||
                        "High quality fish seed for farming."}
                    </p>
                    <button
                      className="inline-flex items-center text-sm font-bold text-primary hover:text-teal-700 transition-colors"
                      onClick={() => navigate(`/catalog/${product.id}`)}
                    >
                      Learn More{" "}
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center md:hidden">
              <button className="w-full py-3 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm">
                View All Products
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="w-full bg-white dark:bg-background-dark py-20 relative overflow-hidden"
        id="about"
      >
        <div className="absolute right-0 top-0 h-full w-1/3 bg-slate-50 dark:bg-slate-800/20 -skew-x-12 opacity-50 pointer-events-none"></div>
        <div className="px-4 md:px-40 flex justify-center relative z-10">
          <div className="max-w-[1200px] flex flex-col md:flex-row items-center gap-12 w-full">
            <div className="flex-1 flex flex-col gap-6">
              <span className="text-primary font-bold uppercase tracking-wider text-sm">
                About Us
              </span>
              <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight">
                Dedication to Pure Water <br /> and Healthy Fish
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                Founded in 2008, Hare Krishna Fish Farm started with a simple
                mission: to provide the local community with fish free from
                harmful chemicals. Today, we are a leading supplier for
                restaurants and markets across the region.
              </p>
              <div className="flex items-center gap-2 pt-2">
                <a
                  className="group text-slate-900 dark:text-white font-bold border-b-2 border-primary pb-0.5 hover:text-primary transition-colors"
                  href="/About"
                >
                  Read Our Full Story
                </a>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="h-48 md:h-64 rounded-2xl bg-slate-200 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxjFqTTFGUUFMVWrnqAhQagqcJIsQZXH19RWnGRP13nc73K-c-BjhJ4uAUo1JHz8x4Z_5L7ZU-0YZGA50L8b8gysvmDMoU2F02rmq9TWppkiuVwd-9eN6wQcoXp2dfeECt1ZqeOGuPUqGaSxX-UkmWIxhmiDmopAWlXe3OcqFAifd2DZGbd-bzJ6BjXkWrJgRNwezstB6vRNfNLgyRzgsCWMlIOzIcJxyWVC4ym3K2leRy677PDg_nfjdlLE6KV9Y8TgDomtCheAA')`,
                  }}
                ></div>
                <div
                  className="h-48 md:h-64 rounded-2xl bg-slate-200 bg-cover bg-center mt-8"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAeOK1nAOtYaPZANm_UR6qHZutxYEghxqi6B9e1JhDoCc8dLG0L_Xkru5MaKx6YTzISxy8_eYIc3ce81pPyaHVuOF2scrBFb0LEAfXkfpbB7YoxEnlXcODLmxrePvnWRn4I68X6svs3ZeO8t2ic1z0WBkU1ey43kN9sdP82WHTWEIVG5_T5aB-VMi26QuzL1fYIho_zAqVAznKH_7-TRIULpl1pvQrBLr2aRUVuyYbPRctSQbq1BwhnyHDo503yVFesoDeUVWXbf2M')`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-slate-mist dark:bg-slate-800/50 py-20 border-t border-slate-100 dark:border-slate-800">
        <div className="px-4 md:px-40 flex justify-center">
          <div className="max-w-[1200px] flex flex-col w-full">
            <div className="flex flex-col items-center mb-12 text-center">
              <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2">
                Testimonials
              </span>
              <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                Trusted by Local Businesses
              </h2>
              <div className="h-1 w-20 bg-primary mt-6 rounded-full"></div>
            </div>
            <div className="relative w-full">
              <div
                className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 scroll-smooth"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {/* Testimonial 1 */}
                <div className="snap-center shrink-0 w-[300px] md:w-[380px] flex flex-col p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-800 h-full relative group hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-6xl">
                      format_quote
                    </span>
                  </div>
                  <div className="flex flex-col h-full z-10">
                    <div className="flex items-center gap-1 mb-6">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <span
                            key={i}
                            className="material-symbols-outlined text-xl text-yellow-400"
                            style={{ fontVariationSettings: `'FILL' 1` }}
                          >
                            star
                          </span>
                        ))}
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8 flex-grow italic">
                      "The quality of the Rohu and Catla we receive from Hare
                      Krishna Fish Farm is unmatched. Our customers specifically
                      ask for their catch because of the freshness."
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                        RP
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">
                          Rajesh Patel
                        </h4>
                        <p className="text-xs font-bold uppercase tracking-wide text-primary">
                          Restaurant Owner
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Testimonial 2 */}
                <div className="snap-center shrink-0 w-[300px] md:w-[380px] flex flex-col p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-800 h-full relative group hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-6xl">
                      format_quote
                    </span>
                  </div>
                  <div className="flex flex-col h-full z-10">
                    <div className="flex items-center gap-1 mb-6">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <span
                            key={i}
                            className="material-symbols-outlined text-xl text-yellow-400"
                            style={{ fontVariationSettings: `'FILL' 1` }}
                          >
                            star
                          </span>
                        ))}
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8 flex-grow italic">
                      "Reliability is key in my wholesale business. Their 24h
                      delivery window is not just a promise, it's a guarantee.
                      I've never had a delayed shipment."
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="size-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-lg">
                        AS
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">
                          Amit Singh
                        </h4>
                        <p className="text-xs font-bold uppercase tracking-wide text-primary">
                          Fish Wholesaler
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Testimonial 3 */}
                <div className="snap-center shrink-0 w-[300px] md:w-[380px] flex flex-col p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-800 h-full relative group hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-6xl">
                      format_quote
                    </span>
                  </div>
                  <div className="flex flex-col h-full z-10">
                    <div className="flex items-center gap-1 mb-6">
                      {Array(4)
                        .fill(0)
                        .map((_, i) => (
                          <span
                            key={i}
                            className="material-symbols-outlined text-xl text-yellow-400"
                            style={{ fontVariationSettings: `'FILL' 1` }}
                          >
                            star
                          </span>
                        ))}
                      <span
                        className="material-symbols-outlined text-xl text-yellow-400"
                        style={{ fontVariationSettings: `'FILL' 1` }}
                      >
                        star_half
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8 flex-grow italic">
                      "Switching to Hare Krishna Fish Farm was the best decision
                      for our hotel chain. The organic feed they use really
                      makes a difference."
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="size-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 font-bold text-lg">
                        PM
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">
                          Priya Mehta
                        </h4>
                        <p className="text-xs font-bold uppercase tracking-wide text-primary">
                          Hotel Manager
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Testimonial 4 */}
                <div className="snap-center shrink-0 w-[300px] md:w-[380px] flex flex-col p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-800 h-full relative group hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-6xl">
                      format_quote
                    </span>
                  </div>
                  <div className="flex flex-col h-full z-10">
                    <div className="flex items-center gap-1 mb-6">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <span
                            key={i}
                            className="material-symbols-outlined text-xl text-yellow-400"
                            style={{ fontVariationSettings: `'FILL' 1` }}
                          >
                            star
                          </span>
                        ))}
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8 flex-grow italic">
                      "Excellent service and truly fresh produce. Their team is
                      knowledgeable and helps us select the best seasonal fish
                      for our market stall."
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="size-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 font-bold text-lg">
                        VK
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">
                          Vikram Kumar
                        </h4>
                        <p className="text-xs font-bold uppercase tracking-wide text-primary">
                          Market Vendor
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
