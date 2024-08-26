import React from "react";
import blacklogo from "../assets/blacklogo.png";

function Privacy() {
  return (
    <div className="p-4 lg:py-10 lg:px-60">
      <img src={blacklogo} width={250} alt="" />
      <h1 className="text-4xl  mb-4">Privacy</h1>
      <p>
        Thank you for choosing Steppost ("us", "we", or "our"). This Privacy Policy ("Policy")
        explains how we collect, use, disclose, and safeguard your personal information when you use
        our software and related services (collectively, the "Service"). By accessing or using the
        Service, you agree to the practices described in this Policy. If you do not agree with this
        Policy, please refrain from using the Service.
      </p>

      <h2 className="text-3xl mt-10  mb-4">1. Information We Collect</h2>
      <h3 className="text-xl font-bold">1.1. Personal Information:</h3>
      <p>
        When you register an account or use certain features of the Service, we may collect personal
        information, such as your name, email address, and other contact details.
      </p>

      <h3 className="text-xl font-bold">1.2. Usage Data:</h3>
      <p>
        We may automatically collect information about your interactions with the Service, such as
        your IP address, browser type, device information, pages visited, and the time and date of
        your visits.
      </p>

      <h3 className="text-xl font-bold">1.3. Cookies and Similar Technologies:</h3>
      <p>
        We may use cookies, beacons, and other tracking technologies to collect information about
        your preferences and usage patterns. You can control the use of cookies through your browser
        settings.
      </p>

      <h2 className="text-3xl mt-10 mb-4">2. How We Use Your Information</h2>
      <h3 className="text-xl font-bold">2.1. Provide and Improve the Service:</h3>
      <p>
        We use your information to deliver, maintain, and enhance the Service, as well as to develop
        new features and functionalities.
      </p>

      <h3 className="text-xl font-bold">2.2. Personalization:</h3>
      <p>
        We may use your information to personalize your experience with the Service and to provide
        you with relevant content and recommendations.
      </p>
      <h3 className="text-xl font-bold">2.3. Communication:</h3>
      <p>
        We may use your contact information to send you updates, newsletters, and other promotional
        materials related to the Service. You can opt out of receiving such communications at any
        time.
      </p>

      <h3 className="text-xl mb-4">2.4. Analytics: </h3>
      <p>
        We use analytics tools to analyze user behavior and improve the Service's performance and
        user experience.
      </p>
      <h3 className="text-xl mb-4">2.5. Legal Compliance:</h3>
      <p>
        We may use your information to comply with legal obligations and respond to requests from
        law enforcement authorities or government agencies.
      </p>

      <h2 className="text-3xl mt-10 mb-4">3. How We Share Your Information</h2>
      <h3 className="text-xl font-bold">3.1. Service Providers:</h3>
      <p>
        We may share your information with third-party service providers that help us operate the
        Service and perform related functions.
      </p>

      <h3 className="text-xl font-bold">3.2. Affiliates:</h3>
      <p>
        We may share your information with our affiliates for purposes consistent with this Policy.
      </p>
      <h3 className="text-xl font-bold">3.3. Business Transfers:</h3>
      <p>
        If Steppost is involved in a merger, acquisition, or sale of assets, your information may be
        transferred as part of that transaction.
      </p>
      <h3 className="text-xl font-bold">3.4. Legal Requirements:</h3>
      <p>
        We may disclose your information if required by law or in response to a valid legal request.
      </p>

      <h2 className="text-3xl mt-10 mb-4">4. Data Security</h2>
      <p>
        We take reasonable measures to protect your information from unauthorized access,
        disclosure, alteration, or destruction. However, no method of transmission over the Internet
        or electronic storage is entirely secure, and we cannot guarantee absolute security.
      </p>
      <h2 className="text-3xl mt-10 mb-4">5. Third-Party Links and Services</h2>
      <p>
        The Service may contain links to third-party websites and services that are not operated or
        controlled by Steppost. This Policy does not apply to such third-party websites and
        services. We recommend reviewing the privacy policies of those third parties before
        providing any personal information.
      </p>
      <h2 className="text-3xl mt-10 mb-4">6. Your Rights</h2>
      <p>
        You have the right to access, correct, update, and delete your personal information. If you
        wish to exercise any of these rights or have questions about your information, please
        contact us using the contact information provided below.
      </p>
      <h2 className="text-3xl mt-10 mb-4">7. Changes to this Privacy Policy</h2>
      <p>
        Steppost may update this Policy from time to time. We will notify you of any material
        changes by posting the updated Policy on our website or through other communication
        channels. Your continued use of the Service after the changes become effective constitutes
        your acceptance of the revised Policy.
      </p>

      <h2 className="text-3xl mt-10 mb-4">Contact Us</h2>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy Policy or the
        Service, please contact us at{" "}
        <a className="underline text-blue-500" href="mailto:contact@steppost.com">
          contact@steppost.com
        </a>
        .
      </p>

      <p>
        By using the Service, you acknowledge that you have read, understood, and agreed to this
        Privacy Policy.
      </p>

      <p>Thank you for trusting Steppost with your personal information.</p>

      <footer className="text-center mt-10">
        <p>
          <a href="/privacy" className="text-blue-500 font-bold">
            Privacy
          </a>
        </p>
        <a href="/tos" className="text-blue-500 font-bold">
          Terms Of Use
        </a>
        <p>All rights reserved. Steppost</p>
      </footer>
    </div>
  );
}

export default Privacy;
