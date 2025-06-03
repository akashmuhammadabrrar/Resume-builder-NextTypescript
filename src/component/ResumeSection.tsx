import Image from "next/image";
import step1 from "@/assets/images/vector1.png";

const ResumeSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Land Your Next Job Faster Using Our <br className="hidden md:block" />
          <span className="text-black">AI Resume Builder</span>
        </h2>
        <h3 className="text-lg font-semibold mt-4">Process Steps:</h3>
        <p className="text-gray-600 max-w-xl mx-auto">
          Our AI knows what ATS bots and hiring managers want. All you have to do is
        </p>
      </div>

      {/* Steps */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 items-start text-center">
        {/* Step 1 */}
        <div className="space-y-3 relative">
          <p className="text-teal-500 font-bold text-lg">01-</p>
          <Image src={step1} alt="Step 1" className="mx-auto w-52 h-auto" />
          <p className="font-semibold">Click to Build Your Resume</p>
        </div>

        {/* Arrow 1 (absolute, top) */}
        <div className="hidden md:block absolute top-[60px] left-[28%]">
          <svg width="100" height="50">
            <path d="M0,25 C50,0 50,50 100,25" stroke="#000" strokeDasharray="4" fill="transparent" />
          </svg>
        </div>

        {/* Step 2 */}
        <div className="space-y-3 relative">
          <p className="text-teal-500 font-bold text-lg">02-</p>
          <Image src={step1} alt="Step 2" className="mx-auto w-52 h-auto" />
          <p className="font-semibold">Paste a Job Description</p>
        </div>

        {/* Arrow 2 */}
        <div className="hidden md:block absolute top-[60px] right-[28%]">
          <svg width="100" height="50">
            <path d="M0,25 C50,0 50,50 100,25" stroke="#000" strokeDasharray="4" fill="transparent" />
          </svg>
        </div>

        {/* Step 3 */}
        <div className="space-y-3">
          <p className="text-teal-500 font-bold text-lg">03-</p>
          <Image src={step1} alt="Step 3" className="mx-auto w-52 h-auto" />
          <p className="font-semibold">Get in Front of Recruiters</p>
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded font-semibold shadow">
          Build Your AI Resume →
        </button>
      </div>
    </section>
  );
};

export default ResumeSection;
