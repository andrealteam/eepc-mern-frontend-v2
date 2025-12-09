import { useNavigate } from "react-router-dom";

const GenericModal = ({ openModal, handleCloseModal, header, content }) => {
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
          style={{marginTop:"124px"}}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{header}</h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleCloseModal}
              ></button>
            </div>
            <div className="modal-body p-4">
              <div
                dangerouslySetInnerHTML={{
                  __html: content,
                }}
              />
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
export default GenericModal;
