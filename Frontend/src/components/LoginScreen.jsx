const LoginScreen = ({ onNavigate }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onNavigate("account-settings");
  };

  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-full max-w-md bg-gray-50 min-h-screen px-6 pt-8 bg-gray-100">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-[24px] font-bold text-gray-900 leading-snug mb-2">
            Signin to your <br />
            PopX account
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit,
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Address */}
          <div
            className="relative border border-gray-300 rounded-md px-3 pb-1"
          >
            <label className="absolute -top-2 left-2 bg-gray-100 px-1 text-xs text-violet-600">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              className="w-full bg-transparent focus:outline-none text-gray-800 text-sm mt-3"
            />
          </div>

          {/* Password */}
          <div
            className="relative border border-gray-300 rounded-md px-3 pb-1"
          >
            <label className="absolute -top-2 left-2 bg-gray-100 px-1 text-xs text-violet-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="w-full bg-transparent focus:outline-none text-gray-800 text-sm mt-3"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-gray-300 text-white font-medium py-2.5 px-4 rounded-md text-sm cursor-pointer"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
