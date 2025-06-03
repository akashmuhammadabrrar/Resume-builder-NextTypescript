import Image from "next/image";
import step1 from "@/assets/images/vector1.png";

const ResumeSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Land Your Next Job Faster Using Our <br className="hidden md:block" />
          <span className="text-black">AI Resume Builder</span>
        </h2>
        <h3 className="text-lg font-semibold mb-2">Process Steps:</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our AI knows what ATS bots and hiring managers want. All you have to do is
        </p>
      </div>

      {/* Steps Grid */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 md:gap-6">

        {/* Step 1 */}
        <div className="flex flex-col items-center relative text-center">
          <p className="text-teal-500 font-bold text-xl absolute top-14  left-0">01</p>
          <Image src={step1} alt="Step 1" className="w-52 h-auto" />
          <p className="font-semibold mt-3">Click to Build Your Resume</p>
        </div>

        {/* Arrow 1 */}
        <div className="hidden md:block">
          <svg width="100" height="50">
            <path
              d="M0,25 C30,0 70,50 100,25"
              stroke="#000"
              strokeDasharray="5,5"
              fill="transparent"
              markerEnd="url(#arrowhead)"
            />
            <defs>
              <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6" fill="#000" />
              </marker>
            </defs>
          </svg>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center relative text-center">
          <p className="text-teal-500 font-bold text-xl absolute  top-14  left-0">02</p>
          <Image src={step1} alt="Step 2" className="w-52 h-auto" />
          <p className="font-semibold mt-3">Paste a Job Description</p>
        </div>

        {/* Arrow 2 */}
        <div className="hidden md:block">
          <svg width="100" height="50">
            <path
              d="M0,25 C30,0 70,50 100,25"
              stroke="#000"
              strokeDasharray="5,5"
              fill="transparent"
              markerEnd="url(#arrowhead2)"
            />
            <defs>
              <marker id="arrowhead2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6" fill="#000" />
              </marker>
            </defs>
          </svg>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center relative text-center">
          <p className="text-teal-500 font-bold text-xl absolute top-14  left-0">03</p>
          <Image src={step1} alt="Step 3" className="w-52 h-auto" />
          <p className="font-semibold mt-3">Get in Front of Recruiters</p>
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-12">
        <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded font-semibold shadow">
          Build Your AI Resume →
        </button>
      </div>
    </section>
  );
};

export default ResumeSection;
