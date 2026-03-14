import { motion } from "framer-motion";
import { AboutBlock } from "./AboutBlock";
import about from "../../assets/images/shadvalBg.jpg";
import Lottie from "lottie-react";
import contactAnimation from "../../assets/lottie/contactUs1.json";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.02, y: -5, transition: { duration: 0.3 } },
  };

  return (
    <section className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-300 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-12 text-indigo-400 text-center md:text-left"
        >
          About <span className="text-indigo-300">Us</span>
        </motion.h1>

        <motion.div
          className="grid md:grid-cols-2 gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            {[
              {
                title: "Who We Are",
                text: "We are happy to introduce you about ShadvalPay. ShadvalPay is a service provider company providing Recharge and Bill Payment (BBPS) services to valuable retailers and merchants. We have taken a step forward in the field of financial inclusion through partnerships with multiple banks and other parties.",
              },
              {
                title: "Our Vision",
                text: "Our company’s main goal is to fulfill the needs and desires of our customers and satisfy them by providing numerous services for their betterment.",
              },
              {
                title: "What We Do",
                text: "ShadvalPay is easy to operate and makes your work faster and simpler. We provide the best IT and banking services to our customers.",
              },
              {
                title: "24×7 Support",
                text: "Our customer service is best in class and committed to serving you 24×7 for all your queries and questions.",
              },
              {
                title: "100% Quality Assurance",
                text: "Quality is characterized through joint efforts with our customers. While some parts of value are steady, others are customer-specific.",
              },
              {
                title: "Our Promise",
                text: "We deliberately join forces with each customer and manage opportunities to work according to their requirements.",
              },
            ].map((block, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover="hover"
                className="group"
              >
                <AboutBlock title={block.title} text={block.text} />
              </motion.div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            className="relative flex flex-col items-center md:items-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
            viewport={{ once: true }}
          >
            {/* About Image */}
            <motion.img
              src={about}
              alt="About illustration"
              className="w-full max-w- rounded-4xl shadow-2xl border border-gray-700 h-90"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.5 }}
            />

            {/* CONTACT CARD */}
            <motion.div
              className="mt-7 w-full h-full bg-gradient-to-br from-gray-900 to-gray-950 border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-indigo-500/40 transition-all duration-500 flex flex-col justify-between backdrop-blur-xl overflow-hidden"
              whileHover={{ y: -5 }}
            >
              {/* Glow Background */}
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl" />

              {/* Lottie Animation */}
              <div className="w-full h-48 mb-1">
                <Lottie
                  animationData={contactAnimation}
                  loop={true}
                  className="w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between">
                <h3 className="text-2xl font-semibold mb-6 text-indigo-400 text-center">
                  Contact Us
                </h3>

                <div className="flex flex-col md:flex-row justify-between gap-6">
                  {/* Left Side - Address */}
                  <div className="text-white text-sm leading-relaxed flex-1">
                    <p className="mt-2">
                      C-1, 3rd Floor<br />
                      TDI Center,<br />
                      Jasola, New Delhi – 110025
                    </p>
                  </div>

                  {/* Right Side - Email/Call/Time */}
                  <div className="flex-1 space-y-2 text-sm text-gray-400">
                    <p className="hover:text-indigo-400 transition-colors cursor-pointer">
                      Email: info@shadvalpay.co.in
                    </p>
                    <p className="hover:text-indigo-400 transition-colors cursor-pointer">
                      Call: +91-961500100
                    </p>
                    <p>Mon–Fri · 10:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
