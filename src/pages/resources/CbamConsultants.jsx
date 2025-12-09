import React, { useState } from "react";
import "./CbamConsultants.css";

const CbamConsultants = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const companies = [
    {
      name: "CarbonMinus (Inizent Internet Solutions Pvt Ltd)",
      contactPerson: "Mr. Nilesh Shedge",
      designation: "Chief Technical Officer (CTO)",
      email: "nilesh@carbonminus.com",
      website: "www.carbonminus.com",
      profile: {
        address:
          "Vishwesh Bunglow, 1st Floor, Pushpak Park, Lane no #2, ITI Road, Aundh Pune 411007",
        city: "Pune",
        state: "Maharashtra",
        pin: "411007",
        contactPerson: "Mr. Nilesh Shedge",
        designation: "Chief Technical Officer (CTO)",
        email: "nilesh@carbonminus.com",
        phone: "9876543210",
        website: "https://carbonminus.com",
        details: `CarbonMinus is a hardware agnostic advanced multi resource analytical and sustainability management platform which helps industries and commercial facilities in increasing shop floor efficiencies and achieve savings in energy and resources at the same time making an environmental impact by reducing the carbon footprint. CarbonMinus adds value to businesses by providing automated compliance reporting for carbon accounting for different compliance’s like ISO50001 EnMS, ISO14064, PAT, CBAM etc. The main objective CarbonMinus tries to achieve for its clients is to adopt, implement and sustain efficiencies and sustainable practices on the shop floor. 

CarbonMinus is presently hosting 80+ multisectoral industries on its platform integrating multiple resources like electricity, gas, water, air, diesel, oil, steam, oxygen etc through smart meters and doing automated result oriented energy audit reports with inputs for conservation along with estimating monetary savings and carbon footprint reduction.   `,
      },
    },

    {
      name: "Sentra.World Technologies Pvt Ltd",
      contactPerson: "Mr. Harsh Choudhry",
      designation: "Co-Founder & CEO",
      email: "harsh.choudhry@sentra.world",
      website: "www.sentra.world",
      profile: {
        address:
          "No. 421/M Shri Krishna Temple Road, Indiranagar 1st Stage, Bangalore, Karnataka, India, 560038",
        city: "Bangalore",
        state: "Karnataka",
        pin: "560038",
        contactPerson: "Mr. Harsh Choudhry",
        designation: "Co-Founder & CEO",
        email: "harsh.choudhry@sentra.world",
        phone: "9667233899",
        website: "https://sentra.world",
        details: `Sentra.world is a climate-tech company that provides a software platform for
industrial manufacturers to manage their carbon emissions and achieve ESG
compliance. It uses AI and blockchain to help companies measure, report, reduce,
and monetize their carbon footprint, with tools for tasks like carbon accounting,
performance monitoring, and automated reporting. Founded in 2023 by two ex-
McKinsey partners, the company is based in Bangalore and has received funding
from investors like Golden Sparrow Ventures and Avaana Capital.`,
      },
    },

    {
      name: "CleanCarbon.ai - Thinksmart Technologies Pvt Ltd",
      contactPerson: "Mr. Nilesh Bhattad",
      designation: "Director",
      email: "nb@cleancarbon.ai",
      website: "https://cleancarbon.ai",
      profile: {
        address: "RH11, ATUL EXCELLENCY, KASPATE WASTI, WAKAD 411057",
        city: "Pune",
        state: "Maharashtra",
        pin: "411057",
        contactPerson: "Mr. Nilesh Bhattad",
        designation: "Director",
        email: "nb@cleancarbon.ai",
        phone: "9529744969",
        website: "https://cleancarbon.ai",
        details: `CleanCarbon.ai is India's number 1 CBAM reporting SaaS-based platform,
dedicated to helping industrial exporters navigate the complexities of the European
Union’s Carbon Border Adjustment Mechanism (CBAM). With deep expertise in
carbon accounting, regulatory frameworks, and sustainability strategy,
CleanCarbon.ai empowers businesses — especially in steel, aluminium, cement, and
fertiliser sectors — to measure, report, and reduce the embedded emissions in their
supply chains. At the core of CleanCarbon.ai’s offering is its end-to-end CBAM
compliance solution. The platform enables companies to collect emissions data from
suppliers, calculate Scope 1, 2, and 3 emissions, generate EU-compliant CBAM
reports (in XML or Excel), and support verification. Through automated workflows
and real-time dashboards, CleanCarbon.ai reduces manual burden, cuts down
reporting costs by up to 50%, and ensures audit-ready documentation. Backed by a
team of CBAM and ESG experts, CleanCarbon.ai also provides tailored advisory,
supplier training, and ongoing support to ensure clients remain fully compliant as EU
regulations evolve. Trusted by over 1000+ exporters, including industry leaders like
Tata, Jindal, L&T, Sonalika Tractors, Southco and Hero, CleanCarbon.ai has already
delivered thousands of verified CBAM reports. CleanCarbon.ai is SEBI approved
ESG Rating Provider. CleanCarbon’s mission is to democratise sustainable trade by
making carbon transparency and regulatory compliance accessible to all exporters.
With a vision to foster a low-carbon global economy, the company continues to
pioneer smart, scalable, and reliable solutions that not only ensure CBAM adherence
but also drive actionable decarbonization across industries.`,
      },
    },
  ];

  const openModal = (company) => {
    setSelectedCompany(company);
    setShowModal(true);
  };

  const formatKey = (key) => {
    return (
      key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")
    );
  };

  return (
    <div className="container py-4">
      <h3 className="mb-4 fw-bold text-primary">CBAM Consultants</h3>

      <div className="table-responsive full-width-right">
        <table className="table table-bordered align-middle table-hover shadow-sm w-100">
          <thead className="table-primary">
            <tr>
              <th>Organization Name</th>
              <th>Contact Person</th>
              <th>Designation</th>
              <th>E-Mail Address</th>
              <th style={{ minWidth: "150px" }}>Quick Links</th>
            </tr>
          </thead>

          <tbody>
            {companies.map((company, index) => (
              <tr key={index}>
                <td>{company.name}</td>
                <td>{company.contactPerson}</td>
                <td>{company.designation}</td>
                <td>{company.email}</td>
                <td>
                  <div className="d-flex gap-2">
                    <a
                      href={
                        company.website.startsWith("http")
                          ? company.website
                          : `https://${company.website.replace(/\s+/g, "")}`
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      Visit Website
                    </a>

                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => openModal(company)}
                    >
                      Know More
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>Other CBAM consultants interested for empanelment may connect through the email - <a href="mailto:eepcho@eepcindia.net">eepcho@eepcindia.net</a></div>

      {/* MODAL */}
      {showModal && selectedCompany && (
        <div className="custom-overlay" onClick={() => setShowModal(false)}>
          <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
            <div className="custom-modal-header bg-primary text-white">
              <h5 className="modal-title">{selectedCompany.name}</h5>
              <button
                className="btn-close btn-close-white"
                onClick={() => setShowModal(false)}
              ></button>
            </div>

            <div className="custom-modal-body text-secondary">
              {/* <h5 className="fw-bold text-dark mb-3">Company Profile</h5> */}

              <div className="row">
                {/* LEFT COLUMN */}
                <div className="col-md-6">
                  {["address", "city", "state", "pin", "contactPerson"].map(
                    (key, idx) => (
                      <div className="mb-2" key={idx}>
                        <strong className="me-2">{formatKey(key)}:</strong>
                        <span>{selectedCompany.profile[key]}</span>
                      </div>
                    )
                  )}
                </div>

                {/* RIGHT COLUMN */}
                <div className="col-md-6">
                  {["designation", "email", "phone", "website"].map(
                    (key, idx) => (
                      <div className="mb-2" key={idx}>
                        <strong className="me-2">{formatKey(key)}:</strong>
                        <span>
                          {key === "website" ? (
                            <a
                              href={selectedCompany.profile[key]}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {selectedCompany.profile[key]}
                            </a>
                          ) : (
                            selectedCompany.profile[key]
                          )}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <hr />

              <h5 className="fw-bold">Company Profile:</h5>
              <p>{selectedCompany.profile.details}</p>
            </div>

            <div className="custom-modal-footer">
              <button
                className="btn btn-danger"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CbamConsultants;
