import React from "react";
import { Link } from "react-router-dom";
import { policyLinks } from "../../utils/constants";

const PolicyHighlights = () => {
  return (
    <section className="pt-70 pb-70 bg-lightblue">
      <div className="container">
        <h2 className="main-heading text-center" id="policy-highlight">
          Policy Highlights
        </h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <p className="text-center">
              EEPC India actively engages with government authorities to address
              the latest trade issues impacting our members. We prioritize
              member feedback before any policy decisions are made, ensuring
              that your voice is heard.
            </p>
          </div>
        </div>

        <ul className="links-wrapper mt-5">
          {/* Map through the array to render the list items dynamically */}
          {policyLinks.map((policyItem) => (
            <li key={policyItem.id}>
              <div className="links-box">
                <Link to={policyItem.link}>
                  <div className="links-blue">
                    <img src={policyItem.icon} alt={policyItem.altText} />
                  </div>
                  {policyItem.altText}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PolicyHighlights;
