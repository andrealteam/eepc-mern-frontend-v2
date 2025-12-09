import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import {
  getBirthdays,
  getProfile,
  postBirthdays,
  updateProfile,
  updateProfileImage,
} from "../../services/dashboardEmployeeApi";
import { baseFileURL } from "../../services/api";
import { fallBackImage } from "../../utils/constants";
import { formatDate } from "../../utils/helper/DateFormatter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./profile.css";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFilePdf, faPen, faTimes } from "@fortawesome/free-solid-svg-icons";

const EmployeeProfile = () => {
  const { user, loading: authLoading, error: authError } = useAuth();
  const emp_code = user?.emp_code;

  const [message, setMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedName, setSelectedName] = useState("");
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewURL, setPreviewURL] = useState("");

  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    emp_code: "",
    mobile: "",
    foodPreference: "Veg",
    pan: "",
    passportFile: null,
    passportNo: "",
    passportPlace: "",
    passportIssue: "",
    passportExpiry: "",
    aboutMe: "",
    extraCurricularActivities: "",
    acheivements: "",
  });

  // ✅ Hooks at top-level always
  const {
    data: profileData,
    isLoading: profileLoading,
    isError: profileError,
    error: profileFetchError,
  } = useQuery({
    queryKey: ["employeeProfile", emp_code],
    queryFn: () => getProfile(emp_code),
    enabled: !!emp_code,
    gcTime: 180000,
  });

  console.log("profileData", profileData);

  const {
    data: birthdayData,
    isLoading: birthdayLoading,
    isError: birthdayError,
  } = useQuery({
    queryKey: ["birthdayProfile", emp_code],
    queryFn: () => getBirthdays(emp_code),
    enabled: !!emp_code,
    gcTime: 180000,
  });

  const {
    emp_code: profileEmpCode,
    image,
    emp_name,
    emp_designation,
    emp_office,
    emp_date_of_joining,
    emp_date_of_birth,
    emp_date_of_retirement,
    email_id,
    mobile_no,
    pan_no,
    about_me,
    passport,
    passport_no,
    passport_place_of_issue,
    passport_date_of_issue,
    passport_date_of_expiry,
    food_preference,
    extra_curricular_activities,
    acheivements,
  } = profileData || {};

  // ✅ useEffect safely after profileData exists
  useEffect(() => {
    if (profileData) {
      const {
        emp_code,
        mobile_no,
        food_preference,
        pan_no,
        passport_no,
        passport_place_of_issue,
        passport_date_of_issue,
        passport_date_of_expiry,
        about_me,
        extra_curricular_activities,
        acheivements,
      } = profileData;

      setFormData({
        emp_code: emp_code || "",
        mobile: mobile_no || "",
        foodPreference: food_preference || "Veg",
        pan: pan_no || "",
        passportFile: null,
        passportNo: passport_no || "",
        passportPlace: passport_place_of_issue || "",
        passportIssue: passport_date_of_issue || "",
        passportExpiry: passport_date_of_expiry || "",
        aboutMe: about_me || "",
        extraCurricularActivities: extra_curricular_activities || "",
        acheivements: acheivements || "",
      });
    }
  }, [profileData]);

  // ✅ Conditional UI comes AFTER all hooks
  if (authLoading || profileLoading || birthdayLoading) {
    return <Skeleton height={500} />;
  }

  if (authError) return <div>Error: {authError.message}</div>;
  if (profileError) return <div>Error: {profileFetchError?.message}</div>;
  if (birthdayError) return <Skeleton height={500} />;

  // ✅ Handlers
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "passportFile") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await updateProfile(formData);
    if (res.status === "true") {
      toast.success(res?.data);

      // ✅ refetch the profile query
      queryClient.invalidateQueries(["employeeProfile", emp_code]);
      setIsProfileUpdated(false);
    }
  };

  const handleSendWishesClick = (name) => {
    setSelectedName(name);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedName("");
  };

  const submitWishMsg = async () => {
    const data = {
      id: selectedName?.emp_code,
      emp_from: emp_code,
      message,
    };
    const res = await postBirthdays(data);
    if (res.status === "success") {
      toast.success(res?.data);
      setModalVisible(false);
      setSelectedName("");
      setMessage("");
    }
  };

  const handleEditClick = () => setShowModal(true);
  const handleCloseImageModal = () => {
    setShowModal(false);
    setSelectedImage(null);
    setPreviewURL("");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewURL(URL.createObjectURL(file));
    }
  };

  const handleImageSubmit = async (e) => {
    e.preventDefault();
    if (!selectedImage) return;
    let data = {
      emp_code: emp_code,
      image: selectedImage,
    };
    const res = await updateProfileImage(data);
    if (res.status === "true") {
      toast.success(res?.data);

      // ✅ refetch the profile query
      queryClient.invalidateQueries(["employeeProfile", emp_code]);
      setShowModal(false);
      setSelectedImage(null);
      setPreviewURL("");
    }
  };

  // Swiper won't attach navigation unless refs are ready

  return (
    <div className="row">
      <div className="col-lg-3">
        <div className="profile-card">
          <div
            className="profile-img"
            style={{ position: "relative", padding: "0 25px" }}
          >
            <img
              src={image ? baseFileURL + image : fallBackImage}
              alt={emp_name}
              className="w-100"
              loading="lazy"
            />
            <button
              onClick={handleEditClick}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "#ffffffcc",
                border: "none",
                borderRadius: "50%",
                padding: "8px",
                cursor: "pointer",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              }}
              title="Edit Image"
            >
              <FontAwesomeIcon icon={faPen} />{" "}
            </button>
          </div>
          <div className="profile-text text-center">
            <h3>{emp_name}</h3>
            <p>
              {emp_designation} ({profileEmpCode})
            </p>
          </div>
        </div>
      </div>
      <div
        className="col-lg-9"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <div>
          <div className="row profile-details">
            <div className="col-lg-6">
              <h4>Personal Info</h4>
              <ul>
                <li>Email ID: {email_id}</li>
                <li>Mobile No.: {mobile_no}</li>
                <li>Date of Birth: {formatDate(emp_date_of_birth)}</li>
                <li>PAN No.: {pan_no}</li>
                <li>Food Preference: {food_preference}</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <h4>Official Info</h4>
              <ul>
                <li>Region: {emp_office}</li>
                <li>Date of Joining: {formatDate(emp_date_of_joining)}</li>
                <li>
                  Date of Retirement: {formatDate(emp_date_of_retirement)}
                </li>
                <li>
                  Passport:{" "}
                  {passport ? (
                    <a
                      href={baseFileURL + passport}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <FontAwesomeIcon icon={faFile} style={{ color: "#e74c3c" }} />

                      View
                    </a>
                  ) : (
                    "N/A"
                  )}
                </li>
                <li>Passport No.: {passport_no}</li>
                <li>Place of Issue: {passport_place_of_issue}</li>
                <li>Date of Issue: {formatDate(passport_date_of_issue)}</li>
                <li>Date of Expiry: {formatDate(passport_date_of_expiry)}</li>
              </ul>
            </div>

            <div className="col-lg-12">
              <hr />
              <h4>Additional Info</h4>
              <ul>
                <li>About Me: {about_me}</li>
                <li>
                  Extra Curricular Activities: {extra_curricular_activities}
                </li>
                <li>Achievements: {acheivements}</li>
              </ul>
            </div>
          </div>
        </div>
        <button
          style={{
            backgroundColor: "rgb(29 185 119)",
            color: "white",
            padding: "12px 24px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
          }}
          onClick={() => setIsProfileUpdated(true)}
        >
          Update Profile
        </button>

        {birthdayData?.length > 0 && (
          <div
            style={{
              margin: "20px auto",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.42)",
              fontFamily: "Arial, sans-serif",

              position: "relative",
              overflow: "visible",
              width: "100%",
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "600",
                color: "#4a5568",
                marginBottom: "8px",
                marginTop: "0",
              }}
            >
              Birthday Reminder
            </h2>

            <hr
              style={{
                border: "none",
                height: "1px",
                backgroundColor: "#e2e8f0",
                margin: "16px 0 24px 0",
              }}
            />
            <div style={{ position: "relative", overflow: "visible" }}></div>
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop
              pagination={{ clickable: true }}
            >
              {birthdayData?.map((employee, index) => (
                <SwiperSlide key={index}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "24px",
                      height: "auto",
                      overflow: "visible !important",
                    }}
                  >
                    <div
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        marginRight: "16px",
                        border: "3px solid #3182ce",
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={baseFileURL + employee?.image}
                        alt={employee?.emp_name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div>
                      <h3
                        style={{
                          fontSize: "18px",
                          fontWeight: "600",
                          color: "#3182ce",
                          margin: "0 0 4px 0",
                        }}
                      >
                        {employee?.emp_name}
                      </h3>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#718096",
                          margin: "0 0 8px 0",
                        }}
                      >
                        {employee?.emp_designation}
                      </p>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#718096",
                          margin: "0",
                        }}
                      >
                        <strong>Region :</strong> {employee?.emp_office}
                      </p>
                    </div>
                  </div>

                  <div style={{ marginBottom: "24px" }}>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#4a5568",
                        margin: "0 0 8px 0",
                        fontWeight: "500",
                      }}
                    >
                      Just so you know:
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#4a5568",
                        margin: "0",
                        lineHeight: "1.5",
                      }}
                    >
                      It's <strong>{employee?.emp_name}</strong>'s birthday
                      today. Send your wishes!
                    </p>
                  </div>
                  {employee.emp_code !== emp_code && (
                    <div style={{ width: "100%" }}>
                      <button
                        className="send-wishes-button"
                        style={{ marginBottom: "20px" }}
                        onClick={() => handleSendWishesClick(employee)}
                      >
                        Send Wishes
                      </button>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Modal */}
          </div>
        )}

        {modalVisible && (
          <div className="modal-overlay-custom">
            <div className="modal-custom">
              <span className="modal-close-custom" onClick={handleCloseModal}>
                ×
              </span>
              <h3 className="modal-title-custom">
                Send Wishes to {selectedName?.emp_name}
              </h3>
              <textarea
                className="modal-textarea-custom"
                placeholder="Type your birthday wishes here..."
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                className="modal-send-button-custom"
                onClick={submitWishMsg}
              >
                Send
              </button>
            </div>
          </div>
        )}
        {isProfileUpdated && (
          <div className="modal-backdrop">
            <div className="modal-container">
              {/* Close Icon */}
              <button
                className="close-btn"
                onClick={() => setIsProfileUpdated(false)}
              >
                &times;
              </button>

              <h2>Update Profile</h2>
              <form onSubmit={handleSubmit} className="form-grid">
                <div>
                  <label>MOBILE NO.</label>
                  <input
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="input"
                  />
                </div>

                <div>
                  <label>FOOD PREFERENCE</label>
                  <select
                    name="foodPreference"
                    value={formData.foodPreference}
                    onChange={handleChange}
                    className="input"
                  >
                    <option value="Veg">Veg</option>
                    <option value="Non-Veg">Non-Veg</option>
                  </select>
                </div>

                <div>
                  <label>PAN NO.</label>
                  <input
                    name="pan"
                    value={formData.pan}
                    onChange={handleChange}
                    className="input"
                  />
                </div>

                <div>
                  <label>PASSPORT</label>
                  <input
                    type="file"
                    name="passportFile"
                    onChange={handleChange}
                    accept=".jpg,.jpeg,.pdf,.png"
                    className="input"
                  />
                </div>

                <div>
                  <label>PASSPORT NO.</label>
                  <input
                    name="passportNo"
                    value={formData.passportNo}
                    onChange={handleChange}
                    className="input"
                  />
                </div>

                <div>
                  <label>PASSPORT PLACE OF ISSUE</label>
                  <input
                    name="passportPlace"
                    value={formData.passportPlace}
                    onChange={handleChange}
                    className="input"
                  />
                </div>

                <div>
                  <label>PASSPORT DATE OF ISSUE</label>
                  <input
                    type="date"
                    name="passportIssue"
                    value={formData.passportIssue}
                    onChange={handleChange}
                    className="input"
                  />
                </div>

                <div>
                  <label>PASSPORT DATE OF EXPIRY</label>
                  <input
                    type="date"
                    name="passportExpiry"
                    value={formData.passportExpiry}
                    onChange={handleChange}
                    className="input"
                  />
                </div>

                <div className="textarea-container">
                  <label>ABOUT ME</label>
                  <textarea
                    name="aboutMe"
                    value={formData.aboutMe}
                    onChange={handleChange}
                    className="input"
                    rows="4"
                  />
                </div>

                <div className="textarea-container">
                  <label>Extra Curricular Activities</label>
                  <textarea
                    name="extraCurricularActivities"
                    value={formData.extraCurricularActivities}
                    onChange={handleChange}
                    className="input"
                    rows="4"
                  />
                </div>

                <div className="textarea-container">
                  <label>Acheivements</label>
                  <textarea
                    name="acheivements"
                    value={formData.acheivements}
                    onChange={handleChange}
                    className="input"
                    rows="4"
                  />
                </div>

                <div className="button-container">
                  <button type="submit" className="save-btn">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <FontAwesomeIcon
                icon={faTimes}
                className="close-modal-icon"
                onClick={handleCloseImageModal}
                title="Close"
              />
              <h4>Update Profile Image</h4>
              <form onSubmit={handleImageSubmit}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="form-control"
                />

                {previewURL && (
                  <div className="preview-container">
                    <img
                      src={previewURL}
                      alt="Preview"
                      className="preview-image"
                    />
                  </div>
                )}

                <button type="submit" className="upload-btn">
                  Upload
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeProfile;
