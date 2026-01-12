import React from 'react';

interface Product {
  name: string;
  description: string;
  image: string;
  badge?: string;
}

const products: Product[] = [
  {
    name: "Premium Rohu",
    description: "Known for its rich flavor and texture. Perfect for traditional curry dishes and frying.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpJRnmmjIKP0bK6kLcDBAgGEYf-v_JDFJ67D8JkiFgrZxODXWnKs8xVccSd7rWLeWztmhrIr2bNeVySkrQdvsfEWWsIdR-vLeyLpqDwsMr0tMGcdYg4GvOt4EMVqJSYROJO5vFtm13NYh8VOuz_Ay-hnl2pyjVvVeMWJO_ZxQyOQSxZ-c2FJ4vU1aIJuPWGo463yRzBcG3h-EznsSSOpRO6n0UxEvw5FVbIDKjXBCBPLxLykvfk9FTf7JBw7b8qUQOGEKHN1dtqx0",
    badge: "Top Seller"
  },
  {
    name: "Fresh Catla",
    description: "Fast-growing major carp with a delicate taste. Sustainably farmed and harvested daily.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfbJCoDhZ-3iDIwOSzyaQSt_BkBPERBGDkGQDdwF3x8kKclFH53EmADHFe_68mHBbO3puWnLBdrPq9R5hHsH7ZajUbCXh4MuiPILL36ww20XbRw_XaCz71Z2Fh_RHwvIXeO_0ucY4bbCKhDJPinBg3ZZepfLvwPsfuLaOLoxPjKS-2kUPsiPtB6njYBfSTVth3OZdjdGDEciFFaQhMJibs7ni9BNy-2Yv5hkPAO2TRu46tpwp2qP-5wFTwYmaRWFcYuhgh4Ic11y0"
  },
  {
    name: "Organic Tilapia",
    description: "A versatile, mild white fish raised in our controlled, eco-friendly ponds without antibiotics.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCirZYv32dHKbsQvXsHFJ0-X7uTVIwGBlZPJnS7HL2VvZRDMDuTzttM5O905oaf2LJqxSQ3xpOb23YIUSomp2mPCMApUmQgxD8WlCxaeyQOccnE4IOa2vk46L4e1wtgXVkcneD6XBhEsz2ZGSVAedZ-vtmZUKlUaanS05a18_q__OA6ywRhWiOfP-35Fnpvksw85gmh11aEuI3ptF_DTStiBTI6YFu32n33NDDD0TYpT3AltkjiG79rfne_CxQSco7BIN0gPDGZewo"
  }
];

const Products: React.FC = () => {
  return (
    <div id="products" className="w-full bg-slate-mist dark:bg-slate-900 py-16">
      <div className="px-4 md:px-40 flex justify-center">
        <div className="max-w-[1200px] flex flex-col w-full">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-tight">Top Products</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-2">Fresh from our ponds to your plate.</p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-1 text-primary font-bold hover:gap-2 transition-all">
              View All Products <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                <div className="h-56 w-full bg-slate-200 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                  <div 
                    className="h-full w-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url("${product.image}")` }}
                  ></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{product.name}</h3>
                    {product.badge && (
                      <span className="bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300 text-xs font-bold px-2 py-1 rounded-full">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <a href="#" className="inline-flex items-center text-sm font-bold text-primary hover:text-teal-700 transition-colors">
                    Learn More
                  </a>
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
    </div>
  );
};

export default Products;