import React from 'react';
import { useNavigate } from 'react-router-dom';
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
      storage_condition: "Store in Cool Place"
    }
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
      color: "Grey and Silver"
    }
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
      water_temperature_celsius: 25
    }
  },
  {
    id: "murrel-fish-seed",
    name: "Murrel Fish Seed",
    price_per_piece: 1.5,
    minimum_order_quantity: 10000,
    specifications: {
      size: "5 Inch",
      genus: "Cyprinus",
      fish_type: "Murrel Fish",
      usage: "Fish Farming",
      packaging_type: "Loose",
      water_temperature_celsius: 31,
      shelf_life: "12 Months",
      alternate_size: "2–3 Inch",
      alternate_water_temperature_celsius: 32
    }
  },
  {
    id: "desi-magur-fish-seed",
    name: "Desi Magur Fish Seed",
    price_per_piece: 1.5,
    minimum_order_quantity: 10000,
    specifications: {
      size: "1 Inch",
      alternate_size: "3–4 Inch",
      genus: "Cyprinus",
      fish_type: "Hybrid Murrel Fish",
      usage: "Fish Farming",
      packaging_type: "Loose",
      water_temperature_celsius: 25,
      shelf_life: "6 Months",
      storage_condition: "Store in Cool Place",
      quality: "Good Quality"
    }
  },
  {
    id: "singi-fish-seed",
    name: "Singi Fish Seed",
    price_per_piece: 1.2,
    minimum_order_quantity: 100000,
    specifications: {
      genus: "Cyprinus",
      usage: "Fish Farming",
      water_temperature_celsius: 30,
      size: "3–4 Inch",
      packaging_type: "Bag"
    }
  }
];


const getAllFishTypes = () => {
  const types = new Set<string>();
  products.forEach(p => {
    if (p.specifications.fish_type) types.add(p.specifications.fish_type);
  });
  return Array.from(types);
};

const Catalog: React.FC = () => {
  const [filterType, setFilterType] = React.useState<string[]>(getAllFishTypes());
  const navigate = useNavigate();

  const toggleFilter = (type: string) => {
    if (filterType.includes(type)) {
      setFilterType(filterType.filter(t => t !== type));
    } else {
      setFilterType([...filterType, type]);
    }
  };

  // Filter products by selected fish_type
  const filteredProducts = products.filter(p =>
    filterType.length === 0 || (p.specifications.fish_type && filterType.includes(p.specifications.fish_type))
  );

  return (
    <div className="w-full bg-slate-50 dark:bg-background-dark min-h-screen">
      <div className="w-full bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 py-10">
        <div className="px-4 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
            <span>Home</span> <span className="material-symbols-outlined text-sm">chevron_right</span> <span>Catalog</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Freshwater Fish Catalog</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-2xl">Premium commercial stock for wholesale and farming. Sourced from sustainable, high-quality ponds.</p>
        </div>
      </div>

      <div className="px-4 md:px-12 lg:px-20 py-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="w-full lg:w-[280px] flex-shrink-0 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Filters</h3>
              <button className="text-primary text-sm font-semibold hover:underline" onClick={() => setFilterType(getAllFishTypes())}>Reset</button>
            </div>
            <div>
              <h4 className="flex items-center gap-2 font-bold text-slate-900 dark:text-white mb-4">
                <span className="material-symbols-outlined text-primary">set_meal</span> Fish Type
              </h4>
              <div className="space-y-3">
                {getAllFishTypes().map(type => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`size-5 rounded border flex items-center justify-center transition-colors ${filterType.includes(type) ? 'bg-primary border-primary text-white' : 'border-slate-300 bg-white'}`}>
                      <input type="checkbox" className="hidden" onChange={() => toggleFilter(type)} checked={filterType.includes(type)} />
                      {filterType.includes(type) && <span className="material-symbols-outlined text-sm font-bold">check</span>}
                    </div>
                    <span className="text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">{type}</span>
                    <span className="ml-auto text-xs text-slate-400 font-mono">
                      {products.filter(p => p.specifications.fish_type === type).length}
                    </span>
                  </label>
                ))}
              </div>
            </div>

             <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
               <h4 className="flex items-center gap-2 font-bold text-slate-900 dark:text-white mb-4">
                 <span className="material-symbols-outlined text-primary">straighten</span> Line / Size
               </h4>
               <div className="space-y-3">
                 {['Any Size', 'Fry / Spawn', 'Fingerling', 'Table Size'].map((size, idx) => (
                   <label key={size} className="flex items-center gap-3 cursor-pointer group">
                     <div className="size-5 rounded-full border border-slate-300 flex items-center justify-center">
                        {idx === 0 && <div className="size-2.5 rounded-full bg-primary"></div>}
                     </div>
                     <span className="text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">{size}</span>
                   </label>
                 ))}
               </div>
             </div>
             
             <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
               <span className="text-slate-900 dark:text-white font-medium">In Stock Only</span>
               <div className="w-11 h-6 bg-primary rounded-full relative cursor-pointer">
                 <div className="absolute right-1 top-1 size-4 bg-white rounded-full shadow-sm"></div>
               </div>
             </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
               <p className="text-slate-500 text-sm">Showing results for <span className="font-bold text-slate-900 dark:text-white">"All Stock"</span></p>
               <div className="flex items-center gap-2">
                 <span className="text-slate-500 text-sm">Sort by:</span>
                 <select className="bg-transparent font-bold text-slate-900 dark:text-white border-none focus:ring-0 p-0 pr-8 cursor-pointer text-sm">
                   <option>Recommended</option>
                   <option>Price: Low to High</option>
                   <option>Price: High to Low</option>
                 </select>
               </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-[4/3] bg-slate-100 dark:bg-slate-800 relative overflow-hidden p-6 flex items-center justify-center">
                    {/* Placeholder image or icon */}
                    <span className="material-symbols-outlined text-7xl text-primary/30">set_meal</span>
                  </div>
                  <div className="p-5">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{product.name}</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm italic font-serif">{product.specifications.fish_type || product.specifications.genus}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="text-xs font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Min. Qty: {product.minimum_order_quantity}</span>
                      <span className="text-xs font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">₹{product.price_per_piece} / piece</span>
                    </div>
                    <button
                      className="w-full py-2.5 rounded-lg border-2 border-primary text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2"
                      onClick={() => navigate(`/catalog/${product.id}`)}
                    >
                      Enquire Now <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-12 gap-2">
              <button className="size-10 rounded border border-slate-200 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary"><span className="material-symbols-outlined">chevron_left</span></button>
              <button className="size-10 rounded bg-primary text-white font-bold flex items-center justify-center">1</button>
              <button className="size-10 rounded border border-slate-200 flex items-center justify-center text-slate-600 font-bold hover:border-primary hover:text-primary">2</button>
              <button className="size-10 rounded border border-slate-200 flex items-center justify-center text-slate-600 font-bold hover:border-primary hover:text-primary">3</button>
              <span className="flex items-center justify-center px-2 text-slate-400">...</span>
              <button className="size-10 rounded border border-slate-200 flex items-center justify-center text-slate-600 font-bold hover:border-primary hover:text-primary">8</button>
              <button className="size-10 rounded border border-slate-200 flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary"><span className="material-symbols-outlined">chevron_right</span></button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Catalog;