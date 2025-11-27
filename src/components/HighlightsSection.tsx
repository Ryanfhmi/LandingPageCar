import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HighlightsSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black via-neutral-950 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl tracking-wider mb-6" style={{ fontFamily: 'serif' }}>
            TIMELESS ELEGANCE,
            <br />
            UNMATCHED PERFORMANCE
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Experience the pinnacle of automotive engineering where power meets refinement in perfect harmony.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Feature Cards */}
          <div className="space-y-6">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-6 border border-neutral-800 hover:border-neutral-700 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white tracking-wide mb-2">V12 Engine Performance</h3>
                  <p className="text-neutral-500 text-sm">
                    The legendary 6.75-liter V12 engine delivers effortless power and whisper-quiet operation. Experience acceleration that defies physics while maintaining absolute serenity.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-6 border border-neutral-800 hover:border-neutral-700 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white tracking-wide mb-2">Premium Interior Materials</h3>
                  <p className="text-neutral-500 text-sm">
                    Finest hand-selected leathers, rare wood veneers, and lambswool carpeting. Every surface is a testament to uncompromising quality and artisanal mastery.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-6 border border-neutral-800 hover:border-neutral-700 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white tracking-wide mb-2">Bespoke Customization</h3>
                  <p className="text-neutral-500 text-sm">
                    Each Rolls-Royce can be tailored to your exact vision. From custom paint finishes to personalized interior details, your imagination is the only limit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Car Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/3]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1557081384-461cf563cd65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xscyUyMHJveWNlJTIwZnJvbnQlMjBsaWdodHN8ZW58MXx8fHwxNzY0MjA5OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Rolls-Royce Front with Lights"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}