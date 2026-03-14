import Lottie from "lottie-react";
import legalAnimation from "../assets/lottie/ContactUs1.json";

export default function TermsConditions() {
  return (
    <main className="relative pt-28 bg-gradient-to-br from-gray-950 via-gray-900 to-black min-h-screen text-gray-300 px-6 md:px-16 lg:px-32 py-16 overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full"></div>

      {/* Page Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-16">
        Terms & Conditions
      </h1>

      {/* Content Wrapper */}
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Reusable Section Card */}
        {[
          {
            title: "Introduction",
            content: `By accessing and using the Shadval Pay Private Limited website,
            www.shadvalpay.co.in, you agree to be legally bound by these Terms & Conditions.
            The terms "you" and "user" refer to anyone who accesses the website.`
          },
          {
            title: "Use of the Website",
            content: `Shadval Pay grants you a non-exclusive, non-transferable, limited
            license to access and use the website for personal purposes only.
            Commercial use without written consent is strictly prohibited.`
          },
          {
            title: "Registration",
            content: `You must provide accurate and updated information during registration.
            Failure may result in termination of access.`
          },
          {
            title: "Limitation of Liability",
            content: `You are responsible for your activities. If dissatisfied,
            your sole remedy is to stop using the website.`
          },
          {
            title: "Links to Other Websites",
            content: `We are not responsible for third-party website content
            accessed via external links.`
          },
          {
            title: "User Content",
            content: `Users grant Shadval Pay a non-exclusive right to use submitted content.
            We reserve the right to remove inappropriate material.`
          },
          {
            title: "Payments, Cancellation & Refunds",
            content: `All purchased content is non-refundable unless otherwise stated.
            Liability for declined transactions rests with the user.`
          }
        ].map((section, index) => (
          <section
            key={index}
            className="bg-gray-900/60 backdrop-blur-lg border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-indigo-500/20 transition-all duration-500"
          >
            <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
              {section.title}
            </h2>
            <p className="leading-relaxed text-gray-300">
              {section.content}
            </p>
          </section>
        ))}

        {/* Anti-Hacking Section */}
        <section className="bg-gray-900/60 backdrop-blur-lg border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-indigo-500/20 transition-all duration-500">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
            Anti-Hacking Provision
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>Do not use the website for unlawful purposes.</li>
            <li>No bots, scrapers, or automated access tools.</li>
            <li>Do not bypass security systems.</li>
            <li>Do not overload website infrastructure.</li>
          </ul>
        </section>
      </div>

      {/* Contact Section with Lottie */}
      <section className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-10 shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500">

        {/* Lottie Animation */}
      <div className="flex justify-center md:justify-start">
        <Lottie
          animationData={legalAnimation}
          loop
          className="w-64 h-64 md:w-80 h-80"
        />
      </div>


        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Contact Us
          </h2>

          <div className="space-y-3">
            <p>
              📧{" "}
              <a
                href="mailto:info@shadvalpay.co.in"
                className="hover:text-indigo-400 transition"
              >
                info@shadvalpay.co.in
              </a>
            </p>

            <p>
              📞{" "}
              <a
                href="tel:+919615001010"
                className="hover:text-indigo-400 transition"
              >
                +91-9615001010
              </a>
            </p>

            <p className="text-gray-500">
              🕒 Monday-Friday (10:00AM - 6:00 PM)
            </p>
          </div>

           <address className="not-italic mt-4 mb-6 leading-relaxed text-gray-400">
            C-1, 3rd Floor <br />
            TDI Center <br />
            Jasola, New Delhi – 110025
          </address>

        </div>
      </section>
    </main>
  );
}
