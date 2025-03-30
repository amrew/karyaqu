export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Common questions about using Karyaqu
          </p>
        </div>

        <div className="space-y-8">
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              General Questions
            </h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900">
                  What is Karyaqu?
                </h3>
                <p className="text-gray-600">
                  Karyaqu is a platform where Indonesian makers and creators can
                  showcase their products and receive valuable feedback from the
                  tech community. It&apos;s a space designed to highlight and
                  support innovation in Indonesia.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900">
                  Is it free to use?
                </h3>
                <p className="text-gray-600">
                  Yes, Karyaqu is completely free for both creators and users.
                  Our mission is to support the growth of the Indonesian tech
                  ecosystem by providing a platform for discovery and feedback.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900">
                  Who can submit products?
                </h3>
                <p className="text-gray-600">
                  Anyone can submit products to Karyaqu. You can either submit
                  your own product as a creator or share interesting products
                  you&apos;ve discovered that were made by Indonesian creators.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              For Creators
            </h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900">
                  How do I submit my product?
                </h3>
                <p className="text-gray-600">
                  Click the &quot;Submit&quot; button in the navigation bar,
                  choose &quot;I&apos;m the Creator&quot; option, and fill out
                  the product details form. Make sure to include a compelling
                  description and high-quality images to showcase your product
                  effectively.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900">
                  What happens after I submit?
                </h3>
                <p className="text-gray-600">
                  Our team will review your submission to ensure it meets our
                  community guidelines. Once approved, your product will be
                  visible to the community, where it can receive feedback,
                  upvotes, and engagement from users.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900">
                  Can I edit my product listing?
                </h3>
                <p className="text-gray-600">
                  Yes, you can edit your product listing at any time through
                  your dashboard. This includes updating descriptions, images,
                  and other details as your product evolves.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              For Community
            </h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900">
                  How can I support creators?
                </h3>
                <p className="text-gray-600">
                  You can support creators by providing constructive feedback,
                  upvoting products you find interesting, and sharing them with
                  your network. Quality engagement helps creators improve their
                  products and reach more users.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900">
                  Can I share products I discover?
                </h3>
                <p className="text-gray-600">
                  Absolutely! If you find an interesting product made by
                  Indonesian creators, you can submit it through the
                  &quot;Sharing a Discovery&quot; option. Just make sure to
                  credit the original creators properly.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Support</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900">
                  How do I report issues?
                </h3>
                <p className="text-gray-600">
                  If you encounter any issues or need to report inappropriate
                  content, please contact our support team at{" "}
                  <a
                    href="mailto:support@karyaqu.com"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    support@karyaqu.com
                  </a>
                  . We aim to respond to all inquiries within 24 hours.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900">
                  Where can I find more help?
                </h3>
                <p className="text-gray-600">
                  Check out our{" "}
                  <a
                    href="/guidelines"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Community Guidelines
                  </a>{" "}
                  for detailed information about using Karyaqu. You can also
                  reach out to our support team for specific questions.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center space-y-4 bg-gray-50 rounded-lg p-8">
          <h2 className="text-xl font-semibold text-gray-900">
            Still have questions?
          </h2>
          <p className="text-gray-600">
            We&apos;re here to help! Contact our support team at{" "}
            <a
              href="mailto:support@karyaqu.com"
              className="text-blue-600 hover:text-blue-800"
            >
              support@karyaqu.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
