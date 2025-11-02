import Image from "next/image";
import quoteIcon from "@/assets/home/testimonial/quote.svg";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "I switched from Runpod to Aquanode, and it feels so much better to use. The GPUs are priced more reasonably! I’d highly recommend it.",
      role: "ML Engineer",
      company: "University of California, Los Angeles",
    },
    {
      quote:
        "The pause-and-resume feature makes it so much easier to manage our GPUs across multiple clouds.",
      role: "Infrastructure Engineer",
      company: "AI Startup",
    },
  ];

  return (
    <section className="relative w-full bg-white py-20 md:py-28">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-black mb-4">
            Trusted by Builders Everywhere
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Don&apos;t take our word for it, here&apos;s what builders like you are
            <br />
            you are saying.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 md:p-10 rounded-2xl flex flex-col"
            >
              <div className="flex gap-6 flex-grow">
                {/* Quote Icon */}
                <div className="flex-shrink-0">
                  <Image
                    src={quoteIcon}
                    alt="Quote"
                    width={40}
                    height={32}
                    // className="opacity-30"
                  />
                </div>

                {/* Text Content Container */}
                <div className="flex flex-col justify-between flex-grow">
                  {/* Testimonial Text */}
                  <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8">
                    {testimonial.quote}
                  </p>

                  {/* Author Info */}
                  <div>
                    <p className="text-base md:text-lg font-medium text-black mb-1">
                      {testimonial.role}
                    </p>
                    <p className="text-sm md:text-base text-gray-600">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

