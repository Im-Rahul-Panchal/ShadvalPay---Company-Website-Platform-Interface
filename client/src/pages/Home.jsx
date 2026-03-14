import { motion } from "framer-motion";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Services from "../components/sections/Services";
import Stats from "../components/sections/Stats";
import CTA from "../components/sections/CTA";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-18"
    >
      <Hero />
      <Stats />
      <Features />
      <Services />
      <CTA />
    </motion.main>
  );
}
