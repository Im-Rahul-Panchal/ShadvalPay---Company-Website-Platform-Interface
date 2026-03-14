export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Trusted by <span className="text-indigo-500">Businesses</span>
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <TestimonialCard
            name="Amit Sharma"
            role="Startup Founder"
            text="ShadvalPay helped us scale payments effortlessly. Super smooth experience!"
          />
          <TestimonialCard
            name="Neha Verma"
            role="E-commerce Owner"
            text="Fast onboarding and excellent support. Highly recommended."
          />
          <TestimonialCard
            name="Rahul Mehta"
            role="SaaS Founder"
            text="Reliable, secure and very easy to integrate."
          />
        </div>

      </div>
    </section>
  )
}

function TestimonialCard({ name, role, text }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
      <p className="text-gray-300 text-sm">“{text}”</p>
      <div className="mt-4">
        <h4 className="font-semibold">{name}</h4>
        <span className="text-xs text-gray-400">{role}</span>
      </div>
    </div>
  )
}
