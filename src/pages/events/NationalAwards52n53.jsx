import React, { useRef } from "react";
import { baseFileURL } from "../../services/api";
import "./NationalAwards52n53.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const NationalAwards52n53 = () => {
  // Create a reference for the Swiper instance
  const swiperRef1 = useRef(null);
  const swiperRef2 = useRef(null);

  return (
    <div className="awardSection">
      <section>
        <div className="banner">
          <img
            src={baseFileURL + "assets/web/img/EEPC_awards_picture.jpg"}
            alt
            className="img-fluid"
          />
        </div>
      </section>
      <section className="sec-pad">
        <div className="text-center">
          <a
            className="more-btn-export text-white"
            href="https://www.eepcindia.org/backend/files/1700227409.pdf"
            target="_blank"
            tabindex="0"
            style={{ marginTop: "10px", display: "table" }}
          >
            Goodwill message of the Chief Guest
          </a>
        </div>
        <div className="text-center">
          <a
            className="more-btn-export text-white"
            href="https://www.eepcindia.org/backend/files/1700498858.PDF"
            target="_blank"
            tabindex="0"
            style={{ marginTop: "10px", display: "table" }}
          >
            Goodwill message of Shri Vipul Bansal, IAS, Joint Secretary,
            Department of Commerce, Ministry of Commerce and Industry,
            Government of India
          </a>
        </div>
        <h1 className="fancy">
          <span className="text-center">52ND AND 53RD NATIONAL AWARDS</span>
        </h1>
        <div className="container">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button color-1 btn-4"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  24 WINNERS [(20 Top Exporter award + 4 Star awards (3 star
                  awards (FY 20) + 1 Star award FY 22)]
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <table className="table table-bordered table-striped">
                    <tbody>
                      <tr>
                        <td colspan="3" className="bold-text bg-blue col-white">
                          Top Gold Large in FY 20 and 21
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>HINDALCO INDUSTRIES LTD</td>
                        <td>
                          Top Exporter for the Year 2019-20: Large
                          Enterprise-Gold Trophy
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>HINDALCO INDUSTRIES LTD</td>
                        <td>
                          Top Exporter for the Year 2020-21: Large
                          Enterprise-Gold Trophy
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" className="bold-text bg-blue col-white">
                          Top Gold Medium in FY 20 and 21
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>R B AGARWALLA &amp; COMPANY</td>
                        <td>
                          Top Exporter for the Year 2019-20: Medium Enterprise-
                          Gold Trophy
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>R B AGARWALLA &amp; COMPANY</td>
                        <td>
                          Top Exporter for the Year 2020-21: Medium Enterprise-
                          Gold Trophy
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" className="bold-text bg-blue col-white">
                          Top Gold Small in FY 20
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>CALCUTTA EXPORT CO</td>
                        <td>
                          Top Exporter for the Year 2019-20: Small Enterprise-
                          Gold Trophy
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" className="bold-text bg-blue col-white">
                          Top Gold Small in FY 21 &amp; Top Silver Small in FY
                          20
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>JYOTI STEEL INDUSTRIES</td>
                        <td>
                          Top Exporter for the Year 2020-21: Small Enterprise-
                          Gold Trophy
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>JYOTI STEEL INDUSTRIES</td>
                        <td>
                          Top Exporter for the Year 2019-20: Small
                          Enterprise-Silver Trophy
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" className="bold-text bg-blue col-white">
                          Top Gold Micro in FY 20 and 21
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>SUPER IMPEX</td>
                        <td>
                          Top Exporter for the Year 2019-20: Micro Enterprise-
                          Gold Trophy
                        </td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>SUPER IMPEX</td>
                        <td>
                          Top Exporter for the Year 2020-21: Micro Enterprise-
                          Gold Trophy
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" className="bold-text bg-blue col-white">
                          Top Gold Merchant in FY 20 and 21
                        </td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>MORTEX INDIA</td>
                        <td>
                          Top Exporter for the Year 2019-20: Merchant
                          Exporter-Gold Trophy
                        </td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>MORTEX INDIA</td>
                        <td>
                          Top Exporter for the Year 2020-21: Merchant
                          Exporter-Gold Trophy
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" className="bold-text bg-blue col-white">
                          Top Silver Large in FY 20 and 1 Star Award Product Grp
                          no 2 in FY 21
                        </td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>VIRAJ PROFILES LTD</td>
                        <td>
                          Top Exporter for the Year 2019-20: Large
                          Enterprise-Silver Trophy
                        </td>
                      </tr>
                      <tr>
                        <td>13</td>
                        <td>VIRAJ PROFILES LTD</td>
                        <td>
                          Star Performer Award for the year 2020-21 in the
                          product group: Rolled, drawn and folded products of
                          iron and steel-Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" className="bold-text bg-blue col-white">
                          Top Silver Large in FY 21 and 1 Star Award Product Grp
                          no 2 in FY 20
                        </td>
                      </tr>
                      <tr>
                        <td>14</td>
                        <td>ARCELORMITTAL NIPPON STEEL INDIA LTD</td>
                        <td>
                          Top Exporter for the Year 2020-21: Large
                          Enterprise-Silver Trophy
                        </td>
                      </tr>
                      <tr>
                        <td>15</td>
                        <td>ARCELORMITTAL NIPPON STEEL INDIA LTD</td>
                        <td>
                          Star Performer Award for the year 2019-20 in the
                          product group: Rolled, drawn and folded products of
                          iron and steel-Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" className="bold-text bg-blue col-white">
                          Top Silver Medium in FY 20 and 21
                        </td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>NIPHA EXPORTS (P) LTD</td>
                        <td>
                          Top Exporter for the Year 2019-20: Medium
                          Enterprise-Silver Trophy
                        </td>
                      </tr>
                      <tr>
                        <td>17</td>
                        <td>NIPHA EXPORTS (P) LTD</td>
                        <td>
                          Top Exporter for the Year 2020-21: Medium
                          Enterprise-Silver Trophy
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" className="bold-text bg-blue col-white">
                          Top Silver Small in FY 21 and 1 Star Award Product Grp
                          no 10 in FY 20
                        </td>
                      </tr>
                      <tr>
                        <td>18</td>
                        <td>VICTOR FORGINGS</td>
                        <td>
                          Top Exporter for the Year 2020-21: Small
                          Enterprise-Silver Trophy
                        </td>
                      </tr>
                      <tr>
                        <td>19</td>
                        <td>VICTOR FORGINGS</td>
                        <td>
                          Star Performer Award for the year 2019-20 in the
                          product group: Hand tools- Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" className="bold-text bg-blue col-white">
                          Top Silver Micro in FY 20
                        </td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>ALGO FLUID SYSTEMS PVT LTD</td>
                        <td>
                          Top Exporter for the Year 2019-20: Micro
                          Enterprise-Silver Trophy
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" className="bold-text bg-blue col-white">
                          Top Silver Micro in FY 21 and 1 Star Award Product Grp
                          no 6 in FY 20
                        </td>
                      </tr>
                      <tr>
                        <td>21</td>
                        <td>STEEL TUBES INDIA</td>
                        <td>
                          Top Exporter for the Year 2020-21: Micro
                          Enterprise-Silver Trophy
                        </td>
                      </tr>
                      <tr>
                        <td>22</td>
                        <td>STEEL TUBES INDIA</td>
                        <td>
                          Star Performer Award for the year 2019-20 in the
                          product group: Tubes, pipes and hollow profiles, and
                          tube or pipe fittings of iron or steel - Small
                          Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" className="bold-text bg-blue col-white">
                          Top Silver Merchant in FY 20 &amp;FY 21
                        </td>
                      </tr>
                      <tr>
                        <td>23</td>
                        <td>TECNIMONT PVT LTD</td>
                        <td>
                          Top Exporter for the Year 2019-20: Merchant Exporter-
                          Silver Trophy
                        </td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>TECNIMONT PVT LTD</td>
                        <td>
                          Top Exporter for the Year 2020-21: Merchant
                          Exporter-Silver Trophy
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed color-1 btn-4"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  150 WINNERS [ 143 STAR PERFORMER AWARDS for FY 20 & FY 21 + 7
                  Spl Awards(-4 Hi Tech & 3 MEIS 2015-20) ]
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <table className="table table-bordered table=striped">
                    <tbody>
                      <tr>
                        <td colspan="3" className="bold-text bg-blue col-white">
                          Group 1: Basic Iron and Steel
                        </td>
                      </tr>
                      <tr>
                        <td>25</td>
                        <td>
                          RASHTRIYA ISPAT NIGAM LIMITED (VISAKHAPATNAM STEEL
                          PLANT)
                        </td>
                        <td>
                          Star Performer Award for the year 2019-20 in the
                          product group: Basic Iron and Steel - Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td>26</td>
                        <td>
                          RASHTRIYA ISPAT NIGAM LIMITED (VISAKHAPATNAM STEEL
                          PLANT)
                        </td>
                        <td>
                          Star Performer Award for the year 2020-21 in the
                          product group: Basic Iron and Steel - Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td>27</td>
                        <td>JAYESH INDUSTRIES LTD</td>
                        <td>
                          Star Performer Award for the year 2019-20 in the
                          product group: Basic Iron and Steel - Medium
                          Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td>28</td>
                        <td>JAYESH INDUSTRIES LTD</td>
                        <td>
                          Star Performer Award for the year 2020-21 in the
                          product group: Basic Iron and Steel - Medium
                          Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" className="bold-text bg-blue col-white">
                          Group 2: Rolled, drawn and folded products of iron and
                          steel
                        </td>
                      </tr>
                      <tr>
                        <td>29</td>
                        <td>JAINEX ENTERPRISE</td>
                        <td>
                          Star Performer Award for the year 2019-20 in the
                          product group: Rolled, drawn and folded products of
                          iron and steel-Medium Merchant
                        </td>
                      </tr>
                      <tr>
                        <td>30</td>
                        <td>JAINEX ENTERPRISE</td>
                        <td>
                          Star Performer Award for the year 2020-21 in the
                          product group: Rolled, drawn and folded products of
                          iron and steel-Medium Merchant
                        </td>
                      </tr>
                      <tr>
                        <td>31</td>
                        <td>MACRO BARS &amp; WIRES (I) P LTD</td>
                        <td>
                          Star Performer Award for the year 2019-20 in the
                          product group: Rolled, drawn and folded products of
                          iron and steel-Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td>32</td>
                        <td>MACRO BARS &amp; WIRES (I) PVT LTD</td>
                        <td>
                          Star Performer Award for the year 2020-21 in the
                          product group: Rolled, drawn and folded products of
                          iron and steel-Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" className="bold-text bg-blue col-white">
                          Group 3: Ferro alloys
                        </td>
                      </tr>
                      <tr>
                        <td>33</td>
                        <td>NAVA BHARAT VENTURES LTD</td>
                        <td>
                          Star Performer Award for the year 2019-20 in the
                          product group: Ferro alloys- Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td>34</td>
                        <td>PREMIUM FERROMET PVT LTD</td>
                        <td>
                          Star Performer Award for the year 2019-20 in the
                          product group: Ferro alloys- Medium Merchant
                        </td>
                      </tr>
                      <tr>
                        <td>35</td>
                        <td>PREMIUM FERROMET PVT LTD</td>
                        <td>
                          Star Performer Award for the year 2020-21 in the
                          product group : Ferro alloys- Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td>36</td>
                        <td>PREMIER INDUSTRIAL CORPORATION LTD</td>
                        <td>
                          Star Performer Award for the year 2020-21 in the
                          product group: Ferro alloys- Medium Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" className="bold-text bg-blue col-white">
                          Group 4: Sanitary and industrial castings + 1 Spl
                          Award
                        </td>
                      </tr>
                      <tr>
                        <td>37</td>
                        <td>ANUGRAHA VALVE CASTINGS LTD</td>
                        <td>
                          Star Performer Award for the year 2019-20 in the
                          product group : Sanitary and industrial castings-
                          Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td>38</td>
                        <td>KOSO INDIA PVT LTD</td>
                        <td>
                          Star Performer Award for the year 2020-21 in the
                          product group : Sanitary and industrial castings-
                          Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td>39</td>
                        <td>NSI (INDIA) LTD</td>
                        <td>
                          Star Performer Award for the year 2019-20 in the
                          product group : Sanitary and industrial
                          castings-Medium Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td>40</td>
                        <td>RBA FERRO INDUSTRIES PVT LTD</td>
                        <td>
                          Star Performer Award for the year 2020-21 in the
                          product group : Sanitary and industrial
                          castings-Medium Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td>41</td>
                        <td>KAJECO INDUSTRIES</td>
                        <td>
                          Star Performer Award for the year 2019-20 in the
                          product group : Sanitary and industrial castings-
                          Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td>42</td>
                        <td>INTOLCAST PVT LTD</td>
                        <td>
                          Star Performer Award for the year 2020-21 in the
                          product group: Sanitary and industrial castings- Small
                          Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td>43</td>
                        <td>INTOLCAST PVT LTD</td>
                        <td>
                          Special Trophy for Excellence in Exports of MEIS Items
                          2015-20-Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" className="bold-text bg-blue col-white">
                          Group 5: Steel forgings
                        </td>
                      </tr>
                      <tr>
                        <td>44</td>
                        <td>MM FORGINGS LTD</td>
                        <td>
                          Star Performer Award for the year 2019-20 in the
                          product group: Steel forgings -Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td>45</td>
                        <td>R N GUPTA &amp; COMPANY LTD</td>
                        <td>
                          Star Performer Award for the year 2020-21 in the
                          product group: Steel forgings -Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td>46</td>
                        <td>MARS FORGE PVT LTD</td>
                        <td>
                          Star Performer Award for the year 2019-20 in the
                          product group: Steel forgings - Medium Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td>47</td>
                        <td>MARS FORGE PVT LTD</td>
                        <td>
                          Star Performer Award for the year 2020-21 in the
                          product group: Steel forgings -Medium Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" className="bold-text bg-blue col-white">
                          Group 6: Tubes, pipes and hollow profiles, and tube or
                          pipe fittings, of iron or steel
                        </td>
                      </tr>
                      <tr>
                        <td>48</td>
                        <td>WELSPUN CORP LTD</td>
                        <td>
                          Star Performer Award for the year 2019-20 in the
                          product group: Tubes, pipes and hollow profiles, and
                          tube or pipe fittings of iron or steel - Large
                          Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td>49</td>
                        <td>WELSPUN CORP LTD</td>
                        <td>
                          Star Performer Award for the year 2020-21 in the
                          product group: Tubes, pipes and hollow profiles, and
                          tube or pipe fittings of iron or steel - Large
                          Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td>50</td>
                        <td>SUPERIOR STEEL OVERSEAS</td>
                        <td>
                          Star Performer Award for the year 2019-20 in the
                          product group: Tubes, pipes and hollow profiles, and
                          tube or pipe fittings of iron or steel - Medium
                          Merchant
                        </td>
                      </tr>
                      <tr>
                        <td>51</td>
                        <td>SUPERIOR STEEL OVERSEAS</td>
                        <td>
                          Star Performer Award for the year 2020-21 in the
                          product group: Tubes, pipes and hollow profiles, and
                          tube or pipe fittings of iron or steel - Medium
                          Merchant
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" className="bold-text bg-blue col-white">
                          Group 7: Aluminium and articles thereof
                        </td>
                      </tr>
                      <tr>
                        <td>52</td>
                        <td>JINDAL ALUMINIUM LTD</td>
                        <td>
                          Star Performer Award for the year 2019-20 in the
                          product group: Aluminium and articles thereof - Large
                          Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td>53</td>
                        <td>PATTON INTERNATIONAL LTD</td>
                        <td>
                          Star Performer Award for the year 2020-21 in the
                          product group: Aluminium and articles thereof - Large
                          Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td>54</td>
                        <td>NEWAGE FIRE FIGHTING COMPANY LTD</td>
                        <td>
                          Star Performer Award for the year 2019-20 in the
                          product group: Aluminium and articles thereof - Medium
                          Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" className="bold-text bg-blue col-white">
                          Group 8: Non-ferrous metals (excl aluminium) and
                          articles thereof
                        </td>
                      </tr>
                      <tr>
                        <td>55</td>
                        <td>PONDY OXIDES AND CHEMICALS LTD</td>
                        <td>
                          Star Performer Award for the year 2019-20 in the
                          product group : Non-ferrous metals (excl aluminium)
                          and articles thereof-Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td>56</td>
                        <td>PONDY OXIDES AND CHEMICALS LTD</td>
                        <td>
                          Star Performer Award for the year 2020-21 in the
                          product group : Non-ferrous metals (excl aluminium)
                          and articles thereof- Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td>57</td>
                        <td>SYNERGY LOBAL SOURCING</td>
                        <td>
                          Star erformer Award for the year 2019-20 in the
                          product group : Non-ferrous metals (excl aluminium)
                          and articles thereof- Medium Merchant
                        </td>
                      </tr>
                      <tr>
                        <td>58</td>
                        <td>SHERA METAL PVT LTD</td>
                        <td>
                          Star Performer Award for the year 2020-21 in the
                          product group : Non-ferrous metals (excl aluminium)
                          and articles thereof- Medium Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td>59</td>
                        <td>SARU COPPER ALLOY SEMIS PVT LTD</td>
                        <td>
                          Star Performer Award for the year 2019-20 in the
                          product group : Non-ferrous metals (excl aluminium)
                          and articles thereof-Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td>60</td>
                        <td>SARU COPPER ALLOY SEMIS PVT LTD</td>
                        <td>
                          Star Performer Award for the year 2020-21 in the
                          product group : Non-ferrous metals (excl aluminium)
                          and articles thereof- Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" className="bold-text bg-blue col-white">
                          Group 9: Domestic metal products
                        </td>
                      </tr>
                      <tr>
                        <td>61</td>
                        <td>BHALARIA METAL CRAFT PVT LTD</td>
                        <td>
                          Star Performer Award for the year 2019-20 in the
                          product group : Domestic metal products- Large
                          Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":154}'>62</td>
                        <td data-sheets-value='{"1":2,"2":"BHALARIA METAL CRAFT PVT LTD"}'>
                          BHALARIA METAL CRAFT PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Domestic metal products-Medium Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group : Domestic metal products-Medium
                          Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td>63</td>
                        <td>SIVANESAN COMPANY (INDIA)</td>
                        <td>
                          Star Performer Award for the year 2019-20 in the
                          product group : Domestic metal products-Micro Merchant
                        </td>
                      </tr>
                      <tr>
                        <td>64</td>
                        <td>KRISH EXPORTS</td>
                        <td>
                          Star Performer Award for the year 2019-20 in the
                          product group : Domestic metal products-Small
                          Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td>65</td>
                        <td>AKSHARAM INTERNATIONAL LLP</td>
                        <td>
                          Star Performer Award for the year 2020-21 in the
                          product group : Domestic metal products-Small
                          Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" className="bold-text bg-blue col-white">
                          Group 10: Hand tools
                        </td>
                      </tr>
                      <tr>
                        <td>66</td>
                        <td>JK FILES &amp; ENGINEERING LTD</td>
                        <td>
                          Star Performer Award for the year 2019-20 in the
                          product group: Hand tools- Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td>67</td>
                        <td>JK FILES &amp; ENGINEERING LTD</td>
                        <td>
                          Star Performer Award for the year 2020-21 in the
                          product group: Hand tools- Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td>68</td>
                        <td>S MANSUKHLAL &amp; CO</td>
                        <td>
                          Star Performer Award for the year 2019-20 in the
                          product group: Hand tools- Medium Merchant
                        </td>
                      </tr>
                      <tr>
                        <td>69</td>
                        <td>LMT TOOLS INDIA PVT LTD</td>
                        <td>
                          Star Performer Award for the year 2020-21 in the
                          product group: Hand tools- Medium Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Group 11: Metal fasteners, springs and allied articles"}'
                        >
                          Group 11: Metal fasteners, springs and allied articles
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":109}'>70</td>
                        <td data-sheets-value='{"1":2,"2":"BHARAT WIRE ROPES LTD"}'>
                          BHARAT WIRE ROPES LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Metal fasteners, springs and allied articles - Large Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group: Metal fasteners, springs and allied
                          articles - Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":110}'>71</td>
                        <td data-sheets-value='{"1":2,"2":"RATNAVEER METALS LTD"}'>
                          RATNAVEER METALS LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Metal fasteners, springs and allied articles - Large Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group: Metal fasteners, springs and allied
                          articles - Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":111}'>72</td>
                        <td data-sheets-value='{"1":2,"2":"LAMINA INTERNATIONAL"}'>
                          LAMINA INTERNATIONAL
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Metal fasteners, springs and allied articles - Medium Merchant"}'>
                          Star Performer Award for the year 20 in the product
                          group: Metal fasteners, springs and allied articles -
                          Medium Merchant
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":112}'>73</td>
                        <td data-sheets-value='{"1":2,"2":"VIDUSHI WIRES PVT LTD"}'>
                          VIDUSHI WIRES PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Metal fasteners, springs and allied articles - Medium Enterprise "}'>
                          Star Performer Award for the year 2020-21 in the
                          product group: Metal fasteners, springs and allied
                          articles - Medium Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td>74</td>
                        <td data-sheets-value='{"1":2,"2":"GDPA FASTENERS"}'>
                          GDPA FASTENERS
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Metal fasteners, springs and allied articles - Small Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group: Metal fasteners, springs and allied
                          articles - Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td>75</td>
                        <td data-sheets-value='{"1":2,"2":"GDPA FASTENERS"}'>
                          GDPA FASTENERS
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Metal fasteners, springs and allied articles - Small Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group: Metal fasteners, springs and allied
                          articles - Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Group 12: Other fabricated metal products excl machinery and equipment"}'
                        >
                          Group 12: Other fabricated metal products excl
                          machinery and equipment
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":56}'>76</td>
                        <td data-sheets-value='{"1":2,"2":"THERMAX LIMITED"}'>
                          THERMAX LIMITED
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Other fabricated metal products excl machinery and equipment- Large Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group: Other fabricated metal products excl
                          machinery and equipment- Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":57}'>77</td>
                        <td data-sheets-value='{"1":2,"2":"RASHTRIYA METAL INDUSTRIES LTD"}'>
                          RASHTRIYA METAL INDUSTRIES LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Other fabricated metal products excl machinery and equipment- Large Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group: Other fabricated metal products excl
                          machinery and equipment- Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":58}'>78</td>
                        <td data-sheets-value='{"1":2,"2":"D P GARG &amp; CO PVT LTD"}'>
                          D P GARG &amp; CO PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Other fabricated metal products excl machinery and equipment- Medium Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group: Other fabricated metal products excl
                          machinery and equipment- Medium Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":59}'>79</td>
                        <td data-sheets-value='{"1":2,"2":"BHUJ POLYMERS PVT LTD"}'>
                          BHUJ POLYMERS PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Other fabricated metal products excl machinery and equipment- Medium Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group: Other fabricated metal products excl
                          machinery and equipment- Medium Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":60}'>80</td>
                        <td data-sheets-value='{"1":2,"2":"SAMIRIKA EXPORTS"}'>
                          SAMIRIKA EXPORTS
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Other fabricated metal products excl machinery and equipment- Small Enterprise "}'>
                          Star Performer Award for the year 2019-20 in the
                          product group: Other fabricated metal products excl
                          machinery and equipment- Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":61}'>81</td>
                        <td data-sheets-value='{"1":2,"2":"GEECO ENERCON PVT LTD"}'>
                          GEECO ENERCON PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Other fabricated metal products excl machinery and equipment- Small  Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group: Other fabricated metal products excl
                          machinery and equipment- Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Group 13: Engines and turbines and parts + 1 Spl Award "}'
                        >
                          Group 13: Engines and turbines and parts + 1 Spl Award
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":40}'>82</td>
                        <td data-sheets-value='{"1":2,"2":"CUMMINS INDIA LTD"}'>
                          CUMMINS INDIA LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Engines and turbines and parts - Large Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group: Engines and turbines and parts - Large
                          Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":41}'>83</td>
                        <td data-sheets-value='{"1":2,"2":"TOYOTA KIRLOSKAR MOTOR PVT LTD"}'>
                          TOYOTA KIRLOSKAR MOTOR PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Engines and turbines and parts - Large Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group: Engines and turbines and parts - Large
                          Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":42}'>84</td>
                        <td data-sheets-value='{"1":2,"2":"TOYOTA KIRLOSKAR MOTOR PVT LTD"}'>
                          TOYOTA KIRLOSKAR MOTOR PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Special Trophy for Excellence in Exports of MEIS Items 2015-20 -Large Enterprise "}'>
                          Special Trophy for Excellence in Exports of MEIS Items
                          2015-20 -Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":43}'>85</td>
                        <td data-sheets-value='{"1":2,"2":"BHARTI ENGINEERING CORPORATION"}'>
                          BHARTI ENGINEERING CORPORATION
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Engines and turbines and parts - Small Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group: Engines and turbines and parts - Small
                          Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Group 14: Pumps, compressors, hydraulic and pneumatic power engines and parts"}'
                        >
                          Group14: Pumps, compressors, hydraulic and pneumatic
                          power engines and parts
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":74}'>86</td>
                        <td data-sheets-value='{"1":2,"2":"CUMMINS TECHNOLOGIES INDIA PVT LTD"}'>
                          CUMMINS TECHNOLOGIES INDIA PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Pumps, compressors, hydraulic and pneumatic power engines and parts- Large Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group : Pumps, compressors, hydraulic and
                          pneumatic power engines and parts- Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":75}'>87</td>
                        <td data-sheets-value='{"1":2,"2":"CUMMINS TECHNOLOGIES INDIA PVT LTD"}'>
                          CUMMINS TECHNOLOGIES INDIA PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Pumps, compressors, hydraulic and pneumatic power engines and parts- Large Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group : Pumps, compressors, hydraulic and
                          pneumatic power engines and parts- Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":76}'>88</td>
                        <td data-sheets-value='{"1":2,"2":"SABAR HYDROTECH LLP"}'>
                          SABAR HYDROTECH LLP
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Pumps, compressors, hydraulic and pneumatic power engines and parts- Medium Merchant "}'>
                          Star Performer Award for the year 2019-20 in the
                          product group : Pumps, compressors, hydraulic and
                          pneumatic power engines and parts- Medium Merchant
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":77}'>89</td>
                        <td data-sheets-value='{"1":2,"2":"SABAR HYDROTECH LLP"}'>
                          SABAR HYDROTECH LLP
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Pumps, compressors, hydraulic and pneumatic power engines and parts- Medium Merchant "}'>
                          Star Performer Award for the year 2020-21 in the
                          product group : Pumps, compressors, hydraulic and
                          pneumatic power engines and parts- Medium Merchant
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":78}'>90</td>
                        <td data-sheets-value='{"1":2,"2":"KLAUS UNION ENGINEERING INDIA PVT LTD"}'>
                          KLAUS UNION ENGINEERING INDIA PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Pumps, compressors, hydraulic and pneumatic power engines and parts- Small Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group : Pumps, compressors, hydraulic and
                          pneumatic power engines and parts- Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":79}'>91</td>
                        <td data-sheets-value='{"1":2,"2":"KLAUS UNION ENGINEERING INDIA PVT LTD"}'>
                          KLAUS UNION ENGINEERING INDIA PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Pumps, compressors, hydraulic and pneumatic power engines and parts- Small Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group : Pumps, compressors, hydraulic and
                          pneumatic power engines and parts- Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Group 15: Bearings, gears, gearing and driving elements, and parts"}'
                        >
                          Group 15: Bearings, gears, gearing and driving
                          elements, and parts
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":90}'>92</td>
                        <td data-sheets-value='{"1":2,"2":"TIMKEN ENGG &amp; RESEARCH INDIA PVT LTD"}'>
                          TIMKEN ENGG &amp; RESEARCH INDIA PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Bearings, gears, gearing and driving elements and parts- Large Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group : Bearings, gears, gearing and driving
                          elements and parts-Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":91}'>93</td>
                        <td data-sheets-value='{"1":2,"2":"TIMKEN ENGG &amp; RESEARCH INDIA PVT LTD"}'>
                          TIMKEN ENGG &amp; RESEARCH INDIA PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Bearings, gears, gearing and driving elements and parts- Large Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group : Bearings, gears, gearing and driving
                          elements and parts- Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":92}'>94</td>
                        <td data-sheets-value='{"1":2,"2":"JEI BEARINGS"}'>
                          JEI BEARINGS
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Bearings, gears, gearing and driving elements and parts- Medium Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group : Bearings, gears, gearing and driving
                          elements and parts- Medium Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":93}'>95</td>
                        <td data-sheets-value='{"1":2,"2":"JEI BEARINGS"}'>
                          JEI BEARINGS
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Bearings, gears, gearing and driving elements and parts-- Small Enterprise "}'>
                          Star Performer Award for the year 2020-21 in the
                          product group : Bearings, gears, gearing and driving
                          elements and parts- Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":94}'>96</td>
                        <td data-sheets-value='{"1":2,"2":"R R INTERNATIONAL"}'>
                          R R INTERNATIONAL
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Bearings, gears, gearing and driving elements and parts- Medium Merchant "}'>
                          Star Performer Award for the year 2020-21 in the
                          product group : Bearings, gears, gearing and driving
                          elements and parts- Medium Merchant
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Group 16: Miscellaneous general purpose machinery + 1 Spl Award"}'
                        >
                          Group 16: Miscellaneous general purpose machinery + 1
                          Spl Award
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":136}'>97</td>
                        <td data-sheets-value='{"1":2,"2":"PRABHA ENGINEERING PVT LTD"}'>
                          PRABHA ENGINEERING PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Miscellaneous general purpose machinery- Large Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group : Miscellaneous general purpose
                          machinery- Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":137}'>98</td>
                        <td data-sheets-value='{"1":2,"2":"LARSEN &amp; TOUBRO LTD"}'>
                          LARSEN &amp; TOUBRO LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Miscellaneous general purpose machinery-Large  Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group: Miscellaneous general purpose
                          machinery-Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":138}'>99</td>
                        <td data-sheets-value='{"1":2,"2":"IGP ENGINEERS PVT LTD"}'>
                          IGP ENGINEERS PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Miscellaneous general purpose machinery- Medium Enterprise "}'>
                          Star Performer Award for the year 2019-20 in the
                          product group : Miscellaneous general purpose
                          machinery- Medium Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":139}'>100</td>
                        <td data-sheets-value='{"1":2,"2":"IGP ENGINEERS PVT LTD"}'>
                          IGP ENGINEERS PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Miscellaneous general purpose machinery-Medium  Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group: Miscellaneous general purpose
                          machinery-Medium Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":140}'>101</td>
                        <td data-sheets-value='{"1":2,"2":"ZEEMAG INDUSTRIES "}'>
                          ZEEMAG INDUSTRIES
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Miscellaneous general purpose machinery- Small Enterprise (Micro )"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group : Miscellaneous general purpose
                          machinery- Small Enterprise (Micro )
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":141}'>102</td>
                        <td data-sheets-value='{"1":2,"2":"ZEEMAG INDUSTRIES"}'>
                          ZEEMAG INDUSTRIES
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Special Trophy for Excellence in Exports of High-Technology Products Award for the year 2020-21 -Small  Enterprise"}'>
                          Special Trophy for Excellence in Exports of
                          High-Technology Products Award for the year
                          2020-21-Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":142}'>103</td>
                        <td data-sheets-value='{"1":2,"2":"AQUASCAPE ENGINEERS PVT LTD"}'>
                          AQUASCAPE ENGINEERS PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Miscellaneous general purpose machinery-Small  Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group Miscellaneous general purpose
                          machinery-Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Group 17: Machine-tools and parts and accessories &amp; 1 Grp 22 Award"}'
                        >
                          Group 17: Machine tools and parts and accessories
                          &amp; 1 Grp 22 Award
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":124}'>104</td>
                        <td data-sheets-value='{"1":2,"2":"PLANSEE INDIA HIGH PERFORMANCE MATERIALS PVT LTD"}'>
                          PLANSEE INDIA HIGH PERFORMANCE MATERIALS PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Machine-tools and parts and accessories- Large Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group : Machine-tools and parts and
                          accessories- Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":123}'>105</td>
                        <td data-sheets-value='{"1":2,"2":"PLANSEE INDIA HIGH PERFORMANCE MATERIALS PVT LTD"}'>
                          PLANSEE INDIA HIGH PERFORMANCE MATERIALS PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Domestic appliances and parts- Large  Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group: Domestic appliances and parts-Large
                          Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":125}'>106</td>
                        <td data-sheets-value='{"1":2,"2":"TRISHUL MACHINE TOOLS PVT LTD"}'>
                          TRISHUL MACHINE TOOLS PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Machine-tools and parts and accessories- Small Enterprise (Micro)"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group : Machine-tools and parts and
                          accessories- Small Enterprise (Micro)
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":126}'>107</td>
                        <td data-sheets-value='{"1":2,"2":"DRILL JIG BUSHING CO (MADRAS) PVT LTD"}'>
                          DRILL JIG BUSHING CO (MADRAS) PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Machine-tools and parts and accessories- Small Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group : Machine-tools and parts and
                          accessories- Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Group 18: Agricultural tractors"}'
                        >
                          Group 18: Agricultural tractors
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":34}'>108</td>
                        <td data-sheets-value='{"1":2,"2":"JOHN DEERE INDIA PVT LTD"}'>
                          JOHN DEERE INDIA PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Agricultural Tractors - Large Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group:Agricultural Tractors - Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":35}'>109</td>
                        <td data-sheets-value='{"1":2,"2":"JOHN DEERE INDIA PVT LTD"}'>
                          JOHN DEERE INDIA PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Agricultural Tractors - Large Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group:Agricultural Tractors - Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Group 19: Other Agricultural or forestry machinery and parts"}'
                        >
                          Group 19: Other Agricultural or forestry machinery and
                          parts
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":173}'>110</td>
                        <td data-sheets-value='{"1":2,"2":"JAIN IRRIGATION SYSTEMS LTD"}'>
                          JAIN IRRIGATION SYSTEMS LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Other Agricultural or forestry machinery and parts- Large Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group: Other Agricultural or forestry
                          machinery and parts- Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":174}'>111</td>
                        <td data-sheets-value='{"1":2,"2":"JAIN IRRIGATION SYSTEMS LTD"}'>
                          JAIN IRRIGATION SYSTEMS LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Other Agricultural or forestry machinery and parts- Large Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group: Other Agricultural or forestry
                          machinery and parts- Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":18}'>112</td>
                        <td data-sheets-value='{"1":2,"2":"NIPHA ENTERPRISES LLP"}'>
                          NIPHA ENTERPRISES LLP
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Other Agricultural or forestry machinery and parts- Medium Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group: Other Agricultural or forestry
                          machinery and parts- Medium Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":119}'>113</td>
                        <td data-sheets-value='{"1":2,"2":"INDIA AGROVISION IMPLEMENTS PVT LTD"}'>
                          INDIA AGROVISION IMPLEMENTS PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Other Agricultural or forestry machinery and parts- Small Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group: Other Agricultural or forestry
                          machinery and parts- Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":120}'>114</td>
                        <td data-sheets-value='{"1":2,"2":"AGRI TILL INDIA "}'>
                          AGRI TILL INDIA
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Other Agricultural or forestry machinery and parts- Medium Enterprise"}'>
                          Star Performer Award for the year2020-21 in the
                          product group:Other Agricultural or forestry machinery
                          and parts- Medium Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Group 20: Machinery for mining, quarrying and construction, and parts"}'
                        >
                          Group 20: Machinery for mining, quarrying and
                          construction, and parts
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":131}'>115</td>
                        <td data-sheets-value='{"1":2,"2":"M M  CASTINGS PVT  LTD"}'>
                          M M CASTINGS PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Machinery for mining, quarrying and construction, and parts - Large  Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group: Machinery for mining, quarrying and
                          construction, and parts - Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":132}'>116</td>
                        <td data-sheets-value='{"1":2,"2":"M M CASTINGS PVT LTD"}'>
                          M M CASTINGS PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Machinery for mining, quarrying and construction and parts - Large  Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group: Machinery for mining, quarrying and
                          construction and parts - Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":133}'>117</td>
                        <td data-sheets-value='{"1":2,"2":"VOLTA IMPEX PVT LTD"}'>
                          VOLTA IMPEX PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Machinery for mining, quarrying and construction, and parts - Medium Merchant"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group: Machinery for mining, quarrying and
                          construction, and parts - Medium Merchant
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":134}'>118</td>
                        <td data-sheets-value='{"1":2,"2":"VOLTA IMPEX PVT LTD"}'>
                          VOLTA IMPEX PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Special Trophy for Excellence in Exports of High-Technology Products Award for the year 2020-21 - Merchant Exporter "}'>
                          Special Trophy for Excellence in Exports of
                          High-Technology Products Award for the year 2020-21 -
                          Merchant Exporter
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":135}'>119</td>
                        <td data-sheets-value='{"1":2,"2":"MANTRI METALLICS PVT LTD"}'>
                          MANTRI METALLICS PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Machinery for mining, quarrying and construction and parts - Medium  Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group: Machinery for mining, quarrying and
                          construction and parts - Medium Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Group 21: Miscellaneous special-purpose machinery (incl metallurgy, food and textile) and parts)"}'
                        >
                          Group 21: Miscellaneous special-purpose machinery
                          (incl metallurgy, food and textile) and parts
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":51}'>120</td>
                        <td data-sheets-value='{"1":2,"2":"LARSEN &amp; TOUBRO LTD"}'>
                          LARSEN &amp; TOUBRO LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Miscellaneous special-purpose machinery (incl metallurgy, food and textile) and parts-Large Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group: Miscellaneous special-purpose machinery
                          (incl metallurgy, food and textile) and parts-Large
                          Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":52}'>121</td>
                        <td data-sheets-value='{"1":2,"2":"LOHIA CORP LTD"}'>
                          LOHIA CORP LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Miscellaneous special-purpose machinery (incl metallurgy, food and textile) and parts-Large Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group: Miscellaneous special-purpose machinery
                          (incl metallurgy, food and textile) and parts-Large
                          Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":53}'>122</td>
                        <td data-sheets-value='{"1":2,"2":"BRY-AIR (ASIA) PVT LTD"}'>
                          BRY-AIR (ASIA) PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Miscellaneous special-purpose machinery (incl metallurgy, food and textile) and parts-Medium Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group: Miscellaneous special-purpose machinery
                          (incl metallurgy, food and textile) and parts-Medium
                          Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":54}'>123</td>
                        <td data-sheets-value='{"1":2,"2":"VEENDEEP OILTEK EXPORT PVT LTD"}'>
                          VEENDEEP OILTEK EXPORT PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Miscellaneous special-purpose machinery (incl metallurgy, food and textile) and parts-Small Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group: Miscellaneous special-purpose machinery
                          (incl metallurgy, food and textile) and parts-Small
                          Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":55}'>124</td>
                        <td data-sheets-value='{"1":2,"2":"BERKEL INDUSTRIES PVT LTD"}'>
                          BERKEL INDUSTRIES PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Miscellaneous special-purpose machinery (incl metallurgy, food and textile) and parts-Small Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group: Miscellaneous special-purpose machinery
                          (incl metallurgy, food and textile) and parts-Small
                          Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Group 22: Domestic appliances and parts ( only 2 as 1 was clubbed with Grp 17)"}'
                        >
                          Group 22: Domestic appliances and parts ( only 2 as 1
                          was clubbed with Grp 17)
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":121}'>125</td>
                        <td data-sheets-value='{"1":2,"2":"THERMOPADS PVT LTD"}'>
                          THERMOPADS PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Domestic appliances and parts- Large  Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group: Domestic appliances and parts- Large
                          Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":122}'>126</td>
                        <td data-sheets-value='{"1":2,"2":"THERMOPADS PVT LTD"}'>
                          THERMOPADS PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Domestic appliances and parts- Medium Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group: Domestic appliances and parts-Medium
                          Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Group 23: Electric motors, generators and transformers, and parts"}'
                        >
                          Group 23: Electric motors, generators and
                          transformers, and parts
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":84}'>127</td>
                        <td data-sheets-value='{"1":2,"2":"TOSHIBA TRANSMISSION &amp; DISTRIBUTION SYSTEMS (I) PVT LTD "}'>
                          TOSHIBA TRANSMISSION &amp; DISTRIBUTION SYSTEMS (I)
                          PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Electric motors, generators and transformers and parts-Large Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group: Electric motors, generators and
                          transformers and parts-Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":85}'>128</td>
                        <td data-sheets-value='{"1":2,"2":"CUMMINS GENERATOR TECHNOLOGIES INDIA PVT LTD"}'>
                          CUMMINS GENERATOR TECHNOLOGIES INDIA PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Electric motors, generators and transformers and parts-Large Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group: Electric motors, generators and
                          transformers and parts-Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":86}'>129</td>
                        <td data-sheets-value='{"1":2,"2":"NAARGO INDUSTRIES PVT LTD"}'>
                          NAARGO INDUSTRIES PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Electric motors, generators and transformers and parts-Medium Merchant"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group: Electric motors, generators and
                          transformers and parts-Medium Merchant
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":87}'>130</td>
                        <td data-sheets-value='{"1":2,"2":"MAGNUS POWER PVT LTD"}'>
                          MAGNUS POWER PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Electric motors, generators and transformers and parts-Medium Merchant"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group: Electric motors, generators and
                          transformers and parts-Medium Merchant
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":88}'>131</td>
                        <td data-sheets-value='{"1":2,"2":"CREATIVE INDUSTRIES "}'>
                          CREATIVE INDUSTRIES
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Electric motors, generators and transformers and parts-Small Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group: Electric motors, generators and
                          transformers and parts-Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":89}'>132</td>
                        <td data-sheets-value='{"1":2,"2":"M S TRANSFORMERS INDIA PVT LTD"}'>
                          M S TRANSFORMERS INDIA PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Electric motors, generators and transformers and parts-Small Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group: Electric motors, generators and
                          transformers and parts-Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Group 24: Mica and other mineral-based articles used mainly for electrical purposes"}'
                        >
                          Group 24: Mica and other mineral-based articles used
                          mainly for electrical purposes
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":48}'>133</td>
                        <td data-sheets-value='{"1":2,"2":"GRAPHITE INDIA LTD"}'>
                          GRAPHITE INDIA LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Mica and other mineral-based articles used mainly for electrical purposes- Large Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group: Mica and other mineral-based articles
                          used mainly for electrical purposes- Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":49}'>134</td>
                        <td data-sheets-value='{"1":2,"2":"GRAPHITE INDIA LTD"}'>
                          GRAPHITE INDIA LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Mica and other mineral-based articles used mainly for electrical purposes- Large Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group: Mica and other mineral-based articles
                          used mainly for electrical purposes- Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":50}'>135</td>
                        <td
                          data-sheets-value='{"1":2,"2":"SHREE GR EXPORT PVT LTD"}'
                          data-sheets-textstyleruns='{"1":0}{"1":8,"2":{"2":{"1":2,"2":16711680},"3":"Calibri Light","4":11}}{"1":9,"2":{"3":"Calibri Light","4":11}}{"1":15,"2":{"2":{"1":2,"2":16711680},"3":"Calibri Light","4":11}}{"1":16,"2":{"2":{"1":3,"3":1},"3":"Calibri Light","4":11}}'
                        >
                          SHREE GR EXPORT PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Mica and other mineral-based articles used mainly for electrical purposes - Medium Merchant"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group: Mica and other mineral-based articles
                          used mainly for electrical purposes - Medium Merchant
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Group 25: Miscellaneous electrical machinery and apparatus (incl electricity distribution and control apparatus)"}'
                        >
                          Group 25: Miscellaneous electrical machinery and
                          apparatus (incl electricity distribution and control
                          apparatus)
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":143}'>136</td>
                        <td data-sheets-value='{"1":2,"2":"BRASS COPPER &amp; ALLOYS (I) PVT LTD"}'>
                          BRASS COPPER &amp; ALLOYS (I) PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Miscellaneous electrical machinery and apparatus (incl electricity distribution and control apparatus)- Large Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group: Miscellaneous electrical machinery and
                          apparatus (incl electricity distribution and control
                          apparatus)- Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":144}'>137</td>
                        <td data-sheets-value='{"1":2,"2":"SHAKTI PUMPS (INDIA) LTD"}'>
                          SHAKTI PUMPS (INDIA) LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Miscellaneous electrical machinery and apparatus (incl electricity distribution and control apparatus)- Large Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group: Miscellaneous electrical machinery and
                          apparatus (incl electricity distribution and control
                          apparatus)- Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":145}'>138</td>
                        <td data-sheets-value='{"1":2,"2":"VIDYA WIRES PVT LTD"}'>
                          VIDYA WIRES PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Miscellaneous electrical machinery and apparatus (incl electricity distribution and control apparatus)- Medium Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group : Miscellaneous electrical machinery and
                          apparatus (incl electricity distribution and control
                          apparatus)- Medium Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":146}'>139</td>
                        <td data-sheets-value='{"1":2,"2":"M+ACER AUTOMOTIVE SYSTEMS PVT LTD"}'>
                          M+ACER AUTOMOTIVE SYSTEMS PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Miscellaneous electrical machinery and apparatus (incl electricity distribution and control apparatus)- Medium Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group : Miscellaneous electrical machinery and
                          apparatus (incl electricity distribution and control
                          apparatus)- Medium Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":147}'>140</td>
                        <td data-sheets-value='{"1":2,"2":"FCG LAMEPROOF CONTROL GEARS PVT LTD"}'>
                          FCG LAMEPROOF CONTROL GEARS PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Miscellaneous electrical machinery and apparatus (incl electricity distribution and control apparatus)- Small Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group: Miscellaneous electrical machinery and
                          apparatus (incl electricity distribution and control
                          apparatus)- Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":148}'>141</td>
                        <td data-sheets-value='{"1":2,"2":"YOGICAB INSULATION PVT LTD"}'>
                          YOGICAB INSULATION PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Miscellaneous electrical machinery and apparatus (incl electricity distribution and control apparatus)- Small Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group : Miscellaneous electrical machinery and
                          apparatus (incl electricity distribution and control
                          apparatus)- Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Group 26: Medical and surgical equipment and orthopaedic appliances + 1 Spl Award "}'
                        >
                          Group 26: Medical and surgical equipment and
                          orthopaedic appliances + 1 Spl Award
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":127}'>142</td>
                        <td data-sheets-value='{"1":2,"2":"HINDUSTAN SYRINGES &amp; MEDICAL DEVICES LTD"}'>
                          HINDUSTAN SYRINGES &amp; MEDICAL DEVICES LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Medical and surgical equipment and orthopaedic appliances- Large Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group : Medical and surgical equipment and
                          orthopaedic appliances- Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":128}'>143</td>
                        <td data-sheets-value='{"1":2,"2":"HINDUSTAN SYRINGES &amp; MEDICAL DEVICES LTD"}'>
                          HINDUSTAN SYRINGES &amp; MEDICAL DEVICES LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Medical and surgical equipment and orthopaedic appliances- Large Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group : Medical and surgical equipment and
                          orthopaedic appliances- Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":129}'>144</td>
                        <td data-sheets-value='{"1":2,"2":"SURGI EDGE (INDIA)"}'>
                          SURGI EDGE (INDIA)
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Medical and surgical equipment and orthopaedic appliances- Micro Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group : Medical and surgical equipment and
                          orthopaedic appliances- Micro Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":130}'>145</td>
                        <td data-sheets-value='{"1":2,"2":"SURGI EDGE (INDIA)"}'>
                          SURGI EDGE (INDIA)
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Special Trophy for Excellence in Exports of High-Technology Products Award for the year 2020-21 -Micro  Enterprise"}'>
                          Special Trophy for Excellence in Exports of
                          High-Technology Products Award for the year 2020-21
                          -Micro Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Group 27: Miscellaneous instruments and appliances+ 1 Spl Award"}'
                        >
                          Group 27: Miscellaneous instruments and appliances+ 1
                          Spl Award
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":158}'>146</td>
                        <td data-sheets-value='{"1":2,"2":"BAUMER TECHNOLOGIES INDIA PVT LTD"}'>
                          BAUMER TECHNOLOGIES INDIA PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Miscellaneous instruments and appliances- Medium Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group : Miscellaneous instruments and
                          appliances- Medium Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":159}'>147</td>
                        <td data-sheets-value='{"1":2,"2":"GAUGES BOURDON (INDIA) PVT LTD"}'>
                          GAUGES BOURDON (INDIA) PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Miscellaneous instruments and appliances- Small Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group : Miscellaneous instruments and
                          appliances- Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":160}'>148</td>
                        <td data-sheets-value='{"1":2,"2":"GAUGES BOURDON (INDIA) PVT LTD"}'>
                          GAUGES BOURDON (INDIA) PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Special Trophy for Excellence in Exports of High-Technology Products Award for the year 2020-21 -Medium Enterprise"}'>
                          Special Trophy for Excellence in Exports of
                          High-Technology Products Award for the year 2020-21
                          -Medium Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":161}'>149</td>
                        <td data-sheets-value='{"1":2,"2":"MINCO (INDIA) FLOW ELEMENTS PVT LTD"}'>
                          MINCO (INDIA) FLOW ELEMENTS PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Miscellaneous instruments and appliances- Small Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group : Miscellaneous instruments and
                          appliances- Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Group 28: Motor vehicles"}'
                        >
                          Group 28: Motor vehicles
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":26}'>150</td>
                        <td data-sheets-value='{"1":2,"2":"MARUTI SUZUKI INDIA LTD"}'>
                          MARUTI SUZUKI INDIA LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star Performer Award for the year 2019-20 in the product group -Motor Vehicles-Large Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group -Motor Vehicles-Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":27}'>151</td>
                        <td data-sheets-value='{"1":2,"2":"MARUTI SUZUKI INDIA LTD"}'>
                          MARUTI SUZUKI INDIA LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star Performer Award for the year 2020-21 in the product group -Motor Vehicles-Large Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group -Motor Vehicles-Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":28}'>152</td>
                        <td data-sheets-value='{"1":2,"2":"MANIAR AND COMPANY"}'>
                          MANIAR AND COMPANY
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star Performer Award for the year 2019-20 in the product group -Motor Vehicles-Small Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group -Motor Vehicles-Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":29}'>153</td>
                        <td data-sheets-value='{"1":2,"2":"MANIAR AND COMPANY"}'>
                          MANIAR AND COMPANY
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star Performer Award for the year 2020-21 in the product group -Motor Vehicles-Small Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group -Motor Vehicles-Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Group 29: Automobile components"}'
                        >
                          Group 29: Automobile components
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":68}'>154</td>
                        <td data-sheets-value='{"1":2,"2":"VICTORA AUTO PVT LTD"}'>
                          VICTORA AUTO PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Automobile components- Large Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group : Automobile components- Large
                          Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":69}'>155</td>
                        <td data-sheets-value='{"1":2,"2":"SUPER AUTO FORGE PVT LTD"}'>
                          SUPER AUTO FORGE PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Automobile components- Large Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group : Automobile components- Large
                          Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":70}'>156</td>
                        <td data-sheets-value='{"1":2,"2":"G N EXPORTS"}'>
                          G N EXPORTS
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Automobile components-Medium Merchant"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group : Automobile components-Medium Merchant
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":71}'>157</td>
                        <td data-sheets-value='{"1":2,"2":"G N EXPORTS"}'>
                          G N EXPORTS
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Automobile components-Medium Merchant"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group : Automobile components-Medium Merchant
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":72}'>158</td>
                        <td data-sheets-value='{"1":2,"2":"AYUSHI ENGINEERING PVT LTD"}'>
                          AYUSHI ENGINEERING PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Automobile components- Small Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group : Automobile components- Small
                          Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":73}'>159</td>
                        <td data-sheets-value='{"1":2,"2":"AYUSHI ENGINEERING PVT LTD"}'>
                          AYUSHI ENGINEERING PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Automobile components- Small Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group : Automobile components- Small
                          Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Group 30: Two/three wheelers and parts + 1 from Grp 31 award "}'
                        >
                          Group 30: Two/three wheelers and parts + 1 from Grp 31
                          award
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":162}'>160</td>
                        <td data-sheets-value='{"1":2,"2":"VA TECH WABAG LTD"}'>
                          VA TECH WABAG LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Two/three wheelers and parts- Large Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group: Two/three wheelers and parts- Large
                          Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":163}'>161</td>
                        <td data-sheets-value='{"1":2,"2":"KUNAL INTERNATIONAL"}'>
                          KUNAL INTERNATIONAL
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Two/three wheelers and parts- Medium Merchant"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group : Two/three wheelers and parts- Medium
                          Merchant
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":164}'>162</td>
                        <td data-sheets-value='{"1":2,"2":"KUNAL INTERNATIONAL"}'>
                          KUNAL INTERNATIONAL
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Bicycles and parts- Medium Merchant"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group : Bicycles and parts- Medium Merchant
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Group 31: Bicycles and parts ( only 4 as 1 was clubbed with Grp 30) + 1 Spl Award "}'
                        >
                          Group 31: Bicycles and parts (only 4 as 1 was clubbed
                          with Grp 30) + 1 Spl Award
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":165}'>163</td>
                        <td data-sheets-value='{"1":2,"2":"F M EXIM"}'>
                          F M EXIM
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Bicycles and parts- Medium Merchant"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group : Bicycles and parts- Medium Merchant
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":166}'>164</td>
                        <td data-sheets-value='{"1":2,"2":"F M EXIM"}'>
                          F M EXIM
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Special Trophy for Excellence in Exports of MEIS Items 2015-20-Micro Enterprise "}'>
                          Special Trophy for Excellence in Exports of MEIS Items
                          2015-20-Micro Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":167}'>165</td>
                        <td data-sheets-value='{"1":2,"2":"TIPSON CYCLES PVT LTD"}'>
                          TIPSON CYCLES PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Bicycles and parts- Small Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group : Bicycles and parts- Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":168}'>166</td>
                        <td data-sheets-value='{"1":2,"2":"TIPSON CYCLES PVT LTD"}'>
                          TIPSON CYCLES PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Bicycles and parts- Small Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group : Bicycles and parts- Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Group 32: Miscellaneous transport equipment and parts"}'
                        >
                          Group 32: Miscellaneous transport equipment and parts
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":169}'>167</td>
                        <td data-sheets-value='{"1":2,"2":"KHS MACHINERY PVT LTD"}'>
                          KHS MACHINERY PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Miscellaneous transport equipment and parts- Large Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group : Miscellaneous transport equipment and
                          parts- Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":170}'>168</td>
                        <td data-sheets-value='{"1":2,"2":"HIMTECH CASTINGS"}'>
                          HIMTECH CASTINGS
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Miscellaneous transport equipment and parts- Micro Merchant "}'>
                          Star Performer Award for the year 2020-21 in the
                          product group : Miscellaneous transport equipment and
                          parts- Micro Merchant
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":171}'>169</td>
                        <td data-sheets-value='{"1":2,"2":"INNOVATIVE MOULD WORKS"}'>
                          INNOVATIVE MOULD WORKS
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Miscellaneous transport equipment and parts- Small  Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group : Miscellaneous transport equipment and
                          parts- Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":172}'>170</td>
                        <td data-sheets-value='{"1":2,"2":"INNOVATIVE MOULD WORKS"}'>
                          INNOVATIVE MOULD WORKS
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Miscellaneous transport equipment and parts- Small  Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group : Miscellaneous transport equipment and
                          parts- Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Group 33: Project exports"}'
                        >
                          Group 33: Project exports
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":151}'>171</td>
                        <td data-sheets-value='{"1":2,"2":"HMT (INTERNATIONAL) LTD"}'>
                          HMT (INTERNATIONAL) LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Project exports - Large Enterprise"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group: Project exports - Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":152}'>172</td>
                        <td data-sheets-value='{"1":2,"2":"HMT (INTERNATIONAL) LTD"}'>
                          HMT (INTERNATIONAL) LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Project exports - Large Enterprise"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group: Project exports - Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":153}'>173</td>
                        <td data-sheets-value='{"1":2,"2":"MBH POWER PVT LTD"}'>
                          MBH POWER PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2019-20 in the product group: Project exports - Micro Merchant"}'>
                          Star Performer Award for the year 2019-20 in the
                          product group: Project exports - Micro Merchant
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":154}'>174</td>
                        <td data-sheets-value='{"1":2,"2":"MBH POWER PVT LTD"}'>
                          MBH POWER PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Star  Performer Award for the year 2020-21 in the product group: Project exports - Micro Merchant"}'>
                          Star Performer Award for the year 2020-21 in the
                          product group: Project exports - Micro Merchant
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed color-1 btn-4"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Special Trophy for Excellence in Exports of High-Technology
                  Products 2019-20 & 2020-2021 - 8 Winners - 4 announced earlier
                  and 4 now
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <table className="table table-bordered table-striped">
                    <tbody>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Spl Trophy Large - Hi Tech FY 20 and 21"}'
                        >
                          Spl Trophy Large - Hi Tech FY 20 and 21
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":175}'>175</td>
                        <td data-sheets-value='{"1":2,"2":"SHARMA ORTHOPEDIC INDIA PVT LTD"}'>
                          SHARMA ORTHOPEDIC INDIA PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Special Trophy for Excellence in Exports of High-Technology Products Award for the year 2019-20 - Large Enterprise"}'>
                          Special Trophy for Excellence in Exports of
                          High-Technology Products Award for the year 2019-20 -
                          Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":176}'>176</td>
                        <td data-sheets-value='{"1":2,"2":"SHARMA ORTHOPEDIC INDIA PVT LTD"}'>
                          SHARMA ORTHOPEDIC INDIA PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Special Trophy for Excellence in Exports of High-Technology Products Award for the year 2020-21 - Large Enterprise"}'>
                          Special Trophy for Excellence in Exports of
                          High-Technology Products Award for the year 2020-21 -
                          Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Spl Trophy Medium  - Hi Tech FY 20 "}'
                        >
                          Spl Trophy Medium - Hi Tech FY 20
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":177}'>177</td>
                        <td data-sheets-value='{"1":2,"2":"INDUSTRIAL BOILERS LTD"}'>
                          INDUSTRIAL BOILERS LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Special Trophy for Excellence in Exports of High-Technology Products Award for the year 2019-20 -Medium Enterprise"}'>
                          Special Trophy for Excellence in Exports of
                          High-Technology Products Award for the year 2019-20
                          -Medium Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Spl Trophy Merchant   - Hi Tech FY 20 "}'
                        >
                          Spl Trophy Merchant - Hi Tech FY 20
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":178}'>178</td>
                        <td data-sheets-value='{"1":2,"2":"MOHAN MUTHA EXPORTS PVT LTD"}'>
                          MOHAN MUTHA EXPORTS PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Special Trophy for Excellence in Exports of High-Technology Products Award for the year 2019-20 - Merchant Exporter "}'>
                          Special Trophy for Excellence in Exports of
                          High-Technology Products Award for the year 2019-20 -
                          Merchant Exporter
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed color-1 btn-4"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Special Trophy for Excellence in Exports of MEIS Items 2015-20
                  - 5 Winners - (3 announced earlier and 2 now )
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <table className="table table-bordered table-striped">
                    <tbody>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Spl Trophy Medium - MEIS FY 20 "}'
                        >
                          Spl Trophy Medium - MEIS FY 20
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":179}'>179</td>
                        <td data-sheets-value='{"1":2,"2":"METALLIC FERRO ALLOYS LLP"}'>
                          METALLIC FERRO ALLOYS LLP
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Special Trophy for Excellence in Exports of MEIS Items 2015-20-Medium Enterprise"}'>
                          Special Trophy for Excellence in Exports of MEIS Items
                          2015-20-Medium Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Spl Trophy Merchant - MEIS FY 20 "}'
                        >
                          Spl Trophy Merchant - MEIS FY 20
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":180}'>180</td>
                        <td data-sheets-value='{"1":2,"2":"TOYOTA TSUSHO INDIA PVT LTD"}'>
                          TOYOTA TSUSHO INDIA PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Special Trophy for Excellence in Exports of MEIS Items 2015-20-Merchant Exporter "}'>
                          Special Trophy for Excellence in Exports of MEIS Items
                          2015-20-Merchant Exporter
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed color-1 btn-4"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Special Trophy for Excellence in Export of Engineering
                  Services (5)
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <table className="table table-bordered table-striped">
                    <tbody>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Spl Trophy Large Eng Services - FY 20 and 21 "}'
                        >
                          Spl Trophy Large Eng Services - FY 20 and 21
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":181}'>181</td>
                        <td data-sheets-value='{"1":2,"2":"BHARAT HEAVY ELECTRICALS LTD"}'>
                          BHARAT HEAVY ELECTRICALS LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Special Trophy for Excellence in Export  of Engineering Services for 2019-20 -Large Enterprise"}'>
                          Special Trophy for Excellence in Export of Engineering
                          Services for 2019-20 -Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":182}'>182</td>
                        <td data-sheets-value='{"1":2,"2":"BHARAT HEAVY ELECTRICALS LTD"}'>
                          BHARAT HEAVY ELECTRICALS LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Special Trophy for Excellence in Export  of Engineering   services for 2020-21 -Large Enterprise"}'>
                          Special Trophy for Excellence in Export of Engineering
                          services for 2020-21 -Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Spl Trophy  Medium  Eng Services - FY 20 "}'
                        >
                          Spl Trophy Medium Eng Services - FY 20
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":183}'>183</td>
                        <td data-sheets-value='{"1":2,"2":"ARUDRA ENGINEERS PVT LTD"}'>
                          ARUDRA ENGINEERS PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Special Trophy for Excellence in Export  of Engineering Services for 2019-20 - Medium  Enterprise"}'>
                          Special Trophy for Excellence in Export of Engineering
                          Services for 2019-20 - Medium Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Spl Trophy  Medium  Eng Services - FY 21 "}'
                        >
                          Spl Trophy Medium Eng Services - FY 21
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":184}'>184</td>
                        <td data-sheets-value='{"1":2,"2":"KSE ELECTRICALS PVT LTD"}'>
                          KSE ELECTRICALS PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Special Trophy for Excellence in Export  of Engineering   services for 2020-21 -Medium  Enterprise"}'>
                          Special Trophy for Excellence in Export of Engineering
                          services for 2020-21 -Medium Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Spl Trophy Small   Eng Services - FY 20 "}'
                        >
                          Spl Trophy Small Eng Services - FY 20
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":185}'>185</td>
                        <td data-sheets-value='{"1":2,"2":"ASE STRUCTURE DESIGN PVT LTD"}'>
                          ASE STRUCTURE DESIGN PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Special Trophy for Excellence in Export  of Engineering   services for 2019-20 -Small Enterprise"}'>
                          Special Trophy for Excellence in Export of Engineering
                          services for 2019-20 -Small Enterprise
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button collapsed color-1 btn-4"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  Award for Special Contribution: Highest Growth in Exports
                  during 2019-20 (8)
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <table className="table table-bordered table-striped">
                    <tbody>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Spl Trophy Large   Highest Growth  - FY 20 "}'
                        >
                          Spl Trophy Large Highest Growth - FY 20
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":186}'>186</td>
                        <td data-sheets-value='{"1":2,"2":"TATA CUMMINS PVT LTD"}'>
                          TATA CUMMINS PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Award for Special Contribution: Highest Growth in Exports during 2019-20-Large Enterprise "}'>
                          Award for Special Contribution: Highest Growth in
                          Exports during 2019-20-Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Spl Trophy Large   Highest Growth  - FY 21 "}'
                        >
                          Spl Trophy Large Highest Growth - FY 21
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":187}'>187</td>
                        <td data-sheets-value='{"1":2,"2":"SUN MARK STAINLESS PVT LTD"}'>
                          SUN MARK STAINLESS PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Award for Special Contribution: Highest Growth in Exports during 2020-21-Large Enterprise "}'>
                          Award for Special Contribution: Highest Growth in
                          Exports during 2020-21-Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Spl Trophy Medium    Highest Growth  - FY 20 "}'
                        >
                          Spl Trophy Medium Highest Growth - FY 20
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":188}'>188</td>
                        <td data-sheets-value='{"1":2,"2":"SIDANA EXPORTS"}'>
                          SIDANA EXPORTS
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Award for Special Contribution: Highest Growth in Exports during 2019-20-Medium Enterprise "}'>
                          Award for Special Contribution: Highest Growth in
                          Exports during 2019-20-Medium Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Spl Trophy Medium    Highest Growth  - FY 21 "}'
                        >
                          Spl Trophy Medium Highest Growth - FY 21
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":189}'>189</td>
                        <td data-sheets-value='{"1":2,"2":"NIF ISPAT LTD"}'>
                          NIF ISPAT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Award for Special Contribution: Highest Growth in Exports during 2020-21-Medium Enterprise "}'>
                          Award for Special Contribution: Highest Growth in
                          Exports during 2020-21-Medium Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Spl Trophy Small   Highest Growth  - FY 20 "}'
                        >
                          Spl Trophy Small Highest Growth - FY 20
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":190}'>190</td>
                        <td data-sheets-value='{"1":2,"2":"ENCON INTERNATIONAL"}'>
                          ENCON INTERNATIONAL
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Award for Special Contribution: Highest Growth in Exports during 2019-20-Small Enterprise "}'>
                          Award for Special Contribution: Highest Growth in
                          Exports during 2019-20-Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Spl Trophy Small   Highest Growth  - FY 21 "}'
                        >
                          Spl Trophy Small Highest Growth - FY 21
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":191}'>191</td>
                        <td data-sheets-value='{"1":2,"2":"HACO MACHINERY PVT LTD"}'>
                          HACO MACHINERY PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Award for Special Contribution: Highest Growth in Exports during 2020-21-Small Enterprise "}'>
                          Award for Special Contribution: Highest Growth in
                          Exports during 2020-21-Small Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Spl Trophy Merchant   Highest Growth  - FY 20 "}'
                        >
                          Spl Trophy Merchant Highest Growth - FY 20
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":192}'>192</td>
                        <td
                          data-sheets-value='{"1":2,"2":"THYSSENKRUPP INDUSTRIAL SOLUTIONS (INDIA) PVT LTD"}'
                          className="text-uppercase"
                        >
                          Thyssenkrupp Uhde India Private Limited <br />
                          (Formerly-THYSSENKRUPP INDUSTRIAL SOLUTIONS (INDIA)
                          PVT LTD)
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Award for Special Contribution: Highest Growth in Exports during 2019-20-Merchant  Exporter  "}'>
                          Award for Special Contribution: Highest Growth in
                          Exports during 2019-20-Merchant Exporter
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="3"
                          className="bold-text bg-blue col-white"
                          data-sheets-value='{"1":2,"2":"Spl Trophy Merchant   Highest Growth  - FY 21 "}'
                        >
                          Spl Trophy Merchant Highest Growth - FY 21
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":193}'>193</td>
                        <td data-sheets-value='{"1":2,"2":"AKER POWERGAS PVT LTD"}'>
                          AKER POWERGAS PVT LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Award for Special Contribution: Highest Growth in Exports during 2020-21-Merchant  Exporter  "}'>
                          Award for Special Contribution: Highest Growth in
                          Exports during 2020-21-Merchant Exporter
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSeven">
                <button
                  className="accordion-button collapsed color-1 btn-4"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  Award for Maximum Participation in Council's Promotional
                  Activities in 2019-20 (2)
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                aria-labelledby="headingSeven"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <table className="table table-bordered table-striped">
                    <tbody>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":194}'>194</td>
                        <td data-sheets-value='{"1":2,"2":"C R I PUMPS PRIVATE LTD"}'>
                          C R I PUMPS PRIVATE LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Award for Maximum Participation in Council&apos;s Promotional Activities in  2019-20 - Large Enterprise"}'>
                          Award for Maximum Participation in Council's
                          Promotional Activities in 2019-20 - Large Enterprise
                        </td>
                      </tr>
                      <tr>
                        <td data-sheets-value='{"1":3,"3":195}'>195</td>
                        <td data-sheets-value='{"1":2,"2":"M R ORGANISATION LTD"}'>
                          M R ORGANISATION LTD
                        </td>
                        <td data-sheets-value='{"1":2,"2":"Award for Maximum Participation in Council&apos;s Promotional Activities in  2019-20 - Small  Enterprise"}'>
                          Award for Maximum Participation in Council's
                          Promotional Activities in 2019-20 - Small Enterprise
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-pad" style={{ background: "#f8f8f8" }}>
        <div className="container">
          <h1 className="fancy">
            <span className="text-center">Titanium Sponsor</span>
          </h1>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-6 bg-dark d-flex justify-content-center p-5">
              <a href="https://voltaimpex.com/" target="_blank">
                <img
                  className="img-fluid"
                  src={
                    baseFileURL +
                    "assets/web/img/companies/Volta Logo_Titanium Sponsor.jpg"
                  }
                  alt
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-pad">
        <div className="container">
          <h1 className="fancy">
            <span className="text-center">Diamond Sponsor</span>
          </h1>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <a href="https://www.niphaindia.com/" target="_blank">
                <img
                  className="img-fluid"
                  src={baseFileURL + "assets/web/img/companies/NIPHA LOGO.jpg"}
                  alt
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-pad" style={{ background: "#f8f8f8" }}>
        <div className="container">
          <h1 className="fancy">
            <span className="text-center">Gold Sponsor</span>
          </h1>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <a href="https://www.viraj.com" target="_blank">
                <img
                  className="img-fluid"
                  src={baseFileURL + "assets/web/img/companies/VIRAJ.png"}
                  alt
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-pad">
        <div className="container">
          <h1 className="fancy">
            <span className="text-center">Silver Sponsor</span>
          </h1>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <a href="https://www.superautoforge.net/" target="_blank">
                <img
                  className="img-fluid"
                  src={baseFileURL + "assets/web/img/companies/SAF Logo.jpg"}
                  alt
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-pad" style={{ background: "#f8f8f8" }}>
        <div className="container">
          <h1 className="fancy">
            <span className="text-center">Special Associate Sponsor</span>
          </h1>
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center p-5">
              <a href="https://www.pattonindia.com/" target="_blank">
                <img
                  className="img-fluid"
                  src={baseFileURL + "assets/web/img/companies/Patton Logo.jpg"}
                  alt
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-pad">
        <div className="container">
          <h1 className="fancy">
            <span className="text-center">Associate Sponsor</span>
          </h1>
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-3 col-md-4 col-sm-6 Associate">
              <a href="https://www.fountainsnozzle.com/" target="_blank">
                <img
                  className="img-fluid"
                  src={baseFileURL + "assets/web/img/companies/Aquascape.jpg"}
                  alt
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 Associate">
              <a href="https://www.lmt-tools.com/" target="_blank">
                <img
                  className="img-fluid"
                  src={
                    baseFileURL +
                    "assets/web/img/companies/LMT-Tool-Systems_solo.png"
                  }
                  alt
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 Associate">
              <a href="https://en.tormacpumps.com" target="_blank">
                <img
                  className="img-fluid"
                  src={
                    baseFileURL +
                    "assets/web/img/companies/Tormac  naargoLogo_page.jpg"
                  }
                  alt
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-pad" style={{ background: "#f8f8f8" }}>
        <div className="container">
          <h2 className="fancy">
            <span className="text-center">Pearl Sponsor</span>
          </h2>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-6 bg-dark d-flex justify-content-center p-5">
              <a href="https://www.calcuttaexport.com/" target="_blank">
                <img
                  className="img-fluid"
                  src={
                    baseFileURL +
                    "assets/web/img/companies/Calcutta Export Company LOGO.jpg"
                  }
                  alt
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-pad">
        <div className="container">
          <h1 className="fancy">
            <span className="text-center">Sapphire Sponsor</span>
          </h1>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center p-5">
              <a href="https://www.baumer.com/in/en" target="_blank">
                <img
                  className="img-fluid"
                  src={baseFileURL + "assets/web/img/companies/Baumer Logo.jpg"}
                  alt
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-pad bg-blue">
        <div className="container">
          <h1 className="fancy-w">
            <span className="text-center">Corporate Sponsor</span>
          </h1>

          {/* Swiper Component */}
          <Swiper
            ref={swiperRef1}
            spaceBetween={10}
            slidesPerView={3}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
          >
            {/* Swiper Slides */}
            <SwiperSlide>
              <div className="card">
                <a
                  href="https://www.tipsonexport.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card-body">
                    <img
                      className="img-fluid"
                      src={
                        baseFileURL + "assets/web/img/companies/Tipson Logo.jpg"
                      }
                      alt="Tipson"
                    />
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <a
                  href="https://www.mmforgings.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card-body">
                    <img
                      className="img-fluid"
                      src={
                        baseFileURL + "assets/web/img/companies/MMF Logo.png"
                      }
                      alt="MM Forgings"
                    />
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <a
                  href="https://www.asecaddesign.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card-body">
                    <img
                      className="img-fluid"
                      src={
                        baseFileURL + "assets/web/img/companies/ASE logo.png"
                      }
                      alt="ASEC Design"
                    />
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <a
                  href="https://www.premierkitchen.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card-body">
                    <img
                      className="img-fluid"
                      src={
                        baseFileURL +
                        "assets/web/img/companies/Sivanesan Premier Logo_page.jpg"
                      }
                      alt="Sivanesan Premier"
                    />
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <a
                  href="https://www.igp-group.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card-body">
                    <img
                      className="img-fluid"
                      src={
                        baseFileURL + "assets/web/img/companies/IGP logo.jpg"
                      }
                      alt="IGP Group"
                    />
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <a
                  href="https://www.steeltubesindia.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card-body">
                    <img
                      className="img-fluid"
                      src={
                        baseFileURL +
                        "assets/web/img/companies/Steel Tubes (India).jpg"
                      }
                      alt="Steel Tubes India"
                    />
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <a
                  href="https://www.algopumps.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card-body">
                    <img
                      className="img-fluid"
                      src={
                        baseFileURL + "assets/web/img/companies/Algo logo.jpg"
                      }
                      alt="Algo Pumps"
                    />
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <a
                  href="https://www.nifl.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card-body">
                    <img
                      className="img-fluid"
                      src={
                        baseFileURL + "assets/web/img/companies/NIF logo.png"
                      }
                      alt="NIF"
                    />
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <a
                  href="https://www.sidanaexports.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card-body">
                    <img
                      className="img-fluid"
                      src={baseFileURL + "assets/web/img/companies/SE Logo.jpg"}
                      alt="Sidana Exports"
                    />
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <a
                  href="https://www.thyssenkrupp-industrial-solutions.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card-body">
                    <img
                      className="img-fluid"
                      src={
                        baseFileURL +
                        "assets/web/img/companies/Thyssenkrupp Logo.png"
                      }
                      alt="Thyssenkrupp"
                    />
                  </div>
                </a>
              </div>
            </SwiperSlide>
            {/* Custom navigation buttons */}
            <div
              className="prev"
              onClick={() => swiperRef1.current.swiper.slidePrev()}
            >
              <svg
                width="10"
                height="15"
                viewBox="0 0 10 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.2625 13.2375L3.5375 7.5L9.2625 1.7625L7.5 0L0 7.5L7.5 15L9.2625 13.2375Z"
                  fill="#A99260"
                />
              </svg>
            </div>
            <div
              className="next"
              onClick={() => swiperRef1.current.swiper.slideNext()}
            >
              <svg
                width="10"
                height="15"
                viewBox="0 0 10 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.737305 13.2375L6.4623 7.5L0.737305 1.7625L2.4998 0L9.9998 7.5L2.4998 15L0.737305 13.2375Z"
                  fill="#A99260"
                />
              </svg>
            </div>
          </Swiper>
        </div>
      </section>
      <section className="sec-pad">
        <div className="container">
          <h1 className="fancy">
            <span className="text-center">Premier Partner</span>
          </h1>

          {/* Swiper Component */}
          <div className="swiper-container">
            <Swiper
              ref={swiperRef2}
              spaceBetween={10}
              slidesPerView={3}
              loop={true}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination, Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
            >
              {/* Swiper Slides */}
              <SwiperSlide>
                <div className="card">
                  <a
                    href="https://www.sarucopper.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-body">
                      <img
                        className="img-fluid"
                        src={
                          baseFileURL +
                          "assets/web/img/companies/Saru Copper Logo_ Hi.jpg"
                        }
                        alt="Saru Copper"
                      />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <a
                    href="http://prabha-engg.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-body">
                      <img
                        className="img-fluid"
                        src={
                          baseFileURL +
                          "assets/web/img/companies/Prabha Logo.png"
                        }
                        alt="Prabha Engineering"
                      />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <a
                    href="https://www.anugrahavalvecastings.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-body">
                      <img
                        className="img-fluid"
                        src={
                          baseFileURL + "assets/web/img/companies/AVCL-logo.png"
                        }
                        alt="Anugraha Valve Castings"
                      />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <a
                    href="http://mrorganisation.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-body">
                      <img
                        className="img-fluid"
                        src={
                          baseFileURL +
                          "assets/web/img/companies/MRO_LOGO_JPEG.jpg"
                        }
                        alt="MR Organisation"
                      />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <a
                    href="https://www.bhujpolymers.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-body">
                      <img
                        className="img-fluid"
                        src={
                          baseFileURL + "assets/web/img/companies/BPPL_LOGO.jpg"
                        }
                        alt="Bhuj Polymers"
                      />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <a
                    href="https://www.jayeshgroup.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-body">
                      <img
                        className="img-fluid"
                        src={
                          baseFileURL +
                          "assets/web/img/companies/Jayesh Company Logo_page.jpg"
                        }
                        alt="Jayesh Group"
                      />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <a
                    href="https://www.kajeco.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-body">
                      <img
                        className="img-fluid"
                        src={
                          baseFileURL +
                          "assets/web/img/companies/KAJECO LOGO.jpg"
                        }
                        alt="KAJECO"
                      />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <a
                    href="https://www.maniars.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-body">
                      <img
                        className="img-fluid"
                        src={
                          baseFileURL +
                          "assets/web/img/companies/MANIAR LOGO.jpg"
                        }
                        alt="Maniar"
                      />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <a
                    href="https://www.victortools.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-body">
                      <img
                        className="img-fluid"
                        src={
                          baseFileURL + "assets/web/img/companies/Victor.png"
                        }
                        alt="Victor Tools"
                      />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <a
                    href="https://fmexim.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-body">
                      <img
                        className="img-fluid"
                        src={
                          baseFileURL +
                          "assets/web/img/companies/FM exim_Logo.jpg"
                        }
                        alt="FM Exim"
                      />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <a
                    href="https://www.kunalinternational.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-body">
                      <img
                        className="img-fluid"
                        src={
                          baseFileURL +
                          "assets/web/img/companies/Anand Shreeji logo.jpeg"
                        }
                        alt="Kunal International"
                      />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <a
                    href="https://www.graphiteindia.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-body">
                      <img
                        className="img-fluid"
                        src={
                          baseFileURL + "assets/web/img/companies/GI LOGO.jpg"
                        }
                        alt="Graphite India"
                      />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <a
                    href="https://tpe.group/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-body">
                      <img
                        className="img-fluid"
                        src={
                          baseFileURL +
                          "assets/web/img/companies/TPE India logo.jpg"
                        }
                        alt="TPE India"
                      />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <a
                    href="https://www.bhel.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-body">
                      <img
                        className="img-fluid"
                        src={
                          baseFileURL + "assets/web/img/companies/BHEL Logo.png"
                        }
                        alt="BHEL"
                      />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              {/* Navigation buttons */}
              {/* Custom navigation buttons */}
              <div
                className="prev"
                onClick={() => swiperRef2.current.swiper.slidePrev()}
              >
                <svg
                  width="10"
                  height="15"
                  viewBox="0 0 10 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.2625 13.2375L3.5375 7.5L9.2625 1.7625L7.5 0L0 7.5L7.5 15L9.2625 13.2375Z"
                    fill="#A99260"
                  />
                </svg>
              </div>
              <div
                className="next"
                onClick={() => swiperRef2.current.swiper.slideNext()}
              >
                <svg
                  width="10"
                  height="15"
                  viewBox="0 0 10 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.737305 13.2375L6.4623 7.5L0.737305 1.7625L2.4998 0L9.9998 7.5L2.4998 15L0.737305 13.2375Z"
                    fill="#A99260"
                  />
                </svg>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NationalAwards52n53;
