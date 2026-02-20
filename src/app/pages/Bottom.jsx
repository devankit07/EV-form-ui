"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const BrandShield = ({ white }) => (
  <div
    className={`w-3 h-3 sm:w-8 sm:h-8 border-[1.5px] sm:border-[3px] ${white ? "border-white" : "border-black"} rounded-tr-[4px] sm:rounded-tr-[12px] rounded-bl-[4px] sm:rounded-bl-[12px] rotate-12 flex items-center justify-center shrink-0`}
  >
    <div
      className={`w-[2px] h-[2px] sm:w-2 sm:h-2 ${white ? "bg-white/40" : "bg-black/30"} rounded-full`}
    />
  </div>
);

export default function Bottom() {
  const [activeSlide, setActiveSlide] = useState(0);

  const vehicles = [
    {
      id: "rydan",
      brand: "RYDAN",
      img: "/auto.png",
      containerClass: "z-10 -mr-[12%] sm:-mr-[18%]",
    },
    {
      id: "otto",
      brand: "CHHOTA OTTO",
      img: "/front.png",
      containerClass: "z-30 scale-[1.25] sm:scale-[1.35] mb-2 sm:mb-4",
    },
    {
      id: "bull",
      brand: "CHHOTA BULL",
      img: "/auto1.png",
      containerClass: "z-10 -ml-[12%] sm:-ml-[18%]",
    },
  ];

  const sliderData = [
    { id: 1, brand: "CHHOTA BULL", img: "/down1.png", bgColor: "bg-[#00A8E1]" },
    { id: 2, brand: "CHHOTA OTTO", img: "/down2.png", bgColor: "bg-[#0077B6]" },
    { id: 3, brand: "RYDAN", img: "/down3.png", bgColor: "bg-[#00B4D8]" },
  ];

  const features = [
    { id: 1, title: "Strong Govt Support and Incentives", icon: "🏛️", align: "left" },
    { id: 2, title: "The Future is Electric", icon: "🛡️", align: "left" },
    { id: 3, title: "EV Sales Growing 30 percent Every Year", icon: "📈", align: "right" },
    { id: 4, title: "Lower Running and Maintenance Costs", icon: "📉", align: "right" },
  ];

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % sliderData.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);

  return (
    <div className="bg-white w-full">
      <section className="w-full pt-0 pb-10 md:pb-16 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div
            className="relative w-full flex justify-center items-end min-h-[280px] sm:min-h-[550px] mb-12 sm:mb-20"
            style={{ perspective: "2000px", transformStyle: "preserve-3d" }}
          >
            <div className="relative w-[38%] z-10 translate-x-[45%] sm:translate-x-[68%] transition-all duration-700 ease-in-out">
              <div className="absolute -top-1 left-1/2 -translate-x-1/1 flex items-center whitespace-nowrap">
                <div className="w-[1.5px] sm:w-[2px] h-4 sm:h-6 bg-black mx-1 sm:mx-2"></div>
                <span className="text-[10px] sm:text-3xl font-bold text-black uppercase">RYDAN</span>
              </div>
              <img
                src={vehicles[0].img}
                alt="RYDAN"
                className="w-full h-auto object-contain drop-shadow-[-10px_5px_15px_rgba(0,0,0,0.1)] transform -rotate-y-[15deg]"
              />
            </div>

            <div className="relative w-[48%] z-30 scale-110 sm:scale-125 transition-all duration-700 ease-in-out">
              <div className="absolute -top-10 sm:top-[-40px] left-1/2 -translate-x-1/2 flex items-center whitespace-nowrap">
                <div className="w-[1.5px] sm:w-[2px] h-6 sm:h-8 bg-black mx-1 sm:mx-2"></div>
                <div className="flex flex-col leading-none">
                  <span className="text-[7px] sm:text-[10px] font-bold text-black uppercase tracking-widest">CHHOTA</span>
                  <span className="text-sm sm:text-4xl font-bold text-black italic">OTTO</span>
                </div>
              </div>
              <img
                src={vehicles[1].img}
                alt="OTTO"
                className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              />
            </div>

            <div className="relative w-[38%] z-10 -translate-x-[45%] sm:-translate-x-[61%] transition-all duration-700 ease-in-out">
              <div className="absolute -top-7 sm:top-[-22px] left-1/2 -translate-x-1/3 flex items-center whitespace-nowrap">
                <div className="w-[1.5px] sm:w-[2px] h-4 sm:h-6 bg-black mx-1 sm:mx-2"></div>
                <div className="flex flex-col leading-none">
                  <span className="text-[7px] sm:text-[10px] font-bold text-black uppercase tracking-widest">CHHOTA</span>
                  <span className="text-[10px] sm:text-3xl font-bold text-black uppercase">BULL</span>
                </div>
              </div>
              <img
                src={vehicles[2].img}
                alt="BULL"
                className="w-full h-auto object-contain drop-shadow-[10px_5px_15px_rgba(0,0,0,0.1)] transform rotate-y-[15deg]"
              />
            </div>
          </div>

          <div className="text-center px-4 max-w-5xl">
            <h2 className="text-[28px] sm:text-6xl md:text-[85px] font-[1000] text-[#1a2e2e] leading-[1] sm:leading-[0.9] tracking-tighter uppercase">
              Electric Vehicles Built for <br className="hidden sm:block" />
              Performance & Reliability
            </h2>
            <p className="text-gray-500 mt-6 sm:mt-10 text-sm sm:text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-tight opacity-75">
              Our electric vehicles offer smooth driving, robust build quality, and dependable range.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-4 pb-24 bg-white">
        <div className="max-w-[1440px] mx-auto relative group">
          <div
            className={`relative w-full aspect-[16/10] sm:aspect-[16/9] md:h-[600px] lg:h-[700px] rounded-[30px] sm:rounded-[45px] md:rounded-[80px] overflow-hidden transition-all duration-700 ${sliderData[activeSlide].bgColor} shadow-2xl`}
          >
            <div className="absolute inset-0 z-20 flex flex-col md:flex-row items-center justify-between p-5 sm:p-10 md:px-16 md:py-12 lg:px-24 lg:py-20">
              <div className="w-full h-full flex items-center justify-start pl-4 sm:pl-8 md:pl-0 order-2 md:order-1 mt-[-10%] md:mt-0">
                <img
                  key={activeSlide}
                  src={sliderData[activeSlide].img}
                  className="h-[55%] sm:h-[70%] md:h-[85%] lg:h-[95%] w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)] animate-in fade-in slide-in-from-right-10 duration-700"
                  alt="vehicle"
                />
              </div>

              <div className="w-full md:w-auto flex items-center justify-end md:justify-start gap-2.5 sm:gap-4 md:gap-6 order-1 md:order-2 self-start md:mt-10 lg:mt-16">
                <div className="shrink-0 scale-[0.55] sm:scale-[0.8] md:scale-110 lg:scale-[1.4] origin-right">
                  <BrandShield white={true} />
                </div>
                <div className="h-7 sm:h-12 md:h-24 lg:h-36 w-[1.5px] sm:w-[2px] md:w-[4px] lg:w-[6px] bg-white/90 rounded-full" />
                <div className="text-white leading-none">
                  <p className="text-[7px] sm:text-[12px] md:text-xl lg:text-3xl font-bold tracking-[0.15em] lg:tracking-[0.3em] opacity-80 uppercase mb-0.5 md:mb-1">
                    CHHOTA
                  </p>
                  <h3 className="text-xl sm:text-4xl md:text-8xl lg:text-[140px] font-[1000] italic uppercase tracking-tighter leading-none">
                    {sliderData[activeSlide].brand.split(" ")[1] || sliderData[activeSlide].brand}
                  </h3>
                </div>
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-3 md:left-10 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md text-white flex items-center justify-center transition-all z-30 border border-white/20 shadow-lg"
            >
              <span className="text-sm md:text-4xl">❮</span>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 md:right-10 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md text-white flex items-center justify-center transition-all z-30 border border-white/20 shadow-lg"
            >
              <span className="text-sm md:text-4xl">❯</span>
            </button>
          </div>

          <div className="flex justify-center gap-3 mt-8 md:mt-12">
            {sliderData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`transition-all duration-500 rounded-full ${
                  activeSlide === index
                    ? "w-10 sm:w-16 md:w-24 h-2 md:h-3 bg-slate-900"
                    : "w-2 md:w-3 h-2 md:h-3 bg-slate-200"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-4 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-7xl font-[1000] text-[#1a2e2e] uppercase tracking-tighter mb-4">
              Why Choose EV Dealership
            </h2>
            <p className="text-gray-500 text-lg md:text-2xl max-w-2xl mx-auto">
              Tap into a fast-growing market with a future-ready mobility business.
            </p>
          </motion.div>

          <div className="space-y-8">
            {features.map((f, index) => (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, x: f.align === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex ${f.align === "right" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`group relative flex items-center gap-4 md:gap-8 p-3 px-6 md:px-10 bg-white border-2 border-[#005f73] shadow-[6px_6px_12px_rgba(0,0,0,0.05)] rounded-full transition-all hover:shadow-xl ${f.align === "right" ? "flex-row-reverse text-right rounded-tr-none" : "rounded-tl-none"}`}
                >
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#005f73] flex items-center justify-center text-white text-2xl md:text-4xl shadow-lg shrink-0">
                    {f.icon}
                  </div>
                  <span className="font-bold text-[#1a2e2e] text-lg md:text-3xl max-w-[200px] md:max-w-md leading-tight">
                    {f.title}
                  </span>
                  <div
                    className={`absolute -z-10 w-full h-full border-2 border-[#005f73]/40 rounded-full scale-105 opacity-0 group-hover:opacity-100 transition-opacity ${f.align === "right" ? "rounded-tr-none" : "rounded-tl-none"}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}