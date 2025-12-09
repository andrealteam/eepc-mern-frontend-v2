// TenderModal.js
import React from "react";
import DOMPurify from "dompurify";
import { baseFileURLInfo } from "../../services/api";

const TenderModal = ({ openModal, handleCloseModal, modalContent }) => {
  if (!openModal) return null;

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
              <h5 className="modal-title">
                EEPC Ref. No. {modalContent.eepcRefNo}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleCloseModal}
              ></button>
            </div>
            <div className="modal-body p-5">
              <div className="row justify-content-between">
                <div className="col-lg-4" style={{ alignItems: "center" }}>
                  <img
                    src={baseFileURLInfo + modalContent.flag}
                    alt={modalContent.project}
                    className="img-fluid"
                  />
                  <h3
                    className="text-center mt-3"
                    style={{ color: "#1A83C6", fontWeight: "700", fontSize: "30px" }}
                  >
                    {modalContent.country}
                  </h3>
                </div>
                <div className="col-lg-7">
                  <div className="row">
                    <div className="col-lg-4">
                      <p>
                        <b>Tender For</b>
                      </p>
                    </div>
                    <div className="col-lg-8">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(modalContent.tenderFor),
                        }}
                      />
                    </div>
                    <div className="col-lg-4">
                      <p>
                        <b>Tender/Bid No.</b>
                      </p>
                    </div>
                    <div className="col-lg-8">
                      <p>{modalContent.tenderBidNo}</p>
                    </div>
                    <div className="col-lg-4">
                      <p>
                        <b>Bid Deadline</b>
                      </p>
                    </div>
                    <div className="col-lg-8">
                      <p>{modalContent.bidDeadline}</p>
                    </div>
                    <div className="col-lg-4">
                      <p>
                        <b>Issued By</b>
                      </p>
                    </div>
                    <div className="col-lg-8">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(modalContent.issuedBy),
                        }}
                      />
                    </div>
                    <div className="col-lg-4">
                      <p>
                        <b>Bid Security</b>
                      </p>
                    </div>
                    <div className="col-lg-8">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(modalContent.bidSecurity),
                        }}
                      />
                    </div>
                    <div className="col-lg-4">
                      <p>
                        <b>Other Details</b>
                      </p>
                    </div>
                    <div className="col-lg-8">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(modalContent.otherDetails),
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(modalContent.details),
                  }}
                />
              </div>
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

export default TenderModal;