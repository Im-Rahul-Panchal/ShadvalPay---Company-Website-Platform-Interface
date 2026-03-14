import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Lottie from "lottie-react";
import ContactForm from "./ContactForm";
import contactAnimation from "../../assets/lottie/ContactUs.json";

export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "info@shadvalpay.co.in",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91-9615001010",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "C-1, 3rd Floor, TDI Center, Jasola, New Delhi – 110025",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Monday–Friday (10:00 AM – 6:00 PM)",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center py-20 overflow-hidden">

      {/* Premium Glow Background */}
      <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[160px] animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[160px] animate-pulse delay-700" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">

        {/* HEADER */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full border border-indigo-500/30 text-sm text-indigo-400 font-medium mb-6 backdrop-blur-md bg-white/5">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Let's Scale Your Brand,
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Tell us about your business and we'll help you choose the right
            payment solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 25px 60px rgba(99,102,241,0.35)",
                  }}
                  className="p-4 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 transition duration-400 cursor-pointer"
                >
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${info.color} mb-4`}
                  >
                    <info.icon className="w-5 h-5 text-white" />
                  </div>

                  <h3 className="font-semibold text-white mb-2 text-lg">
                    {info.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    {info.value}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Lottie Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="relative rounded-3xl overflow-hidden backdrop-blur-2xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-white/10 p-6 shadow-[0_20px_80px_rgba(99,102,241,0.25)]"
            >
              <Lottie
                animationData={contactAnimation}
                loop
                className="w-full max-w-2xs mx-auto"
              />
            </motion.div>

          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="p-10 rounded-3xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[0_30px_80px_rgba(99,102,241,0.35)] hover:shadow-indigo-500/30 transition duration-500">
              <ContactForm />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
