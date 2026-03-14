import React, { useState } from "react";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { BASE_URL } from "../../config";

export default function ContactSidebar() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Allow only digits in phone
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validation Function
  const validate = () => {
    let newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name can contain only letters";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    } else if (formData.name.length > 50) {
      newErrors.name = "Name cannot exceed 50 characters";
    }

    // Phone validation (Indian 10 digit starting 6-9)
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit Indian number";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 100) {
      newErrors.message = "Message must be at least 100 characters";
    } else if (formData.message.length > 500) {
      newErrors.message = "Message cannot exceed 500 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    const indianDateTime = new Date()
      .toLocaleString("sv-SE", { timeZone: "Asia/Kolkata" })
      .replace("T", " ");

    try {
      const response = await fetch(`${BASE_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
        setTimeout(() => setShowForm(false), 1500);
      } else {
        setSubmitStatus("error");
        console.error(data);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Sidebar Buttons */}
      <div className="fixed top-1/2 left-0 -translate-y-1/2 flex flex-col space-y-3 z-50">
        <button
          onClick={() => setShowForm(true)}
          className="group flex items-center gap-3 bg-purple-600 text-white rounded-r-full
                     px-3 py-3 cursor-pointer w-12 overflow-hidden whitespace-nowrap
                     hover:w-36 transition-[width] duration-300 ease-in-out"
          aria-label="Contact Us"
        >
          <Mail className="w-6 h-6 flex-shrink-0" />
          <span className="inline-block transform -translate-x-2 opacity-0
                       group-hover:translate-x-0 group-hover:opacity-100
                       transition-all duration-300 ease-in-out select-none">
            Contact Us
          </span>
        </button>

        <a
          href="https://wa.me/919615001010"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-green-500 text-white rounded-r-full
                     px-3 py-3 cursor-pointer w-12 overflow-hidden whitespace-nowrap
                     hover:w-36 transition-[width] duration-300 ease-in-out"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-6 h-6 flex-shrink-0" />
          <span className="inline-block transform -translate-x-2 opacity-0
                       group-hover:translate-x-0 group-hover:opacity-100
                       transition-all duration-300 ease-in-out select-none">
            WhatsApp
          </span>
        </a>

        <a
          href="tel:+919615001010"
          className="group flex items-center gap-3 bg-blue-900 text-white rounded-r-full
                     px-3 py-3 cursor-pointer w-12 overflow-hidden whitespace-nowrap
                     hover:w-36 transition-[width] duration-300 ease-in-out"
          aria-label="Call Us"
        >
          <Phone className="w-6 h-6 flex-shrink-0" />
          <span className="inline-block transform -translate-x-2 opacity-0
                       group-hover:translate-x-0 group-hover:opacity-100
                       transition-all duration-300 ease-in-out select-none">
            Call Us
          </span>
        </a>
      </div>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-[60] px-4">
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-[fadeIn_.3s_ease-out]">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition cursor-pointer"
              aria-label="Close form"
            >
              ✕
            </button>

            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                Get in Touch
              </h2>
              <p className="text-sm text-gray-500 text-center mb-6">
                We'd love to hear from you. Fill out the form below.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    maxLength={50}
                    autoComplete="off"
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none transition-all duration-200"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={10}
                    autoComplete="off"
                    inputMode="numeric"
                    placeholder="Enter your phone number"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none transition-all duration-200"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    maxLength={100}
                    autoComplete="new-email"
                    placeholder="Enter your email address"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none transition-all duration-200"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    maxLength={500}
                    autoComplete="off"
                    placeholder="Type your message here (minimum 100 characters)"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none resize-none transition-all duration-200"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`mt-2 rounded-xl py-3 text-white font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg cursor-pointer ${
                    isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitStatus === "success" && (
                  <p className="mt-2 text-green-600 text-center font-medium">
                    Message sent successfully!
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="mt-2 text-red-600 text-center font-medium">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
