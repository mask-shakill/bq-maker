import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, User } from "lucide-react";

export default function Landing() {
  return (
    <div className="">
      {/* Content Container */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 lg:pt-16">
        {/* Creator Card - Responsive positioning and sizing */}
        <div className="hidden md:block absolute left-4 lg:left-20 top-40 bg-white rounded-xl shadow-xl p-3 md:p-4 animate-float">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-8 md:w-10 h-8 md:h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <svg
                className="w-4 md:w-6 h-4 md:h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm md:text-base  font-semibold">Content</div>
              <div className="text-xs md:text-sm text-gray-600">
                50K Creators
              </div>
            </div>
          </div>
          <div className="flex gap-0.5 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-3 md:w-4 h-3 md:h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>

        {/* User Stats Card - Responsive positioning and sizing */}
        <div className="hidden md:block absolute right-4 lg:right-20 top-60 bg-white rounded-xl shadow-lg p-2 md:p-3 animate-float delay-150">
          <div className="flex items-center gap-2 md:gap-3">
            <User className="text-orange-600" size={50} />
            <div>
              <div className="text-sm md:text-base font-semibold">5k+</div>
              <div className="text-xs md:text-sm text-gray-600">Happy user</div>
            </div>
          </div>
        </div>

        {/* Main Content - Responsive text and spacing */}
        <div className="max-w-4xl mx-auto text-center pt-8 md:pt-16 lg:pt-20">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6 lg:mb-8 leading-tight">
            Write content
            <br className="hidden sm:block" />
            <span className="sm:inline">10x faster</span>
          </h1>

          <div className="space-y-2 md:space-y-3 mb-6 md:mb-8 lg:mb-10">
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Give customers a structural experience they'll and come back.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Join #1 app to track your data.
            </p>
          </div>

          <Link
            href="/signup"
            className="inline-flex items-center gap-2 bg-black text-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-full hover:bg-gray-800 transition-colors"
          >
            Sign up for free
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>

        {/* Mobile Cards - Shown only on small screens */}
        <div className="flex md:hidden justify-between mt-12 px-4">
          <div className="bg-white rounded-xl shadow-lg p-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold">Content</div>
                <div className="text-xs text-gray-600">50K Creators</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-3">
            <div className="flex items-center gap-2">
              <User className="text-orange-600" size={30} />
              <div>
                <div className="text-sm font-semibold">5k+</div>
                <div className="text-xs text-gray-600">Happy user</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
