import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Import the same products array as in Catalog
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

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <button className="px-4 py-2 bg-primary text-white rounded" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 dark:bg-background-dark min-h-screen py-10">
      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8">
        <button className="mb-6 text-primary font-semibold hover:underline" onClick={() => navigate(-1)}>&larr; Back to Catalog</button>
        <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
          <div className="flex-shrink-0">
            <span className="material-symbols-outlined text-8xl text-primary/30">set_meal</span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{product.name}</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg italic mb-2">{product.specifications.fish_type || product.specifications.genus}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="text-xs font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Min. Qty: {product.minimum_order_quantity}</span>
              <span className="text-xs font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">₹{product.price_per_piece} / piece</span>
            </div>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-4">Specifications</h3>
        <table className="w-full text-left mb-8">
          <tbody>
            {Object.entries(product.specifications).map(([key, value]) => (
              <tr key={key}>
                <td className="py-1 pr-4 font-semibold capitalize text-slate-700 dark:text-slate-200">{key.replace(/_/g, ' ')}</td>
                <td className="py-1 text-slate-600 dark:text-slate-300">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="w-full py-3 rounded-lg bg-primary text-white font-bold text-lg hover:bg-primary-dark transition-all">Enquire Now</button>
      </div>
    </div>
  );
};

export default ProductDetail;
