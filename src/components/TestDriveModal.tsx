import { useState } from "react";
import { X, Calendar, Clock, MapPin, Car } from "lucide-react";

interface TestDriveModalProps {
  isOpen: boolean;
  onClose: () => void;
  modelName?: string;
}

export function TestDriveModal({ isOpen, onClose, modelName = "Phantom" }: TestDriveModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    model: modelName,
    date: "",
    time: "",
    location: ""
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      console.log("Test drive booked:", formData);
      alert("Your test drive has been scheduled! We'll send you a confirmation email shortly.");
      onClose();
      setStep(1);
      setFormData({
        name: "",
        email: "",
        phone: "",
        model: modelName,
        date: "",
        time: "",
        location: ""
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-3xl max-w-2xl w-full border border-neutral-800 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-neutral-800 to-neutral-900 p-6 flex items-center justify-between border-b border-neutral-700">
          <div>
            <h2 className="text-white text-2xl tracking-wider" style={{ fontFamily: 'serif' }}>
              Schedule Test Drive
            </h2>
            <p className="text-neutral-400 text-sm mt-1">Experience luxury firsthand</p>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="px-6 py-4 bg-neutral-900/50">
          <div className="flex items-center justify-between max-w-md mx-auto">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    step >= s ? "bg-white text-black" : "bg-neutral-800 text-neutral-600"
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-20 h-1 mx-2 transition-colors ${
                      step > s ? "bg-white" : "bg-neutral-800"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between max-w-md mx-auto mt-2 text-xs text-neutral-500">
            <span>Personal Info</span>
            <span>Date & Time</span>
            <span>Confirmation</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-neutral-400 text-sm tracking-wide mb-2">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-neutral-800 rounded-xl px-5 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-600"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-neutral-400 text-sm tracking-wide mb-2">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-neutral-800 rounded-xl px-5 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-600"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-neutral-400 text-sm tracking-wide mb-2">
                  PHONE NUMBER *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-neutral-800 rounded-xl px-5 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-600"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-neutral-400 text-sm tracking-wide mb-2">
                  <Car className="w-4 h-4 inline mr-2" />
                  SELECT MODEL *
                </label>
                <select
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-neutral-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-neutral-600"
                >
                  <option value="Phantom">Phantom</option>
                  <option value="Ghost">Ghost</option>
                  <option value="Cullinan">Cullinan</option>
                  <option value="Wraith">Wraith</option>
                  <option value="Dawn">Dawn</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 2: Date & Time Selection */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-neutral-400 text-sm tracking-wide mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  PREFERRED DATE *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-black/40 border border-neutral-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-neutral-600"
                />
              </div>

              <div>
                <label className="block text-neutral-400 text-sm tracking-wide mb-2">
                  <Clock className="w-4 h-4 inline mr-2" />
                  PREFERRED TIME *
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-neutral-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-neutral-600"
                >
                  <option value="">Select a time</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">01:00 PM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                  <option value="17:00">05:00 PM</option>
                </select>
              </div>

              <div>
                <label className="block text-neutral-400 text-sm tracking-wide mb-2">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  SHOWROOM LOCATION *
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-neutral-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-neutral-600"
                >
                  <option value="">Select a location</option>
                  <option value="Beverly Hills, CA">Beverly Hills, CA</option>
                  <option value="Manhattan, NY">Manhattan, NY</option>
                  <option value="Miami, FL">Miami, FL</option>
                  <option value="Scottsdale, AZ">Scottsdale, AZ</option>
                  <option value="Chicago, IL">Chicago, IL</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="bg-neutral-900/50 rounded-2xl p-6 border border-neutral-800">
                <h3 className="text-white text-lg mb-4">Review Your Booking</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Name:</span>
                    <span className="text-white">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Email:</span>
                    <span className="text-white">{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Phone:</span>
                    <span className="text-white">{formData.phone}</span>
                  </div>
                  <div className="h-px bg-neutral-800 my-3" />
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Model:</span>
                    <span className="text-white">{formData.model}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Date:</span>
                    <span className="text-white">{new Date(formData.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Time:</span>
                    <span className="text-white">{formData.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Location:</span>
                    <span className="text-white">{formData.location}</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-4">
                <p className="text-blue-400 text-sm">
                  ✓ A confirmation email will be sent to {formData.email}
                </p>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="flex-1 bg-transparent border border-neutral-700 text-white py-4 rounded-xl hover:bg-neutral-900 transition-colors tracking-wide"
              >
                BACK
              </button>
            )}
            <button
              type="submit"
              className="flex-1 bg-white text-black py-4 rounded-xl hover:bg-neutral-200 transition-colors tracking-wide"
            >
              {step === 3 ? "CONFIRM BOOKING" : "CONTINUE"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
