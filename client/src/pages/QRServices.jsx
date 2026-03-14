import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import qrAnimation from "./../assets/lottie/ContactUs4.json"; // Example Lottie animation
import qrImage from "./../assets/images/shadvalQR.png"; // Example image

export default function QRServices() {
  const sections = [
    {
      title: "QR Codes & Sound Box Features",
      cols: "md:grid-cols-2",
      items: [
        "Direct settlement in your bank account.",
        "No settlement cost.",
        "Same day settlement (4 times in a day).",
        "Accept payment from any Bank UPI and wallet UPI.",
        "SMS notification on every successful payment.",
        "View all transactions via mobile application.",
        "Multiple languages supported.",
      ],
    },
    {
      title: "Sound Box Additional Features",
      cols: "md:grid-cols-2",
      items: [
        "Only @ ₹99/- Monthly Recharge Plan.",
        "Instant audio payment confirmation.",
        "Voice notifications in regional languages.",
        "SIM based – no WiFi required.",
        "Powerful speaker with high audio clarity.",
      ],
    },
    {
      title: "ShadvalPay QR Code App Features",
      cols: "md:grid-cols-2 lg:grid-cols-3",
      items: [
        "Single point reconciliation for all payments.",
        "Clean & easy dashboard.",
        "Static and Dynamic QR payments.",
        "Link based payments.",
        "Real-time transaction reports.",
        "Instant download of settlement reports.",
        "Same day auto-settlement (4 times daily).",
        "Voice & SMS alerts in Hindi and English.",
        "Multiple user access per account.",
        "High quality digital card creation.",
        "Built-in sales khata management.",
        "Customer record management.",
        "Your own sub-domain website.",
        "Employee & attendance management.",
      ],
    },
  ];

  return (
    <main className="pt-28 bg-[#030712] min-h-screen text-gray-300 px-6 md:px-16 lg:px-32 py-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px] animate-pulse delay-700" />
      </div>

      {/* Header Section */}
      <section className="text-center max-w-5xl mx-auto mb-24">
        <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-indigo-500/10 text-indigo-400 tracking-wide">
          Digital Payment Solutions
        </span>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
        >
          Upgrade Your Business with ShadvalPay QR Codes & Sound Box
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
        >
          Accept payments effortlessly, get instant notifications, and manage all transactions from a single powerful platform.
        </motion.p>

        {/* Optional Illustration or Lottie */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mx-auto mt-12 w-full max-w-3xl"
        >
          <img
            src={qrImage}
            alt="QR Payment Illustration"
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      {sections.map((section, idx) => (
        <section key={idx} className="max-w-6xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold mb-10 text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            {section.title}
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`grid ${section.cols} gap-6`}
          >
            {section.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-indigo-500/30 hover:border-indigo-500/20 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-indigo-400 mt-1 group-hover:scale-110 transition-transform duration-300" size={20} />
                  <p className="text-gray-300 leading-relaxed">{item}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      ))}

      {/* Contact Section */}
      <section className="mt-18 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 shadow-[0_20px_80px_rgba(99,102,241,0.25)]"
        >

          {/* Lottie */}
          <div className="flex justify-center">
            <Lottie
              animationData={qrAnimation}
              loop
              className="w-64 h-64 md:w-80 h-80"
            />
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">
              QR Support
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
