'use client';

export default function BillPopup() {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-sm">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200">
        <div className="bg-blue-500 text-white text-center py-2 rounded-t-lg text-sm font-medium">
          +1 (888) 427-6650
        </div>
        <div className="p-6 text-center">
          <h1 className="text-2xl font-bold mb-2 text-gray-800">
            verizon<span className="text-red-600">✔</span>
          </h1>
          <p className="text-sm text-gray-600 mb-4">authorized retailer</p>
          <p className="text-lg font-medium text-gray-800 mb-6">
            Call to Pay Your Bill Now
          </p>
          <a
            href="tel:+18884276650"
            className="block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            +1 (888) 427-6650
          </a>
        </div>
        <div className="bg-blue-500 text-white text-center py-2 text-sm rounded-b-lg">
          Call Now +1 (888) 427-6650
        </div>
      </div>
    </div>
  );
}
