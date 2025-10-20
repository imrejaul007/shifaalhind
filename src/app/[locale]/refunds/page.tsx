export const dynamic = 'force-dynamic';

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-16">
      <div className="container mx-auto max-w-4xl">
        <div className="rounded-lg bg-white p-8 shadow-sm md:p-12">
          <h1 className="mb-8 font-serif text-4xl font-bold text-gray-900">Refund & Cancellation Policy</h1>
          <p className="mb-8 text-sm text-gray-600">Last Updated: October 20, 2024</p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">1. Overview</h2>
              <p className="text-gray-700">
                This policy outlines the refund and cancellation procedures for medical tourism services facilitated by Shifa AlHind. As we coordinate services with multiple third-party providers, refund eligibility depends on the specific service and timing of cancellation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">2. Our Coordination Services</h2>
              <p className="mb-4 text-gray-700">
                Shifa AlHind&apos;s consultation and coordination services are <strong>FREE OF CHARGE</strong>. Therefore:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>No refunds are applicable for our coordination services</li>
                <li>You may cancel at any time without financial penalty to Shifa AlHind</li>
                <li>We will assist you with cancellations with hospitals and other service providers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">3. Hospital and Medical Services</h2>
              <p className="mb-4 text-gray-700">
                Refunds for medical services are subject to individual hospital policies:
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">Pre-Treatment Cancellation</h3>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li><strong>More than 30 days before:</strong> Usually full refund of deposits (minus processing fees)</li>
                <li><strong>15-30 days before:</strong> Typically 50-75% refund</li>
                <li><strong>7-14 days before:</strong> Typically 25-50% refund</li>
                <li><strong>Less than 7 days:</strong> Usually no refund</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">Post-Treatment</h3>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>No refunds once treatment has begun</li>
                <li>Partial refunds may be available for unused services</li>
                <li>Complications or dissatisfaction do not automatically qualify for refunds</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">4. Travel and Accommodation</h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">Flight Tickets</h3>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Subject to airline policies and ticket type</li>
                <li>Cancellation fees typically apply</li>
                <li>We recommend travel insurance for flexibility</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">Hotel Bookings</h3>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Usually free cancellation 24-48 hours before check-in</li>
                <li>Some advance bookings may be non-refundable</li>
                <li>We will clearly communicate cancellation terms before booking</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">5. Medical Emergencies</h2>
              <p className="mb-4 text-gray-700">
                Special considerations for medical emergencies or complications:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>If you cannot travel due to medical reasons, provide documentation</li>
                <li>Most hospitals will reschedule without penalty</li>
                <li>Some deposits may be transferable to future dates</li>
                <li>Travel insurance may cover cancellation costs</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">6. Refund Process</h2>
              <p className="mb-4 text-gray-700">
                To request a refund:
              </p>
              <ol className="mb-4 list-decimal space-y-2 pl-6 text-gray-700">
                <li>Contact your case manager or email refunds@shifaalhind.com</li>
                <li>Provide booking details and reason for cancellation</li>
                <li>We will coordinate with hospitals and service providers</li>
                <li>Refunds are processed by the original payment method</li>
                <li>Processing time: 7-14 business days after approval</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">7. Force Majeure</h2>
              <p className="mb-4 text-gray-700">
                In cases of force majeure (natural disasters, pandemics, war, etc.):
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>We will work with all parties to find solutions</li>
                <li>Rescheduling is prioritized over cancellation</li>
                <li>Refund terms may be more flexible</li>
                <li>Travel insurance is strongly recommended</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">8. Dispute Resolution</h2>
              <p className="text-gray-700">
                If you dispute a refund decision:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Contact our customer service team</li>
                <li>Provide supporting documentation</li>
                <li>We will review and respond within 5 business days</li>
                <li>Escalate to management if necessary</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">9. Recommendations</h2>
              <div className="rounded-lg bg-blue-50 p-6">
                <p className="mb-2 font-semibold text-blue-900">We Strongly Recommend:</p>
                <ul className="list-disc space-y-2 pl-6 text-blue-800">
                  <li>Purchase comprehensive travel and medical insurance</li>
                  <li>Book refundable or flexible travel options when possible</li>
                  <li>Read and understand all terms before making payments</li>
                  <li>Keep all booking confirmations and receipts</li>
                  <li>Communicate cancellations as early as possible</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">10. Contact Us</h2>
              <p className="mb-4 text-gray-700">
                For refund requests or questions:
              </p>
              <div className="rounded-lg bg-gray-50 p-6">
                <p className="font-semibold text-gray-900">Shifa AlHind Refunds Department</p>
                <p className="text-gray-700">Email: refunds@shifaalhind.com</p>
                <p className="text-gray-700">Phone: +971 50 123 4567</p>
                <p className="text-gray-700">WhatsApp: +971 50 123 4567</p>
                <p className="text-gray-700">Business Hours: 24/7 Support</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
