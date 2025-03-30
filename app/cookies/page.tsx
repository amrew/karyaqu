export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Cookies Policy</h1>
          <p className="text-xl text-gray-600">
            How we use cookies to improve your experience on Karyaqu
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              What Are Cookies
            </h2>
            <p className="text-gray-600">
              Cookies are small text files that are stored on your device when
              you visit our website. They help us provide you with a better
              experience by remembering your preferences and understanding how
              you use our platform.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              How We Use Cookies
            </h2>
            <div className="space-y-3 text-gray-600">
              <p>We use cookies for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Essential cookies: Required for basic site functionality and
                  security
                </li>
                <li>
                  Authentication cookies: Remember your login status and
                  preferences
                </li>
                <li>
                  Analytics cookies: Help us understand how visitors use our
                  platform
                </li>
                <li>
                  Performance cookies: Improve the speed and performance of our
                  services
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Types of Cookies We Use
            </h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-medium text-gray-800">Session Cookies</h3>
                <p className="text-gray-600">
                  These temporary cookies are deleted when you close your
                  browser. They help us track your activity while using our
                  platform.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-gray-800">
                  Persistent Cookies
                </h3>
                <p className="text-gray-600">
                  These cookies remain on your device for a specified period.
                  They help us remember your preferences and provide a more
                  personalized experience.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Managing Cookies
            </h2>
            <div className="space-y-3 text-gray-600">
              <p>You can control and manage cookies in various ways:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Browser settings: Modify your browser settings to accept,
                  reject, or delete cookies
                </li>
                <li>
                  Private browsing: Use your browser&apos;s private/incognito
                  mode
                </li>
                <li>
                  Cookie preferences: Adjust your cookie preferences through our
                  platform settings
                </li>
              </ul>
              <p className="mt-4">
                Please note that blocking certain cookies may affect the
                functionality of our platform.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Third-Party Cookies
            </h2>
            <p className="text-gray-600">
              Some of our pages may contain content from third-party services
              (like analytics or social media) that may set their own cookies.
              We do not have control over these cookies but include this
              information for transparency.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
            <p className="text-gray-600">
              If you have questions about our use of cookies, please contact us
              at{" "}
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
