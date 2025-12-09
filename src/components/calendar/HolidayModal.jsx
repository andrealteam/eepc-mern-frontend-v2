import React, { useEffect, useState } from "react";
import { baseFileURL } from "../../services/api";

const HolidayModal = ({ selectedHoliday, setSelectedHoliday }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (selectedHoliday) {
      setShowModal(true); // Show modal when a holiday is selected
    } else {
      setShowModal(false); // Hide modal when no holiday is selected
    }
  }, [selectedHoliday]);

  const handleCloseModal = () => {
    setSelectedHoliday(null); // Reset selected holiday and close the modal
  };

  if (!selectedHoliday) return null;

  return (
    <div className="holiday-modal">
      <div
        className={`modal fade ${showModal ? "show" : ""} text-center`}
        tabIndex="-1"
        aria-labelledby="holidayModalLabel"
        aria-hidden={!showModal}
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered justify-content-center modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="holidayModalLabel">
                {selectedHoliday.holiday_name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleCloseModal}
              ></button>
            </div>
            <div className="modal-body">
              <img
                src={
                  selectedHoliday.image && selectedHoliday.image !== "0"
                    ? baseFileURL + selectedHoliday.image
                    : "https://placehold.co/400x225.png?text=No+Image"
                }
                alt={selectedHoliday.holiday_name}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`modal-backdrop fade ${showModal ? "show" : ""}`}
        onClick={handleCloseModal}
      ></div>
    </div>
  );
};

export default HolidayModal;
