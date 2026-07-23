import type { Metadata } from "next";
import LegalPageHeader from "@/components/sections/legal-page-header";
import LegalContent from "@/components/sections/legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy — SaphireIQ",
  description:
    "Learn how SaphireIQ collects, uses, stores, and protects your personal information across our website and learning platform.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalPageHeader title="Privacy Policy" lastUpdated="09/07/2026" />

      <LegalContent>
        <p>
          At Sapphire IQ, we are committed to protecting your privacy and ensuring that your personal information is handled responsibly. This Privacy Policy explains how we collect, use, store, and protect the information you provide while using our website and services. By accessing our website or enrolling in any of our programs, you agree to the terms outlined in this Privacy Policy.
        </p>
        <h3>1. Information We Collect</h3>
        <p>We may collect the following information:</p>
        <ul>
          <li>Full Name</li>
          <li>Email Address</li>
          <li>Mobile Number</li>
          <li>Educational or Professional Details</li>
          <li>Account Information</li>
          <li>Payment Transaction Details (excluding card or banking credentials)</li>
          <li>Device, Browser, and Website Usage Information</li>
        </ul>

        <h3>2. How We Use Your Information</h3>
        <p>Your information is used to:</p>
        <ul>
          <li>Create and manage your account.</li>
          <li>Provide access to our platform and services.</li>
          <li>Process payments and enrollments.</li>
          <li>Communicate important updates.</li>
          <li>Improve our website and user experience.</li>
          <li>Respond to your queries and provide customer support.</li>
          <li>Comply with legal and regulatory requirements.</li>
        </ul>

        <h3>3. Information Sharing</h3>
        <p>We do not sell or rent your personal information.</p>
        <p>
          Your information may be shared only with trusted third-party service providers, such as payment gateways, cloud hosting providers, and technology partners, whenever necessary to deliver our services or comply with legal obligations.
        </p>
        <h3>4. Data Security</h3>
        <p>We implement reasonable security measures to protect your personal information against unauthorized access, misuse, or disclosure. While we strive to safeguard your data, no online system can guarantee absolute security.</p>
        <h3>5. Cookies</h3>
        <p>
          Our website may use cookies to improve functionality, analyze website traffic, and enhance your browsing experience. You may disable cookies through your browser settings if you prefer.
        </p>
        <h3>6. Third-Party Services</h3>
        <p>
          Our website may contain links to or integrate with third-party services. These services operate under their own privacy policies, and Sapphire IQ is not responsible for their privacy practices.
        </p>
        <h3>7. Changes to This Policy</h3>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with the revised Effective Date.
        </p>
        <h3>8. Contact Us</h3>
        <p>If you have any questions regarding this Privacy Policy, please contact us:</p>
        <p>Email: admin@sapphireiq.in</p>
        <p>Phone: [Support Number]</p>
        <p>Website: [Website URL]</p>
        <h4>Consent</h4>
        <p>By using the Sapphire IQ website or services, you acknowledge that you have read and agreed to this Privacy Policy.</p>
      </LegalContent>
    </>
  );
}
