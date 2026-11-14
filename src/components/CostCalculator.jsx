
import { useState } from 'react'
import { Calculator, ArrowRight } from 'lucide-react'

function CostCalculator() {
  const [weight, setWeight] = useState('')

  const pounds = Number(weight)

  const isValid =
    weight.trim() !== '' &&
    Number.isFinite(pounds) &&
    pounds > 0 &&
    pounds <= 200

  const total = isValid ? pounds * 2 : 0

  const formattedTotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(total)

  return (
    <section
      id="pricing"
      className="bg-[#101A40] px-6 py-20 md:px-12"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

        {/* Left side */}
        <div>
          <div className="mb-4 flex items-center gap-2 text-blue-300">
            <Calculator size={22} />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Simple pricing
            </span>
          </div>

          <h2 className="text-4xl font-extrabold text-white md:text-5xl">
            Need help calculating? <br/>
             <span className="text-blue-300">
                We got you covered.
              </span>
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
            Free pickup and delivery. No complicated pricing. No surprises.
            
          </p>
        </div>

        {/* Right side: Calculator */}
        <div className="min-w-0 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md sm:p-8">

          <h3 className="text-2xl font-bold text-white">
            Calculate your cost
          </h3>

          <p className="mt-2 text-sm text-white/60">
            How much laundry are you looking to wash?
          </p>

          <div className="mt-8">
            <label
              htmlFor="laundry-weight"
              className="mb-2 block text-sm font-semibold text-white"
            >
              Estimated laundry weight (lbs)
            </label>

            <input
              id="laundry-weight"
              type="number"
              min="0.1"
              max="200"
              step="0.1"
              placeholder="Enter weight in pounds"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
              className="w-full min-w-0 rounded-xl border border-white/15 bg-[#1C2653] px-4 py-4 text-lg text-white outline-none transition placeholder:text-white/40 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30"
            />

            {weight !== '' && !isValid && (
              <p className="mt-2 text-sm text-red-300">
                Please enter a weight between 0 and 200 lbs.
              </p>
            )}
          </div>

          {/* Estimated total */}
          <div className="mt-8 min-w-0 overflow-hidden rounded-2xl bg-[#1C2653] p-6">
            <p className="text-sm font-medium text-white/60">
              Your estimated total
            </p>

            <p
              className="mt-2 max-w-full break-all text-4xl font-extrabold text-white sm:text-5xl"
            >
              {formattedTotal}
            </p>

            <div className="mt-4 flex flex-wrap justify-between gap-2 border-t border-white/10 pt-4 text-sm">
              <span className="text-white/60">
                {isValid ? `${pounds} lbs × $2.00` : 'Enter your laundry weight'}
              </span>
            </div>
          </div>

          <a
            href="#booking"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-500"
          >
            Schedule a Pickup
            <ArrowRight size={20} />
          </a>

          <p className="mt-4 text-center text-xs text-white/40">
            Estimates are based on the weight entered.
            Final pricing is determined by actual laundry weight.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CostCalculator

