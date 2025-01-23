import React from "react";

const MediaSection = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="lg:order-2 md:order-2 order-1">
          <div className="flex justify-center border-8 rounded border-white shadow-xl shadow-gray-400  space-x-10  ">
            <img
              src="https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063138.jpg?ga=GA1.1.1081519794.1729228805&semt=ais_hybrid"
              alt="Mobile interface dark"
              className="w-full object-contain "
            />
          </div>
        </div>

        <div className="space-y-6 order-2 md:order-1 lg:order-1 ">
          <div>
            <h2 className="text-sm text-blue-600 font-semibold mb-2">
              WHO WE ARE
            </h2>
            <h1 className="text-4xl font-bold mb-4">
              Today's a better time to connect with people on social media.
            </h1>
            <p className="text-gray-600">
              Dignissim conubia phasellus potenti orci porttitor sollicitudin
              morbi aptent rhoncus mollis magnis
            </p>
          </div>

          <div className="space-y-4">
            {[
              { label: "Project Done", value: 97 },
              { label: "Boost Traffic", value: 40 },
              { label: "Increase Revenue", value: 60 },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="h-2 bg-white rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSection;
