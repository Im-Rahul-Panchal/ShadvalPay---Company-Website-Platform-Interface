import { ServiceCard } from "./ServiceCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import QrImage from "../../assets/images/shadvalQR.png";
import bbpsImage from "../../assets/images/bbps.png";
import mobileRechargeImage from "../../assets/images/mobileRecharge.png";
import fastagImage from "../../assets/images/fastag.png";
import aepsImage from "../../assets/images/aeps.png";
import moneyTransferImage from "../../assets/images/moneyTransfer.png";

export default function ServicesPageSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white py-18 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="inline-block text-sm uppercase tracking-widest text-indigo-400 mb-4">
            What We Offer
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Our <span className="text-indigo-500">Premium Services</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Smart, secure and scalable digital payment solutions designed
            for modern retailers, distributors and growing businesses.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatedService>
            <Link to="/qr-services">
              <ServiceCard
                image={QrImage}
                title="QR Code & Sound Box"
                desc="Accept instant UPI payments with audio confirmation using QR & Soundbox."
              />
            </Link>
          </AnimatedService>

          <AnimatedService>
            <Link to="/bbps">
              <ServiceCard
                image={bbpsImage}
                title="BBPS – Bill Payment"
                desc="Pay electricity, gas, water, DTH and other utility bills easily."
              />
            </Link>
          </AnimatedService>

          <AnimatedService>
            <ServiceCard
              image={mobileRechargeImage}
              title="Mobile Recharge Services"
              desc="All operator prepaid & postpaid recharge with best commission."
            />
          </AnimatedService>

          <AnimatedService>
            <ServiceCard
              image={fastagImage}
              title="FASTag Recharge"
              desc="Recharge FASTag issued by SBI, ICICI, Axis and other banks."
            />
          </AnimatedService>

          <AnimatedService>
            <ServiceCard
              image={aepsImage}
              title="AEPS Services"
              desc="Cash withdrawal, balance enquiry and mini statement via Aadhaar."
            />
          </AnimatedService>

          <AnimatedService>
            <ServiceCard
              image={moneyTransferImage}
              title="Money Transfer"
              desc="Instant and secure domestic money transfer services."
            />
          </AnimatedService>
        </motion.div>
      </div>
    </section>
  );
}

/* Smooth Card Animation Wrapper */
function AnimatedService({ children }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg 
                      group-hover:border-indigo-500/40 transition-all duration-300">
        {children}
      </div>
    </motion.div>
  );
}
