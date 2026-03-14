import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Twitter, Instagram, Facebook, Youtube, ArrowUp } from "lucide-react";
import shadval from "../../assets/images/shadval.png";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Twitter,
      href: "https://twitter.com/shadvalpay",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/shadvalpay",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/shadvalpayIT/",
      label: "Facebook",
      color: "hover:text-blue-600",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@shadvalpaypvtltd",
      label: "YouTube",
      color: "hover:text-red-500",
    },
  ];

  const footerLinks = {
    pages: [
      { name: "About Us", path: "/about" },
      { name: "BBPS", path: "/bbps" },
      { name: "QR Services", path: "/qr-services" },
      { name: "Our Partners", path: "/partners" },
    ],
    legal: [
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms & Conditions", path: "/terms-conditions" },
      { name: "Refunds & Cancellations", path: "/refund-policy" },
      { name: "Contact Us", path: "/contact" },
    ],
  };

  return (
    <footer className="relative bg-gray-950 text-gray-400 border-t border-white/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* LOGO + SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Link to="/" className="inline-block">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={shadval}
                alt="ShadvalPAY Logo"
                className="h-10 w-auto mb-6"
              />
            </Link>

            <p className="text-gray-500 mb-6 max-w-sm">
              Empowering businesses with fast, secure, and seamless payment
              solutions.
            </p>

            <p className="text-sm text-gray-500 mb-4 font-medium">
              Follow us on
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-xl glass-hover ${social.color} transition-colors`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* PAGES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-bold text-white mb-6">Pages</h3>
            <ul className="space-y-3">
              {footerLinks.pages.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-indigo-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-indigo-400 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* OTHER LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-bold text-white mb-6">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-indigo-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-indigo-400 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-bold text-white mb-6">Contact</h3>
            <div className="space-y-4 text-sm">
              <div>
                <a
                  href="mailto:info@shadvalpay.co.in"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  info@shadvalpay.co.in
                </a>
              </div>

              <div>
                <a
                  href="tel:+919615001000"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  +91 961500100
                </a>
              </div>

              <div className="text-gray-500">
                Monday–Friday
                <br />
                10:00 AM – 6:00 PM
              </div>
            </div>
          </motion.div>

{/* OUR OFFICES */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.4 }}
>
  <h3 className="font-bold text-white mb-6">Our Offices</h3>

  <div className="space-y-6 text-sm text-gray-500">
    
    {/* Corporate Office */}
    <div>
      <p className="text-white font-semibold mb-1">Corporate Office</p>
      <p className="leading-relaxed">
        C-1, 3rd Floor<br />
        TDI Center,<br />
        Jasola, New Delhi – 110025
      </p>
    </div>

    {/* Head Office */}
    <div>
      <p className="text-white font-semibold mb-1">Head Office</p>
      <p className="leading-relaxed">
        Ground Floor, D-18,<br />
        Tajpur Road Badarpur Extn,<br />
        South Delhi – 110044
      </p>
    </div>

  </div>
</motion.div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 relative flex items-center justify-center">
          {/* Center Text */}
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} ShadvalPay. All rights reserved.
          </p>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-6 p-3 rounded-xl glass-hover text-indigo-400 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
