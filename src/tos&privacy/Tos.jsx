import React from "react";
import blacklogo from "../assets/blacklogo.png";

function Tos() {
  return (
    <div className="p-4 lg:py-10 lg:px-60">
      <img src={blacklogo} width={250} className="mb-10" />
      <hr />

      <h1 className="text-4xl mt-10 mb-4">Terms of Use</h1>
      <p>
        Welcome to Steppost ("us", "we", or "our"). These Terms of Use ("Terms") govern your use of
        the Steppost software and any related services (collectively, the "Service"). By accessing
        or using the Service, you agree to be bound by these Terms. If you do not agree to these
        Terms, please refrain from using the Service.
      </p>

      <h2 className="text-3xl mt-10  mb-4">1. Use of the Service</h2>
      <h3 className="text-xl font-bold">1.1. Eligibility</h3>
      <p>
        You must be at least 18 years old or of legal age in your jurisdiction to use the Service.
        By accessing and using the Service, you represent and warrant that you have the right,
        authority, and capacity to enter into these Terms.
      </p>

      <h3 className="text-xl font-bold">1.2. License</h3>
      <p>
        Subject to your compliance with these Terms, Steppost grants you a limited, non-exclusive,
        non-transferable, and revocable license to use the Service for your personal or business
        use. This license does not permit you to resell, distribute, sublicense, or modify the
        Service.
      </p>

      <h3 className="text-xl font-bold">1.3. Account Registration</h3>
      <p>
        To access certain features of the Service, you may need to create an account. You agree to
        provide accurate and complete information during the registration process and to keep your
        account credentials secure. You are solely responsible for any activity that occurs under
        your account.
      </p>

      <h2 className="text-3xl mt-10 mb-4">2. User Content</h2>
      <h3 className="text-xl font-bold">2.1. Posting Content</h3>
      <p>
        You may have the opportunity to post, upload, or submit content to the Service. By doing so,
        you grant Steppost a worldwide, non-exclusive, royalty-free, sublicensable, and transferable
        license to use, reproduce, distribute, prepare derivative works of, display, and perform the
        content in connection with the Service.
      </p>

      <h3 className="text-xl font-bold">2.2. Content Guidelines</h3>
      <p>
        When posting content, you agree not to submit any material that is unlawful, harmful,
        offensive, defamatory, or infringes upon the rights of others. Steppost reserves the right
        to remove any content that violates these Terms or is otherwise objectionable.
      </p>

      <h2 className="text-3xl mt-10 mb-4">3. Prohibited Conduct</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for any illegal or unauthorized purpose;</li>
        <li>
          Interfere with or disrupt the integrity or performance of the Service or its servers;
        </li>
        <li>
          Attempt to gain unauthorized access to any part of the Service or other users' accounts;
        </li>
        <li>
          Impersonate any person or entity or misrepresent your affiliation with any person or
          entity;
        </li>
        <li>Use any automated means to access the Service or collect information from it;</li>
        <li>Transmit viruses, worms, or any other destructive code through the Service;</li>
        <li>
          Engage in any conduct that restricts or inhibits others from using or enjoying the
          Service;
        </li>
        <li>Violate any applicable laws, regulations, or third-party rights.</li>
      </ul>

      <h2 className="text-3xl mt-10 mb-4">4. Intellectual Property</h2>
      <h3 className="text-xl font-bold">4.1. Ownership</h3>
      <p>
        Steppost retains all rights, title, and interest in and to the Service, including all
        intellectual property rights. These Terms do not grant you any rights to use Steppost's
        trademarks, logos, or other proprietary information.
      </p>

      <h3 className="text-xl font-bold">4.2. Feedback</h3>
      <p>
        If you provide any feedback, suggestions, or ideas regarding the Service, you agree that
        Steppost may use and incorporate such feedback without any obligation to compensate you.
      </p>

      <h2 className="text-3xl mt-10 mb-4">5. Third-Party Content and Links</h2>
      <p>
        The Service may include content from third parties or links to third-party websites.
        Steppost is not responsible for the accuracy, legality, or appropriateness of such content
        or websites. Your interactions with third parties, including advertisers, are solely between
        you and the third party.
      </p>

      <h2 className="text-3xl mt-10 mb-4">6. Modifications to the Service and Terms</h2>
      <p>
        Steppost may update, modify, or discontinue the Service, or these Terms, at any time without
        prior notice. It is your responsibility to review these Terms periodically for any changes.
        Your continued use of the Service after any modifications to these Terms constitutes your
        acceptance of such changes.
      </p>

      <h2 className="text-3xl mt-10 mb-4">7. Disclaimer of Warranties</h2>
      <p>
        THE SERVICE IS PROVIDED ON AN "AS-IS" AND "AS AVAILABLE" BASIS. Steppost MAKES NO
        REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, REGARDING THE SERVICE'S
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. YOUR USE OF THE
        SERVICE IS AT YOUR OWN RISK.
      </p>

      <h2 className="text-3xl mt-10 mb-4">8. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, Steppost SHALL NOT BE LIABLE FOR ANY
        INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES ARISING OUT OF OR IN
        CONNECTION WITH YOUR USE OF THE SERVICE.
      </p>

      <h2 className="text-3xl mt-10 mb-4">9. Indemnification</h2>
      <p>
        You agree to indemnify and hold Steppost, its affiliates, officers, directors, employees,
        and agents harmless from any claim, demand, loss, or damages, including reasonable
        attorneys' fees, arising out of your use of the Service, your violation of these Terms, or
        your violation of any rights of a third party.
      </p>

      <h2 className="text-3xl mt-10 mb-4">10. Governing Law and Dispute Resolution</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of [insert your
        jurisdiction]. Any dispute arising under or relating to these Terms or the Service shall be
        resolved exclusively in the state or federal courts located in [insert your jurisdiction],
        and you hereby consent to the personal jurisdiction of such courts.
      </p>

      <h2 className="text-3xl mt-10 mb-4">Entire Agreement</h2>
      <p>
        These Terms constitute the entire agreement between you and Steppost regarding the Service
        and supersede all prior and contemporaneous agreements, representations, and understandings.
      </p>

      <h2 className="text-3xl mt-10 mb-4">Contact Us</h2>
      <p>
        If you have any questions or concerns about these Terms or the Service, please contact us at{" "}
        <a className="underline text-blue-500" href="mailto:contact@steppost.com">
          contact@steppost.com
        </a>
        .
      </p>

      <p>
        By using the Service, you acknowledge that you have read, understood, and agreed to these
        Terms.
      </p>

      <p>Thank you for choosing Steppost!</p>

      <footer className="text-center mt-10">
        <p className="text-blue-500 font-bold">Privacy</p>
        <p className="text-blue-500 font-bold">Terms Of Use</p>
        <p>All rights reserved. Steppost</p>
      </footer>
    </div>
  );
}

export default Tos;
