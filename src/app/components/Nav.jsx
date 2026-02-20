import { ArrowUpRight } from "lucide-react";

export default function Nav() {
  return (
    <div className="w-full px-2 sm:px-4 py-4 sm:py-6 bg-[#22d3ee]">
      
      {/* Main Container */}
      <div className="max-w-6xl mx-auto bg-[#111] rounded-full flex items-center justify-between p-1 sm:p-2 min-h-[60px] sm:min-h-[80px]">

        {/* ================= Logo Section ================= */}
        <div className="flex items-center gap-1 sm:gap-2 pl-3 sm:pl-6 shrink-0">

          {/* Logo Icon */}
          <div className="w-6 h-6 sm:w-9 sm:h-9 border-[1.5px] sm:border-2 border-gray-400 
                          rounded-tr-lg sm:rounded-tr-xl 
                          rounded-bl-lg sm:rounded-bl-xl 
                          rotate-12 flex items-center justify-center">
            <div className="w-2 h-2 sm:w-4 sm:h-4 bg-white/20 rounded-full" />
          </div>

          {/* Brand Name */}
          <span className="text-white font-bold text-lg sm:text-3xl tracking-tighter italic">
            EVI
          </span>

        </div>

        {/* ================= Right Section ================= */}
        <div className="flex items-center gap-2 sm:gap-6 pr-1">

          {/* Text */}
          <h2 className="text-white text-sm sm:text-2xl md:text-3xl font-bold tracking-tight whitespace-nowrap">
            Become a Dealer
          </h2>

          {/* Button */}
          <button
            className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 
                       bg-white rounded-full flex items-center justify-center 
                       hover:bg-gray-200 transition-all shrink-0"
          >
            <ArrowUpRight
              className="text-black w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9"
              strokeWidth={2.5}
            />
          </button>

        </div>

      </div>
    </div>
  );
}