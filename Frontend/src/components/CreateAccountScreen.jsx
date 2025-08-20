import { useState } from "react";

const CreateAccountScreen = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: "Marry Doe",
    phoneNumber: "Marry Doe",
    email: "Marry Doe",
    password: "Marry Doe",
    companyName: "Marry Doe",
    isAgency: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      isAgency: value === "yes",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onNavigate("account-settings");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Mobile Container */}
      <div className="w-full min-h-screen px-6 py-10 bg-gray-100">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 leading-snug mb-8">
          Create your <br />
          PopX account
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 relative pb-20 bg-gray-100">
          {/* Input with label inside */}
          {[
            { label: "Full Name*", name: "fullName", type: "text" },
            { label: "Phone number*", name: "phoneNumber", type: "tel" },
            { label: "Email address*", name: "email", type: "email" },
            { label: "Password*", name: "password", type: "password" },
            { label: "Company name", name: "companyName", type: "text" },
          ].map((field, idx) => (
            <div
              key={idx}
              className="relative border border-gray-300 bg-gray-100 rounded-md px-3 pb-1"
            >
              <label className="absolute -top-2 left-2 bg-gray-100 px-1 text-xs text-violet-600">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
                className="w-full bg-transparent focus:outline-none text-gray-800 text-sm mt-3"
                required={field.label.includes("*")}
              />
            </div>
          ))}

          {/* Are you an Agency */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">
              Are you an Agency?*
            </p>
            <div className="flex space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="agency"
                  checked={formData.isAgency}
                  onChange={() => handleRadioChange("yes")}
                  className="mr-2 w-5 h-5 accent-violet-600"
                />
                Yes
              </label>
              <label className="flex items-center ">
                <input
                  type="radio"
                  name="agency"
                  checked={!formData.isAgency}
                  className="mr-2 w-5 h-5 accent-violet-600"
                />
                No
              </label>
            </div>
          </div>
          {/* Submit */}
        </form>
        <button
            onClick={handleSubmit}
            type="button"
            className="absolute left-4 bottom-4 w-80 bg-violet-600 text-white font-semibold py-3 rounded-md hover:bg-violet-700 transition duration-200 cursor-pointer"
          >
            Create Account
          </button>
      </div>
    </div>
  );
};

export default CreateAccountScreen;
