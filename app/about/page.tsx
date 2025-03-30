export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">About Karyaqu</h1>
          <p className="text-xl text-gray-600">
            Where makers and creators showcase their products and get feedback
            from the Indonesian tech community.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Our Mission
            </h2>
            <p className="text-gray-600">
              We believe in empowering Indonesian creators and innovators by
              providing them a platform to showcase their work, connect with
              like-minded individuals, and receive valuable feedback from the
              tech community.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              What We Offer
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  A dedicated platform for Indonesian makers to showcase their
                  products
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Community feedback and engagement from tech enthusiasts
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Opportunities to connect with other creators and innovators
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
