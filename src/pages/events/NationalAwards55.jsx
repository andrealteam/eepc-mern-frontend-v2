import React, { useRef } from "react";
import { baseFileURL } from "../../services/api";
import "./NationalAward55.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import banner55th from "../../assets/images/banner/55TH-NA-THANK-YOU-SPONSOR.jpg";
import EEPC_award from "../../assets/images/banner/EEPC_awards_picture.jpg";

const NationalAward55 = () => {
  // Create a reference for the Swiper instance
  const swiperRef1 = useRef(null);
  const swiperRef2 = useRef(null);

  return (
    <>
      <div className="awardSection">
        <section class="award-banner pt-70 pb-70">
          <div>
            <div class="award-banner-img">
              <img src={EEPC_award} alt="" class="w-100" />
            </div>
          </div>
        </section>
        <section class="pb-70">
          <div>
            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-6">
                <div class="speaker-bx">
                  <div class="speaker-img">
                    {/* <img/> */}
                    <img src={baseFileURL + "uploads/1749814231.jpg"} alt="" />
                  </div>
                  <a
                    href="https://www.eepcindia.org/backend/files/1749733381.pdf"
                    target="_blank"
                  >
                    GOODWILL MESSAGE OF THE CHIEF GUEST, SHRI PIYUSH GOYAL,
                    HON'BLE MINISTER OF COMMERCE AND INDUSTRY, GOVERNMENT OF
                    INDIA
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="speaker-bx">
                  <div class="speaker-img">
                    {/* <img/> */}
                    <img src={baseFileURL + "uploads/1750069727.jpg"} alt="" />
                  </div>
                  <a
                    href="https://www.eepcindia.org/backend/files/1750069522.pdf"
                    target="_blank"
                  >
                    GOODWILL MESSAGE OF THE GUEST OF HONOUR, ADV. MR ASHISH
                    MINAL BABAJI SHELAR, HON’BLE MINISTER OF INFORMATION
                    TECHNOLOGY & CULTURAL AFFAIRS, GOVERNMENT OF MAHARASHTRA
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="speaker-bx">
                  <div class="speaker-img">
                    <img src={baseFileURL + "uploads/1749814463.jpg"} alt="" />
                  </div>
                  <a
                    href="https://www.eepcindia.org/backend/files/1749814578.pdf"
                    target="_blank"
                  >
                    GOODWILL MESSAGE OF SHRI JITIN PRASADA, HON'BLE MINISTER OF
                    STATE FOR COMMERCE & INDUSTRY AND ELECTRONICS & INFORMATION
                    TECHNOLOGY, GOVERNMENT OF INDIA
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="speaker-bx">
                  <div class="speaker-img">
                    <img src={baseFileURL + "uploads/1749814254.jpg"} alt="" />
                  </div>
                  <a
                    href="https://www.eepcindia.org/backend/files/1749733032.pdf"
                    target="_blank"
                  >
                    GOODWILL MESSAGE OF SHRI SUNIL BARTHWAL, IAS, COMMERCE
                    SECRETARY, MINISTRY OF COMMERCE AND INDUSTRY, GOVERNMENT OF
                    INDIA
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="speaker-bx">
                  <div class="speaker-img">
                    <img src={baseFileURL + "uploads/1749814243.jpg"} alt="" />
                  </div>
                  <a
                    href="https://www.eepcindia.org/backend/files/1749733107.pdf"
                    target="_blank"
                  >
                    GOODWILL MESSAGE OF SHRI RAJESH AGRAWAL, IAS, SPECIAL
                    SECRETARY, DEPARTMENT OF COMMERCE, MINISTRY OF COMMERCE AND
                    INDUSTRY, GOVERNMENT OF INDIA
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="speaker-bx">
                  <div class="speaker-img">
                    <img src={baseFileURL + "uploads/1749814264.png"} alt="" />
                  </div>
                  <a
                    href="https://www.eepcindia.org/backend/files/1749733327.pdf"
                    target="_blank"
                  >
                    GOODWILL MESSAGE OF THE SPECIAL GUEST, SHRI VIMAL ANAND,
                    IRS, JOINT SECRETARY, DEPARTMENT OF COMMERCE, MINISTRY OF
                    COMMERCE AND INDUSTRY, GOVERNMENT OF INDIA
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="pb-70">
          <div>
            <h1 class="fancy">
              <span class="text-center">55th EEPC INDIA NATIONAL AWARDS</span>
            </h1>
            <div class="accordion award-accordion" id="myAccordion">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Top Exporter for the Year 2022-23
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#myAccordion"
                >
                  <div class="accordion-body">
                    <table class="table table-bordered table-striped">
                      <tbody>
                        <tr>
                          <td colspan="3" class="bold-text bg-blue col-white">
                            Top Gold
                          </td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>JSW STEEL LIMITED</td>
                          <td>
                            Top Exporter for the Year 2022-23: LARGE
                            Enterprise-Gold Trophy
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>ESWARI GLOBAL METAL INDUSTRIES PVT. LTD.</td>
                          <td>
                            Top Exporter for the Year 2022-23: MEDIUM
                            Enterprise- Gold Trophy
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>CALCUTTA EXPORT COMPANY</td>
                          <td>
                            Top Exporter for the Year 2022-23: SMALL Enterprise-
                            Gold Trophy
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>ASHTAPAD OVERSEAS</td>
                          <td>
                            Top Exporter for the Year 2022-23: MICRO Enterprise-
                            Gold Trophy
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>MORTEX INDIA</td>
                          <td>
                            Top Exporter for the Year 2022-23: MERCHANT
                            Exporter-Gold Trophy
                          </td>
                        </tr>
                        <tr>
                          <td colspan="3" class="bold-text bg-blue col-white">
                            Top Silver
                          </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>VIRAJ PROFILES LTD</td>
                          <td>
                            Top Exporter for the Year 2022-23: LARGE Enterprise-
                            Silver Trophy
                          </td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>R B AGARWALLA & COMPANY</td>
                          <td>
                            Top Exporter for the Year 2022-23: MEDIUM
                            Enterprise- Silver Trophy{" "}
                          </td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>SHIV FORGINGS</td>
                          <td>
                            Top Exporter for the Year 2022-23: SMALL
                            Enterprise-Silver Trophy
                          </td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td>SUPER IMPEX</td>
                          <td>
                            Top Exporter for the Year 2022-23: MICRO
                            Enterprise-Silver Trophy
                          </td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>TECNIMONT PRIVATE LIMITED</td>
                          <td>
                            Top Exporter for the Year 2022-23: MERCHANT
                            Exporter- Silver Trophy
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    STAR PERFORMER AWARDS for 2022-2023 ( PRODUCT GROUP WISE)
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#myAccordion"
                >
                  <div class="accordion-body">
                    <table class="table table-bordered table=striped">
                      <tbody>
                        <tr>
                          <td colspan="3" class="bold-text bg-blue col-white">
                            Heavy & Light Motor Vehicles
                          </td>
                        </tr>
                        <tr>
                          <td>11</td>
                          <td>JOHN DEERE INDIA PVT. LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Heavy & Light Motor Vehicles : LARGE
                            Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>12</td>
                          <td>SRI KIRTHIKA INTERNATIONAL</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Heavy & Light Motor Vehicles : MEDIUM
                            MERCHANT
                          </td>
                        </tr>
                        <tr>
                          <td>13</td>
                          <td>PARANTHAMAN EXPORTERS</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Heavy & Light Motor Vehicles : SMALL
                            Enterprise
                          </td>
                        </tr>
                        <td colspan="3" class="bold-text bg-blue col-white">
                          Iron and Steel
                        </td>
                        <tr>
                          <td>14</td>
                          <td>ARCELORMITTAL NIPPON STEEL INDIA LIMITED</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Iron and Steel : LARGE Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>15</td>
                          <td>INDUSTRIAL METAL POWDERS (INDIA) PVT. LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Iron and Steel : MEDIUM Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>16</td>
                          <td>STEEL TUBES INDIA</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Iron and Steel : SMALL Enterprise
                          </td>
                        </tr>
                        <td colspan="3" class="bold-text bg-blue col-white">
                          Aluminium and Products (Other than Castings )
                        </td>
                        <tr>
                          <td>17</td>
                          <td>APAR INDUSTRIES LIMITED</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Aluminium and Products (Other than
                            Castings ): LARGE Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>18</td>
                          <td>SACHINS IMPEX</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Aluminium and Products (Other than
                            Castings ): MICRO ENTERPRISE
                          </td>
                        </tr>
                        <tr>
                          <td>19</td>
                          <td>CUMMINS TECHNOLOGIES INDIA PVT. LTD</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Internal Combustion Engines & Parts :
                            LARGE Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>20</td>
                          <td>SHANTI FOUMACH PRIVATE LIMITED</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Internal Combustion Engines & Parts :
                            MEDIUM Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>21</td>
                          <td>M+ACER AUTOMOTIVE SYSTEMS PVT.LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Internal Combustion Engines & Parts :
                            SMALL Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>22</td>
                          <td>
                            TOSHIBA TRANSMISSION & DISTRIBUTION SYSTEMS (INDIA)
                            PVT LTD
                          </td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Electrical Machinery & Parts : LARGE
                            Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>23</td>
                          <td>VARADA ENERGIES PRIVATE LIMITED</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Electrical Machinery & Parts : MEDIUM
                            Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>24</td>
                          <td>INSPROS ENGINEERS PVT. LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Electrical Machinery & Parts : SMALL
                            Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>25</td>
                          <td>AMARA RAJA ENERGY & MOBILITY LIMITED</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Automobile Parts and Components :
                            LARGE Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>26</td>
                          <td>IGP ENGINEERS PRIVATE LIMITED</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Automobile Parts and Components :
                            MEDIUM Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>27</td>
                          <td>SASH AUTOTECH PVT. LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Automobile Parts and Components :
                            SMALL Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>28</td>
                          <td>MAHARASHTRA SEAMLESS LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Steel Pipes, Tubes and Fittings :
                            LARGE Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>29</td>
                          <td>SHRIJEE PROCESS ENGG. WORKS LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Steel Pipes, Tubes and Fittings :
                            MEDIUM Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>30</td>
                          <td>TECHNO TRAK ENGINEERS</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Steel Pipes, Tubes and Fittings :
                            SMALL Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>31</td>
                          <td>ULTRA CORPOTECH PRIVATE LIMITED</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Construction and Earthmoving
                            Machinery : LARGE Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>32</td>
                          <td>M.M. CASTINGS PVT. LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Construction and Earthmoving
                            Machinery : MEDIUM Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>33</td>
                          <td>U AND T TRACTOR SPARES PVT. LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Construction and Earthmoving
                            Machinery : SMALL Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>34</td>
                          <td>LARSEN & TOUBRO LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Heavy Industrial Machinery for Paper,
                            Cement, Chemicals and Textiles : LARGE Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>35</td>
                          <td>BRY-AIR (ASIA) PVT. LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Heavy Industrial Machinery for Paper,
                            Cement, Chemicals and Textiles : MEDIUM Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>36</td>
                          <td>JAYDEEP INDUSTRIES</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Heavy Industrial Machinery for Paper,
                            Cement, Chemicals and Textiles : SMALL Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>37</td>
                          <td>PONDY OXIDES AND CHEMICALS LIMITED</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Other Non-Ferrous Metals &
                            Manufactures thereof (Other than Aluminium) : LARGE
                            Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>38</td>
                          <td>BRASS COPPER & ALLOY (I) LTD</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Other Non-Ferrous Metals &
                            Manufactures thereof (Other than Aluminium) : MEDIUM
                            Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>39</td>
                          <td>ABHI METALS</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Other Non-Ferrous Metals &
                            Manufactures thereof (Other than Aluminium) : SMALL
                            Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>40</td>
                          <td>GRAPHITE INDIA LTD</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Mica and other Mineral Products :
                            LARGE Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>41</td>
                          <td>SHREE GR EXPORTS PVT.LTD</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Mica and other Mineral Products :
                            MEDIUM MERCHANT
                          </td>
                        </tr>
                        <tr>
                          <td>42</td>
                          <td>BEML LIMITED</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Railway, Aircrafts, Ships, Boats and
                            Related Products & Equipment : LARGE Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>43</td>
                          <td>INNOVATIVE MOULD WORKS</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Railway, Aircrafts, Ships, Boats and
                            Related Products & Equipment : SMALL Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>44</td>
                          <td>TIMKEN ENGG & RESEARCH INDIA P. LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Other Industrial Machinery &
                            Equipment : LARGE Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>45</td>
                          <td>LINE O MATIC GRAPHIC INDUSTRIES</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Other Industrial Machinery &
                            Equipment : MEDIUM Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>46</td>
                          <td>BERKEL INDUSTRIES PRIVATE LIMITED</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Other Industrial Machinery &
                            Equipment : SMALL Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>47</td>
                          <td>CRESCENT FOUNDRY COMPANY (P) LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Sanitary Castings including Builders
                            Hardware : LARGE Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>48</td>
                          <td>RBA FERRO INDUSTRIES PVT.LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Sanitary Castings including Builders
                            Hardware : MEDIUM Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>49</td>
                          <td>SUPER IRON FOUNDRY</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Sanitary Castings including Builders
                            Hardware : SMALL Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>50</td>
                          <td>R. N. GUPTA & COMPANY LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Steel Forgings - all types : LARGE
                            Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>51</td>
                          <td>PRABHA ENGINEERING PVT. LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Steel Forgings - all types : MEDIUM
                            Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>52</td>
                          <td>MARS FORGE PVT LTD</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Steel Forgings - all types : SMALL
                            Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>53</td>
                          <td>PREMIUM FERROMET PRIVATE LIMITED</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Ferro Alloys : LARGE Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>54</td>
                          <td>JAYESH INDUSTRIES LIMITED</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Ferro Alloys : SMALL Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>55</td>
                          <td>CHANDAN STEEL LTD</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Bright Bars and Other Misc. Products
                            : LARGE Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>56</td>
                          <td>SUYASH GLOBAL PVT. LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Bright Bars and Other Misc. Products
                            : MEDIUM MERCHANT
                          </td>
                        </tr>
                        <tr>
                          <td>57</td>
                          <td>JYOTI STEEL INDUSTRIES</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Bright Bars and Other Misc. Products
                            : SMALL Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>58</td>
                          <td>SAVERA AUTO COMPS PVT. LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Household Items and Kitchenware :
                            MEDIUM Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>59</td>
                          <td>KRISH EXPORTS</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Household Items and Kitchenware :
                            SMALL Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>60</td>
                          <td>L & T VALVES LIMITED</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Ferrous Industrial Castings : LARGE
                            Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>61</td>
                          <td>NIF ISPAT LIMITED</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Ferrous Industrial Castings : MEDIUM
                            Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>62</td>
                          <td>SEKSARIA FOUNDRIES LIMITED</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Ferrous Industrial Castings : MICRO
                            Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>63</td>
                          <td>JK FILES & ENGINEERING LIMITED</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Hand Tools and Cutting Tools : LARGE
                            Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>64</td>
                          <td>LMT TOOLS INDIA PRIVATE LIMITED</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Hand Tools and Cutting Tools : MEDIUM
                            Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>65</td>
                          <td>VICTOR FORGINGS</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Hand Tools and Cutting Tools : SMALL
                            Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>66</td>
                          <td>JAIN IRRIGATION SYSTEMS LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Agricultural Machinery & Parts: LARGE
                            Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>67</td>
                          <td>NIPHA EXPORTS PVT. LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Agricultural Machinery & Parts:
                            MEDIUM Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>68</td>
                          <td>NIPHA ENTERPRISES LLP</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Agricultural Machinery & Parts: SMALL
                            Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>69</td>
                          <td>THERMOPADS PVT. LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Electrical and Home Appliances &
                            Parts : LARGE Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>70</td>
                          <td>POWER ENGINEERING (INDIA) PVT. LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Electrical and Home Appliances &
                            Parts : MEDIUM Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>71</td>
                          <td>M. R. ORGANISATION LIMITED</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Electrical and Home Appliances &
                            Parts : SMALL Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>72</td>
                          <td>THERMAX LIMITED</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group : Industrial Equipment and Accessories
                            : LARGE Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>73</td>
                          <td>GEECO ENERCON PVT.LTD</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group : Industrial Equipment and Accessories
                            : MEDIUM Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>74</td>
                          <td>ENCON INTERNATIONAL</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group : Industrial Equipment and Accessories
                            : SMALL Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>75</td>
                          <td>C.R.I. PUMPS PRIVATE LIMITED</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Pumps - all types & Parts : LARGE
                            Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>76</td>
                          <td>BELGAUM FERROCAST INDIA PRIVATE LIMITED</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Pumps - all types & Parts : MEDIUM
                            Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>77</td>
                          <td>KLAUS UNION ENGINEERING INDIA PVT. LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Pumps - all types & Parts : SMALL
                            Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>78</td>
                          <td>RATNAVEER PRECISION ENGINEERING LIMITED</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group : All types of Fasteners and Builders
                            Hardware including Hinges, Door Fitting, Locks, Pad
                            Locks etc. of Base Metal : LARGE Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>79</td>
                          <td>KUNAL INTERNATIONAL</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group : All types of Fasteners and Builders
                            Hardware including Hinges, Door Fitting, Locks, Pad
                            Locks etc. of Base Metal : MEDIUM Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>80</td>
                          <td>GDPA FASTENERS</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group : All types of Fasteners and Builders
                            Hardware including Hinges, Door Fitting, Locks, Pad
                            Locks etc. of Base Metal : SMALL Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>81</td>
                          <td>ROOTS INDUSTRIES INDIA PRIVATE LIMITED</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Industrial & Scientific Instruments &
                            Parts : LARGE Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>82</td>
                          <td>BAUMER TECHNOLOGIES INDIA PVT. LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Industrial & Scientific Instruments &
                            Parts : MEDIUM Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>83</td>
                          <td>
                            ELECTRONICA MECHATRONIC SYSTEMS (INDIA) PVT. LTD.
                          </td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Industrial & Scientific Instruments &
                            Parts : SMALL Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>84</td>
                          <td>SPIROTECH HEAT EXCHANGERS PVT. LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Food Processing Machinery &
                            Equipment: LARGE Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>85</td>
                          <td>
                            SAISIDHA SUGAR EQUIPMENTS & ENGINEERING CO. PVT.
                            LTD.
                          </td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Food Processing Machinery &
                            Equipment: MEDIUM Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>86</td>
                          <td>KOSTWEIN INDIA COMPANY PVT. LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Food Processing Machinery &
                            Equipment: SMALL Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>87</td>
                          <td>HMT (INTERNATIONAL) LIMITED</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Project Exports : LARGE Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>88</td>
                          <td>SABAR HYDROTECH LLP</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Project Exports : MEDIUM MERCHANT
                          </td>
                        </tr>
                        <tr>
                          <td>89</td>
                          <td>
                            PLANSEE INDIA HIGH PERFORMANCE MATERIALS P. LTD.
                          </td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :: Pharmaceutical Machinery, Medical &
                            Surgical Equipments: LARGE Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>90</td>
                          <td>GAUGES BOURDON (INDIA) PVT.LTD</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :: Pharmaceutical Machinery, Medical &
                            Surgical Equipments: MEDIUM Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>91</td>
                          <td>SURGI EDGE (INDIA)</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :: Pharmaceutical Machinery, Medical &
                            Surgical Equipments: MICRO Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>92</td>
                          <td>PREMIER INDUSTRIAL CORPORATION LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Steel Wire, Wire Products and Cables
                            : LARGE Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>93</td>
                          <td>SENOR METALS PVT. LTD</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Steel Wire, Wire Products and Cables
                            : MEDIUM Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>94</td>
                          <td>MACRO BARS & WIRES (I) P LTD</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Steel Wire, Wire Products and Cables
                            : SMALL Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>95</td>
                          <td>ANDRITZ HYDRO PVT. LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Fabricated Steel Structures including
                            Transmission Line Towers : LARGE Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>96</td>
                          <td>KSE ELECTRICALS PVT.LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Fabricated Steel Structures including
                            Transmission Line Towers : MEDIUM Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>97</td>
                          <td>NSI (INDIA) LIMITED</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Fabricated Steel Structures including
                            Transmission Line Towers : SMALL Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>98</td>
                          <td>DURO SHOX PRIVATE LIMITED</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Bicycles, Parts and Similar Items :
                            LARGE Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>99</td>
                          <td>TIPSON CYCLES PVT LTD</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Bicycles, Parts and Similar Items :
                            MEDIUM MERCHANT
                          </td>
                        </tr>
                        <tr>
                          <td>100</td>
                          <td>SPARK ENGINEERING PVT.LTD</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Bicycles, Parts and Similar Items :
                            SMALL Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>101</td>
                          <td>TRISHUL MACHINE TOOLS PVT. LTD.</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Machine Tools : SMALL Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>102</td>
                          <td>PATTON INTERNATIONAL LIMITED</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Office Equipment and Products N.O.S.:
                            LARGE Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>103</td>
                          <td>ACEINOTEC MANUFACTURING PRIVATE LIMITED</td>
                          <td>
                            Star Performer Award for the year 2022-23 in the
                            product group :Office Equipment and Products N.O.S.:
                            MEDIUM Enterprise
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Special Trophy for Excellence in Exports of High-Technology
                    Products 2022-23
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#myAccordion"
                >
                  <div class="accordion-body">
                    <table class="table table-bordered table-striped">
                      <tbody>
                        <tr>
                          <td>104</td>
                          <td>ISUZU MOTORS INDIA PRIVATE LIMITED</td>
                          <td>
                            Special Trophy for Excellence in Exports of
                            High-Technology Products Award for the year 2022-23
                            -Large Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>105</td>
                          <td>FEDERAL ENGINEERS</td>
                          <td>
                            Special Trophy for Excellence in Exports of
                            High-Technology Products Award for the year 2022-23
                            -Medium Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>106</td>
                          <td>THERMAL INSTRUMENTS (I) PVT. LTD.</td>
                          <td>
                            Special Trophy for Excellence in Exports of
                            High-Technology Products Award for the year 2022-23
                            -Small
                          </td>
                        </tr>
                        <tr>
                          <td>107</td>
                          <td>MINCO (INDIA) FLOW ELEMENTS PVT. LTD.</td>
                          <td>
                            Special Trophy for Excellence in Exports of
                            High-Technology Products Award for the year 2022-23
                            -Micro Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>108</td>
                          <td>MOHAN MUTHA EXPORTS PRIVATE LIMITED</td>
                          <td>
                            Special Trophy for Excellence in Exports of
                            High-Technology Products Award for the year 2022-23
                            -Medium Merchant
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Special Trophy for Excellence in Export of Engineering
                    services
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#myAccordion"
                >
                  <div class="accordion-body">
                    <table class="table table-bordered table-striped">
                      <tbody>
                        <tr>
                          <td>109</td>
                          <td>AKER POWERGAS PRIVATE LIMITED</td>
                          <td>
                            {" "}
                            Special Trophy for Excellence in Export of
                            Engineering Services-Large Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>110</td>
                          <td>L & T SARGENT & LUNDY LTD</td>
                          <td>
                            {" "}
                            Special Trophy for Excellence in Export of
                            Engineering Services-Medium Enterprise
                          </td>
                        </tr>
                        <tr>
                          <td>111</td>
                          <td>SCUBEC INTRA SOLUTIONS</td>
                          <td>
                            Special Trophy for Excellence in Export of
                            Engineering Services-Small Enterprise
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
        <section className="sec-pad">
          <div className="container">
            <h1 className="fancy">
              <span className="text-center">Sponsors</span>
            </h1>
            <div className="row justify-content-center">
              <div className="  d-flex justify-content-center p-5">
                <a>
                  <img className="img-fluid" src={banner55th} alt />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NationalAward55;
