import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl tracking-wider mb-6" style={{ fontFamily: 'serif' }}>
            THE ROLLS-ROYCE
            <br />
            DIFFERENCE
          </h2>
          <p className="text-neutral-400 max-w-3xl mx-auto">
            A ROLLS-ROYCE IS MORE THAN JUST A CAR.
            IT'S A LEGACY OF CRAFTSMANSHIP THAT SETS THE STANDARD FOR LUXURY IN EVERYTHING.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 - Interior */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3] shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1661336878277-1d0078e7b3e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvciUyMGxlYXRoZXJ8ZW58MXx8fHwxNzY0MjA5OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Luxury Interior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
            <h3 className="text-white tracking-wide mb-2">Exquisite Craftsmanship</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Every detail handcrafted with the finest materials. From hand-stitched leather to polished wood veneers.
            </p>
          </div>

          {/* Card 2 - Exterior Detail */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3] shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760551243219-99bac81c178b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBleHRlcmlvciUyMGRldGFpbHxlbnwxfHx8fDE3NjQyMDk5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Luxury Exterior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
            <h3 className="text-white tracking-wide mb-2">Engineering Excellence</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Precision engineering meets timeless design. Every curve and contour designed for perfection.
            </p>
          </div>

          {/* Card 3 - Heritage */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3] shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1726739570094-950954e7c63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwcm9sbHMlMjByb3ljZSUyMGNsYXNzaWMlMjBjYXJ8ZW58MXx8fHwxNzY0MjEwMTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Rolls-Royce Heritage"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
            <h3 className="text-white tracking-wide mb-2">Legacy & Heritage</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Over a century of automotive excellence. A tradition of innovation that continues to this day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}