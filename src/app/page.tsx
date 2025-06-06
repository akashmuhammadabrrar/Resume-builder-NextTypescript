import ExtraStats from "@/component/ExtraStats";
import Footer from "@/component/Footer";
import HeroSection from "@/component/HeroSection";
import JobSection from "@/component/JobSection";
import Navbar from "@/component/Navbar";
import ResumeSection from "@/component/ResumeSection";
import Testimonial from "@/component/Testimonial";
import TrustedBy from "@/component/TrustedBy";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white text-black flex flex-col">
      <Navbar />
      <HeroSection />
      <JobSection></JobSection>
      <ResumeSection></ResumeSection>
      <ExtraStats></ExtraStats>
      <Testimonial></Testimonial>
      <TrustedBy></TrustedBy>
      <Footer></Footer>
    </main>
  );
}
