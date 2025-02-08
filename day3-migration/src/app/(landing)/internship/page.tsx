import JobListSection from "@/components/internship/joblistsection";
import JobSearchSidebar from "@/components/internship/jobsearchsidebar";
import Image from "next/image";

const priorityData = [
  {
    heading: "Fitness Fit For All",
    para: "Whether you’re just getting started or consider yourself a fitness pro, NIKE provides fitness opportunities and discounts for all levels and goals.",
    image: "/internship/banners/image.png",
  },
  {
    heading: "Financial Health",
    para: "Whether you’re just getting started or consider yourself a fitness pro, NIKE provides fitness opportunities and discounts for all levels and goals.",
    image: "/internship/banners/health.webp",
  },
  {
    heading: "REST & RECOVERY",
    para: "Whether you’re just getting started or consider yourself a fitness pro, NIKE provides fitness opportunities and discounts for all levels and goals.",
    image: "/internship/banners/recovery.webp",
  },
  {
    heading: "Nike Group Insurance Plan",
    para: "Whether you’re just getting started or consider yourself a fitness pro, NIKE provides fitness opportunities and discounts for all levels and goals.",
    btn: "Payment Rates",
    image: "/internship/banners/health.webp",
  },
  {
    heading: "Fitness Fit For All",
    para: "Whether you’re just getting started or consider yourself a fitness pro, NIKE provides fitness opportunities and discounts for all levels and goals.",
    image: "/internship/banners/image.png",
  },
];

const Internship = () => {
  return (
    <div className="w-full lg:px-32 sm:px-10 px-4 py-6 space-y-10">
      {/* Job Search Section */}
      <div className="w-full md:flex items-start gap-6">
        <JobSearchSidebar />
        <JobListSection />
      </div>

      {/* Priority Data Section */}
      <div className="w-full space-y-8">
        {priorityData?.map((data, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center text-center overflow-hidden rounded-lg shadow-md bg-gray-100"
          >
            {/* Background Image */}
            {data.image && (
              <Image
                src={data.image}
                alt=""
                width={600}
                height={600}
                className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
              />
            )}

            {/* Content Overlay */}
            <div className="relative z-10 p-6 md:p-10 space-y-4">
              <h1 className="text-xl md:text-3xl font-semibold text-gray-900">
                {data.heading}
              </h1>
              <p className="text-sm md:text-base text-gray-700 max-w-prose mx-auto">
                {data.para}
              </p>
              {data.btn && (
                <button className="px-6 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800">
                  {data.btn}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internship;
