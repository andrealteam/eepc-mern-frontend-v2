import React from "react";
import EngineeringExportsTable from "./EngineeringExportsTable";
import { PieChart, BarChart, DataTableCustom } from "../../components";
import { CheckCircle } from "lucide-react";
import {
  IEE57data,
  IEE24data,
  IEEGoods57Data,
  IEEBarData,
  IEEBarKeys,
  IEEBarLineKey,
  COLORS_1,
  COLORS_2,
  COLORS_3,
  IEEGoods24Data,
  MONTHLY_TREND_DATA,
  REGION_WISE_DATA,
  TOP_25_DATA,
  PANEL_WISE_DATA,
  PANEL_WISE_SHARE_DATA,
} from "./ChartData.js";

const EngineeringIEAnalysis = () => {
  const MONTHLY_TREND_COLUMNS = [
    {
      name: "Month",
      selector: (row) => row.Month,
      sortable: true,
      cell: (row) => (
        <div style={{ fontWeight: row.isBold ? "bold" : "normal" }}>
          {row.Month}
        </div>
      ),
    },
    {
      name: "2023-24",
      selector: (row) => row["2023-24"],
      sortable: true,
      cell: (row) => (
        <div style={{ fontWeight: row.isBold ? "bold" : "normal" }}>
          {row["2023-24"]}
        </div>
      ),
    },
    {
      name: "2024-25",
      selector: (row) => row["2024-25"],
      sortable: true,
      cell: (row) => (
        <div style={{ fontWeight: row.isBold ? "bold" : "normal" }}>
          {row["2024-25"]}
        </div>
      ),
    },
    {
      name: "Growth (%)",
      selector: (row) => row["Growth (%)"],
      sortable: true,
      cell: (row) => (
        <div style={{ fontWeight: row.isBold ? "bold" : "normal" }}>
          {row["Growth (%)"]}
        </div>
      ),
    },
  ];
  const REGION_WISE_COLUMNS = [
    {
      name: "Regions",
      selector: (row) => row.Region,
      sortable: true,
      cell: (row) => (
        <div style={{ fontWeight: row.isBold ? "bold" : "normal" }}>
          {row.Region}
        </div>
      ),
    },
    {
      name: "March 2024",
      selector: (row) => row["March 2024"],
      sortable: true,
      cell: (row) => (
        <div style={{ fontWeight: row.isBold ? "bold" : "normal" }}>
          {row["March 2024"]}
        </div>
      ),
    },
    {
      name: "March 2025",
      selector: (row) => row["March 2025"],
      sortable: true,
      cell: (row) => (
        <div style={{ fontWeight: row.isBold ? "bold" : "normal" }}>
          {row["March 2025"]}
        </div>
      ),
    },
    {
      name: "Growth (%)",
      selector: (row) => row["Growth (%)"],
      sortable: true,
      cell: (row) => (
        <div
          style={{
            fontWeight: row.isBold ? "bold" : "normal",
            color: row["Growth (%)"] < 0 ? "red" : "green",
          }}
        >
          {row["Growth (%)"]}
        </div>
      ),
    },
    {
      name: "April-March 2023-24",
      selector: (row) => row["April-March 2023-24"],
      sortable: true,
      cell: (row) => (
        <div style={{ fontWeight: row.isBold ? "bold" : "normal" }}>
          {row["April-March 2023-24"]}
        </div>
      ),
    },
    {
      name: "April-March 2024-25",
      selector: (row) => row["April-March 2024-25"],
      sortable: true,
      cell: (row) => (
        <div style={{ fontWeight: row.isBold ? "bold" : "normal" }}>
          {row["April-March 2024-25"]}
        </div>
      ),
    },
    {
      name: "Growth (%)",
      selector: (row) => row["Growth2 (%)"],
      sortable: true,
      cell: (row) => (
        <div
          style={{
            fontWeight: row.isBold ? "bold" : "normal",
            color: row["Growth2 (%)"] < 0 ? "red" : "green",
          }}
        >
          {row["Growth2 (%)"]}
        </div>
      ),
    },
  ];

  const TOP_25_COLUMNS = [
    {
      name: "Countries",
      selector: (row) => row.Country,
      sortable: true,
      cell: (row) => (
        <div style={{ fontWeight: row.isBold ? "bold" : "normal" }}>
          {row.Country}
        </div>
      ),
    },
    {
      name: "March 2024",
      selector: (row) => row["March 2024"],
      sortable: true,
      cell: (row) => (
        <div style={{ fontWeight: row.isBold ? "bold" : "normal" }}>
          {row["March 2024"]}
        </div>
      ),
    },
    {
      name: "March 2025",
      selector: (row) => row["March 2025"],
      sortable: true,
      cell: (row) => (
        <div style={{ fontWeight: row.isBold ? "bold" : "normal" }}>
          {row["March 2025"]}
        </div>
      ),
    },
    {
      name: "Growth (%)",
      selector: (row) => row["Growth (%)"],
      sortable: true,
      cell: (row) => (
        <div
          style={{
            fontWeight: row.isBold ? "bold" : "normal",
            color: row["Growth (%)"] < 0 ? "red" : "green",
          }}
        >
          {row["Growth (%)"]}
        </div>
      ),
    },
    {
      name: "April-March 2023-24",
      selector: (row) => row["April-March 2023-24"],
      sortable: true,
      cell: (row) => (
        <div style={{ fontWeight: row.isBold ? "bold" : "normal" }}>
          {row["April-March 2023-24"]}
        </div>
      ),
    },
    {
      name: "April-March 2024-25",
      selector: (row) => row["April-March 2024-25"],
      sortable: true,
      cell: (row) => (
        <div style={{ fontWeight: row.isBold ? "bold" : "normal" }}>
          {row["April-March 2024-25"]}
        </div>
      ),
    },
    {
      name: "Growth (%)",
      selector: (row) => row["Growth2 (%)"],
      sortable: true,
      cell: (row) => (
        <div
          style={{
            fontWeight: row.isBold ? "bold" : "normal",
            color: row["Growth2 (%)"] < 0 ? "red" : "green",
          }}
        >
          {row["Growth2 (%)"]}
        </div>
      ),
    },
  ];

  const PANEL_WISE_COLUMNS = [
    {
      name: "Product panels",
      selector: (row) => row["Product panels"],
      sortable: true,
      cell: (row) => <strong>{row["Product panels"]}</strong>, // Bold product name
    },
    {
      name: "March 2024",
      selector: (row) => row["March 2024"],
      sortable: true,
    },
    {
      name: "March 2025",
      selector: (row) => row["March 2025"],
      sortable: true,
    },
    {
      name: "Growth (%)",
      selector: (row) => row["Growth (%)"],
      sortable: true,
    },
    {
      name: "April-March 2023-24",
      selector: (row) => row["April-March 2023-24"],
      sortable: true,
    },
    {
      name: "April-March 2024-25",
      selector: (row) => row["April-March 2024-25"],
      sortable: true,
    },
    {
      name: "Growth YoY (%)",
      selector: (row) => row["Growth YoY (%)"],
      sortable: true,
    },
  ];

  const PANEL_WISE_SHARE_COLUMNS = [
    {
      name: "Product panels",
      selector: (row) => row["Product panels"],
      sortable: true,
      cell: (row) => (
        <div
          style={{
            fontWeight: row.bold ? "bold" : "normal",
            background: row.bgColor,
          }}
        >
          {row["Product panels"]}
        </div>
      ),
    },
    {
      name: "Share % (April-March 2023-24)",
      selector: (row) => row["Share % (April-March 2023-24)"],
      sortable: true,
      cell: (row) => (
        <div style={{ background: row.bgColor }}>
          {row["Share % (April-March 2023-24)"]}
        </div>
      ),
    },
    {
      name: "Share % (April-March 2024-25)",
      selector: (row) => row["Share % (April-March 2024-25)"],
      sortable: true,
      cell: (row) => (
        <div style={{ background: row.bgColor }}>
          {row["Share % (April-March 2024-25)"]}
        </div>
      ),
    },
  ];

  const bulletPoints = [
    "Steer India’s engineering exports to US$ 250 billion, becoming a strong pillar of India’s merchandise exports.",
    "Elevate India’s share in global engineering exports from 1% to 2.5–3%, through quality enhancement, innovation, and market diversification.",
    "Promote a shift towards high-value, advanced engineering products, strengthening India’s position in global technology-driven supply chains.",
    "Deepen engagement in traditional high-value markets while diversifying into emerging economies for balanced, risk-resilient export growth.",
    "Catalyse the transition to electric vehicles and clean mobility, supporting the emergence of sustainable engineering solutions.",
    "Champion green energy adoption and environmentally responsible practices, giving Indian engineering a long-term global edge.",
    "Strengthen MSME capabilities through targeted handholding, technology upgrades, and export facilitation to integrate them with global supply chains.",
    "Promote adoption of Industry 4.0 tools, e-commerce, and advanced logistics solutions to modernise trade operations.",
    "Encourage use of AI, IoT, and data analytics for product design, manufacturing, and export market intelligence.",
    "Position India as a preferred global source of engineering goods, technologies, skills, and services.",
  ];

  const amritKaalPoints = [
    "Drive engineering exports beyond US$ 1.25 trillion, making India a major global exporter of engineering goods and services.",
    "Help India capture 8–10% of global engineering exports, integrating deeply with future-ready global value chains.",
    "Establish India as a globally trusted partner for advanced, sustainable, and innovative engineering solutions.",
    "Create a robust industry-academia-research ecosystem, making India a global innovation hub for engineering and technology.",
    "Leverage EEPC India as the primary knowledge and support hub for international trade in engineering goods and services.",
    "Strengthen EEPC India’s nationwide presence, enabling every engineering cluster, MSME, and startup to participate in export-led growth.",
    "Expand opportunities across the engineering spectrum—traditional and emerging—ensuring inclusive, innovation-led export development.",
  ];

  return (
    <>
      <h2 className="mb-5">India’s Engineering Export performance</h2>

      <p>
        India’s engineering exports reached a new milestone in fiscal year
        2024–25, hitting an all-time high of USD 116.67 billion, surpassing the
        previous record of USD 112.10 billion set in 2021–22. This marks the
        fifth time in the last eleven years that engineering exports have
        achieved a record high. The sector registered a 6.74% year-on-year
        growth, up from USD 109.30 billion in 2023–24, outperforming the broader
        merchandise exports, which grew by a mere 0.08% to USD 437.42 billion.
        Consequently, engineering exports now account for 26.67% of India’s
        total merchandise exports, up from 25.01% the previous year.
      </p>
      <p>
        This performance is particularly noteworthy given the challenging global
        environment, including geopolitical tensions, economic slowdowns in key
        markets, and tariff escalations by the United States. Despite these
        headwinds, Indian engineering exports demonstrated resilience and
        growth.
      </p>
      <p>
        In March 2025, 27 out of 34 engineering panels showed positive
        year-on-year growth. However, 13 panels, including Iron and Steel,
        Copper products, Aircrafts and Spacecrafts, Ships and Boats, Cranes,
        Lifts, Winches, and other construction machinery, experienced a decline
        compared to March 2024. Regionally, North America remained the top
        export destination with a 20.5% share, followed by the EU
        (17.1%) and WANA (16.7%). Notable growth was observed in Latin America
        (20.1%), Other Europe (19%), and Northeast Asia (14.1%), while Oceania
        (-10.4%) and the EU (-1.9%) saw declines.
      </p>
      <p>
        Country-wise, the USA continued to be the leading destination, followed
        by the UAE and Saudi Arabia. The highest export growth was recorded
        in France (43.2%), Nepal (37%), and the UK (32.9%). On a cumulative
        basis, the USA remained the top destination, with significant growth
        also noted in exports to UAE, Singapore, Nepal, Japan, and France.
      </p>
      <h4 className="text-center bold my-5">
        The past 10-year export history of the engineering sector
      </h4>
      <BarChart
        data={IEEBarData}
        barKeys={IEEBarKeys}
        lineKey={IEEBarLineKey}
      />
      <p>
        Over the past decade, India’s engineering export sector has demonstrated
        consistent growth and resilience. In 2021–22, engineering exports
        reached a historic peak, surpassing USD 112 billion for the first time.
        After a slight dip in 2022–23, the sector rebounded in 2023–24, climbing
        to USD 109.3 billion from USD 107 billion the previous year. The
        momentum continued into 2024–25, with engineering exports hitting a new
        all-time high of USD 116.67 billion, reflecting the sector’s robust
        performance despite global economic challenges.
      </p>
      {/* <p className="mt-3">
        <b>Source:</b> DGCI&amp;S
      </p> */}

      <h2 className="my-5">ENGINEERING EXPORTS: MONTHLY TREND</h2>
      <p>
        The monthly engineering figures for 2024-25 vis-à-vis 2023-24 are shown
        below as per the latest DGCI&S estimates:
      </p>
      <DataTableCustom
        title="Table 1: Engineering Exports: Monthly Trend in 2024-25 (Values in US$ million)"
        data={MONTHLY_TREND_DATA}
        columns={MONTHLY_TREND_COLUMNS}
        isPagination={false}
      />
      <p className="">
        <b>Source:</b> DGCIS, Govt. of India
      </p>

      <h2 className="my-5">REGION WISE INDIA’S ENGINEERING EXPORTS</h2>
      <p>
        The following table depicts region wise India’s engineering exports for
        2024-25 as compared to 2023-24.
      </p>
      <DataTableCustom
        title="Table 2: Region wise engineering exports in April-March 2024-25 vis-à-vis April-March 2023-24 (Value in USD million)"
        data={REGION_WISE_DATA}
        columns={REGION_WISE_COLUMNS}
        isPagination={false}
      />

      <p className="">
        <b>Source:</b> DGCI&amp;S
      </p>

      <h2 className="my-5">
        TOP 25 ENGINEERING EXPORT DESTINATIONS IN MARCH 2025
      </h2>
      <p>
        We now look at the export scenario of the top 25 nations that had
        highest demand for Indian engineering products during March 2025 over
        March 2024 as well as in cumulative terms during April-March 2024-25
        vis-à-vis April-March 2023-24. The data clearly shows that top 25
        countries contribute 73.3% of total engineering exports.
      </p>
      <DataTableCustom
        title="Table 3: Engineering exports country wise (Value in USD million)"
        data={TOP_25_DATA}
        columns={TOP_25_COLUMNS}
        isPagination={false}
      />

      <p className="">
        <b>Source:</b> DGCI&amp;S
      </p>

      {/* NEXT */}
      <h2 className="my-5">PANEL WISE INDIA’S ENGINEERING EXPORTS</h2>
      <p>
        WIn this section we look at the Engineering Panel wise exports for the
        month of March 2025 vis-à-vis March 2024 as well as the cumulative
        exports for April-March 2024-25 vis-à-vis April-March 2023-24. These are
        indicated in the tables below.
      </p>
      <DataTableCustom
        title="Table 4: Panel-wise Export Analysis for April-March 2024-25 vis-à-vis April-March 2023-24 (Value in USD million)"
        data={PANEL_WISE_DATA}
        columns={PANEL_WISE_COLUMNS}
        isPagination={false}
      />

      <p className="">
        <b>Source:</b> DGCI&amp;S
      </p>

      {/* NEXT */}

      <DataTableCustom
        title="Table 5: Panel-wise shares in India’s total engineering exports during April-March 2024-25 "
        data={PANEL_WISE_SHARE_DATA}
        columns={PANEL_WISE_SHARE_COLUMNS}
        isPagination={false}
      />

      <p className="">
        <b>Source:</b> DGCI&amp;S
      </p>

      {/* <EngineeringExportsTable /> */}
      {/* <p className="py-3">
        <b>Source:</b> DGCI&amp;S
      </p> */}
      <h2 className="my-4"> Transformation of engineering products</h2>
      <p>
        India’s engineering export basket has undergone a remarkable
        transformation over the decades. EEPC India have played a pivotal role
        in this evolution, promoting advanced engineering sectors and enabling
        Indian manufacturers to compete globally in capital-intensive domains.
        This shift reflects India’s growing industrial capabilities and
        strategic focus on high-value, technology-driven manufacturing.
      </p>
      <h4 className="text-center bold my-5">
        Composition of India Engineering Export (1956-57)
      </h4>
      <PieChart
        data={IEE57data}
        title="Composition of India Engineering Export (1956-57)"
        colors={COLORS_1}
      />
      <h4 className="text-center bold my-5">
        Composition of India Engineering Export (2024-25)
      </h4>
      <PieChart data={IEE24data} colors={COLORS_1} />
      <p className="mt-3">
        In 1956–57, exports were dominated by consumer durables
        (34%) and primary metals, with capital goods contributing only 12%.
        By 2024–25, this composition has shifted dramatically—capital goods now
        account for 62% of engineering exports, while consumer durables have
        declined to just 11%.
      </p>

      <h3 className="mt-4 mb-4">Diversification of markets</h3>
      <p>
        During the nascent stage in 1956–57, Indian engineering exports were
        mainly confined to Asia and Africa, with Asia accounting for 74% and
        Africa 23% of the total exports. Over the years, the scenario has
        completely changed. As of 2024–25, India exports engineering goods to
        over 150 countries, with about 39% of total engineering exports now
        directed to North America and the European Union. This reflects a
        strategic shift toward high-value markets, driven by trade facilitation
        efforts and global outreach initiatives. A table showing region wise
        exports share percentage out of total engineering exports is given
        below:
      </p>
      <h4 className="text-center bold my-5">
        Region wise Export of Engineering Goods (1956-57)
      </h4>
      <PieChart data={IEEGoods57Data} colors={COLORS_2} />
      <h4 className="text-center bold my-5">
        India's Exports- Region wise-2024-25
      </h4>
      <PieChart data={IEEGoods24Data} colors={COLORS_3} />

      <div className="p-6 max-w-5xl mx-auto text-gray-800">
        {/* Heading */}
        <h2 className="text-xl font-bold italic text-orange-600 mb-4">
          India’s bold export goals…..
        </h2>

        <p className="mb-6 text-justify">
          As the apex body representing India’s engineering export community,
          EEPC India is committed to strengthening the engineering sector as a
          key pillar of the country’s merchandise exports. Its strategies are
          aligned with the Government of India’s ambitious target of achieving
          USD 1 trillion in merchandise exports. Looking further ahead, EEPC
          India has also outlined its long-term vision for 2047, marking the
          centenary of India’s independence and the beginning of Amrit Kaal,
          with a focus on global competitiveness, innovation, and sustainable
          growth in engineering exports.
        </p>

        {/* Section 1 */}
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          By 2030, EEPC India envisions to
        </h3>
        <div className="space-y-2 mb-6">
          {bulletPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle
                className="w-5 h-5 text-green-600 mt-1"
                style={{ marginRight: "5px" }}
              />
              <span>{point}</span>
            </div>
          ))}
        </div>

        {/* Section 2 */}
        <h3 className="text-lg font-bold italic text-orange-600 mb-3">
          By 2047, Engineering Leadership for a Viksit Bharat in the Amrit Kaal
        </h3>
        <p className="mb-3">
          <span className="font-semibold italic text-gray-900">
            As India enters its Amrit Kaal, EEPC India aspires to
          </span>
        </p>

        <div className="space-y-2">
          {amritKaalPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle
                className="w-5 h-5 text-green-600 mt-1"
                style={{ marginRight: "5px" }}
              />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EngineeringIEAnalysis;
