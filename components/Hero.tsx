import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="layout-container flex h-full grow flex-col">
      <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
          <div className="@container">
            <div className="@[480px]:p-0">
              <div 
                className="flex min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl md:rounded-2xl items-start justify-center px-6 md:px-12 pb-10 shadow-xl overflow-hidden relative group"
                style={{
                  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB0LI8aYQzSUQd_IkeCp7UV2EMx3SRQddD4d-0fKsEtoUcgPOGU_1BfLEvuV5qb1RClHTOW9uo5QbRaFW47QHoZtvjTdDRtz4_vq3lJ6nVk06TYb1r_YfDaXhsxNpzgs_c-6xzTS8OoK-resAsigalcP8jCUA3k7N7UsEPeQOlBuHuaPbMygLD0RUPG3S9hxL18jm07b6QLXO3G-_-zxEgs6rK9AveRhziw54jHjX_BtIByhXGBLe8yOdJBoXGMVqn9_GbwCLl1ohk")'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent pointer-events-none"></div>
                <div className="relative z-10 flex flex-col gap-4 text-left max-w-2xl">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-xs font-bold uppercase tracking-wider mb-2 w-fit">
                    Established 2008
                  </span>
                  <h1 className="text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-[-0.02em] drop-shadow-sm">
                    Premium Freshwater <br /> Fish Supplier
                  </h1>
                  <h2 className="text-gray-100 text-lg font-medium leading-relaxed max-w-lg">
                    Sustainable aquaculture delivering the freshest, highest quality harvest directly to your business or market.
                  </h2>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-teal-500 text-white text-base font-bold transition-all shadow-lg hover:shadow-teal-500/30 hover:-translate-y-0.5">
                      View Products
                    </button>
                    <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-base font-bold transition-all hover:-translate-y-0.5">
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
  );
};

export default Hero;