import React from "react";

const IndiaUKFAQ = () => {
  const faqs = [
    {
      question: "What is the India–UK CETA?",
      answer:
        "The India–UK Comprehensive Economic and Trade Agreement (CETA) is a bilateral trade pact signed on 24th July 2025 to enhance economic cooperation, reduce trade barriers, and promote strategic collaboration, especially in engineering goods.",
    },
    {
      question:
        "How extensive is the duty-free access for Indian exports under CETA?",
      answer:
        "About 99% of Indian exports to the UK—including a large number of engineering goods—will be tariff-free upon enforcement.",
    },
    {
      question: "What are the key benefits for Indian engineering exporters?",
      answer: (
        <ul className="list-disc list-inside">
          <li>
            Zero-duty access for most engineering products under Staging
            Category A.
          </li>
          <li>
            Tariff Rate Quotas (TRQs) for select automotive products, especially
            electric and hybrid vehicles.
          </li>
          <li>
            Mutual recognition of Indian certifications for medical devices.
          </li>
          <li>
            Defence Industrial Roadmap for joint R&D and manufacturing in
            aerospace and defence.
          </li>
          {/* <li>
            Safeguards against adverse effects from UK’s Carbon Border
            Adjustment Mechanism (CBAM).
          </li> */}
        </ul>
      ),
    },
    {
      question: "Which engineering sectors benefit the most?",
      answer: (
        <ul className="list-disc list-inside">
          <li>
            <strong>Iron & Steel (HS 72–73):</strong> Full tariff elimination;
            MSMEs benefit significantly.
          </li>
          <li>
            <strong>Non-ferrous Metals (HS 74–81):</strong> Copper, aluminium,
            nickel, zinc, etc. now face 0% tariffs.
          </li>
          <li>
            <strong>Machinery & Electrical Equipment (HS 84–85):</strong> Full
            liberalization supports integration into UK’s advanced
            manufacturing.
          </li>
          <li>
            <strong>Automotive (HS 87):</strong> Conventional vehicles and
            components get duty-free access; EVs under TRQs.
          </li>
          <li>
            <strong>Aerospace & Defence (HS 88 & 93):</strong> Full
            liberalization and strategic collaboration.
          </li>
          <li>
            <strong>Medical Devices (HS 90):</strong> Zero tariffs and mutual
            recognition of Indian standards.
          </li>
        </ul>
      ),
    },
    {
      question: "What is the projected export growth due to CETA?",
      answer: (
        <>
          <p>
            India’s engineering exports to the UK are expected to grow from USD
            4B (FY 2024–25) to USD 7.55B (FY 2029–30), driven by zero-duty
            access, competitive pricing, MSME participation, and supply chain
            integration.
          </p>
          <ul className="list-disc list-inside mt-1">
            <li>Zero-duty access</li>
            <li>Competitive pricing</li>
            <li>MSME participation</li>
            <li>Integration into UK supply chains</li>
            {/* <li>Auto parts (HS 8708): 4% → 0%</li> */}
          </ul>
        </>
      ),
    },
    {
      question: "What are TRQs and how do they affect exports?",
      answer: (
        <>
          <p>
            Tariff Rate Quotas (TRQs) are limits on the quantity of goods that
            can be imported at reduced tariffs. For Indian exporters:
          </p>
          <ul className="list-disc list-inside mt-1">
            <li>Electric and hybrid vehicles are under TRQs.</li>
            <li>No concessions for the first 5 years</li>
            <li>Phased liberalization over 5–10 years</li>
            <li>For detailed tariff schedules and TRQ allocations, visit:</li>
            {/* <li>Auto parts (HS 8708): 4% → 0%</li> */}
          </ul>
          <p>Please visit: India–UK CETA Tariff Details –</p>
          <a
            href="https://www.commerce.gov.in/international-trade/trade-agreements/india-united-kingdom-comprehensive-economic-and-trade-agreement/
"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            https://www.commerce.gov.in/international-trade/trade-agreements/india-united-kingdom-comprehensive-economic-and-trade-agreement/
          </a>
        </>
      ),
    },
    {
      question: "Are Indian certifications accepted in the UK under CETA?",
      answer: (
        <>
          <p>
            Yes. The agreement includes mutual recognition of Indian
            certifications for medical devices:
          </p>
          <ul className="list-disc list-inside mt-1">
            <li>CDSCO .</li>
            <li>ICMED</li>
          </ul>
          <p>This facilitates easier market access for Indian manufacturer.</p>
        </>
      ),
    },
    {
      question:
        "What were the UK tariffs on engineering products before CETA, and how have they changed?",
      answer: (
        <>
          Before the India–UK CETA, Indian engineering exports faced average
          tariffs ranging from 1% to 15%, depending on the product category.
          After the agreement: Most engineering products now fall under Staging
          Category A, meaning immediate tariff elimination.
          <ul className="list-disc list-inside mt-1">
            <li>Aluminium products (HS 76): Tariff reduced from 5% to 0%</li>
            <li>
              Articles of iron or steel (HS 73): Tariff reduced from 2% to 0%
            </li>
            <li>Motorcycles (HS 8711): Tariff reduced from 7% to 0%</li>
            <li>Bicycles (HS 8712): Tariff reduced from 15% to 0%</li>
            <li>Auto parts (HS 8708): Tariff reduced from 4% to 0%</li>
          </ul>
          Electric and hybrid vehicles (e.g., HS 870340, 870360) are under
          Tariff Rate Quotas (TRQs) and will see phased liberalization.
        </>
      ),
    },
    {
      question: "How can I check the tariff of my product in the UK?",
      answer: (
        <>
          To check the applicable tariff for your product under the India–UK
          CETA, refer to: Appendix 2A-b: Schedule of Tariff Commitments of the
          United Kingdom <br></br>
          <a
            href="https://www.commerce.gov.in/wp-content/uploads/2025/07/02A-b-UK-Schedule-of-Commitment-for-Goods.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Click here to check the official UK tariff schedule (Appendix 2A-b)
          </a>
          <br></br>
          This document provides HS code-wise details of tariff elimination,
          staging categories, and TRQs.
        </>
      ),
    },
    {
      question: "What does “Staging Category A” mean?",
      answer: (
        <>
          <b>Staging Category ‘A’</b> refers to immediate tariff elimination.
          Products under this category will face zero import duties in the UK
          from the date the agreement comes into force. This provides instant
          market access and price competitiveness for Indian exporters.
        </>
      ),
    },
    {
      question:
        "What is the minimum value addition required for engineering goods?",
      answer:
        "The required Regional Value Content (RVC) varies by product. For many engineering items, the threshold is typically 40%, but exporters should consult Annex 3A for exact figures.",
    },
    {
      question:
        "How do I interpret codes like CTH, CTSH, and QVC in the Rules of Origin?",
      answer: (
        <ul className="list-disc list-inside">
          <li>
            <strong>CTH:</strong> Change at 4-digit HS code
          </li>
          <li>
            <strong>CTSH:</strong> Change at 6-digit HS code
          </li>
          <li>
            <strong>QVC:</strong> Minimum value addition (e.g., 40%)
          </li>
          These rules ensure that substantial transformation occurs in India or
          in the UK.
        </ul>
      ),
    },
    {
      question:
        "What are the origin requirements for Iron and Steel products (HS Chapter 72)?",
      answer: (
        <>
          Melt and Pour” in the Parties: this means the steel must be melted and
          poured in India or the UK to qualify as originating. This rule ensures
          that the core transformation of steel occurs within the territory of
          either party. <br />
          Some specific tariff lines [ 7201, 7202, 7203, 7204 and 7205] have
          alternative origin criteria:
          <ul className="list-disc list-inside mt-1">
            <li>50% of the ex-works price (build-down method), or</li>
            <li>55% of the free-on-board value (build-down method), or</li>
            <li>
              45% of either the ex-works price or FOB value (build-up method)
            </li>
          </ul>
        </>
      ),
    },
    {
      question:
        "What are the build-up and build-down methods in Rules of Origin?",
      answer: (
        <>
          These methods are used to calculate the Qualifying Value Content (QVC)
          of a product to determine if it meets the origin criteria under the
          India–UK CETA.
          <br />
          <br />
          <strong>Build-up method</strong>
          <br />
          This method calculates the value of originating materials used in
          production as a percentage of the final product’s value.
          <br />
          <br />
          <em>Formula:</em>
          <br />
          QVC (%) = (Value of originating materials / Ex-works price or FOB
          value) × 100
          <br />
          <br />
          <strong>Build-down method</strong>
          <br />
          This method calculates the value of non-originating materials and
          subtracts it from the total value to determine the originating
          content.
          <br />
          <br />
          <em>Formula:</em>
          <br />
          QVC (%) = [(Ex-works price or FOB value – Value of non-originating
          materials) / Ex-works price or FOB value] × 100
        </>
      ),
    },
    {
      question: "Where can I find the full list of product-specific rules?",
      answer: (
        <>
          You can download the official document here:{" "}
          <a
            href="https://www.commerce.gov.in/wp-content/uploads/2025/07/03A-Product-Specific-Rules-of-Origin.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.commerce.gov.in/wp-content/uploads/2025/07/03A-Product-Specific-Rules-of-Origin.pdf
          </a>
        </>
      ),
    },
    {
      question:
        "How can Indian exporters obtain a Certificate of Origin (CoO) to avail tariff benefits under India–UK CETA?",
      answer: (
        <>
          To claim preferential tariff treatment under the India–UK CETA,
          exporters must furnish a Certificate of Origin (CoO) proving that the
          goods meet the Rules of Origin (RoO) under the agreement.
          <br />
          <br />
          Here’s how exporters can obtain it:
          <ul>
            <li>Apply online via the DGFT portal</li>
            <li>
              Visit{" "}
              <a
                href="https://coo.dgft.gov.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://coo.dgft.gov.in
              </a>
            </li>
            <li>
              Register as an exporter and log in using your DSC (Digital
              Signature Certificate)
            </li>
            <li>Select the India–UK CETA scheme while applying</li>
            <li>
              Upload required documents (invoice, packing list, product origin
              declaration, etc.)
            </li>
            <li>Pay the applicable fee and submit your application</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-heading">
        FAQs: India–UK CETA for Engineering Exporters
      </h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <details key={index} className="faq-item">
            <summary className="faq-question">{faq.question}</summary>
            <div className="faq-answer">{faq.answer}</div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default IndiaUKFAQ;
