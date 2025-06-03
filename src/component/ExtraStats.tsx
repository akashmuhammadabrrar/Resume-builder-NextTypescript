import { CalendarSearch, Contact, ReceiptEuro } from "lucide-react";


const ExtraStats = () => {
    return (
        <div>
            <div className="w-full mx-auto p-5 bg-gray-200">
        <h2 className="text-4xl text-center my-10">Here's What You Got</h2>
        <div className="flex justify-evenly items-center h-full">
          <div className="flex flex-col items-center justify-center">
            <Contact color="#9377FF" size={45} />
            <p className="mt-2 text-xl text-center">ATS-Formatting</p>
            <p className="mt-2 text-xs text-center text-gray-500">Proven layouts that algorithms read perfectly</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <CalendarSearch color="#9377FF" size={45} />
            <p className="mt-2 text-sm text-center">AI keywords Injection</p>
            <p className="mt-2 text-xs text-center text-gray-500">Auto-matches skills to job descriptions</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <ReceiptEuro color="#9377FF" size={45} />
            <p className="mt-2 text-xl text-center">60-Seconds Resume Makeover</p>
            <p className="mt-2 text-xs text-center text-gray-500">Update old resumes for new roles instantly</p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default ExtraStats;