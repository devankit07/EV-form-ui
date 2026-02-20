import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-12 md:py-16 bg-[#005f73] flex flex-col items-center overflow-hidden">
      
      <div className="flex items-center gap-3 md:gap-4 mb-10 transform scale-90 md:scale-100">
        <div className="w-12 h-12 md:w-16 md:h-16 relative">
          <svg viewBox="0 0 100 100" className="drop-shadow-md">
            <path 
              d="M50 5 L15 22 L15 50 C15 75 50 92 50 92 C50 92 85 75 85 50 L85 22 L50 5Z" 
              fill="none" 
              stroke="white" 
              strokeWidth="5"
            />
            <path d="M35 40 Q50 35 65 40 L50 75 Z" fill="white" />
          </svg>
        </div>
        <h2 className="text-5xl md:text-7xl font-[1000] italic tracking-tighter text-white uppercase leading-none">
          evi
        </h2>
      </div>

      <div className="w-[92%] max-w-2xl bg-[#f8f9fa] rounded-[40px] md:rounded-[65px] p-8 md:p-12 mb-10 shadow-2xl relative">
        <h3 className="text-lg md:text-xl font-black text-[#005f73] tracking-[0.15em] mb-6">
          CONTACT US
        </h3>

        <div className="space-y-1 md:space-y-2 mb-8 text-lg md:text-xl text-gray-500 font-semibold tracking-tight">
          <p>India</p>
          <p className="hover:text-[#005f73] transition-colors cursor-pointer">hello@Gmail.in</p>
          <p>+91 00000 00000</p>
        </div>

        <div className="flex justify-end items-center gap-5 md:gap-6 text-[#005f73]">
          <svg className="w-7 h-7 md:w-9 md:h-9 fill-current cursor-pointer hover:scale-110 transition-transform" viewBox="0 0 24 24">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/>
          </svg>
          <svg className="w-6 h-6 md:w-8 md:h-8 fill-current cursor-pointer hover:scale-110 transition-transform" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.768h-2.946v-3.411h2.946v-2.511c0-2.92 1.784-4.51 4.388-4.51 1.248 0 2.321.092 2.633.134v3.054h-1.808c-1.417 0-1.691.674-1.691 1.661v2.172h3.381l-.441 3.411h-2.94v8.768h6.101c.731 0 1.325-.593 1.325-1.324v-21.351c0-.732-.594-1.325-1.325-1.325z"/>
          </svg>
          <svg className="w-6 h-6 md:w-8 md:h-8 fill-current cursor-pointer hover:scale-110 transition-transform" viewBox="0 0 24 24">
            <path d="M23.444 4.834c-.811.358-1.685.6-2.6.711.934-.56 1.65-1.446 1.987-2.497-.874.519-1.846.897-2.877 1.102-.827-.881-2.005-1.431-3.305-1.431-2.503 0-4.532 2.03-4.532 4.532 0 .355.04.7.117 1.03-3.766-.188-7.105-1.993-9.34-4.735-.391.67-.614 1.45-.614 2.278 0 1.572.8 2.958 2.015 3.77-.744-.024-1.444-.228-2.056-.567v.058c0 2.196 1.562 4.027 3.636 4.444-.381.103-.781.158-1.194.158-.292 0-.575-.028-.85-.082.577 1.798 2.246 3.107 4.225 3.143-1.548 1.213-3.498 1.935-5.618 1.935-.365 0-.725-.021-1.079-.063 2.002 1.284 4.381 2.033 6.937 2.033 8.324 0 12.875-6.9 12.875-12.875 0-.196-.004-.391-.013-.586.885-.638 1.652-1.434 2.259-2.345z"/>
          </svg>
          <div className="p-1 border-2 border-[#005f73] rounded-lg cursor-pointer hover:scale-110 transition-transform">
            <InstagramIcon size="w-5 h-5 md:w-7 md:h-7" />
          </div>
        </div>
      </div>

      <p className="text-sm md:text-base text-white/30 font-bold tracking-wider">
        © 2026 — All Rights Reserved.
      </p>

    </footer>
  );
}

function InstagramIcon({ size }) {
  return (
    <svg className={size} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}