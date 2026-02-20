export default function Form() {
  return (
    <section className="w-full min-h-screen py-8 sm:py-12 bg-gradient-to-b from-sky-300 to-white flex justify-center items-center px-4">
      
      <div className="w-full max-w-[480px] bg-white rounded-[40px] sm:rounded-[50px] p-6 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
        
        <div className="space-y-5 sm:space-y-6">
          
          {[ "First Name", "Last Name", "Email", "Phone Number" ].map((label) => (
            <div key={label} className="relative">
              <label className="block text-black text-base sm:text-lg font-semibold mb-0.5">
                {label}
              </label>
              <input
                type={label === "Email" ? "email" : label === "Phone Number" ? "tel" : "text"}
                autoComplete="off"
                className="w-full border-b border-gray-300 focus:border-black outline-none py-1.5 sm:py-2 transition-colors bg-white text-base sm:text-lg 
                /* Autofill Fix */
                autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]
                autofill:text-fill-black"
              />
            </div>
          ))}

        </div>

        <div className="mt-8 sm:mt-10">
          <button className="w-full bg-[#005266] text-white py-3.5 sm:py-4 rounded-full text-lg sm:text-xl font-bold tracking-wide hover:bg-[#003d4d] transition-all shadow-md active:scale-[0.98]">
            Submit
          </button>
        </div>

      </div>
    </section>
  );
}