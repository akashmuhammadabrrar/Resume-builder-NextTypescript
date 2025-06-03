import Image from "next/image";
import job1 from "@/assets/images/imgtop1.png";
import job2 from "@/assets/images/imgtop2.png";
import job3 from "@/assets/images/imgtop3.png";

const JobSection = () => {
  return (
    <section className="w-full px-6 py-12 bg-gradient-to-b mt-20 from-white to-[#e6f0ff]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Trying To Find A New Job is <span className="text-gray-900">Exhausting</span>
          </h2>
          <p className="text-gray-600">
            80% of resumes get rejected by robots before a human sees them.
            <br />
            Hours wasted applying… only to get auto-rejected.
            <br />
            Missed interviews for jobs you’re perfect for.
          </p>

          <div className="space-y-3">
            <p className="font-semibold">The ATS doesn’t care about:</p>
            <ul className="text-gray-700 list-disc list-inside">
              <li>Your hard work</li>
              <li>Your career story</li>
              <li>Your unique skills</li>
            </ul>
          </div>

          <p className="text-gray-600">
            It only cares about keywords. We’ll give your resume the right keywords in a way that still makes sense to recruiters.
          </p>

          <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded shadow">
            Build Your AI Resume →
          </button>
        </div>

        {/* Right Grid of Images */}
        <div className="grid grid-cols-2 grid-rows-3 gap-4 h-[480px]">
          {/* Top-left large image */}
          <div className="row-span-2">
            <Image src={job1} alt="Frustrated applicant" className="w-full h-full object-cover rounded-lg" />
          </div>

          {/* Top-right stacked images */}
          <div>
            <Image src={job2} alt="AI interface" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div>
            <Image src={job3} alt="Reviewing resume" className="w-full h-full object-cover rounded-lg" />
          </div>

          {/* Bottom stat box */}
          <div className="col-span-2 bg-violet-600 text-white text-center font-semibold flex items-center justify-center rounded-lg h-20">
            2000+ Satisfied Clients
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSection;
