export default function EmailSubscription() {
  return (
    <div className="p-4 bg-gray-100 my-8 flex flex-col gap-4">
      <div className="flex flex-col items-center gap-1">
        <h2 className="text-xl font-bold mb-2 text-gray-500">Subscribe to Our Newsletter</h2>
        <p className="text-sm text-gray-600 mb-4">
          Yes! Send me exclusive offers, unique gift ideas, and personalised tips for shopping and selling on Etsy.
        </p>
      </div>
      <div className="flex mx-44">
        <input
          type="email"
          placeholder="Enter your email"
          className="border p-4 rounded-l-full h-12 w-full"
        />
        <button className="bg-orange-500 text-white px-6 py-2 rounded-r-full">
          Subscribe
        </button>
      </div>
    </div>
  );
}
