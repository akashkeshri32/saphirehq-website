import type { Metadata } from "next";
import LegalPageHeader from "@/components/sections/legal-page-header";
import LegalContent from "@/components/sections/legal-content";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy — SaphireIQ",
  description:
    "Understand SaphireIQ's refund and cancellation policy for program enrollments and payments.",
};

export default function RefundAndCancellationPolicy() {
  return (
    <>
      <LegalPageHeader title="Refund And Cancellation Policy" lastUpdated="09/07/2026" />

      <LegalContent>
        <p>
          At Sapphire IQ, we are committed to maintaining transparency in our enrollment and payment process. We encourage all learners to carefully review the program details before completing their registration.
        </p>
        <h3>1. Cancellation Policy</h3>
        <p>
          Once a learner has successfully enrolled in a program, the enrollment cannot be cancelled.
        </p>
        <h3>2. Refund Policy</h3>
        <p>
          All payments made to Sapphire IQ are final and non-refundable.
        </p>
        <p>
          Refunds will not be provided for reasons including, but not limited to:
        </p>
        <ul>
          <li>Change of mind after enrollment.</li>
          <li>Failure to attend mentor sessions or complete projects.</li>
          <li>Personal schedule conflicts.</li>
          <li>Lack of usage of the platform or learning resources.</li>
          <li>Failure to complete the program.</li>
        </ul>
        <h3>3. Exceptional Circumstances</h3>
        <p>
          In rare and exceptional circumstances, Sapphire IQ may, at its sole discretion, review a refund request. Such requests must be submitted within 7 working days from the date of enrollment. Requests received after this period will not be considered.
        </p>
        <p>
          Each request will be evaluated individually based on the supporting information provided. Approval of a refund is not guaranteed, and the final decision shall rest solely with Sapphire IQ.
        </p>
        <p>
          If a refund request is approved, the refund will be processed through the original mode of payment within 7-10 business days, subject to the processing timelines of the respective bank or payment service provider.
        </p>
        <h3>4. Payment Issues</h3>
        <p>
          If a payment is deducted but your enrollment is not confirmed due to a technical error, please contact our support team. After verification, the payment will either be adjusted against your enrollment or refunded, as applicable.
        </p>
      </LegalContent>
    </>
  );
}
