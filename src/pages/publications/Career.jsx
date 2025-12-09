import React, { useState } from "react";
import toast from "react-hot-toast";
import { postCareer } from "../../services/publicationApi";

const Career = () => {
  const [formData, setFormData] = useState({
    career_opportunity: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    address: "",
    remarks: "",
    file: null,
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object for file upload
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    console.log("Form Submitted:", formData);
    const res = await postCareer(data);
    if (res.status === "true") {
      toast.success(res?.data);

      // ✅ refetch the profile query
      queryClient.invalidateQueries(["employeeProfile", emp_code]);
      setShowModal(false);
      setSelectedImage(null);
      setPreviewURL("");
    }

    // TODO: send to backend API using fetch or axios
    // fetch("/api/career", { method: "POST", body: data });
  };

  return (
    <div className="career-page">
      {/* Banner Section */}
      <div className="career-banner">
        <div className="career-banner-content">
          <h1>Career</h1>
          <p>Join our team and be part of something great.</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="career-form-container">
        <p className="form-info">
          In case you wish to submit your CV / Resume for positions not listed
          above, you may do so for future recruitments.
        </p>

        <form className="career-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="career_opportunity"
              placeholder="Position Applied For *"
              value={formData.career_opportunity}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone *"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="country"
              placeholder="Country *"
              value={formData.country}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State *"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="city"
              placeholder="City *"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="pincode"
              placeholder="Pin Code *"
              value={formData.pincode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="address"
              placeholder="Address *"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="remarks"
            placeholder="Write your message..."
            value={formData.remarks}
            onChange={handleChange}
          ></textarea>

          <div className="form-file">
            <label>Attach CV/Resume</label>
            <input
              type="file"
              name="resume"
              onChange={handleChange}
              accept=".pdf,.doc,.docx"
            />
          </div>

          <button type="submit" className="btn-submit">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Career;
