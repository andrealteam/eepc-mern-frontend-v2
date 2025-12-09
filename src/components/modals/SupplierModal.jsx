import React from "react";
import { useNavigate } from "react-router-dom";

const SupplierModal = ({ openModal, handleCloseModal, modalContent }) => {
  if (!openModal) return null;

  const navigate = useNavigate();

  const handleMailSupplierClick = () => {
    handleCloseModal();
    navigate("/send-supplier-mail", {
      state: { email: modalContent.E_Mail },
    });
  };

  return (
    <>
      <div
        className="modal fade show .modalTender"
        tabIndex="-1"
        role="dialog"
        style={{ display: "block" }}
        aria-modal="true"
      >
        <div
          className="modal-dialog modal-dialog-centered justify-content-center myModal"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{modalContent.Organization_Name}</h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleCloseModal}
              ></button>
            </div>
            <div className="modal-body p-4">
              {/* Render all modal content dynamically */}
              {Object.entries(modalContent).map(([key, value]) => (
                <div key={key}>
                  <strong>{key.replace(/_/g, " ")}</strong>: {value}
                </div>
              ))}
            </div>
            {/* Modal Footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleMailSupplierClick}
              >
                Mail Supplier
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal-backdrop fade show"
        onClick={handleCloseModal}
      ></div>
    </>
  );
};

export default SupplierModal;
