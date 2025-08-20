const AccountSettingsScreen = ({ onNavigate }) => {
  return (
    <div className="h-full bg-white px-8 py-12">
      {/* Header */}
      <div className="text-left mb-8">
        <h1 className="text-xl font-semibold text-gray-900">Account Settings</h1>
      </div>

      {/* Profile Section */}
      <div className="flex items-start space-x-4 mb-8">
        {/* Profile Image */}
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 rounded-full overflow-hidden flex items-center justify-center">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          {/* Verified Badge */}
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Marry Doe</h2>
          <p className="text-gray-500 text-sm">Marry@Gmail.Com</p>
        </div>
      </div>

      {/* Description */}
      <div className="text-gray-500 text-sm leading-relaxed mb-8">
        Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </div>

      {/* Back Button */}
      <div className="mt-auto">
        <button
          onClick={() => onNavigate('welcome')}
          className="text-blue-600 hover:text-blue-700 font-medium transition duration-200 flex items-center"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Welcome
        </button>
      </div>
    </div>
  );
};

export default AccountSettingsScreen;
