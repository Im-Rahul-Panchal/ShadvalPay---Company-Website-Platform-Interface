import { motion } from "framer-motion";
import {
  FaBolt,
  FaShieldAlt,
  FaClock,
  FaMapMarkedAlt,
  FaHandsHelping,
  FaReceipt,
} from "react-icons/fa";
import Lottie from "lottie-react";
import supportAnimation from "../assets/lottie/ContactUs3.json";
import bbpsImg from "../assets/images/bbps2.png";

export default function BBPS() {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 25px 60px rgba(99,102,241,0.45)",
    },
  };

  return (
    <main className="relative pt-28 bg-gradient-to-br from-gray-950 via-gray-900 to-black min-h-screen text-gray-300 px-6 md:px-16 lg:px-32 py-20 overflow-hidden">

      {/* Animated Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[150px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full animate-pulse delay-700"></div>

      {/* HERO */}
      <section className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent pb-3"
        >
          Bharat Bill Payment System (BBPS)
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
        >
          A unified, secure and interoperable bill payment ecosystem powered by
          <span className="text-indigo-400 font-semibold"> ShadvalPay</span>.
        </motion.p>

        <motion.img
          src={bbpsImg}
          alt="BBPS India Network"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mx-auto mt-14 w-full max-w-2xl drop-shadow-[0_20px_60px_rgba(99,102,241,0.4)] rounded-3xl border border-white/10"
        />
      </section>

      {/* BENEFITS */}
      <section className="mt-18 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-16">
          Why Choose BBPS?
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {[
            { icon: <FaClock />, title: "24x7 Availability", text: "Pay bills anytime, anywhere without interruptions." },
            { icon: <FaReceipt />, title: "Instant Confirmation", text: "Auto-generated receipts for every successful payment." },
            { icon: <FaShieldAlt />, title: "Secure Transactions", text: "RBI-backed ecosystem ensuring maximum security." },
            { icon: <FaBolt />, title: "Fast Processing", text: "Lightning-fast settlements & real-time updates." },
            { icon: <FaMapMarkedAlt />, title: "Pan-India Coverage", text: "Utility, DTH, gas, electricity & water bills nationwide." },
            { icon: <FaHandsHelping />, title: "Consumer Redressal", text: "Centralized grievance redressal system for customers." },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover="hover"
              className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 text-center transition duration-200 cursor-pointer"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="text-indigo-400 text-5xl">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SUPPORT SECTION WITH LOTTIE */}
      <section className="mt-28 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 shadow-[0_20px_80px_rgba(99,102,241,0.25)]"
        >

          {/* Lottie */}
          <div className="flex justify-center">
            <Lottie
              animationData={supportAnimation}
              loop
              className="w-64 h-64 md:w-80 h-80"
            />
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Contact Us - <br /> BBPS Support & Onboarding
            </h2>

            <div className="mt-6 space-y-3">
              <p>
                📧
                <a
                  href="mailto:info@shadvalpay.co.in"
                  className="ml-2 text-indigo-400 hover:text-indigo-300 transition"
                >
                  info@shadvalpay.co.in
                </a>
              </p>

              <p>
                📞
                <a
                  href="tel:+919615001010"
                  className="ml-2 text-indigo-400 hover:text-indigo-300 transition"
                >
                  +91-9615001010
                </a>
              </p>

              <p className="text-sm text-gray-500">
                Mon–Fri · 10:00 AM – 6:00 PM
              </p>
            </div>

            <p className="mt-4 leading-relaxed text-gray-400">
              C-1, 3rd Floor <br />
              TDI Center, Jasola <br />
              New Delhi – 110025
            </p>

          </div>

        </motion.div>
      </section>
    </main>
  );
}
