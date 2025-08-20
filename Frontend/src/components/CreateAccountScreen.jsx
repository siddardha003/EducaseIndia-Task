import { useState } from 'react';

const CreateAccountScreen = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: 'Marry Doe',
    phoneNumber: 'Marry Doe',
    email: 'Marry Doe',
    password: 'Marry Doe',
    companyName: 'Marry Doe',
    isAgency: true
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (value) => {
    setFormData(prev => ({
      ...prev,
      isAgency: value === 'yes'
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    onNavigate('account-settings');
  };

  return (
    <div className="h-full bg-white px-8 py-12 overflow-y-auto">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">
          Create your<br />
          PopX account
        </h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-blue-600 mb-2">
            Full Name*
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-blue-600 mb-2">
            Phone number*
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-sm font-medium text-blue-600 mb-2">
            Email address*
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-blue-600 mb-2">
            Password*
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-sm font-medium text-blue-600 mb-2">
            Company name
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Are you an Agency */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Are you an Agency?*
          </label>
          <div className="flex space-x-6">
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="radio"
                  name="agency"
                  checked={formData.isAgency}
                  onChange={() => handleRadioChange('yes')}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded-full border-2 ${
                  formData.isAgency 
                    ? 'border-blue-600 bg-blue-600' 
                    : 'border-gray-300 bg-white'
                }`}>
                  {formData.isAgency && (
                    <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                  )}
                </div>
              </div>
              <span className="ml-2 text-gray-700">Yes</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="radio"
                  name="agency"
                  checked={!formData.isAgency}
                  onChange={() => handleRadioChange('no')}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded-full border-2 ${
                  !formData.isAgency 
                    ? 'border-blue-600 bg-blue-600' 
                    : 'border-gray-300 bg-white'
                }`}>
                  {!formData.isAgency && (
                    <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                  )}
                </div>
              </div>
              <span className="ml-2 text-gray-700">No</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-xl text-lg transition duration-200"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccountScreen;
