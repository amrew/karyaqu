export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
          <p className="text-xl text-gray-600">
            Please read these terms carefully before using Karyaqu
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600">
              By accessing or using Karyaqu, you agree to be bound by these
              Terms of Service. If you do not agree to these terms, please do
              not use our platform.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              2. User Accounts
            </h2>
            <div className="space-y-3 text-gray-600">
              <p>When creating an account on Karyaqu, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>
                  Accept responsibility for all activities that occur under your
                  account
                </li>
                <li>
                  Notify us immediately of any unauthorized use of your account
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              3. Content Guidelines
            </h2>
            <div className="space-y-3 text-gray-600">
              <p>
                When showcasing products or providing feedback, you agree not
                to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Post false, misleading, or deceptive content</li>
                <li>
                  Violate any intellectual property rights or other proprietary
                  rights
                </li>
                <li>Share spam, malware, or malicious content</li>
                <li>Engage in harassment or promote hate speech</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              4. Intellectual Property
            </h2>
            <p className="text-gray-600">
              Users retain their intellectual property rights to their original
              content. By posting content on Karyaqu, you grant us a
              non-exclusive, worldwide license to use, display, and distribute
              your content on our platform.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              5. Platform Rules
            </h2>
            <div className="space-y-3 text-gray-600">
              <p>As a member of our community, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide constructive and respectful feedback</li>
                <li>Not manipulate ratings or reviews</li>
                <li>
                  Respect other users&apos; privacy and personal information
                </li>
                <li>Follow all applicable laws and regulations</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              6. Termination
            </h2>
            <p className="text-gray-600">
              We reserve the right to suspend or terminate accounts that violate
              these terms or engage in harmful behavior. Users may also delete
              their accounts at any time.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              7. Contact Us
            </h2>
            <p className="text-gray-600">
              If you have questions about these Terms of Service, please contact
              us at{" "}
              <a
                href="mailto:terms@karyaqu.com"
                className="text-blue-600 hover:text-blue-800"
              >
                terms@karyaqu.com
              </a>
            </p>
          </section>

          <div className="text-sm text-gray-500 pt-6">
            Last updated: March 30, 2025
          </div>
        </div>
      </div>
    </div>
  );
}
