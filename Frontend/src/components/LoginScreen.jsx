const LoginScreen = ({ onNavigate }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login
    onNavigate('account-settings');
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-white px-8">
      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-6">
          Signin to your<br />
          PopX account
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full space-y-6">
        {/* Email Address */}
        <div>
          <label className="block text-sm font-medium text-blue-600 mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-blue-600 mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="pt-8">
          <button
            type="submit"
            className="w-full bg-gray-400 text-white font-medium py-4 px-6 rounded-xl text-lg transition duration-200"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginScreen;
