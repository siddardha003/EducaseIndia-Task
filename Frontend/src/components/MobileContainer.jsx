const MobileContainer = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#FFFFFFFF] flex items-center justify-center p-4">
      <div className="w-full h-full max-w-[350px] bg-white shadow-lg overflow-hidden border border-gray-100">
        <div className="h-[700px] relative">{children}</div>
      </div>
    </div>
  );
};

export default MobileContainer;
