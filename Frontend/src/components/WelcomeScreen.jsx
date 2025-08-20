const WelcomeScreen = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-white px-8">
      {/* Logo */}
      <div className="mb-16">
        <div className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center">
          <span className="text-3xl font-bold text-white">1</span>
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to PopX</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit.
        </p>
      </div>

      {/* Buttons */}
      <div className="w-full space-y-4">
        <button
          onClick={() => onNavigate('create-account')}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-xl text-lg transition duration-200"
        >
          Create Account
        </button>
        
        <button
          onClick={() => onNavigate('login')}
          className="w-full bg-purple-200 hover:bg-purple-300 text-purple-700 font-medium py-4 px-6 rounded-xl text-lg transition duration-200"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
