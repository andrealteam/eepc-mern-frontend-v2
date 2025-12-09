import React from "react";

const MailModal = ({
  openModal,
  handleCloseModal,
  email,
  setEmailData,
  emailData,
  handleSendMail,
}) => {
  if (!openModal) return null; // Don't render if the modal is not open

  return (
    <div
      className="modal fade show"
      style={{ display: "block" }}
      aria-modal="true"
    >
      <div
        className="modal-dialog modal-dialog-centered justify-content-center myModal"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Send Mail</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleCloseModal}
            ></button>
          </div>
          <div className="modal-body">
            <div>
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                className="form-control"
                value={emailData.subject}
                onChange={(e) =>
                  setEmailData({ ...emailData, subject: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                className="form-control"
                rows="5"
                value={emailData.message}
                onChange={(e) =>
                  setEmailData({ ...emailData, message: e.target.value })
                }
              ></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={handleSendMail}>
              Send Mail
            </button>
          </div>
        </div>
      </div>
      <div
        className="modal-backdrop fade show"
        onClick={handleCloseModal}
      ></div>
    </div>
  );
};

export default MailModal;
