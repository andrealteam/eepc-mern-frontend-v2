import React from "react";
import BarChart from "./BarChart";

const ImportExportAnalysis = () => {
  return (
    <>
      <h2>India’s Engineering Export performance</h2>

      <p>
        Accounting for 3% of the total GDP, the Indian engineering sector forms
        a crucial backbone of the Indian economy. The engineering sector is the
        largest contributor to India’s overall exports with a share of 24% and
        also contributes approximately 40% of the total manufacturing export.
        Engineering exports in fiscal 2023-24 grew by 2.13% and reached at US$
        109.32 billion, which is contrary to the merchandise export trend which
        declined by 3.11%. It performed well given the weak global trade trends,
        dwindling demand, forex crisis and geopolitical conflicts.
      </p>

      <p>
        The monthly engineering export trend became positive since December 2023
        and exhibited a healthy double-digit growth in both February and March –
        in March the y-o-y growth was 10.7%, recording the highest monthly
        exports at USD 11.28 billion. The recovery in annual engineering exports
        was mainly due to surge in exports to WANA (27%), N E Asia (11.6%), CIS
        (65%) and Oceania (2.6%). Therefore, the FTAs with UAE and Australia can
        be deemed effective. In fact, March 2024 recorded positive Y-o-Y growth
        for almost all regions including North America, EU, WANA, ASEAN, NE
        ASIA, CIS and South Asia.
      </p>

      <BarChart />
    </>
  );
};

export default ImportExportAnalysis;
