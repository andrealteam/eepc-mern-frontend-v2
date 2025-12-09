import React, { useState } from "react";
import { NavLink, Link, useNavigate, Outlet } from "react-router-dom"; // Use Link for internal navigation
import { pageBannerList, mockImg, mapWorldImg } from "../../utils/constants";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import {
  getActivities,
  getBuyerSeller,
  getExhibitionsTrade,
  getPromote,
  getSeminarConferences,
  getServicesForeign,
  getServicesMembers,
} from "../../services/aboutApi";
import Skeleton from "react-loading-skeleton";

const ActivitiesAndServices = () => {
  const {
    data: activities,
    isLoading: isActivitiesLoading,
    isError: isActivitiesError,
    error: activitiesError,
  } = useQuery({
    queryKey: ["activities"],
    queryFn: getActivities,
    gcTime: 180000,
  });

  const sanitizedActivities = DOMPurify.sanitize(
    activities?.activities_and_services
  );

  const {
    data: conferences,
    isLoading: isConferencesLoading,
    isError: isConferencesError,
    error: conferencesError,
  } = useQuery({
    queryKey: ["conferences"],
    queryFn: getSeminarConferences,
    gcTime: 180000,
  });

  const sanitizedConferences = DOMPurify.sanitize(
    conferences?.seminars_and_conferences
  );

  const {
    data: buyerSeller,
    isLoading: isBuyerSellerLoading,
    isError: isBuyerSellerError,
    error: buyerSellerError,
  } = useQuery({
    queryKey: ["buyerSeller"],
    queryFn: getBuyerSeller,
    gcTime: 180000,
  });

  const sanitizedBuyerSeller = DOMPurify.sanitize(
    buyerSeller?.buyer_seller_meet_delegation
  );

  const {
    data: promote,
    isLoading: isPromoteLoading,
    isError: isPromoteError,
    error: promoteError,
  } = useQuery({
    queryKey: ["promote"],
    queryFn: getPromote,
    gcTime: 180000,
  });

  const sanitizedPromote = DOMPurify.sanitize(
    promote?.promote_made_in_india_brand
  );

  const {
    data: servicesMembers,
    isLoading: isServicesMembersLoading,
    isError: isServicesMembersError,
    error: servicesMembersError,
  } = useQuery({
    queryKey: ["servicesMembers"],
    queryFn: getServicesMembers,
    gcTime: 180000,
  });

  const sanitizedServicesMembers = DOMPurify.sanitize(
    servicesMembers?.services_to_members
  );

  const {
    data: exhibitionsTrade,
    isLoading: isExhibitionsTradeLoading,
    isError: isExhibitionsTradeError,
    error: exhibitionsTradeError,
  } = useQuery({
    queryKey: ["exhibitionsTrade"],
    queryFn: getExhibitionsTrade,
    gcTime: 180000,
  });

  const sanitizedExhibitionsTrade = DOMPurify.sanitize(
    exhibitionsTrade?.exhibitions_and_trade_fairs
  );

  const {
    data: servicesForeign,
    isLoading: isServicesForeignLoading,
    isError: isServicesForeignError,
    error: servicesForeignError,
  } = useQuery({
    queryKey: ["servicesForeign"],
    queryFn: getServicesForeign,
    gcTime: 180000,
  });

  const sanitizedServicesForeign = DOMPurify.sanitize(
    servicesForeign?.services_to_foreign_buyers
  );

  return (
    <>
      <section className="pb-70">
        <div className="container">
          <div className="row">
            {isActivitiesError && (
              <p>Error: {activitiesError.message || "Something went wrong!"}</p>
            )}
            {isActivitiesLoading ? (
              <Skeleton height={300} />
            ) : (
              <div
                className="col-lg-7"
                dangerouslySetInnerHTML={{ __html: sanitizedActivities }}
              ></div>
            )}
            <div className="col-lg-5">
              <img
                src={mockImg}
                alt="Engineering Activities"
                className="w-100 br-10"
              />
            </div>
          </div>

          <ul className="nav new-tabs nav-tabs mt-5" id="myTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="tab1-tab"
                data-bs-toggle="tab"
                href="#tab1"
                role="tab"
                aria-controls="tab1"
                aria-selected="true"
              >
                Seminars and Conferences
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="tab2-tab"
                data-bs-toggle="tab"
                href="#tab2"
                role="tab"
                aria-controls="tab2"
                aria-selected="false"
              >
                Buyer-Seller Meet Delegation
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="tab3-tab"
                data-bs-toggle="tab"
                href="#tab3"
                role="tab"
                aria-controls="tab3"
                aria-selected="false"
              >
                Promote Made in India Brand
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="tab4-tab"
                data-bs-toggle="tab"
                href="#tab4"
                role="tab"
                aria-controls="tab4"
                aria-selected="false"
              >
                Services to Members
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="tab5-tab"
                data-bs-toggle="tab"
                href="#tab5"
                role="tab"
                aria-controls="tab5"
                aria-selected="false"
              >
                Exhibitions and Trade Fairs
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="tab6-tab"
                data-bs-toggle="tab"
                href="#tab6"
                role="tab"
                aria-controls="tab6"
                aria-selected="false"
              >
                Services to Foreign Buyers
              </a>
            </li>
          </ul>

          <div className="tab-content new-tab-content" id="myTabsContent">
            {isConferencesLoading && <Skeleton height={200} />}
            {isConferencesError && (
              <p>
                Error: {conferencesError.message || "Something went wrong!"}
              </p>
            )}
            <div
              className="tab-pane fade show active"
              id="tab1"
              role="tabpanel"
              dangerouslySetInnerHTML={{ __html: sanitizedConferences }}
            ></div>

            <div
              className="tab-pane fade"
              id="tab2"
              role="tabpanel"
              dangerouslySetInnerHTML={{ __html: sanitizedBuyerSeller }}
            ></div>
            <div
              className="tab-pane fade"
              id="tab3"
              role="tabpanel"
              dangerouslySetInnerHTML={{ __html: sanitizedPromote }}
            ></div>
            <div
              className="tab-pane fade"
              id="tab4"
              role="tabpanel"
              dangerouslySetInnerHTML={{ __html: sanitizedServicesMembers }}
            ></div>
            <div
              className="tab-pane fade"
              id="tab5"
              role="tabpanel"
              dangerouslySetInnerHTML={{ __html: sanitizedExhibitionsTrade }}
            ></div>
            <div
              className="tab-pane fade"
              id="tab6"
              role="tabpanel"
              dangerouslySetInnerHTML={{ __html: sanitizedServicesForeign }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ActivitiesAndServices;
