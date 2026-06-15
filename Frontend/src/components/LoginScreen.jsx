import { useEffect, useRef, useState } from "react";

const LoginScreen = ({ onNavigate }) => {
  const [isLoginHighlighted, setIsLoginHighlighted] = useState(false);
  const highlightTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (highlightTimeoutRef.current) {
        clearTimeout(highlightTimeoutRef.current);
      }
    };
  }, []);

  const highlightLoginButton = () => {
    setIsLoginHighlighted(true);

    if (highlightTimeoutRef.current) {
      clearTimeout(highlightTimeoutRef.current);
    }

    highlightTimeoutRef.current = setTimeout(() => {
      setIsLoginHighlighted(false);
      highlightTimeoutRef.current = null;
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNavigate("account-settings");
  };

  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-full max-w-md min-h-screen px-6 pt-8 bg-gray-100">
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
          <div className="relative border border-gray-300 rounded-md px-3 pb-1">
            <label className="absolute -top-2 left-2 bg-gray-100 px-1 text-xs text-violet-600">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              readOnly
              onClick={highlightLoginButton}
              className="w-full bg-transparent focus:outline-none text-gray-800 text-sm mt-3 cursor-pointer"
            />
          </div>

          {/* Password */}
          <div className="relative border border-gray-300 rounded-md px-3 pb-1">
            <label className="absolute -top-2 left-2 bg-gray-100 px-1 text-xs text-violet-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              readOnly
              onClick={highlightLoginButton}
              className="w-full bg-transparent focus:outline-none text-gray-800 text-sm mt-3 cursor-pointer"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className={`w-full text-white font-medium py-2.5 px-4 rounded-md text-sm cursor-pointer transition-colors duration-200 ${
                isLoginHighlighted ? "bg-blue-200" : "bg-gray-300"
              }`}
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
