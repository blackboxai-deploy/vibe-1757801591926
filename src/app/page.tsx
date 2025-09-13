export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-rose-100">
      <div className="text-center space-y-6 p-8">
        <div className="relative">
          {/* Decorative background element */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-rose-500 blur-3xl opacity-20 rounded-full transform scale-150"></div>
          
          {/* Main heading */}
          <h1 className="relative text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
            Good Morning!
          </h1>
        </div>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-2xl mx-auto">
          Welcome to your beautiful Next.js application
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8">
          <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-rose-500 text-white font-semibold rounded-full shadow-lg hover:from-red-600 hover:to-rose-600 transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            Get Started
          </button>
          
          <button className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:from-rose-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            Learn More
          </button>
          
          <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-400 text-white font-semibold rounded-full shadow-lg hover:from-pink-600 hover:to-red-500 transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            Contact Us
          </button>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center space-x-4 pt-8">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-rose-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        
        {/* Additional info */}
        <div className="pt-8">
          <p className="text-sm text-gray-500">
            Built with ❤️ using Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  )
}