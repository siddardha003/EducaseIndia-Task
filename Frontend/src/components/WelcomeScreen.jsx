const WelcomeScreen = ({ onNavigate }) => {
  return (
    <div className="flex flex-col justify-end h-full bg-[#f2f2f2] px-6 pb-8">
      {/* Content Container */}
      <div className="w-full">
        {/* Text Section */}
        <div className="mb-8">
          <h1 className="text-[24px] font-bold text-[#1D1D1D] mb-3">
            Welcome to PopX
          </h1>
          <p className="text-[#8C8989FF] text-[16px] leading-6">
            Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => onNavigate("create-account")}
            className="w-full bg-[#6A3DF4] text-white font-semibold text-[14px] py-3 rounded-md transition-all cursor-pointer"
          >
            Create Account
          </button>

          <button
            onClick={() => onNavigate("login")}
            className="w-full bg-violet-300 text-[#000] font-semibold text-[14px] py-3 rounded-md transition-all cursor-pointer"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
