import Lottie from "lottie-react";
import supportAnimation from "../assets/lottie/Team.json";

export default function RefundPolicy() {
  return (
    <main className="relative pt-28 bg-gradient-to-br from-gray-950 via-gray-900 to-black min-h-screen text-gray-300 px-6 md:px-16 lg:px-32 py-16 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full"></div>

      <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-12 py-2">
        Refunds & Cancellations Policy
      </h1>

      {/* Policy Section */}
      <section className="max-w-5xl mx-auto mb-16 bg-gray-900/60 backdrop-blur-lg border border-gray-800 rounded-2xl p-10 shadow-xl">
        <ul className="list-decimal pl-6 space-y-6 leading-relaxed text-gray-300">
          <li>
            If amount is debited from your bank account despite a failed payment
            transaction, the onus will be on your bank to reverse the amount.
          </li>
          <li>
            In case you have attempted to make an online payment more than once,
            and Shadval Pay have received the amount more than once, Shadval Pay
            reserves the right to adjust it against additional EMI towards your
            Account. Refund, if any, will be processed within 2-3 days.
          </li>
          <li>
            We cannot accept liability for a payment not reaching the correct
            account due to incorrect information or declined transactions.
          </li>
          <li>
            The Customer must apply for a refund with transaction number and
            original receipt.
          </li>
          <li>
            After verification, if valid, the excess amount will be refunded
            electronically within 7 days of the claim. It may take 3-7 days for
            money to reflect in your bank account.
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-10 shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500">

        {/* Lottie Animation */}
        <div className="flex justify-center items-center">
          <Lottie
            animationData={supportAnimation}
            loop={true}
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
            TDI Center, <br />
            Jasola, New Delhi – 110025     
          </address>
          
        </div>
      </section>
    </main>
  );
}
