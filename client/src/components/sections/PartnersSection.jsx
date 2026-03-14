import { motion } from "framer-motion";
import bankingIcon from "../../assets/images/axis.png";
import bbpsIcon from "../../assets/images/bbps.png";
import paytmIcon from "../../assets/images/paytm.png";
import yesBankIcon from "../../assets/images/yesBank.png";
import paymentGatewayIcon from "../../assets/images/GetEPay.png";

const partnerLogos = {
  "Banking Partners": bankingIcon,
  "BBPS Network": bbpsIcon,
  "UPI Partners": paytmIcon,
  "Technology Partners": yesBankIcon,
  "Payment Gateway": paymentGatewayIcon,
};

export default function PartnersSection() {
  return (
    <section className="relative bg-gray-950 text-white py-18 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-sm tracking-widest uppercase text-indigo-400 mb-4">
            Trusted Network
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Our <span className="text-indigo-500">Strategic Partners</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We collaborate with leading banks, service providers and technology
            innovators to deliver secure, scalable and seamless payment solutions.
          </p>
        </div>

        {/* Partner Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {Object.entries(partnerLogos).map(([name, logo], index) => (
            <PartnerCard
              key={name}
              name={name}
              logo={logo}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerCard({ name, logo, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative h-36 flex items-center justify-center rounded-2xl 
                 bg-white/5 backdrop-blur-lg border border-white/10 
                 hover:border-indigo-500/40 transition-all duration-300"
    >
      {/* Subtle Inner Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

      <img
        src={logo}
        alt={name}
        className="relative max-h-14 object-contain transition duration-300 
           group-hover:scale-105"
      />
    </motion.div>
  );
}
