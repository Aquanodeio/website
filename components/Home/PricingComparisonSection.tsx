import Link from "next/link";

export default function PricingComparisonSection() {
  const pricingRows = [
    { gpu: "B200", aquanode: "$3.99/hr", aws: "$14/hr", google: "$14/hr", azure: "$14/hr" },
    { gpu: "B200", aquanode: "$3.99/hr", aws: "$14/hr", google: "$14/hr", azure: "$14/hr" },
    { gpu: "B200", aquanode: "$3.99/hr", aws: "$14/hr", google: "$14/hr", azure: "$14/hr" },
    { gpu: "B200", aquanode: "$3.99/hr", aws: "$14/hr", google: "$14/hr", azure: "$14/hr" },
    { gpu: "B200", aquanode: "$3.99/hr", aws: "$14/hr", google: "$14/hr", azure: "$14/hr" },
    { gpu: "B200", aquanode: "$3.99/hr", aws: "$14/hr", google: "$14/hr", azure: "$14/hr" },
  ];

  return (
    <section className="relative w-full min-h-screen bg-white py-20">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-normal text-black mb-4">
            Our GPUs cost less and perform faster,
          </h2>
          <p className="text-4xl text-gray-500 mb-8">
            without compromising scalability or reliability.
          </p>
          
          <Link href="/marketplace">
          <button className="group bg-[#3B82F6] transition-all text-white font-normal flex items-center justify-center gap-3 backdrop-blur-sm border border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.3)] px-6 cursor-pointer whitespace-nowrap" style={{ width: '250px', height: '50px', borderRadius: '10px', fontFamily: 'var(--font-inter)' }}>
              Try Aquanode GPUs
              <div className="flex items-center gap-0">
                <div className="h-[2px] w-3 bg-current transition-all duration-200 group-hover:w-6" />
                <div className="w-2 h-2 border-r-2 border-b-2 border-current rotate-[-45deg] -translate-x-[7px] transition-all" />
              </div>
            </button>
          </Link>
        </div>

        {/* Pricing Table */}
        <div className="mt-20 max-w-6xl mx-auto rounded-xl overflow-hidden bg-white">
          {/* Table Header */}
          <div className="grid grid-cols-5 gap-4 py-6 px-6 bg-gray-50 text-center">
            <div className="text-gray-500 font-medium">GPU Type</div>
            <div className="text-[#4A90FF] font-normal">Aquanode</div>
            <div className="text-gray-500 font-medium">AWS</div>
            <div className="text-gray-500 font-medium">Google Cloud</div>
            <div className="text-gray-500 font-medium">Azure</div>
          </div>

          {/* Table Rows */}
          <div className="px-6 divide-y divide-gray-100">
            {pricingRows.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-5 gap-4 items-center py-4 text-center"
              >
                {/* GPU Type */}
                <div className="text-gray-500 font-medium">{row.gpu}</div>

                {/* Aquanode Price - Highlighted */}
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 border-1 border-[#4A90FF] bg-blue-50 rounded-lg">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#4A90FF]"
                    >
                      <path
                        d="M13.3333 4L6 11.3333L2.66667 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-[#4A90FF] font-normal">{row.aquanode}</span>
                  </div>
                </div>

                {/* AWS Price */}
                <div className="text-gray-500">{row.aws}</div>

                {/* Google Cloud Price */}
                <div className="text-gray-500">{row.google}</div>

                {/* Azure Price */}
                <div className="text-gray-500">{row.azure}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

