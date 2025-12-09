import React from "react";

const RefundCancellationPolicy = () => {
  return (
    <div className="payment-note">
      <p>
        <strong>Please note:</strong> The amount which is being reflected during
        the payment is system generated and based on the inputs provided by the
        applicant and is subject to modification/changes arising out of
        verification/validation, etc.
      </p>
      <p>
        Request for any refund/adjustment is to be e-mailed to{" "}
        <a href="mailto:eepcho@eepcindia.net">eepcho@eepcindia.net</a> in the
        form of a request letter/e-mail along with documentary evidences, for
        consideration.
      </p>
    </div>
  );
};

export default RefundCancellationPolicy;
