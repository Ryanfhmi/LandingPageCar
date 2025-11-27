import { useState } from "react";
import { ChevronLeft, ChevronRight, RotateCw, Maximize2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Car360Viewer() {
  const [currentAngle, setCurrentAngle] = useState(0);
  const [isAutoRotate, setIsAutoRotate] = useState(false);

  // Simulate 360 view with different car angles
  const angles = [
    {
      url: "https://images.unsplash.com/photo-1557081384-461cf563cd65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xscyUyMHJveWNlJTIwc2lkZSUyMHByb2ZpbGV8ZW58MXx8fHwxNzY0MjEyMTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      label: "Front View"
    },
    {
      url: "https://images.unsplash.com/photo-1728416837405-1ac976badb23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xscyUyMHJveWNlJTIwYmxhY2slMjBsdXh1cnklMjBjYXIlMjBzaWRlfGVufDF8fHx8MTc2NDIwOTkyMnww&ixlib=rb-4.1.0&q=80&w=1080",
      label: "Side Profile"
    },
    {
      url: "https://images.unsplash.com/photo-1759929730729-f8892838dc68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjByZWFyJTIwdmlld3xlbnwxfHx8fDE3NjQyMTIxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      label: "Rear View"
    },
    {
      url: "https://images.unsplash.com/photo-1609465397944-be1ce3ebda61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvciUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjQxNzQxNzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      label: "Interior View"
    }
  ];

  const nextAngle = () => {
    setCurrentAngle((prev) => (prev + 1) % angles.length);
  };

  const prevAngle = () => {
    setCurrentAngle((prev) => (prev - 1 + angles.length) % angles.length);
  };

  const toggleAutoRotate = () => {
    setIsAutoRotate(!isAutoRotate);
  };

  // Auto-rotate effect
  useState(() => {
    if (isAutoRotate) {
      const interval = setInterval(() => {
        nextAngle();
      }, 2000);
      return () => clearInterval(interval);
    }
  });

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <RotateCw className="w-6 h-6 text-neutral-500" />
            <span className="text-neutral-500 text-sm tracking-[0.3em]">INTERACTIVE VIEW</span>
          </div>
          <h2 className="text-white text-4xl md:text-5xl tracking-wider mb-6" style={{ fontFamily: 'serif' }}>
            EXPLORE EVERY
            <br />
            ANGLE
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Experience our vehicles from every perspective. Rotate and zoom to appreciate every detail.
          </p>
        </div>

        {/* 360 Viewer */}
        <div className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-3xl overflow-hidden border border-neutral-800">
          {/* Main Image */}
          <div className="relative aspect-[16/9]">
            <ImageWithFallback
              src={angles[currentAngle].url}
              alt={`Rolls-Royce view ${currentAngle + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Angle Indicator */}
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-sm rounded-xl px-4 py-2 border border-neutral-700">
              <span className="text-white text-sm">
                {angles[currentAngle].label}
              </span>
            </div>

            {/* Auto-rotate indicator */}
            {isAutoRotate && (
              <div className="absolute top-6 right-6 bg-green-500/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-green-500/30 flex items-center gap-2">
                <RotateCw className="w-4 h-4 text-green-400 animate-spin" />
                <span className="text-green-400 text-sm">Auto Rotating</span>
              </div>
            )}

            {/* Navigation Arrows */}
            <button
              onClick={prevAngle}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/80 transition-colors border border-neutral-700"
              aria-label="Previous angle"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={nextAngle}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/80 transition-colors border border-neutral-700"
              aria-label="Next angle"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Controls */}
          <div className="p-6 border-t border-neutral-800">
            <div className="flex items-center justify-between">
              {/* Thumbnails */}
              <div className="flex gap-3">
                {angles.map((angle, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentAngle(index)}
                    className={`w-20 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                      currentAngle === index
                        ? "border-white scale-110"
                        : "border-neutral-700 opacity-50 hover:opacity-100"
                    }`}
                  >
                    <ImageWithFallback
                      src={angle.url}
                      alt={`Angle ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={toggleAutoRotate}
                  className={`px-6 py-3 rounded-xl border transition-colors flex items-center gap-2 ${
                    isAutoRotate
                      ? "bg-white text-black border-white"
                      : "bg-transparent text-white border-neutral-700 hover:bg-neutral-900"
                  }`}
                >
                  <RotateCw className="w-4 h-4" />
                  <span className="text-sm tracking-wide">
                    {isAutoRotate ? "Stop" : "Auto Rotate"}
                  </span>
                </button>

                <button className="px-6 py-3 bg-transparent border border-neutral-700 text-white rounded-xl hover:bg-neutral-900 transition-colors flex items-center gap-2">
                  <Maximize2 className="w-4 h-4" />
                  <span className="text-sm tracking-wide">Fullscreen</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Hotspots */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-6 border border-neutral-800">
            <h4 className="text-white mb-2">Spirit of Ecstasy</h4>
            <p className="text-neutral-500 text-sm">The iconic hood ornament that symbolizes grace and elegance</p>
          </div>
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-6 border border-neutral-800">
            <h4 className="text-white mb-2">Pantheon Grille</h4>
            <p className="text-neutral-500 text-sm">Hand-polished stainless steel with 22 vertical vanes</p>
          </div>
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-6 border border-neutral-800">
            <h4 className="text-white mb-2">Starlight Headliner</h4>
            <p className="text-neutral-500 text-sm">800 fiber-optic lights recreating a night sky</p>
          </div>
        </div>
      </div>
    </section>
  );
}