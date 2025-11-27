import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
    alert("Thank you for your interest. Our sales specialist will contact you within 24 hours.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-neutral-950 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl md:text-5xl tracking-wider mb-6" style={{ fontFamily: 'serif' }}>
            BEGIN YOUR
            <br />
            ROLLS-ROYCE JOURNEY
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Connect with our dedicated sales team to discover your perfect Rolls-Royce. 
            Whether you're interested in purchasing, scheduling a test drive, or exploring bespoke options.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Contact Info */}
          <div>
            {/* Spirit of Ecstasy Icon */}
            <div className="mb-10 flex justify-center lg:justify-start">
              <div className="relative w-32 h-32">
                <svg viewBox="0 0 100 100" className="w-full h-full text-neutral-700">
                  <path 
                    d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z" 
                    fill="currentColor"
                    opacity="0.3"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">✨</div>
                </div>
              </div>
            </div>

            <div className="space-y-8 mb-10">
              <div>
                <h3 className="text-white text-xl tracking-wide mb-4">CONTACT INFORMATION</h3>
                <div className="space-y-4 text-neutral-400">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>sales@rolls-royce.com</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-neutral-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>123 Luxury Avenue, Beverly Hills, CA 90210</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-white text-xl tracking-wide mb-4">SHOWROOM HOURS</h3>
                <div className="space-y-2 text-neutral-400">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-neutral-500">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-neutral-500">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-neutral-500">By Appointment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-3xl p-8 md:p-12 border border-neutral-800">
            <h3 className="text-white text-2xl tracking-wide mb-6">REQUEST INFORMATION</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-neutral-400 text-sm tracking-wide mb-2">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-neutral-800 rounded-xl px-5 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-neutral-400 text-sm tracking-wide mb-2">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-neutral-800 rounded-xl px-5 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-neutral-400 text-sm tracking-wide mb-2">
                  MESSAGE *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-black/40 border border-neutral-800 rounded-xl px-5 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors resize-none"
                  placeholder="Tell us about your interest or which model you'd like to inquire about..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-4 rounded-xl hover:bg-neutral-200 transition-colors tracking-wider"
              >
                SEND INQUIRY
              </button>

              <p className="text-neutral-600 text-xs text-center">
                By submitting this form, you agree to be contacted by our sales team regarding your inquiry.
              </p>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-neutral-600 text-sm">
              © 2025 Rolls-Royce Motor Cars Limited. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-neutral-600">
              <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-neutral-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}