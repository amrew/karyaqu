export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            How we handle and protect your information at Karyaqu
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Information We Collect
            </h2>
            <p className="text-gray-600">
              We collect information that you provide directly to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Create an account</li>
              <li>Submit or showcase your products</li>
              <li>Interact with other users</li>
              <li>Provide feedback or comments</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              How We Use Your Information
            </h2>
            <p className="text-gray-600">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Provide and improve our services</li>
              <li>Personalize your experience</li>
              <li>Communicate with you about products and updates</li>
              <li>Ensure platform security and prevent abuse</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Information Security
            </h2>
            <p className="text-gray-600">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Your Rights
            </h2>
            <p className="text-gray-600">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of communications</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:privacy@karyaqu.com"
                className="text-blue-600 hover:text-blue-800"
              >
                privacy@karyaqu.com
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
