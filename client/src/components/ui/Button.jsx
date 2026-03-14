import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function Button({ 
  children, 
  variant = "primary", 
  size = "md",
  className,
  ...props 
}) {
  const baseStyles = "font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-600/30 hover:shadow-2xl hover:shadow-indigo-600/50",
    secondary: "glass-hover text-white border-2 border-white/20",
    outline: "border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
