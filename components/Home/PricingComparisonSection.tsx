import Link from "next/link";

export default function PricingComparisonSection() {
  const pricingRows = [
    {
      gpu: "B200 SXM",
      runpod: "$5.98/hr",
      aquanode: "$3.99/hr",
      traditional: "$18/hr",
    },
    {
      gpu: "H100 SXM",
      runpod: "$2.69/hr",
      aquanode: "$1.99/hr",
      traditional: "$14/hr",
    },
    {
      gpu: "H200 SXM",
      runpod: "$3.59/hr",
      aquanode: "$2.59/hr",
      traditional: "$10/hr",
    },
    {
      gpu: "A100 SXM",
      runpod: "$1.39/hr",
      aquanode: "$1.16/hr",
      traditional: "$10/hr",
    },
  ];

  const metricsRows = [
    {
      metric: "Setup Time",
      runpod: "60 seconds",
      aquanode: "< 60 seconds",
      traditional: "1 wk+",
    },
    {
      metric: "Commitment Period",
      runpod: "No Commitment",
      aquanode: "No Commitment",
      traditional: "Month to Weeks contract",
    },
    {
      metric: "Support",
      runpod: "—",
      aquanode: "24/7",
      traditional: "—",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-white py-20">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-black mb-4">
            Our GPUs cost less and perform faster,
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl text-gray-500 mb-8">
            without compromising scalability or reliability.
          </p>

          <Link href="/marketplace">
            <button
              className="group bg-[#3B82F6] transition-all text-white font-normal flex items-center justify-center gap-3 backdrop-blur-sm border border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.3)] px-6 cursor-pointer whitespace-nowrap"
              style={{
                width: "250px",
                height: "50px",
                borderRadius: "10px",
                fontFamily: "var(--font-inter)",
              }}
            >
              Try Aquanode GPUs
              <div className="flex items-center gap-0">
                <div className="h-[2px] w-3 bg-current transition-all duration-200 group-hover:w-6" />
                <div className="w-2 h-2 border-r-2 border-b-2 border-current rotate-[-45deg] -translate-x-[7px] transition-all" />
              </div>
            </button>
          </Link>
        </div>

        {/* Pricing Table */}
        <div className="mt-20 max-w-6xl mx-auto">
          {/* Mobile: Horizontally Scrollable */}
          <div className="overflow-x-auto rounded-xl bg-white shadow-sm border border-gray-200">
            <div className="min-w-[600px]">
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-0 py-4 md:py-6 px-3 md:px-6 bg-gray-50 text-center">
                <div className="text-gray-500 font-medium text-sm md:text-base px-2">
                  Category
                </div>
                <div className="text-gray-500 font-medium text-sm md:text-base px-2">
                  Runpod
                </div>
                <div className="text-white font-medium text-sm md:text-base bg-[#4A90FF] py-2 px-2">
                  Aquanode
                </div>
                <div className="text-gray-500 font-medium text-sm md:text-base px-2">
                  Traditional Clouds
                  <div className="text-xs font-normal text-gray-400">
                    (GCP, AWS, etc.)
                  </div>
                </div>
              </div>

              {/* Core Features Section */}
              <div className="px-3 md:px-6 py-3 bg-gray-50 border-t border-gray-200">
                <h3 className="text-[#4A90FF] font-medium text-xs md:text-sm uppercase tracking-wide">
                  Core Features
                </h3>
              </div>

              {/* Metrics Rows */}
              <div className="px-3 md:px-6 divide-y divide-gray-100">
                {metricsRows.map((row, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-4 gap-0 items-center py-3 md:py-4 text-center"
                  >
                    {/* Metric Name */}
                    <div className="text-gray-700 font-medium text-sm md:text-base text-left pl-2 px-2">
                      {row.metric}
                    </div>

                    {/* Runpod Value */}
                    <div className="text-gray-600 text-sm md:text-base font-medium px-2">
                      {row.runpod}
                    </div>

                    {/* Aquanode Value - Highlighted */}
                    <div className="bg-blue-50 py-3 md:py-4 px-2">
                      {row.aquanode ? (
                        <span className="text-[#4A90FF] font-medium text-sm md:text-base whitespace-nowrap">
                          {row.aquanode}
                        </span>
                      ) : (
                        <span className="text-blue-300 text-sm md:text-base">
                          —
                        </span>
                      )}
                    </div>

                    {/* Traditional Clouds Value */}
                    <div className="text-gray-600 text-sm md:text-base font-medium px-2">
                      {row.traditional}
                    </div>
                  </div>
                ))}
              </div>

              {/* GPU Pricing Section */}
              <div className="px-3 md:px-6 py-3 bg-gray-50 border-t border-gray-200">
                <h3 className="text-[#4A90FF] font-medium text-xs md:text-sm uppercase tracking-wide">
                  GPU Pricing
                </h3>
              </div>

              {/* Pricing Rows */}
              <div className="px-3 md:px-6 divide-y divide-gray-100">
                {pricingRows.map((row, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-4 gap-0 items-center py-3 md:py-4 text-center"
                  >
                    {/* GPU Type */}
                    <div className="text-gray-700 font-medium text-sm md:text-base text-left pl-2 px-2">
                      {row.gpu}
                    </div>

                    {/* Runpod Price */}
                    <div className="text-gray-600 text-sm md:text-base font-medium px-2">
                      {row.runpod}
                    </div>

                    {/* Aquanode Price - Highlighted */}
                    <div className="bg-blue-50 py-3 md:py-4 px-2">
                      {row.aquanode ? (
                        <span className="text-[#4A90FF] font-medium text-sm md:text-base whitespace-nowrap">
                          {row.aquanode}
                        </span>
                      ) : (
                        <span className="text-blue-300 text-sm md:text-base">
                          —
                        </span>
                      )}
                    </div>

                    {/* Traditional Clouds Price */}
                    <div className="text-gray-600 text-sm md:text-base font-medium px-2">
                      {row.traditional}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
