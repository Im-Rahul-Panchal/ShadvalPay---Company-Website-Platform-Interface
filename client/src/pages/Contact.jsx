import { motion } from "framer-motion";
import ContactSection from "../components/sections/ContactSection";

export default function Contact() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-14"
    >
      <ContactSection />
    </motion.main>
  );
}
