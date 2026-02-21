import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Nav() {
  return (
    // Outer container: centered content and responsive padding
    <div className="w-full flex justify-center bg-[#22d3ee] p-6 sm:p-8">
    
      <div className="w-[95%] sm:w-full max-w-6xl mx-auto bg-[#111] rounded-full flex items-center justify-between p-2 sm:p-3 min-h-[60px] sm:min-h-[80px] shadow-lg">

        {/* Logo Section */}
        <div className="flex items-center pl-3 sm:pl-8">
          <Image 
            src="/logo.png" 
            alt="EVI Logo" 
            className="h-6 sm:h-10 md:h-12 w-auto object-contain" 
            width={140}
            height={60}
          />
        </div>

        {/* Right Section: Text and Button */}
        <div className="flex items-center gap-3 sm:gap-6 pr-1">

          {/* Text: Added font-purista here */}
          <h2 className="text-white font-purista text-[14px] sm:text-2xl md:text-3xl font-bold tracking-tight whitespace-nowrap">
            Become a Dealer
          </h2>

          {/* Circular Button */}
          <button
            className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 
                       bg-white rounded-full flex items-center justify-center 
                       hover:bg-gray-200 transition-all shrink-0 shadow-md"
            aria-label="Become a Dealer"
          >
            <ArrowUpRight
              className="text-black w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9"
              strokeWidth={3}
            />
          </button>

        </div>

      </div>
    </div>
  );
}