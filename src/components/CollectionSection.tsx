import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useState } from "react";
import { TestDriveModal } from "./TestDriveModal";

interface CarModel {
  name: string;
  tagline: string;
  price: string;
  image: string;
  specs: {
    engine: string;
    power: string;
    acceleration: string;
  };
  available: boolean;
}

export function CollectionSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");

  const handleTestDrive = (modelName: string) => {
    setSelectedModel(modelName);
    setIsModalOpen(true);
  };

  const models: CarModel[] = [
    {
      name: "Phantom",
      tagline: "The Pinnacle of Luxury",
      price: "$460,000",
      image: "https://images.unsplash.com/photo-1690141190975-224f98cd8bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xscyUyMHJveWNlJTIwcGhhbnRvbSUyMGx1eHVyeXxlbnwxfHx8fDE3NjQyMTIxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specs: {
        engine: "6.75L V12",
        power: "563 HP",
        acceleration: "5.3s"
      },
      available: true
    },
    {
      name: "Ghost",
      tagline: "Effortless Performance",
      price: "$340,000",
      image: "https://images.unsplash.com/photo-1695334694491-7ac05d362fd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xscyUyMHJveWNlJTIwZ2hvc3QlMjB3aGl0ZXxlbnwxfHx8fDE3NjQyMTIxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specs: {
        engine: "6.75L V12",
        power: "563 HP",
        acceleration: "4.8s"
      },
      available: true
    },
    {
      name: "Cullinan",
      tagline: "The Ultimate SUV",
      price: "$380,000",
      image: "https://images.unsplash.com/photo-1628901341130-4f2255b326f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdXYlMjBjdWxsaW5hbnxlbnwxfHx8fDE3NjQyMTIxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specs: {
        engine: "6.75L V12",
        power: "563 HP",
        acceleration: "5.0s"
      },
      available: true
    }
  ];

  return (
    <section id="collection" className="py-24 px-6 bg-gradient-to-b from-black via-neutral-950 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4 px-6 py-2 border border-neutral-800 rounded-full">
            <span className="text-neutral-500 text-xs tracking-[0.3em]">AVAILABLE NOW</span>
          </div>
          <h2 className="text-white text-4xl md:text-6xl tracking-wider mb-6" style={{ fontFamily: 'serif' }}>
            OUR EXCLUSIVE
            <br />
            COLLECTION
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Discover our curated selection of the world's finest motor cars. Each model represents the pinnacle of luxury and engineering excellence.
          </p>
        </motion.div>

        {/* Models Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-gradient-to-b from-neutral-900/50 to-neutral-950/50 rounded-3xl overflow-hidden border border-neutral-800/50 hover:border-neutral-700 transition-all duration-500 hover:shadow-2xl hover:shadow-neutral-900/50">
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  {model.available && (
                    <div className="absolute top-4 right-4 z-10 bg-green-500 text-black text-xs px-3 py-1 rounded-full">
                      Available
                    </div>
                  )}
                  <ImageWithFallback
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-white text-3xl tracking-wider mb-2" style={{ fontFamily: 'serif' }}>
                      {model.name}
                    </h3>
                    <p className="text-neutral-500 text-sm tracking-wide">{model.tagline}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-neutral-800">
                    <div className="text-neutral-500 text-xs tracking-wide mb-1">STARTING FROM</div>
                    <div className="text-white text-3xl">{model.price}</div>
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <div className="text-neutral-600 text-xs mb-1">ENGINE</div>
                      <div className="text-neutral-400 text-sm">{model.specs.engine}</div>
                    </div>
                    <div>
                      <div className="text-neutral-600 text-xs mb-1">POWER</div>
                      <div className="text-neutral-400 text-sm">{model.specs.power}</div>
                    </div>
                    <div>
                      <div className="text-neutral-600 text-xs mb-1">0-100</div>
                      <div className="text-neutral-400 text-sm">{model.specs.acceleration}</div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <button className="w-full bg-white text-black py-3 rounded-xl hover:bg-neutral-200 transition-colors tracking-wide">
                      REQUEST INFO
                    </button>
                    <button
                      onClick={() => handleTestDrive(model.name)}
                      className="w-full bg-transparent border border-neutral-700 text-white py-3 rounded-xl hover:bg-neutral-900 transition-colors tracking-wide"
                    >
                      SCHEDULE TEST DRIVE
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-neutral-500 mb-6">
            Need assistance choosing your perfect Rolls-Royce?
          </p>
          <button className="bg-gradient-to-r from-neutral-800 to-neutral-900 text-white px-10 py-4 rounded-full hover:from-neutral-700 hover:to-neutral-800 transition-all tracking-wider border border-neutral-700">
            SPEAK WITH A SPECIALIST
          </button>
        </motion.div>
      </div>

      <TestDriveModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modelName={selectedModel}
      />
    </section>
  );
}