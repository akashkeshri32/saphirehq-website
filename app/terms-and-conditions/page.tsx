import type { Metadata } from "next";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import LegalPageHeader from "@/components/sections/legal-page-header";
import LegalContent from "@/components/sections/legal-content";

export const metadata: Metadata = {
  title: "Terms & Conditions — SaphireIQ",
  description:
    "Read the terms and conditions that govern your access to and use of the SaphireIQ website, platform, and programs.",
};

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <LegalPageHeader title="Terms And Conditions" lastUpdated="09/07/2026" />

      <LegalContent>
        <p>
          Welcome to Sapphire IQ. These Terms &amp; Conditions govern your access to and use of our website, platform, and services. By accessing our website, creating an account, or purchasing any program offered by Sapphire IQ, you acknowledge that you have read, understood, and agreed to comply with these Terms.
        </p>
        <p>
          Throughout this document, the terms &ldquo;Sapphire IQ,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; and &ldquo;us&rdquo; refer to SAPPHIRE IQ. The terms &ldquo;you,&rdquo; &ldquo;your,&rdquo; &ldquo;user,&rdquo; &ldquo;learner,&rdquo; and &ldquo;visitor&rdquo; refer to any individual or organization accessing or using our website, platform, or services.
        </p>
        <h3>1. Acceptance of Terms</h3>
        <p>By continuing to use our website or enrolling in any Sapphire IQ program, you agree to be bound by these Terms &amp; Conditions. If you do not agree with any part of these Terms, please discontinue the use of our website and services.</p>
        <h3>2. Website Content</h3>
        <p>The information, services, and resources available on this website are provided for general informational and educational purposes. Sapphire IQ reserves the right to modify, update, suspend, or discontinue any content, feature, program, or service at any time without prior notice.</p>
        <h3>3. Accuracy of Information</h3>
        <p>We make every reasonable effort to ensure that the information on our website is accurate and up to date. However, Sapphire IQ does not guarantee the completeness, reliability, or accuracy of the content and shall not be held responsible for any errors or omissions.</p>
        <h3>4. User Responsibilities</h3>
        <p>By using our platform, you agree to:</p>
        <ul>
          <li>Provide accurate and complete information during registration.</li>
          <li>Maintain the confidentiality of your account credentials.</li>
          <li>Use the platform only for lawful purposes.</li>
          <li>Respect the rights of other users, mentors, and staff.</li>
          <li>Refrain from copying, distributing, or misusing any content available on the platform without prior written permission.</li>
        </ul>
        <p>Failure to comply with these responsibilities may result in suspension or termination of your account.</p>
        <h3>5. Intellectual Property</h3>
        <p>All website content, including but not limited to text, graphics, logos, illustrations, videos, designs, software, icons, downloadable materials, and branding elements, is owned by or licensed to Sapphire IQ and is protected under applicable intellectual property laws.</p>
        <p>No part of this website may be reproduced, copied, distributed, modified, or commercially exploited without our prior written consent.</p>
        <h3>6. Third-Party Websites</h3>
        <p>Our website may contain links to third-party websites for additional information or convenience. Sapphire IQ does not control or endorse these websites and is not responsible for their content, privacy practices, or services.</p>
        <h3>7. Payment Terms</h3>
        <p>Payments for Sapphire IQ programs are processed through secure third-party payment gateways.</p>
        <p>Sapphire IQ shall not be responsible for payment failures, transaction declines, banking issues, network interruptions, processing delays, or any technical issues arising from third-party payment providers or financial institutions.</p>
        <h3>8. Limitation of Liability</h3>
        <p>To the fullest extent permitted by law, Sapphire IQ shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from:</p>
        <ul>
          <li>Use or inability to use our website or services.</li>
          <li>Temporary platform downtime or technical issues.</li>
          <li>Inaccuracies in website content.</li>
          <li>Unauthorized access to user accounts.</li>
          <li>Delays or failures caused by third-party service providers.</li>
        </ul>
        <h3>9. Governing Law</h3>
        <p>These Terms &amp; Conditions shall be governed by the laws of India. Any disputes arising out of or relating to the use of this website or our services shall be subject to the jurisdiction of the competent courts in India.</p>
        <h3>10. Changes to These Terms</h3>
        <p>Sapphire IQ reserves the right to amend or update these Terms &amp; Conditions at any time. Revised versions will be published on this page, and your continued use of our website after such changes constitutes acceptance of the updated Terms.</p>
        <h3>11. Contact Us</h3>
        <p>For any questions, concerns, or support related to these Terms &amp; Conditions, please contact us:</p>
        <p>Sapphire IQ</p>
        <p>Email: admin@sapphireiq.in</p>
        <p>Phone: 8851442459</p>
        <h4>Disclaimer</h4>
        <p>The information and services provided through the Sapphire IQ website are offered on an &ldquo;as available&rdquo; basis. While we strive to maintain a secure and reliable platform, we do not guarantee uninterrupted access or error-free operation. Sapphire IQ reserves the right to modify, suspend, or discontinue any part of its website or services without prior notice.</p>
        <p>Where payments are processed through third-party payment gateways, such providers are responsible solely for payment processing. Sapphire IQ remains independently responsible for its products, services, customer support, and platform operations.</p>
      </LegalContent>

      <Footer />
    </>
  );
}
