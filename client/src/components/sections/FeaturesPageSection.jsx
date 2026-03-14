import { motion } from "framer-motion";
import { Zap, Lock, CreditCard, Phone, BarChart2, Rocket } from "lucide-react";

export default function FeaturesPageSection() {
  const features = [
    {
      title: "Fast Onboarding",
      desc: "Quick and seamless onboarding with minimal documentation.",
      icon: <Zap className="w-8 h-8 text-yellow-300" />,
      bg: "from-yellow-500/30 to-orange-500/30",
    },
    {
      title: "Secure Transactions",
      desc: "Advanced encryption and bank-grade security for every transaction.",
      icon: <Lock className="w-8 h-8 text-red-300" />,
      bg: "from-red-500/30 to-pink-500/30",
    },
    {
      title: "Multiple Payment Options",
      desc: "UPI, cards, wallets and BBPS all in one platform.",
      icon: <CreditCard className="w-8 h-8 text-indigo-300" />,
      bg: "from-indigo-500/30 to-blue-500/30",
    },
    {
      title: "24×7 Support",
      desc: "Our team is always available to help you grow.",
      icon: <Phone className="w-8 h-8 text-green-300" />,
      bg: "from-green-500/30 to-emerald-500/30",
    },
    {
      title: "Real-time Reports",
      desc: "Track transactions, settlements and performance in real time.",
      icon: <BarChart2 className="w-8 h-8 text-pink-300" />,
      bg: "from-pink-500/30 to-fuchsia-500/30",
    },
    {
      title: "Scalable Infrastructure",
      desc: "Built to scale with your business without interruptions.",
      icon: <Rocket className="w-8 h-8 text-purple-300" />,
      bg: "from-purple-500/30 to-violet-500/30",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
    },
  };

  return (
    <section className="relative bg-gradient-to-b from-black to-gray-900 text-white py-24 overflow-hidden">
      {/* Background Glow Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-center"
        >
          Powerful <span className="text-indigo-500">Features</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto mb-16 text-center text-lg md:text-xl"
        >
          Everything you need to manage payments, grow faster and stay secure.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 cursor-pointer transition-all duration-300 hover:bg-gray-800"
            >
              <div
                className={`flex items-center justify-center w-16 h-16 mb-5 rounded-2xl 
                bg-gradient-to-br ${feature.bg} 
                backdrop-blur-md shadow-lg`}
                >
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 md:text-lg leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
