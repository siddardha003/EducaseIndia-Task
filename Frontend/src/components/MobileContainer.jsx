const MobileContainer = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="relative h-screen max-h-[800px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MobileContainer;
