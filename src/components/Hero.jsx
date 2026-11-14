
import { ArrowRight, WashingMachine } from 'lucide-react'
import InteractiveBackground from './InteractiveBackground'

function Hero() {

 
  // Make background bubbles react to mouse movement
  function handleMouseMove(event) {
    // Only react to an actual mouse, not touch input
    if (event.pointerType !== 'mouse') return

    const section = event.currentTarget
    const bounds = section.getBoundingClientRect()

    // Find the center of the hero section
    const centerX = bounds.left + bounds.width / 2
    const centerY = bounds.top + bounds.height / 2

    // Calculate mouse position relative to the center
    const mouseX = event.clientX - centerX
    const mouseY = event.clientY - centerY

    // Find all background bubbles
    const bubbles = section.querySelectorAll('.bubble')

    bubbles.forEach((bubble) => {
      const depth = Number(bubble.dataset.depth) || 1

      // Calculate each bubble's movement
      const moveX = (mouseX / bounds.width) * 80 * depth
      const moveY = (mouseY / bounds.height) * 80 * depth

      // Apply movement without interrupting floating animations
      bubble.style.translate = `${moveX}px ${moveY}px`
    })
  }

  // Return bubbles to their original positions
  function handleMouseLeave(event) {
    const bubbles = event.currentTarget.querySelectorAll('.bubble')

    bubbles.forEach((bubble) => {
      bubble.style.translate = '0px 0px'
    })
  }

  return (
    <section
      className="relative isolate overflow-hidden bg-[#101A40]"
      onPointerMove={handleMouseMove}
      onPointerLeave={handleMouseLeave}
    >

      {/* Interactive Background */}
      <InteractiveBackground />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-12 md:py-28">

        {/* Left Side */}
        <div>

          <span className="inline-block rounded-full border border-blue-300/30 bg-blue-900/50 px-4 py-2 text-sm font-semibold text-white">
            A COOLEDTURED SERVICE
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            Bacteria culture is out.
            <span className="block text-blue-900">
              cooledtured is in.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
            Don't let your laundry day stop you from leveling up.<br />
            We'll keep you cooltured and clean.
          </p>

          {/* Pricing */}
          <div className="mt-8">
            <p className="text-4xl font-extrabold text-white">
              $2.00
              <span className="text-lg font-extrabold text-blue-900">
                {' '}/ pound
              </span>
            </p>

            <p className="mt-2 text-sm text-white/80">
              Simple, straightforward wash and fold pricing.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#booking"
              className="inline-flex items-center gap-3 rounded-lg bg-[#3655C7] px-7 py-4 font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-1 hover:bg-blue-500"
            >
              Schedule a Pickup
              <ArrowRight size={19} />
            </a>

            <a
              href="#pricing"
              className="rounded-lg border border-white/30 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              View Pricing
            </a>

          </div>
        </div>

        {/* Right Side */}
        <div className="relative">

          <div className="rounded-3xl border border-white/15 bg-white/5 p-10 shadow-2xl shadow-blue-950/30 backdrop-blur-md">

            <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full border border-white/15 bg-blue-400/10 shadow-inner">

              <WashingMachine
                size={115}
                strokeWidth={1.2}
                className="text-blue-100"
              />

            </div>

            <h2 className="mt-8 text-center text-2xl font-bold text-white">
              You carry your teammates, we'll carry the laundry.
            </h2>

            <p className="mt-3 text-center text-white/80">
              We pick up, wash, and deliver.
            </p>

            {/* Floating Price Tag */}
            <div className="mx-auto mt-8 w-fit rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-center backdrop-blur-md">
              <p className="text-xs font-medium tracking-widest text-blue-200">
                WASH & FOLD
              </p>

              <p className="mt-1 text-2xl font-extrabold text-white">
                $2 / lb
              </p>
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}

export default Hero
