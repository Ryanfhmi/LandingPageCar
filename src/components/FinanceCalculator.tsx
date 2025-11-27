import { useState } from "react";
import { Calculator, TrendingDown, Calendar, DollarSign } from "lucide-react";

export function FinanceCalculator() {
  const [price, setPrice] = useState(460000);
  const [downPayment, setDownPayment] = useState(92000); // 20%
  const [term, setTerm] = useState(60); // months
  const [interestRate, setInterestRate] = useState(4.5);

  const calculateMonthlyPayment = () => {
    const principal = price - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = term;
    
    const monthlyPayment = 
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    return monthlyPayment;
  };

  const monthlyPayment = calculateMonthlyPayment();
  const totalPayment = monthlyPayment * term + downPayment;
  const totalInterest = totalPayment - price;

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-neutral-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Calculator className="w-6 h-6 text-neutral-500" />
            <span className="text-neutral-500 text-sm tracking-[0.3em]">FINANCING OPTIONS</span>
          </div>
          <h2 className="text-white text-4xl md:text-5xl tracking-wider mb-6" style={{ fontFamily: 'serif' }}>
            CALCULATE YOUR
            <br />
            INVESTMENT
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Explore flexible financing options tailored to make your Rolls-Royce ownership dream a reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Inputs */}
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-3xl p-8 border border-neutral-800">
            <h3 className="text-white text-xl tracking-wide mb-8">Customize Your Plan</h3>
            
            <div className="space-y-8">
              {/* Vehicle Price */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-neutral-400 text-sm tracking-wide">VEHICLE PRICE</label>
                  <span className="text-white text-lg">${price.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="340000"
                  max="600000"
                  step="10000"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-neutral-600 mt-2">
                  <span>$340K</span>
                  <span>$600K</span>
                </div>
              </div>

              {/* Down Payment */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-neutral-400 text-sm tracking-wide">DOWN PAYMENT</label>
                  <span className="text-white text-lg">${downPayment.toLocaleString()} ({((downPayment/price)*100).toFixed(0)}%)</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={price * 0.5}
                  step="5000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-neutral-600 mt-2">
                  <span>$0</span>
                  <span>${(price * 0.5).toLocaleString()}</span>
                </div>
              </div>

              {/* Loan Term */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-neutral-400 text-sm tracking-wide">LOAN TERM</label>
                  <span className="text-white text-lg">{term} months</span>
                </div>
                <input
                  type="range"
                  min="24"
                  max="84"
                  step="12"
                  value={term}
                  onChange={(e) => setTerm(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-neutral-600 mt-2">
                  <span>24 months</span>
                  <span>84 months</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-neutral-400 text-sm tracking-wide">INTEREST RATE</label>
                  <span className="text-white text-lg">{interestRate.toFixed(2)}% APR</span>
                </div>
                <input
                  type="range"
                  min="2.5"
                  max="8.0"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-neutral-600 mt-2">
                  <span>2.5%</span>
                  <span>8.0%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* Monthly Payment - Featured */}
            <div className="bg-gradient-to-br from-white to-neutral-200 rounded-3xl p-10 text-black">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-8 h-8" />
                <span className="text-sm tracking-wide opacity-70">ESTIMATED MONTHLY PAYMENT</span>
              </div>
              <div className="text-6xl mb-2" style={{ fontFamily: 'serif' }}>
                ${monthlyPayment.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
              </div>
              <p className="text-sm opacity-70">per month for {term} months</p>
            </div>

            {/* Additional Info Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-6 border border-neutral-800">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingDown className="w-5 h-5 text-neutral-500" />
                  <span className="text-neutral-500 text-xs tracking-wide">TOTAL INTEREST</span>
                </div>
                <div className="text-white text-2xl">${totalInterest.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
              </div>

              <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-6 border border-neutral-800">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-5 h-5 text-neutral-500" />
                  <span className="text-neutral-500 text-xs tracking-wide">TOTAL PAYMENT</span>
                </div>
                <div className="text-white text-2xl">${totalPayment.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 rounded-2xl p-8 border border-neutral-800">
              <h4 className="text-white text-lg mb-3">Ready to move forward?</h4>
              <p className="text-neutral-500 text-sm mb-6">
                Get pre-qualified in minutes and speak with our financing specialists about exclusive rates.
              </p>
              <div className="space-y-3">
                <button className="w-full bg-white text-black py-3 rounded-xl hover:bg-neutral-200 transition-colors tracking-wide">
                  GET PRE-QUALIFIED
                </button>
                <button className="w-full bg-transparent border border-neutral-700 text-white py-3 rounded-xl hover:bg-neutral-900 transition-colors tracking-wide">
                  SPEAK TO FINANCE EXPERT
                </button>
              </div>
            </div>

            <p className="text-xs text-neutral-600 text-center">
              * Rates shown are estimates. Actual rates may vary based on credit score and market conditions.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: white;
          cursor: pointer;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: white;
          cursor: pointer;
          border-radius: 50%;
          border: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </section>
  );
}