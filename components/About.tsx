import React from 'react';

const About: React.FC = () => {
  return (
    <div id="about" className="w-full bg-white dark:bg-background-dark py-20 relative overflow-hidden">
      <div className="absolute right-0 top-0 h-full w-1/3 bg-slate-50 dark:bg-slate-800/20 -skew-x-12 opacity-50 pointer-events-none"></div>
      
      <div className="px-4 md:px-40 flex justify-center relative z-10">
        <div className="max-w-[1200px] flex flex-col md:flex-row items-center gap-12 w-full">
          
          <div className="flex-1 flex flex-col gap-6">
            <span className="text-primary font-bold uppercase tracking-wider text-sm">About Us</span>
            <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight">
              Dedication to Pure Water <br /> and Healthy Fish
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
              Founded in 2008, Hare Krishna Fish Farm started with a simple mission: to provide the local community with fish free from harmful chemicals. Today, we are a leading supplier for restaurants and markets across the region.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <a href="#" className="group text-slate-900 dark:text-white font-bold border-b-2 border-primary pb-0.5 hover:text-primary transition-colors">
                Read Our Full Story
              </a>
            </div>
          </div>
          
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-4">
              <div 
                className="h-48 md:h-64 rounded-2xl bg-slate-200 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDxjFqTTFGUUFMVWrnqAhQagqcJIsQZXH19RWnGRP13nc73K-c-BjhJ4uAUo1JHz8x4Z_5L7ZU-0YZGA50L8b8gysvmDMoU2F02rmq9TWppkiuVwd-9eN6wQcoXp2dfeECt1ZqeOGuPUqGaSxX-UkmWIxhmiDmopAWlXe3OcqFAifd2DZGbd-bzJ6BjXkWrJgRNwezstB6vRNfNLgyRzgsCWMlIOzIcJxyWVC4ym3K2leRy677PDg_nfjdlLE6KV9Y8TgDomtCheAA")' }}
              ></div>
              <div 
                className="h-48 md:h-64 rounded-2xl bg-slate-200 bg-cover bg-center mt-8"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAeOK1nAOtYaPZANm_UR6qHZutxYEghxqi6B9e1JhDoCc8dLG0L_Xkru5MaKx6YTzISxy8_eYIc3ce81pPyaHVuOF2scrBFb0LEAfXkfpbB7YoxEnlXcODLmxrePvnWRn4I68X6svs3ZeO8t2ic1z0WBkU1ey43kN9sdP82WHTWEIVG5_T5aB-VMi26QuzL1fYIho_zAqVAznKH_7-TRIULpl1pvQrBLr2aRUVuyYbPRctSQbq1BwhnyHDo503yVFesoDeUVWXbf2M")' }}
              ></div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;