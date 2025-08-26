import React, { useState } from "react";
import Header from "../../Components/Header";

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [userType, setUserType] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    // Student fields
    DoctorControl: "",
    academicYear: "",
    phonNumberS: "",
    certificate: "",
    // Patient fields
    medicalHistory: "",
    age: "",
    Medicines: "",
    phonNumberP: "",
    //Doctor
    experience: "",
    specialization: "",
    siteclinic: "",
    phonNumberD: "",
    certificateD: "",
  });

  const academicYears = ["Fourth Year", "Fifth Year"];

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditToggle = () => {
    if (isEditing) {
      setUserType(null);
      setFormErrors({});
    }
    setIsEditing(!isEditing);
  };

  const handleUserTypeSelect = (type) => {
    setUserType(type);
    setFormErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!userData.name.trim()) errors.name = "Name is required";
    if (!userData.email.trim()) errors.email = "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (userType === "student") {
      if (!userData.academicYear)
        errors.academicYear = "Academic Year is required";
      if (!userData.phonNumberS)
        errors.academicYear = "phon number is required";
      if (!userData.phonNumberD)
        errors.academicYear = "phon number is required";
    } else if (userType === "patient") {
      if (!userData.medicalHistory.trim())
        errors.medicalHistory = "Medical History is required";
      if (!userData.age.trim()) errors.age = "Age is required";
      if (isNaN(userData.age) || parseInt(userData.age) <= 0)
        errors.age = "Please enter a valid age";
      if (!userData.phonNumberP) errors.phonNumberP = "phon number is required";
      if (!userData.Medicines) errors.Medicines = "Medicines is required";
    } else if (userType === "Doctor") {
      if (!userData.certificateD)
        errors.certificateD = "certificateD is required";
      if (!userData.phonNumberD) errors.phonNumberD = "phon number is required";
      if (!userData.experience) errors.experience = "experience is required";
    }

    return errors;
  };

  const handleSave = async () => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const profileData = {
      name: userData.name,
      email: userData.email,
      profileImage: profileImage || "default.png",
      userType,
      ...(userType === "student"
        ? {
            DoctorControl: userData.DoctorControl,
            academicYear: userData.academicYear,
            phonNumberS: userData.academicYear,
            certificate: userData.certificate,
          }
        : {}),
      ...(userType === "patient"
        ? {
            medicalHistory: userData.medicalHistory,
            age: userData.age,
            Medicines: userData.Medicines,
            phonNumberP: userData.phonNumberP,
          }
        : {}),
      ...(userType === "Doctor"
        ? {
            experience: userData.experience,
            specialization: userData.specialization,
            siteclinic: userData.siteclinic,
            phonNumberD: userData.phonNumberD,
            certificateD: userData.certificateD,
          }
        : {}),
    };

    try {
      const response = await fetch("https://dummyapi.io/data/v1/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profileData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Profile updated successfully:", result);
        setIsEditing(false);
        setFormErrors({});
      } else {
        const errorData = await response.json();
        console.error("Failed to update profile:", errorData);
        setFormErrors({
          submit: errorData.message || "Failed to update profile",
        });
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setFormErrors({ submit: "Network error. Please try again." });
    }
  };

  const renderStudentFields = () => (
    <div className="form-fields-container">
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">
          DoctorControl:
        </label>
        <input
          type="text"
          name="DoctorControl"
          value={userData.DoctorControl}
          onChange={handleInputChange}
          className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            formErrors.university ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your DoctorControl"
        />
        {formErrors.DoctorControl && (
          <span className="text-red-500 text-sm">
            {formErrors.DoctorControl}
          </span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">
          phonNumberS:
        </label>
        <input
          type="number"
          name="phonNumberS"
          value={userData.phonNumberS}
          onChange={handleInputChange}
          className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            formErrors.phonNumberS ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your phonNumberS"
          min="10"
        />
        {formErrors.studentId && (
          <span className="text-red-500 text-sm">{formErrors.studentId}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">
          Academic Year:
        </label>
        <select
          name="academicYear"
          value={userData.academicYear}
          onChange={handleInputChange}
          className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            formErrors.academicYear ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option value="">Select Year</option>
          {academicYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        {formErrors.academicYear && (
          <span className="text-red-500 text-sm">
            {formErrors.academicYear}
          </span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">
          certificate:
        </label>
        <input
          type="text"
          name="certificate"
          value={userData.certificate}
          onChange={handleInputChange}
          className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            formErrors.supervisor ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter certificate's name"
        />
        {formErrors.certificate && (
          <span className="text-red-500 text-sm">{formErrors.certificate}</span>
        )}
      </div>
    </div>
  );

  const renderPatientFields = () => (
    <div className="form-fields-container">
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">
          Medical History:
        </label>
        <textarea
          name="medicalHistory"
          value={userData.medicalHistory}
          onChange={handleInputChange}
          className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            formErrors.medicalHistory ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your medical history"
        />
        {formErrors.medicalHistory && (
          <span className="text-red-500 text-sm">
            {formErrors.medicalHistory}
          </span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Age:</label>
        <input
          type="number"
          name="age"
          value={userData.age}
          onChange={handleInputChange}
          className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            formErrors.age ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your age"
          min="1"
        />
        {formErrors.age && (
          <span className="text-red-500 text-sm">{formErrors.age}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">
          Medical:
        </label>
        <input
          type="text"
          name="Medical"
          value={userData.Medical}
          onChange={handleInputChange}
          className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            formErrors.Medical ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your Medical"
        />
        {formErrors.Medical && (
          <span className="text-red-500 text-sm">{formErrors.Medical}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">
          phonNumberP:
        </label>
        <input
          type="number"
          name="phonNumberP"
          value={userData.phonNumberP}
          onChange={handleInputChange}
          className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            formErrors.phonNumberP ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter emergency phonNumberP"
          min="10"
        />
        {formErrors.phonNumberP && (
          <span className="text-red-500 text-sm">{formErrors.phonNumberP}</span>
        )}
      </div>
    </div>
  );

  const renderDoctorFields = () => (
    <div className="form-fields-container">
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">
          experience:
        </label>
        <textarea
          name="experience"
          value={userData.experience}
          onChange={handleInputChange}
          className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            formErrors.experience ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your experience"
        />
        {formErrors.experience && (
          <span className="text-red-500 text-sm">{formErrors.experience}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">
          academicYear:
        </label>
        <input
          type="number"
          name="academicYear"
          value={userData.academicYear}
          onChange={handleInputChange}
          className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            formErrors.age ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your academicYear"
          min="1"
        />
        {formErrors.academicYear && (
          <span className="text-red-500 text-sm">
            {formErrors.academicYear}
          </span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">
          siteclinic:
        </label>
        <input
          type="text"
          name="siteclinic"
          value={userData.siteclinic}
          onChange={handleInputChange}
          className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            formErrors.siteclinic ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your Medical"
        />
        {formErrors.siteclinic && (
          <span className="text-red-500 text-sm">{formErrors.siteclinic}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">
          certificateD:
        </label>
        <input
          type="text"
          name="certificateD"
          value={userData.certificateD}
          onChange={handleInputChange}
          className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            formErrors.certificateD ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your certificateD"
        />
        {formErrors.siteclinic && (
          <span className="text-red-500 text-sm">{formErrors.siteclinic}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">
          phonNumberD:
        </label>
        <input
          type="number"
          name="phonNumberD"
          value={userData.phonNumberD}
          onChange={handleInputChange}
          className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            formErrors.phonNumberD ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter emergency phonNumberD"
          min="10"
        />
        {formErrors.phonNumberD && (
          <span className="text-red-500 text-sm">{formErrors.phonNumberD}</span>
        )}
      </div>
    </div>
  );

  return (
    <div className="profile-page bg-primary-color min-h-screen">
      <Header />
      <div className="profile-container max-w-2xl mx-auto py-8">
        <div className="profile-card bg-white shadow-lg rounded-lg p-8">
          <div className="profile-header mb-6">
            <h1 className="text-2xl font-bold text-secondary-color">
              Profile Settings
            </h1>
          </div>

          <div className="profile-image-section flex justify-center mb-6">
            <div className="profile-image-container relative">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="profile-image w-32 h-32 rounded-full object-cover border-4 border-sky-blue"
                />
              ) : (
                <div className="profile-image-placeholder flex items-center justify-center w-32 h-32 rounded-full bg-gray-200 border-4 border-blue-400">
                  <i className="fas fa-user text-6xl text-gray-400"></i>
                </div>
              )}
              <label
                className="image-upload-label absolute bottom-2 right-2 bg-sky-blue text-white rounded-full p-2 cursor-pointer shadow-lg hover:bg-blue-600"
                title="Upload Profile Picture"
              >
                <i className="fas fa-camera"></i>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
              </label>
            </div>
          </div>

          <div className="profile-info">
            {!isEditing ? (
              <div className="profile-details space-y-4">
                <div className="info-group">
                  <label className="block text-gray-700 font-semibold">
                    Name
                  </label>
                  <p className="text-gray-800">{userData.name}</p>
                </div>
                <div className="info-group">
                  <label className="block text-gray-700 font-semibold">
                    Email
                  </label>
                  <p className="text-gray-800">{userData.email}</p>
                </div>
                {userType === "student" && (
                  <>
                    <div className="info-group">
                      <label className="block text-gray-700 font-semibold">
                        DoctorControl
                      </label>
                      <p className="text-gray-800">{userData.DoctorControl}</p>
                    </div>
                    <div className="info-group">
                      <label className="block text-gray-700 font-semibold">
                        phonNumberS
                      </label>
                      <p className="text-gray-800">{userData.phonNumberS}</p>
                    </div>
                    <div className="info-group">
                      <label className="block text-gray-700 font-semibold">
                        Academic Year
                      </label>
                      <p className="text-gray-800">{userData.academicYear}</p>
                    </div>
                    <div className="info-group">
                      <label className="block text-gray-700 font-semibold">
                        Certificate
                      </label>
                      <p className="text-gray-800">{userData.certificate}</p>
                    </div>
                  </>
                )}
                {userType === "patient" && (
                  <>
                    <div className="info-group">
                      <label className="block text-gray-700 font-semibold">
                        Medical History
                      </label>
                      <p className="text-gray-800">{userData.medicalHistory}</p>
                    </div>
                    <div className="info-group">
                      <label className="block text-gray-700 font-semibold">
                        Age
                      </label>
                      <p className="text-gray-800">{userData.age}</p>
                    </div>
                    <div className="info-group">
                      <label className="block text-gray-700 font-semibold">
                        Medicines
                      </label>
                      <p className="text-gray-800">{userData.Medicines}</p>
                    </div>
                    <div className="info-group">
                      <label className="block text-gray-700 font-semibold">
                        phonNumberP
                      </label>
                      <p className="text-gray-800">{userData.phonNumberP}</p>
                    </div>
                  </>
                )}
                {userType === "Doctor" && (
                  <>
                    <div className="info-group">
                      <label className="block text-gray-700 font-semibold">
                        experience
                      </label>
                      <p className="text-gray-800">{userData.experience}</p>
                    </div>
                    <div className="info-group">
                      <label className="block text-gray-700 font-semibold">
                        c
                      </label>
                      <p className="text-gray-800">{userData.specialization}</p>
                    </div>
                    <div className="info-group">
                      <label className="block text-gray-700 font-semibold">
                        siteclinic
                      </label>
                      <p className="text-gray-800">{userData.siteclinic}</p>
                    </div>
                    <div className="info-group">
                      <label className="block text-gray-700 font-semibold">
                        phonNumberD
                      </label>
                      <p className="text-gray-800">{userData.phonNumberD}</p>
                    </div>
                    <div className="info-group">
                      <label className="block text-gray-700 font-semibold">
                        certificateD
                      </label>
                      <p className="text-gray-800">{userData.certificateD}</p>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="edit-form">
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-1">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                      formErrors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your name"
                  />
                  {formErrors.name && (
                    <span className="text-red-500 text-sm">
                      {formErrors.name}
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-1">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                      formErrors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your email"
                  />
                  {formErrors.email && (
                    <span className="text-red-500 text-sm">
                      {formErrors.email}
                    </span>
                  )}
                </div>

                <div className="user-type-selector flex space-x-2 mb-4">
                  <button
                    type="button"
                    className={`px-4 py-2 rounded font-semibold border ${
                      userType === "student"
                        ? "bg-buttons-color text-white border-buttons-color"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
                    }`}
                    onClick={() => handleUserTypeSelect("student")}
                  >
                    Student
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-2 rounded font-semibold border ${
                      userType === "patient"
                        ? "bg-buttons-color text-white border-buttons-color"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
                    }`}
                    onClick={() => handleUserTypeSelect("patient")}
                  >
                    Patient
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-2 rounded font-semibold border ${
                      userType === "Doctor"
                        ? "bg-buttons-color text-white border-buttons-color"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
                    }`}
                    onClick={() => handleUserTypeSelect("Doctor")}
                  >
                    Doctor
                  </button>
                </div>

                {userType === "student" && renderStudentFields()}
                {userType === "patient" && renderPatientFields()}
                {userType === "Doctor" && renderDoctorFields()}
                {formErrors.submit && (
                  <div className="text-red-500 text-sm font-semibold mt-2">
                    {formErrors.submit}
                  </div>
                )}
              </div>
            )}

            <div className="button-group flex justify-end space-x-2 mt-6">
              {!isEditing ? (
                <button
                  className="edit-button px-4 py-2 bg-buttons-color text-white rounded font-semibold shadow hover:bg-secondary-color flex items-center"
                  onClick={handleEditToggle}
                >
                  <i className="fas fa-edit mr-2"></i> Edit Profile
                </button>
              ) : (
                <>
                  <button
                    className="save-button px-4 py-2 bg-green-500 text-white rounded font-semibold shadow hover:bg-green-600 flex items-center"
                    onClick={handleSave}
                  >
                    <i className="fas fa-save mr-2"></i> Save Changes
                  </button>
                  <button
                    className="cancel-button px-4 py-2 bg-gray-400 text-white rounded font-semibold shadow hover:bg-gray-500 flex items-center"
                    onClick={handleEditToggle}
                  >
                    <i className="fas fa-times mr-2"></i> Cancel
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
