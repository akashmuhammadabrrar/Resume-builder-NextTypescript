import Image from "next/image";
import HeroBanner from "@/assets/images/topBanner.png"; 
import robot from "@/assets/images/robot.png";
import { CalendarSearch, Contact, ReceiptEuro } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full max-h-2/12 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${HeroBanner.src})` }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-36 pb-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="text-center md:text-left space-y-6 md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
            Land Your Next Job
          </h1>
          <p className="text-lg text-white/80">
            Let <span className="text-teal-400 font-semibold">AI</span> build a resume that passes the ATS and stands out to recruiters.
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded shadow-md transition">
            Build Your AI Resume →
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:w-1/2">
          <Image
            src={robot}
            alt="AI Assistant"
            width={500}
            height={500}
            className="object-contain"
            priority
          />
        </div>
      </div>
      {/* joined section to top banner */}
     <div className="w-[85%] mx-auto bg-white h-32 rounded-xl relative top-16 shadow-2xl">
  <div className="flex justify-evenly items-center h-full">
    <div className="flex flex-col items-center justify-center">
      <Contact color="#9377FF" size={45} />
      <p className="mt-2 text-xl text-center">Pass ATS screens</p>
    </div>
    <div className="flex flex-col items-center justify-center">
      <CalendarSearch color="#9377FF" size={45} />
      <p className="mt-2 text-xl text-center">2x more interviews</p>
    </div>
    <div className="flex flex-col items-center justify-center">
      <ReceiptEuro color="#9377FF" size={45} />
      <p className="mt-2 text-xl text-center">Higher paying jobs</p>
    </div>
  </div>
</div>
    </section>
  );
};

export default HeroSection;
