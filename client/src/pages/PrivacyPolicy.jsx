import Lottie from "lottie-react";
import privacyAnimation from "../assets/lottie/ContactUs2.json";

export default function PrivacyPolicy() {
  return (
    <main className="relative pt-28 bg-gradient-to-br from-gray-950 via-gray-900 to-black min-h-screen text-gray-300 px-6 md:px-16 lg:px-32 py-16 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full"></div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-12 py-2">
        Privacy Policy
      </h1>

      <div className="max-w-5xl mx-auto space-y-10">

        {/* Intro Section */}
        <section className="bg-gray-900/60 backdrop-blur-lg border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-indigo-500/20 transition-all duration-500">
          <p className="mb-4 leading-relaxed">
            This Privacy Policy provides you with details about the manner in
            which your data is collected, stored & used by us. You are advised to
            read this Privacy Policy carefully. By visiting ShadvalPay's
            website/application you expressly give us consent to use & disclose
            your personal information in accordance with this Privacy Policy. If
            you do not agree to the terms of the policy, please do not use or
            access ShadvalPay website, WAP site or mobile applications.
          </p>
          <p className="leading-relaxed">
            Note: Our privacy policy may change at any time without prior
            notification. To make sure that you are aware of any changes, kindly
            review the policy periodically. This Privacy Policy shall apply
            uniformly to ShadvalPay desktop website, ShadvalPay mobile WAP site &
            ShadvalPay mobile applications.
          </p>
        </section>

        {/* General */}
        <SectionCard title="General">
          <p className="mb-4 leading-relaxed">
            We will not sell, share or rent your personal information to any 3rd
            party or use your email address/mobile number for unsolicited emails
            and/or SMS. Any emails and/or SMS sent by ShadvalPay will only be in
            connection with the provision of agreed services & products and this
            Privacy Policy.
          </p>
          <p className="leading-relaxed">
            We reserve the right to communicate your personal information to any
            third party that makes a legally-compliant request for its disclosure.
          </p>
        </SectionCard>

        {/* What we collect */}
        <SectionCard title="What we collect">
          <p className="mb-4 leading-relaxed">
            We may collect and/or gain access to and/or record certain information
            including personal information from or of User in a variety of ways,
            including, but not limited to, when User access and uses the Services
            and in connection with other activities, services, features or
            resources we make available on the Services. These information may
            relate to and include but not limited to your name, email address,
            address, phone number, hardware type, IMEI, the version of your
            operating system, your device name, and your location (based on your
            IP), contact list (on your mobile phone), network information.
          </p>
          <p className="leading-relaxed">
            Users can always refuse to supply Personal Information, however, it
            may prevent them from engaging in certain Services related activities.
          </p>
        </SectionCard>

        {/* Use of collected data */}
        <SectionCard title="Use of collected data">
          <p className="mb-4 leading-relaxed">
            We use personal information to provide you with services & products
            you explicitly requested for, to resolve disputes, troubleshoot
            concerns, help promote safe services, collect money, measure consumer
            interest in our services, inform you about offers, products, services,
            updates, customize your experience, detect & protect us against error,
            fraud and other criminal activity, enforce our terms and conditions,
            etc.
          </p>
          <p className="leading-relaxed">
            We also use your contact information to send you offers based on your
            previous orders and interests.
          </p>
        </SectionCard>

        {/* Non Personal */}
        <SectionCard title="Collection and use of non-personal information">
          <p className="mb-4 leading-relaxed">
            We may collect non-personal information about Users whenever they use
            and interact with the Services. Non-personal information may include
            the browser name, the type of computer, and technical information
            about means used by the User to connect to our Services, such as the
            information about the operating system and the internet service
            providers utilized and other similar information.
          </p>
          <p className="leading-relaxed">
            This information is aggregated and used to help us provide more useful
            information to the User and to understand which part of the Services,
            its products, and services are of most interest. If we do combine
            non-personal information with Personal Information, the combined
            information will be treated as Personal Information for as long as it
            remains combined.
          </p>
        </SectionCard>

        {/* Security */}
        <SectionCard title="Security & Consent">
          <p className="mb-4 leading-relaxed">
            ShadvalPay has stringent security measures in place to protect the
            loss, misuse, and alteration of the information under our control.
            Whenever you change or access your account information, we offer the
            use of a secure server. Once your information is in our possession we
            adhere to strict security guidelines, protecting it against
            unauthorized access.
          </p>
          <p className="leading-relaxed">
            By using ShadvalPay and/or by providing your information, you consent
            to the collection and use of the information you disclose on
            ShadvalPay in accordance with this Privacy Policy.
          </p>
        </SectionCard>

      </div>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-10 shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500">

        <div className="flex justify-center">
          <Lottie animationData={privacyAnimation} loop className="w-64 h-64 md:w-140 h-80" />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Contact Us
          </h2>

          <div className="space-y-3">
            <p>
              📧 <a href="mailto:info@shadvalpay.co.in" className="hover:text-indigo-400 transition">
                info@shadvalpay.co.in
              </a>
            </p>

            <p>
              📞 <a href="tel:+919615001010" className="hover:text-indigo-400 transition">
                +91-9615001010
              </a>
            </p>

            <p className="text-gray-500">
              🕒 Monday-Friday (10:00AM - 6:00 PM)
            </p>
          </div>

          <address className="not-italic mt-4 mb-6 leading-relaxed text-gray-400">
            C-1, 3rd Floor <br />
            TDI Center, <br />
            Jasola, New Delhi – 110025
          </address>

        </div>
      </section>
    </main>
  );
}


/* Reusable Section Card Component */
function SectionCard({ title, children }) {
  return (
    <section className="bg-gray-900/60 backdrop-blur-lg border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-indigo-500/20 transition-all duration-500">
      <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}
