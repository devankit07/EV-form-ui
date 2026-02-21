export default function Form() {
  return (
    <section className="w-full md:min-h-screen min-h-auto py-10 sm:py-12 bg-gradient-to-b from-sky-300 to-white flex justify-center md:items-center items-start px-8">
      <div className="w-full max-w-[480px] h-auto bg-white rounded-[40px] sm:rounded-[50px] p-6 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
        <div className="space-y-5 sm:space-y-6">
          {["First Name", "Last Name", "Email", "Phone Number"].map((label) => (
            <div key={label} className="relative">
              {/* Label: Added font-purista for a sharp look */}
              <label className="block font-purista text-black text-base sm:text-lg font-semibold mb-0.5">
                {label}
              </label>
              <input
                type={
                  label === "Email"
                    ? "email"
                    : label === "Phone Number"
                      ? "tel"
                      : "text"
                }
                autoComplete="off"
                /* Input Text: Added font-cerapro for better readability.
                   Explicitly set text-black to ensure black text while typing and in autofill. */
                className={`font-cerapro w-full border-b border-gray-300 focus:border-black outline-none py-1.5 sm:py-2 transition-colors bg-white text-base sm:text-lg text-black
                autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]
                autofill:text-black`}
                style={{
                  color: "black",
                  WebkitTextFillColor: "black",
                }}
              />
            </div>
          ))}
        </div>

        {/* Button container */}
        <div className="mt-8 sm:mt-10">
          {/* Button: Added font-purista for strong CTA (Call to Action) */}
          <button className="font-purista w-full bg-[#005266] text-white py-3.5 sm:py-4 rounded-full text-lg sm:text-xl font-bold tracking-wide hover:bg-[#003d4d] transition-all shadow-md active:scale-[0.98]">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}
