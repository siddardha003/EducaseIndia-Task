const AccountSettingsScreen = () => {
  return (
    <div className="flex justify-center min-h-screen bg-[#8C8989FF">
      {/* Mobile frame */}
      <div className="w-full max-w-md bg-white min-h-screen">

        {/* Header */}
        <header className="px-4 pt-4 pb-4">
          <h1 className="text-[15px] font-semibold text-gray-900">Account Settings</h1>
        </header>

        {/* Content panel (light grey) */}
        <section className="bg-gray-50 px-6 pt-5 pb-6">
          {/* Profile row */}
          <div className="flex items-start">
            {/* Avatar with purple camera badge */}
            <div className="relative mr-4">
              <img
                src="download.png"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <span className="absolute -bottom-1 left-10 w-6 h-6 rounded-full bg-violet-600 text-white flex items-center justify-center ring-2 ring-gray-50">
                {/* Camera icon */}
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="#fff" stroke="#ccc" strokeWidth="2">
                  <path d="M4 8h3l2-3h6l2 3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z" />
                  <circle cx="12" cy="13" r="3.5" />
                </svg>
              </span>
            </div>

            {/* Name + email */}
            <div className="pt-1">
              <p className="text-[14px] font-semibold text-gray-900 leading-none">Marry Doe</p>
              <p className="text-[12px] text-gray-600 mt-1 leading-none">Marry@Gmail.Com</p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-6 text-[12px] text-gray-600">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod
            Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>

          {/* Dashed divider (exactly like the left image) */}
        </section>
          <div className="border-b border-gray-300 border-dashed"></div>

        {/* Extra dashed track below to match the left screen rhythm */}
        <div className="h-105 bg-gray-50 border-b border-gray-300 border-dashed"></div>
      </div>
    </div>
  );
};

export default AccountSettingsScreen;
