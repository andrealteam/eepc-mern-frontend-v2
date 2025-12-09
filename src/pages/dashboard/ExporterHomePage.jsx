import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getExporterHomePage,
  postEdit,
  postEditExporterHomePage,
  postEditProductPanel,
} from "../../services/dashboardMemberApi ";
import { useAuth } from "../../context/AuthContext";
import Skeleton from "react-loading-skeleton";
import { SignJWT } from "jose";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { faEye, faPen, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getProductPanels } from "../../services/aboutApi";
import Select from "react-select";
import Cookies from "js-cookie";

const ExportHomePage = () => {
  const queryClient = useQueryClient();

  const [jtoken, setJtoken] = useState("");
  const [secondEdit, setSecondEdit] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [isProductPanel, setIsProductPanel] = useState(false);
  const [selectedPanels, setSelectedPanels] = useState([]);

  const { user, loading, error } = useAuth();
  if (error) return <div>Error: {error}</div>; // Show any authentication errors

  const member_id = user?.member_id;
  console.log("mmid", member_id);
  // "3106"

  const loggedInUserName = Cookies.get("loggedInUserName");

  console.log("loggedInUserName", loggedInUserName);

  const {
    data: exportData,
    isLoading,
    isError,
    error: profileError,
  } = useQuery({
    queryKey: ["exportData"],
    queryFn: () => getExporterHomePage(member_id),
    enabled: !!member_id,
  });

  const { data: productPanel } = useQuery({
    queryKey: ["productPanel"],
    queryFn: getProductPanels,
    gcTime: 180000,
    enabled: true,
  });

  // ✅ useMemo ensures panelOptions doesn’t change on every render
  const panelOptions = useMemo(() => {
    return (
      productPanel?.map((panel) => ({
        value: panel?.panel_name,
        label: panel?.panel_name,
      })) || []
    );
  }, [productPanel]);

  // ✅ useEffect runs only when data actually changes
  useEffect(() => {
    if (exportData?.data?.product_panel && panelOptions.length > 0) {
      const panels = exportData.data.product_panel
        ?.replace(/,,/g, ",")
        ?.split(",")
        ?.map((p) => p.trim())
        ?.filter(Boolean) || [];

      const matched = panelOptions.filter((opt) => panels.includes(opt.value));

      setSelectedPanels(matched);
    } else if (!exportData?.data?.product_panel) {
      setSelectedPanels([]);
    }
  }, [exportData?.data?.product_panel, panelOptions, isProductPanel]);

  console.log("pro panel names", productPanel);

  const { mutateAsync: editClick } = useMutation({
    mutationFn: () => postEdit(member_id),
    onSuccess: (response) => {
      console.log("Edit response:", response);
      // jab postEdit successfully ho jaye, editClickData ko refetch karo
      queryClient.invalidateQueries(["exportData"]);
    },
  });

  const secret = new TextEncoder().encode("fgghw53ujf8836d");

  const createToken = async () => {
    if (!exportData?.data?.url || !member_id) {
      return "";
    }
    console.log("url check", exportData?.data?.url);
    const token = await new SignJWT({
      memberId: member_id,
      website_url: exportData?.data?.url,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("120m")
      .sign(secret);

    console.log("JWT Token:", token);
    return token;
  };

  useEffect(() => {
    if (exportData?.data?.url && member_id) {
      const generateToken = async () => {
        const token = await createToken();
        setJtoken(token);
      };

      generateToken();
    }
  }, [exportData?.data?.url, member_id]);

  useEffect(() => {
    console.log(" tokeeeeeee", jtoken);
  }, [jtoken]);

  console.log("member idddd", exportData?.data);

  if (isError)
    return <p>Error: {profileError.message || "Something went wrong!"}</p>;

  if (isLoading) {
    return (
      <div className="col-lg-12" style={{ marginTop: "2px" }}>
        <Skeleton height={200} />
        <div className="row" style={{ display: "flex", marginTop: "2px" }}>
          <div className="col-lg-6" style={{ paddingRight: "2px" }}>
            <Skeleton height={300} width={500} />
          </div>
          <div className="col-lg-6" style={{ paddingLeft: "5px" }}>
            <Skeleton height={300} width={450} />
          </div>
        </div>
      </div>
    );
  }

  let isEdit = exportData?.data?.is_edit;

  let isPublish = exportData?.data?.is_publish;

  console.log("isEdit", isEdit, isPublish);

  let status = exportData?.data?.status;

  let Finalstatus = exportData?.data?.final_status;

  let isActive = exportData?.data?.active_status;

  // console.log("isActive",typeof isActive)

  const renderStatusMessage = () => {
    const {
      status,
      final_status,
      is_final_status,
      link_expire_status,
      url,
      reject_message,
      is_final_publish,
    } = exportData?.data || {};

    let isEdit = exportData?.data?.is_edit;

    let isPublish = exportData?.data?.is_publish;
    console.log("status check", final_status, isEdit, isPublish);
    console.log("isEEdit", typeof isEdit);

    let statusMsg = "";
    let showEditButton = false;

    const getFinalStatusColor = () => {
      switch (statusMsg) {
        case "Approved":
          return "success"; // green
        case "In-Review":
          return "info"; // blue
        case "In-Draft":
          return "warning"; // yellow
        case "Rejected":
          return "danger"; // red
        case "In-Process":
          return "primary"; // blue
        default:
          return "secondary"; // grey
      }
    };

    // Decide status message
    if (status === "review" && final_status === "final-review") {
      statusMsg = "In-Review";
    } else if (status === "rejected") {
      statusMsg = "Rejected";
    } else if (status === "approved") {
      if (
        final_status === "final-review" &&
        is_final_status === "false" &&
        isEdit === "false"
      ) {
        statusMsg = "In-Process";
      } else if (final_status === "final-approved" && isEdit === "true") {
        statusMsg = "In-Draft";
      } else if (final_status === "final-approved") {
        statusMsg = "Approved";
      } else if (
        final_status === "final-review" &&
        isEdit === "false" &&
        isPublish === "false"
      ) {
        statusMsg = "In-Draft";
      } else if (
        final_status === "final-review" &&
        (isEdit === "true" || isPublish === "true")
      ) {
        statusMsg = isEdit === "true" ? "In-Draft" : "In-Review";
      } else if (final_status === "final-rejected" && isEdit === "true") {
        statusMsg = "In-Draft";
      } else if (final_status === "final-rejected") {
        statusMsg = "Rejected";
      }
    } else {
      statusMsg = "Pending";
    }

    // Decide whether to show Edit button
    showEditButton =
      (final_status === "final-review" && is_final_status === "false") ||
      (final_status === "final-approved" && is_final_status === "true") ||
      final_status === "final-rejected";

    return (
      <div className="status-card-lower mt-3">
        <div className="status-left">
          <div>
            <div className="mb-2" style={{ fontSize: "22px" }}>
              Status:{" "}
              {exportData?.data?.link_expire_status === "false" && (
                <span className={`badge bg-${getFinalStatusColor()}`}>
                  {statusMsg}
                </span>
              )}
            </div>

            {/* Extra status messages */}
            {statusMsg === "In-Review" &&
              exportData?.data?.link_expire_status === "false" && (
                <div
                  className="text-info status-text"
                  style={{ fontSize: "16px" }}
                >
                  Please wait, your request is under review.
                </div>
              )}

            {/* Extra status messages */}
            {statusMsg === "In-Process" &&
              exportData?.data?.link_expire_status === "false" && (
                <div
                  className=" status-text"
                  style={{ fontSize: "16px", color: "rgb(53 111 197)" }}
                >
                  You have successfully registered. Now you can proceed to
                  create your profile.
                </div>
              )}

            {statusMsg === "In-Draft" &&
              exportData?.data?.link_expire_status === "false" && (
                <div
                  className="text-warning status-text"
                  style={{ fontSize: "16px" }}
                >
                  Changes are in process. Publish to make your website live.
                </div>
              )}

            {statusMsg === "Approved" &&
              exportData?.data?.link_expire_status === "false" && (
                <div
                  className="text-success status-text"
                  style={{ fontSize: "16px" }}
                >
                  Your request has been approved successfully.
                </div>
              )}

            {exportData?.data?.link_expire_status === "true" && (
              <div
                className="mt-2 text-danger status-text"
                style={{ fontSize: "16px" }}
              >
                Your website has been expire please renew your website.
              </div>
            )}

            {/* Show reject message in new line with red color */}
            {final_status === "final-rejected" &&
              exportData?.data?.link_expire_status === "false" && (
                <div
                  className="mt-2 text-danger status-text"
                  style={{ fontSize: "16px" }}
                >
                  <span className="fw-bold" style={{ color: "black" }}>
                    Reason of reject :
                  </span>{" "}
                  {"  "}
                  {reject_message}
                </div>
              )}

            {status === "rejected" && (
              <div
                className="mt-2 text-danger status-text"
                style={{ fontSize: "16px" }}
              >
                Please contact:{" "}
                <a href="mailto:support@eepcindia.org">support@eepcindia.org</a>
              </div>
            )}
          </div>
        </div>

        {/* Buttons */}
        {status === "approved" &&
        exportData?.data?.link_expire_status === "false" ? (
          <div className="status-right d-flex gap-2 flex-wrap">
            {showEditButton && (
              <button
                className="btn btn-primary"
                style={{ backgroundColor: "#09367a" }}
                onClick={() =>
                  final_status === "final-approved"
                    ? setSecondEdit(true)
                    : EditHandle()
                }
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
            )}

            <button
              className="btn btn-secondary"
              onClick={() =>
                (window.location.href = `https://eepc-exporter-home-page.vercel.app/preview/${jtoken}`)
              }
            >
              <FontAwesomeIcon icon={faEye} />
            </button>

            {is_final_publish === "true" && (
              <button
                onClick={() => handleOpenLive(url)}
                rel="noopener noreferrer"
                className={`btn ${
                  link_expire_status === "true" ? "btn-danger" : "btn-success"
                }`}
              >
                Live Website
              </button>
            )}
          </div>
        ) : (
          exportData?.data?.link_expire_status === "true" && (
            <div className="status-right d-flex gap-2 flex-wrap">
              <button className="btn btn-warning">Renew</button>
            </div>
          )
        )}
      </div>
    );
  };

  // sender (your app)
  function handleOpenLive(url) {
    let Rdata = {
      adminCompany: user?.loggedInUserName ? user?.loggedInUserName : "",
    };
    const newWindow = window.open(
      `https://eepc-exporter-home-page.vercel.app/${url}`,
      "_blank"
    );
    setTimeout(() => {
      newWindow.postMessage(
        { isAdmin, Rdata },
        `https://eepc-exporter-home-page.vercel.app`
      );
    }, 1000); // 1s delay, taaki dusri window load ho jaye
  }

  async function submitProductPanel() {
    const filterProductPanel =
      selectedPanels?.map((e) => e.label) || [];

    let response = await postEditProductPanel(member_id, filterProductPanel);

    console.log("response", response);

    if (response.status) {
      setIsProductPanel(false);
      toast.success(response?.message);
      queryClient.invalidateQueries(["exportData"]);
    } else {
      toast.error("unable to post data");
    }

    console.log("filterProductPanel", filterProductPanel);
  }

  async function EditHandle() {
    const response = await editClick();
    console.log("EditHandle response:", response);
    if (response.status) {
      toast.success("Your request has been sent for edit.");
      if (exportData?.data?.final_status === "final-approved") {
        // let res = await postEditExporterHomePage(exportData?.data?.member_id);
        // if (res.status) {
        //   queryClient.invalidateQueries(["colleagues"]);

        // }
        window.location.href =
          // `https://eepc-exporter-home-page.vercel.app/auth?token=${jtoken}`;
          `https://eepc-exporter-home-page.vercel.app/auth?token=${jtoken}`;
        setSecondEdit(false);
      } else {
        window.location.href =
          // `https://eepc-exporter-home-page.vercel.app/auth?token=${jtoken}`;

          `https://eepc-exporter-home-page.vercel.app/auth?token=${jtoken}`;
      }
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  }

  console.log("export home page", exportData);
  return (
    <>
      {exportData?.status == false ? (
        <div className=" profile-details">
          <div
            className="content-box"
            style={{ boxShadow: "none", gap: "10px" }}
          >
            <h1 className="headline">
              Do you want to create your own profile?
            </h1>
            <a
              // href="http://localhost:4000/"
              href="https://eepc-exporter-home-page.vercel.app/"
              className="cta-button"
              style={{ backgroundColor: "#09367a" }}
            >
              Click Here
            </a>
          </div>
        </div>
      ) : (
        <>
          <div class="staus-card">
            {isLoading ? (
              <Skeleton height={200} />
            ) : (
              <div class="status-card-upper">
                <h3>{exportData?.data?.name || ""}</h3>
                <p>
                  <b>IEC No. :</b> {exportData?.data?.eic_no || ""}
                </p>
                <p>
                  <b>Member Code :</b> M{exportData?.data?.member_id || ""}
                </p>
                <p>
                  <b>Phone No. :</b> {exportData?.data?.phone || ""}
                </p>
                <p>
                  <b>Email :</b> {exportData?.data?.email || ""}
                </p>
                <p>
                  <b>Address :</b> {exportData?.data?.address || ""}
                </p>
                <p>
                  <b>Registration Date :</b>{" "}
                  {exportData?.data?.registration_date || ""}
                </p>

                <p className="selected-panel">
                  <b>Selected Panel :</b>{" "}
                  {isProductPanel ? (
                    <>
                      <Select
                        isMulti
                        options={panelOptions || []}
                        value={selectedPanels || []}
                        onChange={(selected) =>
                          setSelectedPanels(selected || [])
                        }
                        placeholder="Search and select panels"
                        closeMenuOnSelect={false}
                        styles={{
                          control: (base) => ({
                            ...base,
                            // minHeight: "40px",
                            width: "300px",
                            position: "relative",
                            zIndex: 10,
                            // ❌ removed overflowY: auto to avoid double scroll
                            flexWrap: "nowrap", // ❌ keep all selected items in single line
                            overflowX: "auto", // ✅ horizontal scroll if too many selected
                          }),
                          multiValueLabel: (base) => ({
                            ...base,
                            maxWidth: "100px",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }),
                          multiValue: (base) => ({
                            ...base,
                            maxHeight: "24px",
                            display: "flex",
                            alignItems: "center",
                          }),
                          menu: (base) => ({
                            ...base,
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            width: "100%",
                            zIndex: 20,
                            // maxHeight: "150px",
                            overflowY: "auto",
                            backgroundColor: "white",
                            border: "1px solid #ccc",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                            overflowY: "auto",
                          }),
                          option: (base) => ({
                            ...base,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }),
                        }}
                      />

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "end",
                          marginTop: "10px",
                          gap: "10px",
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => setIsProductPanel(false)}
                          style={{
                            background: "#ccc",
                            border: "none",
                            padding: "6px 14px",
                            borderRadius: "6px",
                            cursor: "pointer",
                          }}
                        >
                          Cancel
                        </button>

                        <button
                          type="button"
                          onClick={submitProductPanel}
                          style={{
                            background:
                              selectedPanels.length > 0 ? "#1a83c6" : "#9ca3af", // blue if active, gray if disabled
                            color: "#fff",
                            border: "none",
                            padding: "6px 14px",
                            borderRadius: "6px",
                            cursor:
                              selectedPanels.length > 0
                                ? "pointer"
                                : "not-allowed",
                            opacity: selectedPanels.length > 0 ? 1 : 0.6,
                            transition: "all 0.2s ease",
                          }}
                          disabled={selectedPanels.length === 0} // ✅ disable when none selected
                        >
                          Done
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      {exportData?.data?.product_panel
                        ? exportData.data.product_panel
                            .replace(/,,/g, ", ")
                            .trim()
                        : ""}
                      <FontAwesomeIcon
                        icon={faPen}
                        className="edit-icon"
                        title="Edit Panel"
                        onClick={() => setIsProductPanel(true)}
                      />
                    </>
                  )}
                </p>

                {status === "approved" && (
                  <h4 class="exp-date">
                    Website Expires on : {exportData?.data?.expiry_date || ""}
                  </h4>
                )}
              </div>
            )}
            {isActive === "1" ? (
              <>{renderStatusMessage()}</>
            ) : (
              <>
                <div className="status-card-lower mt-3">
                  <div className="status-left">
                    <div
                      className="mt-2 text-danger status-text"
                      style={{ fontSize: "16px" }}
                    >
                      Your website has been de-activated by Admin. Please
                      contact:{" "}
                      <a href="mailto:support@eepcindia.org">
                        support@eepcindia.org
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}

            {secondEdit && (
              <div
                className="modal d-block"
                tabIndex="-1"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  zIndex: 1050,
                }}
              >
                <div className="modal-dialog modal-dialog-centered justify-content-center">
                  <div className="modal-content" style={{ width: "600px" }}>
                    <div className="modal-body text-center">
                      <h4 className="mb-4">
                        After Click Confirm this will go again for approval. so
                        do you want to confirm?
                      </h4>
                      <button
                        type="button"
                        className="btn btn-secondary mx-2"
                        onClick={EditHandle}
                      >
                        Confirm
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary mx-2"
                        onClick={() => setSecondEdit(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};
export default ExportHomePage;


