import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 via-purple-600/5 to-pink-600/5" />
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-6"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatItem value={10000} suffix="+" label="Active Merchants" inView={inView} />
          <StatItem value={500} suffix="Cr+" label="Transactions" prefix="₹" inView={inView} />
          <StatItem value={99.9} suffix="%" label="Uptime" decimals={1} inView={inView} />
          <StatItem value={24} suffix="/7" label="Support" inView={inView} />
        </div>
      </motion.div>
    </section>
  );
}

function StatItem({ value, label, suffix = "", prefix = "", decimals = 0, inView }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return decimals > 0 ? latest.toFixed(decimals) : Math.round(latest);
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, count, value]);

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="text-center group"
    >
      <div className="relative">
        <motion.h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          {prefix}
          <motion.span>{rounded}</motion.span>
          {suffix}
        </motion.h3>
        
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
          style={{
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.6) 0%, transparent 70%)",
          }}
        />
      </div>
      
      <p className="mt-3 text-sm md:text-base text-gray-400 font-medium tracking-wide">
        {label}
      </p>
    </motion.div>
  );
}
