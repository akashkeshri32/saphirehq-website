import type { Metadata } from "next";
import LegalPageHeader from "@/components/sections/legal-page-header";
import LegalContent from "@/components/sections/legal-content";

export const metadata: Metadata = {
  title: "Code of Conduct & Communication Guidelines — SaphireIQ",
  description:
    "Review the professional conduct, communication, and academic integrity guidelines for the SaphireIQ learning community.",
};

export default function CodeOfConduct() {
  return (
    <>
      <LegalPageHeader title="Code of Conduct & Communication Guidelines" lastUpdated="09/07/2026" />

      <LegalContent>
        <p>At Sapphire IQ, we are committed to fostering a professional, respectful, and collaborative learning environment. By using our platform, participating in mentor sessions, or interacting with the Sapphire IQ community, you agree to follow the guidelines outlined below.</p>
        <h3>1. Professional Conduct</h3>
        <p>All learners are expected to:</p>
        <ul>
          <li>Treat mentors, fellow learners, and Sapphire IQ team members with respect and professionalism.</li>
          <li>Maintain a positive and inclusive learning environment.</li>
          <li>Act honestly and ethically throughout the program.</li>
          <li>Follow all platform rules and instructions provided by the Sapphire IQ team.</li>
        </ul>
        <h3>2. Communication Guidelines</h3>
        <p>To ensure effective communication, learners should:</p>
        <ul>
          <li>Communicate respectfully and professionally at all times.</li>
          <li>Use appropriate language in meetings, chats, emails, and discussion forums.</li>
          <li>Raise questions or concerns politely and constructively.</li>
          <li>Avoid offensive, abusive, discriminatory, or inappropriate language or behavior.</li>
        </ul>
        <h3>3. Academic Integrity</h3>
        <p>Learners are expected to submit original work.</p>
        <p>The following actions are strictly prohibited:</p>
        <ul>
          <li>Plagiarism or copying another person&apos;s work.</li>
          <li>Submitting projects completed by someone else.</li>
          <li>Sharing confidential project materials without permission.</li>
          <li>Any form of cheating or dishonest conduct.</li>
        </ul>
        <p>Violation of these standards may result in disciplinary action.</p>
        <h3>4. Platform Usage</h3>
        <p>Learners must not:</p>
        <ul>
          <li>Share their login credentials with others.</li>
          <li>Attempt to gain unauthorized access to the platform.</li>
          <li>Upload harmful, illegal, or malicious content.</li>
          <li>Misuse platform resources or interfere with the learning experience of others.</li>
        </ul>
        <h3>5. Mentor Sessions</h3>
        <p>During mentor sessions, learners are expected to:</p>
        <ul>
          <li>Join sessions on time.</li>
          <li>Maintain respectful behavior throughout the session.</li>
          <li>Participate actively and professionally.</li>
          <li>Follow the mentor&apos;s instructions and maintain decorum.</li>
        </ul>
        <h3>6. Disciplinary Action</h3>
        <p>Failure to comply with this Code of Conduct may result in one or more of the following actions:</p>
        <ul>
          <li>Verbal or written warning.</li>
          <li>Temporary suspension from platform activities.</li>
          <li>Removal from mentor sessions.</li>
          <li>Permanent suspension or termination of platform access without refund, where applicable.</li>
        </ul>
        <p>
          The appropriate action will be determined by Sapphire IQ based on the nature and severity of the violation.
        </p>
        <h3>7. Policy Updates</h3>
        <p>Sapphire IQ reserves the right to modify or update this Code of Conduct &amp; Communication Guidelines at any time. Continued use of the platform constitutes acceptance of the revised policy.</p>
      </LegalContent>
    </>
  );
}
