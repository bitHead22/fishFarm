import React from 'react';

const statsData = [
  { value: '15+', label: 'Years of Excellence', suffix: '' },
  { value: '500', label: 'Daily Capacity', suffix: 'kg' },
  { value: '100', label: 'Organic Feed', suffix: '%' },
  { value: '50+', label: 'Partner Vendors', suffix: '' },
];

const Stats: React.FC = () => {
  return (
    <div className="w-full bg-primary text-white py-12 md:py-16">
      <div className="px-4 md:px-12 lg:px-20 flex justify-center">
        <div className="max-w-[1440px] w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x-0 md:divide-x divide-white/20">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center md:items-start pl-0 md:pl-8 first:pl-0">
              <div className="flex items-baseline">
                <span className="text-4xl md:text-5xl font-bold tracking-tight">{stat.value}</span>
                <span className="text-2xl md:text-3xl font-medium opacity-80 align-top ml-1">{stat.suffix}</span>
              </div>
              <span className="text-sm font-medium text-white/80 mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;