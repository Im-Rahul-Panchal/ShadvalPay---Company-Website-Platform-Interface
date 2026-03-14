import { motion } from "framer-motion";

export default function Card({ title, desc, icon, gradient = "from-indigo-500 to-purple-500" }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative p-8 rounded-3xl glass-hover cursor-pointer overflow-hidden"
    >
      {/* Gradient Glow on Hover */}
      <motion.div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}
      />

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
        className="relative text-5xl mb-6"
      >
        {icon}
      </motion.div>

      {/* Content */}
      <h3 className="relative text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
        {title}
      </h3>
      
      <p className="relative text-gray-400 text-sm leading-relaxed">
        {desc}
      </p>

      {/* Hover Arrow */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="relative mt-4 flex items-center gap-2 text-indigo-400 text-sm font-medium"
      >
        Learn more
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          →
        </motion.span>
      </motion.div>

      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
