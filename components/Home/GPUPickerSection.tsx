import Image from "next/image";
import GPUVector from "@/assets/home/GPU-Vector.svg";

export default function GPUPickerSection() {
  const gpuCards = [
    {
      model: "B200",
      storage: "180GB",
      provider: "Datacrunch",
      vcpu: "30.00",
      memory: "184.00 GB",
      storageSpace: "9000.00 GB",
      interface: "SXM6",
      price: "",
    },
    {
      model: "B200",
      storage: "180GB",
      provider: "Datacrunch",
      vcpu: "30.00",
      memory: "184.00 GB",
      storageSpace: "9000.00 GB",
      interface: "SXM6",
      price: "",
    },
    {
      model: "B200",
      storage: "180GB",
      provider: "Datacrunch",
      vcpu: "30.00",
      memory: "184.00 GB",
      storageSpace: "9000.00 GB",
      interface: "SXM6",
      price: "",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-black py-20 overflow-hidden">
      {/* Dotted background pattern */}
      <div className="absolute inset-0 opacity-70" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 2px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-lg mb-6">
            All the power of top cloud providers; unified, simplified,
            <br />
            and optimized for AI.
          </p>
          <h2 className="text-3xl md:text-4xl font-normal text-white">
            Run powerful AI workloads in three simple steps.
          </h2>
        </div>

        {/* Pick a GPU Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-3xl md:text-4xl font-normal text-white">
              Pick a GPU
            </h3>
            <span className="px-4 py-1.5 border border-white/30 rounded text-white text-sm font-medium">
              STEP 01
            </span>
          </div>

          {/* GPU Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" style={{ fontFamily: 'var(--font-inter)' }}>
            {gpuCards.map((gpu, index) => (
              <div
                key={index}
                className="bg-[#141414] rounded-md p-6 border border-white/10 hover:border-white/20 transition-all"
              >
                {/* Card Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <h4 className="text-3xl font-normal text-white mb-1" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
                      {gpu.model}
                    </h4>
                    <p className="text-gray-400 text-xl">({gpu.storage})</p>
                  </div>
                  <span className="px-4 py-2 bg-[#2A2A2A] rounded-full text-white text-sm font-normal">
                    {gpu.provider}
                  </span>
                </div>

                {/* Specs List */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-white">vCPU</span>
                    <span className="text-gray-400">{gpu.vcpu}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Memory</span>
                    <span className="text-gray-400">{gpu.memory}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Storage</span>
                    <span className="text-gray-400">{gpu.storageSpace}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Interconnect</span>
                    <span className="text-gray-400">{gpu.interface}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Price</span>
                    <span className="text-gray-400">{gpu.price || "-"}</span>
                  </div>
                </div>

                {/* GPU Image */}
                <div className="flex items-center justify-center mt-8 pt-6 border-t border-white/10">
                  <Image
                    src={GPUVector}
                    alt="GPU"
                    width={200}
                    height={150}
                    className="w-full h-auto max-w-[200px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

