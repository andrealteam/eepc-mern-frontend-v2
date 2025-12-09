import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useMemo, useState } from "react";
import {
  getExporterProfile,
  postExporterProfile,
} from "../../services/internationalApi";
import { DataTableCustom } from "../../components";
import { baseFileURL } from "../../services/api";
import { getProductPanels } from "../../services/aboutApi";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/AuthContext";
import CryptoJS from "crypto-js";

const stateOptions = [
  { value: "andhra_pradesh", label: "Andhra Pradesh" },
  { value: "arunachal_pradesh", label: "Arunachal Pradesh" },
  { value: "assam", label: "Assam" },
  { value: "bihar", label: "Bihar" },
  { value: "chhattisgarh", label: "Chhattisgarh" },
  { value: "goa", label: "Goa" },
  { value: "gujarat", label: "Gujarat" },
  { value: "haryana", label: "Haryana" },
  { value: "himachal_pradesh", label: "Himachal Pradesh" },
  { value: "jharkhand", label: "Jharkhand" },
  { value: "karnataka", label: "Karnataka" },
  { value: "kerala", label: "Kerala" },
  { value: "madhya_pradesh", label: "Madhya Pradesh" },
  { value: "maharashtra", label: "Maharashtra" },
  { value: "manipur", label: "Manipur" },
  { value: "meghalaya", label: "Meghalaya" },
  { value: "mizoram", label: "Mizoram" },
  { value: "nagaland", label: "Nagaland" },
  { value: "odisha", label: "Odisha" },
  { value: "punjab", label: "Punjab" },
  { value: "rajasthan", label: "Rajasthan" },
  { value: "sikkim", label: "Sikkim" },
  { value: "tamil_nadu", label: "Tamil Nadu" },
  { value: "telangana", label: "Telangana" },
  { value: "tripura", label: "Tripura" },
  { value: "uttar_pradesh", label: "Uttar Pradesh" },
  { value: "uttarakhand", label: "Uttarakhand" },
  { value: "west_bengal", label: "West Bengal" },
];

const ExporterProfile = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [modalName, setModalName] = useState("");
  const [modalEmail, setModalEmail] = useState("");
  const [modalPhone, setModalPhone] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [isData, setIsData] = useState("");
  const [showForm, setShowForm] = useState(null);
  const [visitData, setVisitData] = useState(null);
  const [selectedPanel, setSelectedPanel] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const secretKey = "my-secret-key"; // Keep this safe (don’t expose publicly)

  const { user, loading } = useAuth();

  console.log("user in exporterpage", user);

  const queryClient = useQueryClient();

  const { data: exporterProfile } = useQuery({
    queryKey: ["exporter-profile", name, email],
    queryFn: ({ queryKey }) => {
      const [, name, email] = queryKey;
      return getExporterProfile(name, email);
    },
    // gcTime: 180000,
  });
  console.log("exporterProfile", exporterProfile);

  const {
    data: productPanel,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["productPanel"],
    queryFn: getProductPanels,
    gcTime: 180000,
  });

  useEffect(() => {
    const storedData = localStorage.getItem("eepc-exporter-profile");

    if (storedData) {
      const decryptedBytes = CryptoJS.AES.decrypt(storedData, secretKey);
      const decryptedData = JSON.parse(
        decryptedBytes.toString(CryptoJS.enc.Utf8)
      );
      console.log("Decrypted Data:", decryptedData);
      // console.log("stored data in local", JSON.parse(storedData));
      const { modalName, modalEmail, modalPhone } = decryptedData;
      console.log("stored name", modalName);
      setName(modalName || "");
      setEmail(modalEmail || "");
      setPhone(modalPhone || "");
      setIsData(modalName || "");
    }
  }, []);

  const panelOptions =
    productPanel?.map((panel) => ({
      value: panel.panel_name,
      label: panel.panel_name,
    })) || [];

  console.log(productPanel, "panelOptions");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!modalName || !modalEmail) {
      alert("Please fill in all required fields.");
      return;
    }
    // Handle form submission logic here
    const data = { modalName, modalEmail, modalPhone };
    // Encrypt before saving
    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      secretKey
    ).toString();

    localStorage.setItem("eepc-exporter-profile", encrypted);

    // localStorage.setItem(
    //   "eepc-exporter-profile",
    //   JSON.stringify({ modalName, modalEmail, modalPhone })
    // );
    // Trigger useEffect again
    // setRefresh((prev) => !prev);

    console.log("Form submitted with:", { modalName, modalEmail, modalPhone });

    await postTrackHistory(visitData);
    console.log("visited data in submit", visitData);
    // window.open(
    //   `https://eepc-exporter-home-page.vercel.app/${visitData.url}`,
    //   "_blank"
    // );
    // window.open(`https://eepc-exporter-home-page.vercel.app/${visitData.url}`, "_blank");

    let Rdata = {
      name: modalName,
      email: modalEmail,
      phone: modalPhone,
      adminCompany: user?.loggedInUserName ? user?.loggedInUserName : "",
    };
    console.log("Rdata", Rdata);
    // const query = new URLSearchParams(Rdata).toString();
    // window.open(`https://eepc-exporter-home-page.vercel.app/${visitData.url}?${query}`, "_blank");
    const newWindow = window.open(
      `https://eepc-exporter-home-page.vercel.app/${visitData.url}`,
      // `https://eepc-exporter-home-page.vercel.app/${visitData.url}`,
      "_blank"
    );

    // window.onload ka wait mat karo — wo cross-origin ke liye kaam nahi karega
    // Instead ek chhota delay ya "handshake" pattern use karo
    setTimeout(() => {
      newWindow.postMessage(
        { Rdata },
        "https://eepc-exporter-home-page.vercel.app"
        // `https://eepc-exporter-home-page.vercel.app`
      );
    }, 1000); // 1s delay, taaki dusri window load ho jaye
    setName(modalName);
    setEmail(modalEmail);
    setPhone(modalPhone);
    setIsData(modalName);
    setModalName("");
    setModalEmail("");
    setModalPhone("");
    setVisitData(null);
    setShowForm(null);
    // Reset form fields
    // setName("");
    // setEmail("");
    // setPhone("");
    queryClient.invalidateQueries(["exporter-profile"]);
  };

  const postTrackHistory = async (data) => {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const payload = {
        member_id: data.member_id,
        user_name: name || modalName,
        user_phone: phone || modalPhone,
        user_email: email || modalEmail,
        user_lattitude: position.coords.latitude || null,
        user_longitude: position.coords.longitude || null,
      };

      console.log("from api", payload);

      const res = await postExporterProfile(payload);
      if (res.status) {
        setVisitData(null);
        console.log("Message sent successfully");
      }
      console.log("API Response:", res);
    } catch (error) {
      console.error("Geolocation or API error:", error);
      // Optionally handle fallback
    }
  };

  // Filter data based on both panel selection and search term
  const filteredData = useMemo(() => {
    const searchLowerCase = searchTerm.toLowerCase();

    const result =
      exporterProfile
        ?.map((item) => {
          // ✅ 1️⃣ Match Search Term
          const matchesSearch =
            item.name.toLowerCase().includes(searchLowerCase) ||
            item.website_url.toLowerCase().includes(searchLowerCase) ||
            item.email.toLowerCase().includes(searchLowerCase) ||
            item.phone.toLowerCase().includes(searchLowerCase);

          // ✅ 2️⃣ Match Panel Filter
          const selectedValues = selectedPanel.map((opt) => opt.value);
          const matchedPanels =
            item.product_panel_array?.filter((panel) =>
              selectedValues.includes(panel)
            ) || [];

          const matchesPanel =
            selectedValues.length === 0 || matchedPanels.length > 0;

          // ✅ 3️⃣ Match State Filter
          const selectedState = selectedStates.map((opt) =>
            opt.label.toLowerCase().trim()
          );

          const matchedStates =
            selectedState.filter((state) => {
              const address = item.address?.toLowerCase() || "";
              return (
                address.includes(state) ||
                state.includes(address) ||
                address.includes(state.slice(0, 4))
              );
            }) || [];

          const matchesState =
            selectedState.length === 0 || matchedStates.length > 0;

          // ✅ 4️⃣ Return item only if all filters match
          if (matchesSearch && matchesPanel && matchesState) {
            return {
              ...item,
              matchedPanels,
              matchedStates,
            };
          } else {
            return null;
          }
        })
        .filter(Boolean) || [];

    // ✅ 5️⃣ Sort by total number of matches (most relevant first)
    return result.sort((a, b) => {
      const aMatchCount =
        (a.matchedPanels?.length || 0) + (a.matchedStates?.length || 0);
      const bMatchCount =
        (b.matchedPanels?.length || 0) + (b.matchedStates?.length || 0);
      return bMatchCount - aMatchCount; // descending order
    });
  }, [exporterProfile, searchTerm, selectedPanel, selectedStates]);

  console.log("filter dattaaa", filteredData);

  async function checkStoreData(data) {
    const Rdata = {
      name: name,
      email: email,
      phone: phone,
      adminCompany: user?.loggedInUserName ? user?.loggedInUserName : "",
    };
    console.log("Rdata", Rdata);
    const query = new URLSearchParams(Rdata).toString();
    if (isData) {
      setVisitData(data); // still okay to update state if needed
      await postTrackHistory(data); // pass directly
      // window.open(
      //   `https://eepc-exporter-home-page.vercel.app/${data.url}`,
      //   "_blank"
      // );
      // window.open(`https://eepc-exporter-home-page.vercel.app/${visitData.url}?${query}`, "_blank");

      const newWindow = window.open(
        `https://eepc-exporter-home-page.vercel.app/${data.url}`,
        "_blank"
      );

      // window.onload ka wait mat karo — wo cross-origin ke liye kaam nahi karega
      // Instead ek chhota delay ya "handshake" pattern use karo
      setTimeout(() => {
        newWindow.postMessage(
          { Rdata },
          "https://eepc-exporter-home-page.vercel.app"
        );
      }, 1000); // 1s delay, taaki dusri window load ho jaye
    } else {
      setVisitData(data);
      setShowForm(true);
    }
  }

  const data = useMemo(() => {
    return (
      filteredData?.map((item) => ({
        logo: item.logo,
        name: item.name,
        email: item.email,
        phone: item.phone,
        url: item.url,
        member_id: item.member_id,
        is_favorite: item.is_favorite,

        // ✅ Add metadata for matched filters
        matchedPanels: item.matchedPanels,
        matchedStates: item.matchedStates,
      })) || []
    );
  }, [filteredData]);

  console.log("filteredData data", data);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      {/* <DataTableCustom
        title="Exporter Profile"
        data={data || []}
        columns={columns}
        searchFields={commonSearchFields}
        defaultSortBy={commonSortBy}
        isPagination={false}
        isFilteration={true}
        filterOptions={panelOptions}
        selectedValues={selectedPanel}
        setSelectedValue={setSelectedPanel}
      /> */}

      <div class="row mt-5 align-items-center">
        <div class="col-lg-8">
          <h3 class="mb-0">Exporter Panel</h3>
        </div>
        <div class="col-lg-4">
          <form class="search-panel">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </form>
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            width: "100%",
            marginTop: "10px",
          }}
        >
          {/* Panel Selector */}
          <div style={{ width: "48%" }}>
            <Select
              options={panelOptions}
              value={selectedPanel}
              onChange={setSelectedPanel}
              isMulti
              placeholder="Filter by Panel"
              className="select-panel"
              closeMenuOnSelect={false}
            />
          </div>

          {/* State Selector */}
          <div style={{ width: "48%" }}>
            <Select
              options={stateOptions}
              value={selectedStates}
              onChange={setSelectedStates}
              isMulti
              placeholder="Filter by State"
              className="select-state"
              closeMenuOnSelect={false}
            />
          </div>
        </div>
      </div>
      <div class="row mt-5">
        {data?.map((item, index) => (
          <div class="col-lg-4" key={index}>
            <div class="exporter-profile-card position-relative">
              <div
                class="position-absolute"
                style={{ top: "10px", right: "10px" }}
              >
                {item.is_favorite && (
                  <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                )}
              </div>

              <div class="exporter-image">
                <img
                  src={baseFileURL + item.logo} // fixed typo from row.log to row.logo
                  alt="Exporter Logo"
                />
              </div>
              <div class="exporter-text">
                <h3>{item.name}</h3>
                <div class="deet-btn" onClick={() => checkStoreData(item)}>
                  Visit Website
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {/* 🎯 Matched Panels */}
                <div className="matched-tags">
                  {/* 🎯 Matched Panels */}
                  {item.matchedPanels?.length > 0 &&
                    item.matchedPanels.map((panel, index) => (
                      <span
                        key={`panel-${index}`}
                        className="panel-tag"
                        title={panel}
                      >
                        {panel.length > 5 ? panel.slice(0, 6) + "..." : panel}
                      </span>
                    ))}

                  {/* 🎯 Matched States */}
                  {item.matchedStates?.length > 0 &&
                    item.matchedStates.map((state, index) => (
                      <span
                        key={`state-${index}`}
                        className="state-tag"
                        title={state}
                      >
                        {state.length > 5 ? state.slice(0, 6) + "..." : state}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showForm && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "10px",
              // width: "300px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              position: "relative",
            }}
          >
            <button
              onClick={() => setShowForm(null)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              &times;
            </button>

            <h3 style={{ marginBottom: "20px", fontSize: "22px" }}>
              Please take a moment to fill in the details below to unlock full
              access..
            </h3>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={modalName}
                onChange={(e) => setModalName(e.target.value)}
                required
                style={inputStyle}
              />
              <input
                type="email"
                placeholder="Email"
                value={modalEmail}
                onChange={(e) => setModalEmail(e.target.value)}
                required
                style={inputStyle}
              />
              <input
                type="tel"
                placeholder="Phone (Optional)"
                value={modalPhone}
                onChange={(e) => setModalPhone(e.target.value)}
                style={inputStyle}
              />

              <button
                type="submit"
                style={{
                  marginTop: "10px",
                  padding: "10px 15px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #ccc",
  borderRadius: "5px",
};
export default ExporterProfile;
