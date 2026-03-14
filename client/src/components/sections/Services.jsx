import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { CreditCard, Smartphone, Zap, Users, ArrowRight } from "lucide-react";

const services = [
  {
    title: "UPI Payments",
    desc: "Accept instant UPI payments seamlessly across all platforms with zero setup fees.",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Card Payments",
    desc: "Support for Visa, MasterCard, RuPay, and all major credit/debit cards.",
    icon: CreditCard,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Payment Gateway",
    desc: "All-in-one payment gateway solution for your business with real-time settlements.",
    icon: Zap,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Our Partners",
    desc: "Trusted banking, BBPS and technology partners powering our services.",
    icon: Users,
    color: "from-green-500 to-emerald-500",
    link: "/partners",
  },
];

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-22 bg-gradient-to-b from-black via-gray-950 to-indigo-950/20 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl">
            Comprehensive payment solutions tailored for modern businesses
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, inView }) {
  const Icon = service.icon;
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative h-full p-8 rounded-3xl glass-hover cursor-pointer overflow-hidden"
    >
      {/* Gradient Background on Hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6 shadow-lg`}
      >
        <Icon className="w-7 h-7 text-white" />
      </motion.div>

      {/* Content */}
      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
        {service.title}
      </h3>
      
      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        {service.desc}
      </p>

      {/* Arrow */}
      <motion.div
        className="flex items-center gap-2 text-indigo-400 font-medium text-sm"
        whileHover={{ x: 5 }}
      >
        {service.link ? "Explore" : "Learn more"}
        <ArrowRight className="w-4 h-4" />
      </motion.div>

      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );

  return service.link ? (
    <Link to={service.link} className="block h-full">
      {content}
    </Link>
  ) : (
    content
  );
}
