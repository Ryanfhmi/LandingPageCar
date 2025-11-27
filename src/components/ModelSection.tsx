import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ModelSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black to-neutral-950">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent flex-1" />
            <span className="text-neutral-500 text-sm tracking-[0.3em]">FEATURED MODEL</span>
            <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent flex-1" />
          </div>
          
          <h2 className="text-white text-5xl md:text-7xl tracking-wider text-center mb-6" style={{ fontFamily: 'serif' }}>
            CULLINAN VORTEX
          </h2>
          
          <p className="text-neutral-400 text-lg max-w-3xl mx-auto text-center mb-8">
            The world's most luxurious SUV redefines what's possible. Commanding presence meets unparalleled comfort in our most versatile creation. The Cullinan Vortex conquers every terrain with grace and power.
          </p>

          {/* Price and Availability */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="text-center">
              <div className="text-neutral-500 text-sm mb-1">STARTING PRICE</div>
              <div className="text-white text-4xl">$380,000</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-neutral-800" />
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 px-6 py-3 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm tracking-wide">Available for Immediate Delivery</span>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="relative mt-16">
          <div className="relative overflow-hidden rounded-3xl max-w-5xl mx-auto">
            <div className="aspect-[21/9]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760413452902-8d9da07f61d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xscyUyMHJveWNlJTIwY3VsbGluYW4lMjBzdXZ8ZW58MXx8fHwxNzY0MjA5OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cullinan Vortex SUV"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            {/* Dramatic lighting effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          </div>

          {/* Specs Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-800">
              <div className="text-neutral-500 text-sm tracking-wide mb-2">POWER</div>
              <div className="text-white text-4xl mb-2">563 HP</div>
              <div className="text-neutral-600 text-sm">Twin-Turbo V12</div>
            </div>
            
            <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-800">
              <div className="text-neutral-500 text-sm tracking-wide mb-2">ACCELERATION</div>
              <div className="text-white text-4xl mb-2">5.0s</div>
              <div className="text-neutral-600 text-sm">0-100 km/h</div>
            </div>
            
            <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-800">
              <div className="text-neutral-500 text-sm tracking-wide mb-2">TORQUE</div>
              <div className="text-white text-4xl mb-2">850 Nm</div>
              <div className="text-neutral-600 text-sm">Peak Performance</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <button className="bg-white text-black px-12 py-4 rounded-full hover:bg-neutral-200 transition-colors tracking-wider">
            REQUEST QUOTE
          </button>
          <button className="bg-transparent border-2 border-neutral-700 text-white px-12 py-4 rounded-full hover:bg-neutral-900 transition-colors tracking-wider">
            SCHEDULE TEST DRIVE
          </button>
        </div>
      </div>
    </section>
  );
}