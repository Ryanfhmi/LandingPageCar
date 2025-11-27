import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TestimonialSection() {
  return (
    <section className="py-24 px-6 bg-neutral-950">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl md:text-5xl tracking-wider mb-4" style={{ fontFamily: 'serif' }}>
            OWNER TESTIMONIALS
          </h2>
          <p className="text-neutral-500">Hear from our distinguished clientele</p>
        </div>

        <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 rounded-3xl p-8 md:p-12 border border-neutral-800">
          <div className="text-center">
            {/* Decorative Quote Icon */}
            <div className="text-neutral-700 text-6xl mb-8">"</div>
            
            {/* Customer Photo */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-neutral-800">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDA4NDExNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Antonio Collins"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-neutral-950" />
              </div>
            </div>

            {/* Testimonial Text */}
            <blockquote className="mb-8">
              <p className="text-white text-2xl md:text-3xl leading-relaxed mb-6" style={{ fontFamily: 'serif' }}>
                The moment I sat in my Rolls-Royce, I understood what true luxury means. 
                It's not just about the exquisite materials or the powerful engine—it's about 
                the feeling of timeless elegance that surrounds you with every journey.
              </p>
              <p className="text-neutral-500 text-lg">
                Every detail has been crafted to perfection. This is more than a car; 
                it's a masterpiece that defines who I am.
              </p>
            </blockquote>

            {/* Customer Name */}
            <div className="space-y-2 mb-6">
              <div className="text-white text-xl tracking-wide">ANTONIO COLLINS</div>
              <div className="text-neutral-600 text-sm tracking-wider">PHANTOM OWNER SINCE 2021</div>
            </div>

            {/* Rating Stars */}
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}