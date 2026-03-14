import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Zap, Shield, MessageCircle, TrendingUp, Lock, Smartphone } from "lucide-react";

const features = [
  {
    title: "Lightning Fast",
    desc: "Process payments in milliseconds with our optimized infrastructure.",
    icon: Zap,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    title: "Bank-Grade Security",
    desc: "Military-grade encryption and PCI DSS compliance for every transaction.",
    icon: Shield,
    gradient: "from-green-400 to-emerald-500",
  },
  {
    title: "24/7 Support",
    desc: "Expert support team available round the clock to assist you.",
    icon: MessageCircle,
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    title: "Real-Time Analytics",
    desc: "Track every transaction with powerful insights and reporting.",
    icon: TrendingUp,
    gradient: "from-purple-400 to-pink-500",
  },
  {
    title: "Fraud Protection",
    desc: "Advanced AI-powered fraud detection keeps your business safe.",
    icon: Lock,
    gradient: "from-red-400 to-rose-500",
  },
  {
    title: "Mobile First",
    desc: "Seamless experience across all devices and platforms.",
    icon: Smartphone,
    gradient: "from-indigo-400 to-purple-500",
  },
];

export default function Features() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-22 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full glass border border-indigo-500/30 text-sm text-indigo-400 font-medium mb-6"
          >
            Why Choose Us
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl font-extrabold">
            Built for <span className="gradient-text">Excellence</span>
          </h2>
          
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Enterprise-grade features designed to power your business growth
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index, inView }) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative p-8 rounded-2xl glass-hover cursor-pointer"
    >
      {/* Gradient Glow on Hover */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}
      />

      {/* Icon */}
      <div className="relative">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6`}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
        {feature.title}
      </h3>
      
      <p className="text-gray-400 text-sm leading-relaxed">
        {feature.desc}
      </p>

      {/* Hover Arrow */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="mt-4 flex items-center gap-2 text-indigo-400 text-sm font-medium"
      >
        Learn more
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          →
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
