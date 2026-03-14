import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { BASE_URL } from "../../config";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Validation
  const validateForm = () => {
    const newErrors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name can contain only letters";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    } else if (formData.name.length > 20) {
      newErrors.name = "Name cannot exceed 20 characters";
    }

    // Phone 
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit Indian number";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter valid email address";
    }

    // Message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 50) {
      newErrors.message = "Message must be at least 50 characters";
    } else if (formData.message.length > 500) {
      newErrors.message = "Message cannot exceed 500 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    const indianDateTime = new Date()
      .toLocaleString("sv-SE", { timeZone: "Asia/Kolkata" })
      .replace("T", " ");

    try {
      const response = await fetch(`${BASE_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          addedon: indianDateTime,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", phone: "", email: "", message: "" });
        setErrors({});
      } else {
        setSubmitStatus("error");
        console.error(data);
      }
    } catch (err) {
      console.error("Submission failed:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8" autoComplete="off">
      {/* Name Field */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <label className="block text-sm font-semibold mb-2 text-gray-300">
          Full Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          name="name"
          maxLength={50}
          value={formData.name}
          onChange={handleChange}
          autoComplete="off"
          placeholder="Enter you full name"
          className={`w-full bg-white/5 border-b-2 ${
            errors.name ? "border-red-500" : "border-gray-700"
          } focus:border-indigo-500 outline-none py-4 px-4 rounded-t-lg text-white placeholder-gray-500 transition-all duration-300`}
        />
        {errors.name && (
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm text-red-400 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.name}
          </motion.p>
        )}
      </motion.div>

      {/* Phone Field */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <label className="block text-sm font-semibold mb-2 text-gray-300">
          Phone Number <span className="text-red-400">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          maxLength={10}
          value={formData.phone}
          onChange={handleChange}
          autoComplete="off"
          inputMode="numeric"
          placeholder="+91 98765 43210"
          className={`w-full bg-white/5 border-b-2 ${
            errors.phone ? "border-red-500" : "border-gray-700"
          } focus:border-indigo-500 outline-none py-4 px-4 rounded-t-lg text-white placeholder-gray-500 transition-all duration-300`}
        />
        {errors.phone && (
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm text-red-400 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.phone}
          </motion.p>
        )}
      </motion.div>

      {/* Email Field */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <label className="block text-sm font-semibold mb-2 text-gray-300">
          Email Address <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          name="email"
          maxLength={100}
          value={formData.email}
          onChange={handleChange}
          autoComplete="new-email"
          placeholder="you@example.com"
          className={`w-full bg-white/5 border-b-2 ${
            errors.email ? "border-red-500" : "border-gray-700"
          } focus:border-indigo-500 outline-none py-4 px-4 rounded-t-lg text-white placeholder-gray-500 transition-all duration-300`}
        />
        {errors.email && (
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm text-red-400 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.email}
          </motion.p>
        )}
      </motion.div>

      {/* Message Field */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <label className="block text-sm font-semibold mb-2 text-gray-300">
          How can we help? <span className="text-red-400">*</span>
        </label>
        <textarea
          name="message"
          maxLength={500}
          value={formData.message}
          onChange={handleChange}
          autoComplete="off"
          rows={4}
          placeholder="Tell us about your business needs (minimum 10 characters)..."
          className={`w-full bg-white/5 border-b-2 ${
            errors.message ? "border-red-500" : "border-gray-700"
          } focus:border-indigo-500 outline-none py-4 px-4 rounded-t-lg text-white placeholder-gray-500 transition-all duration-300 resize-none`}
        />
        <div className="flex justify-between items-start mt-2">
          {errors.message ? (
            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              className="text-sm text-red-400 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.message}
            </motion.p>
          ) : (
            <p className="text-sm text-gray-500">
              {formData.message.length}/500 characters
            </p>
          )}
        </div>
      </motion.div>

      {/* Submit Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
            isSubmitting
              ? "bg-gray-700 cursor-not-allowed"
              : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-2xl hover:shadow-indigo-600/50 cursor-pointer"
          }`}
        >
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
              />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="w-5 h-5" />
            </>
          )}
        </motion.button>
      </motion.div>

      {/* Success Message */}
      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center gap-3"
        >
          <CheckCircle className="w-5 h-5 text-green-400" />
          <p className="text-green-400 font-medium">
            Message sent successfully! We'll get back to you soon.
          </p>
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-400" />
          <p className="text-red-400 font-medium">
            Something went wrong. Please try again later.
          </p>
        </motion.div>
      )}
    </form>
  );
}
