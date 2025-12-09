import App from "../App";
import {
  AboutLayout,
  AuthLayout,
  DashboardLayout,
  // BannerPageLayout,
  EventsLayout,
  HomeLayout,
  IndianLayout,
  InternationalLayout,
  MemberLayout,
  PhotoGallery,
  PhotoGalleryLayout,
  PolicyLayout,
  PublicationLayout,
  ResourceLayout,
} from "../components";
import {
  ActivitiesAndServices,
  AGM,
  AnnualReports,
  AwardPresentation,
  AwardPresentationDetails,
  AwardScheme,
  AwardSchemeDetails,
  AwardWinnerDetails,
  BecomingMember,
  BriefProfile,
  CertificateOfOrigin,
  Chairman,
  ChangePwdMember,
  Chapters,
  Circulars,
  Colleagues,
  CommitteeAdministration,
  Committees,
  ConferenceHall,
  Contact,
  CustomsExchangeRate,
  DepbRates,
  DeputyRegionalChairmen,
  Disclaimer,
  EepcConferenceHall,
  EngineeringIEAnalysis,
  EnquiryForm,
  EventsDashboard,
  EXIM,
  EXIMBankLoC,
  ExportBenefits,
  ExportImportMonitor,
  ExpoterHome,
  FAQ,
  ForeignTradePolicy,
  ForthcomingEvents,
  GuestSignupForm,
  Home,
  HowToExport,
  HsCodes,
  Iess,
  Incoterms,
  Indee,
  IndiaDesignMark,
  IndianEngineeringExports,
  IndianSuppliers,
  IndiaSnapshot,
  InfoBulletin,
  LoginForm,
  Logistics,
  Mai,
  MembershipBenefits,
  MemberSignupForm,
  MetalPriceMonitor,
  Mou,
  OtherEvents,
  PageNotFound,
  PastChairmen,
  PastEvents,
  PhotoGalleryByCategory,
  PhotoGalleryDetails,
  PreventingSexual,
  PrivacyPolicy,
  ProductPanel,
  Profile,
  ProfileColleague,
  PublicationsEepc,
  ResetPwdGuest,
  ResetPwdMember,
  Rodtep,
  SeniorViceChairman,
  SexualHarassment,
  StrategyPaper,
  Tenders,
  TermsOfUse,
  TradeAssociations,
  TradeAssociationsDetails,
  TvCoverage,
  UsefulWebLinks,
  WebinarSeminarDashboard,
  WebinarsSeminars,
  WorkingCommittee,
  WorkingCommitteeElection,
  ChangePassword,
  GuestProfile,
  MemberProfile,
  MyCertificateOfOrigin,
  MyExportReturn,
  MyMembership,
  MyParticipations,
  Sitemap,
  SendMailSupplier,
  ResetPwdEmployee,
  ChangePwdEmployee,
  HolidayList,
  Unauthorized,
  ResetPwdEmpSendOtp,
  ResetPwdEmpVerifyOtp,
  ExportParityPrice,
  BigMintDetails,
  MediaRoom,
  PastWebinarsSeminars,
} from "../pages";
import ExportHomePage from "../pages/dashboard/ExporterHomePage";
import ExporterHomePageActivityLog from "../pages/dashboard/ExporterHomePageActivityLog";
import ExtraPages from "../pages/dashboard/ExtraPages";
import Messages from "../pages/dashboard/Messages";
import Notification from "../pages/dashboard/Notification";
import TestimonialReview from "../pages/dashboard/TestimonialReview";
import WebinarSeminarPage from "../pages/dashboard/WebinarSeminarPage";
import NationalAward55 from "../pages/events/NationalAwards55";
import WesterRegionAward40 from "../pages/events/WesterRegionAward40";
import ExporterProfile from "../pages/for-internationals/ExporterProfile";
import FavouriteExporterProfile from "../pages/for-internationals/FavouriteExporterProfile";
import RefundCancellationPolicy from "../pages/home/RefundCancellationPolicy";
import LandingPagePlatinum from "../pages/LandingPagePlatinum";
import PastExecutiveDirectors from "../pages/members/PastExecutiveDirectors";
import IndiaUKFAQ from "../pages/policy/IndiaUKFAQ";
import Career from "../pages/publications/Career";
import CbamConsultants from "../pages/resources/CbamConsultants";
import ProtectedRoute from "./ProtectedRoute";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "pages/:url",

        element: <ExtraPages />,
      },

      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          { path: "login", element: <LoginForm /> },
          { path: "member-signup", element: <MemberSignupForm /> },
          { path: "reset-password-member", element: <ResetPwdMember /> },
          { path: "reset-password-employee", element: <ResetPwdEmpSendOtp /> },
          { path: "verify-employee-otp", element: <ResetPwdEmpVerifyOtp /> },
          {
            path: "reset-employee-password-change",
            element: <ResetPwdEmployee />,
          },
          { path: "guest-signup", element: <GuestSignupForm /> },
          { path: "reset-password-guest", element: <ResetPwdGuest /> },
        ],
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "employee-profile",
            element: (
              <ProtectedRoute allowedRoles={["employee"]}>
                <Profile />
              </ProtectedRoute>

              // <Profile />
            ),
          },
          {
            // path: "member-profile/:member_id",
            path: "member-profile",
            element: (
              <ProtectedRoute allowedRoles={["member"]}>
                <MemberProfile />
              </ProtectedRoute>
              // <MemberProfile />
            ),
          },
          {
            path: "change-password-employee",
            element: (
              <ProtectedRoute allowedRoles={["employee"]}>
                <ChangePwdEmployee />
              </ProtectedRoute>
            ),
          },
          {
            path: "change-password-member",
            element: (
              <ProtectedRoute allowedRoles={["member"]}>
                <ChangePwdMember />
              </ProtectedRoute>
            ),
          },
          {
            path: "exporter-home-page",
            element: (
              <ProtectedRoute allowedRoles={["member"]}>
                <ExportHomePage />
              </ProtectedRoute>
            ),
          },
          {
            path: "exporter-home-page-activity-log",
            element: (
              <ProtectedRoute allowedRoles={["member"]}>
                <ExporterHomePageActivityLog />
              </ProtectedRoute>
            ),
          },
          {
            path: "messages",
            element: (
              <ProtectedRoute allowedRoles={["member"]}>
                <Messages />
              </ProtectedRoute>
            ),
          },
          {
            path: "review-testimonials",
            element: (
              <ProtectedRoute allowedRoles={["member"]}>
                <TestimonialReview />
              </ProtectedRoute>
            ),
          },
          {
            path: "change-password-guest",
            element: (
              <ProtectedRoute allowedRoles={["guest"]}>
                <ResetPwdGuest />
              </ProtectedRoute>
            ),
          },
          {
            path: "guest-profile",
            element: (
              <ProtectedRoute allowedRoles={["guest"]}>
                <GuestProfile />
              </ProtectedRoute>
            ),
          },
          { path: "my-membership", element: <MyMembership /> },
          {
            path: "colleague-profile/:eid",
            element: (
              <ProtectedRoute allowedRoles={["employee"]}>
                <ProfileColleague />
              </ProtectedRoute>
            ),
          },
          {
            path: "my-colleagues",
            element: (
              <ProtectedRoute allowedRoles={["employee"]}>
                <Colleagues />
              </ProtectedRoute>
            ),
          },
          {
            path: "indian-engineering-exports",
            element: (
              <ProtectedRoute allowedRoles={["employee", "member", "guest"]}>
                <IndianEngineeringExports />
              </ProtectedRoute>
            ),
          },
          {
            path: "info-bulletin",
            element: (
              <ProtectedRoute allowedRoles={["employee", "member", "guest"]}>
                <InfoBulletin />
              </ProtectedRoute>
            ),
          },
          {
            path: "export-import-monitor",
            element: (
              <ProtectedRoute allowedRoles={["employee", "member", "guest"]}>
                <ExportImportMonitor />
              </ProtectedRoute>
            ),
          },
          {
            path: "metal-price-monitor",
            element: (
              <ProtectedRoute allowedRoles={["member", "guest"]}>
                <MetalPriceMonitor />
              </ProtectedRoute>
            ),
          },
          {
            path: "mou",
            element: (
              <ProtectedRoute allowedRoles={["employee", "member"]}>
                <Mou />
              </ProtectedRoute>
            ),
          },
          {
            path: "my-participations",
            element: (
              <ProtectedRoute allowedRoles={["member"]}>
                <MyParticipations />
              </ProtectedRoute>
            ),
          },
          {
            path: "my-export-returns",
            element: (
              <ProtectedRoute allowedRoles={["member"]}>
                <MyExportReturn />
              </ProtectedRoute>
            ),
          },
          {
            path: "my-certificate-of-origin",
            element: (
              <ProtectedRoute allowedRoles={["member"]}>
                <MyCertificateOfOrigin />
              </ProtectedRoute>
            ),
          },
          {
            path: "tenders",
            element: (
              <ProtectedRoute allowedRoles={["member"]}>
                <Tenders />{" "}
              </ProtectedRoute>
            ),
          },
          {
            path: "forthcoming-events",
            element: (
              <ProtectedRoute allowedRoles={["employee", "member", "guest"]}>
                <EventsDashboard />
              </ProtectedRoute>
            ),
          },
          {
            path: "webinars-seminars",
            element: (
              <ProtectedRoute allowedRoles={["employee", "member", "guest"]}>
                <WebinarSeminarDashboard />
              </ProtectedRoute>
            ),
          },
          // {
          //   path: "webinars-seminars/:url",
          //   element: (
          //     <ProtectedRoute allowedRoles={["employee", "member", "guest"]}>
          //       <WebinarSeminarPage />
          //     </ProtectedRoute>
          //   ),
          // },

          { path: "change-password", element: <ChangePassword /> },
          {
            path: "holiday-list",
            element: (
              <ProtectedRoute allowedRoles={["employee"]}>
                <HolidayList />{" "}
              </ProtectedRoute>
            ),
          },
          {
            path: "notification",
            element: (
              <ProtectedRoute allowedRoles={["employee"]}>
                <Notification />
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: "/",
        element: <HomeLayout />,
        children: [
          { path: "how-to-export", element: <HowToExport /> },
          { path: "export-benefits", element: <ExportBenefits /> },
          { path: "enquiry-form", element: <EnquiryForm /> },
          { path: "terms-of-use", element: <TermsOfUse /> },
          { path: "privacy-policy", element: <PrivacyPolicy /> },
          { path: "disclaimer", element: <Disclaimer /> },
          {
            path: "refund-and-cancellation-policy",
            element: <RefundCancellationPolicy />,
          },
          { path: "sitemap", element: <Sitemap /> },
          { path: "big-mint", element: <BigMintDetails /> },
        ],
      },
      {
        path: "/",
        element: <AboutLayout />,
        children: [
          { path: "brief-profile", element: <BriefProfile /> },
          {
            path: "activities-and-services",
            element: <ActivitiesAndServices />,
          },
          { path: "frequently-asked-questions", element: <FAQ /> },
          { path: "product-panels", element: <ProductPanel /> },
          { path: "chairman-pen", element: <Chairman /> },
        ],
      },
      {
        path: "/",
        element: <IndianLayout />,
        children: [
          { path: "export-statistics", element: <EngineeringIEAnalysis /> },
          {
            path: "exim-glossary",
            element: <EXIM />,
          },
          { path: "incoterms", element: <Incoterms /> },
          { path: "india-design-mark", element: <IndiaDesignMark /> },
        ],
      },
      {
        path: "/",
        element: <InternationalLayout />,
        children: [
          { path: "india-a-snapshot", element: <IndiaSnapshot /> },
          {
            path: "indian-suppliers",
            element: <IndianSuppliers />,
          },
          {
            path: "exporter-profile",
            element: <ExporterProfile />,
          },
          {
            path: "favourite-exporter-profile",
            element: <FavouriteExporterProfile />,
          },
          { path: "exporters-home-page", element: <ExpoterHome /> },
          { path: "send-supplier-mail", element: <SendMailSupplier /> },
        ],
      },
      {
        path: "/",
        element: <MemberLayout />,
        children: [
          { path: "benefits-becoming-member", element: <MembershipBenefits /> },
          { path: "executive-directors", element: <PastExecutiveDirectors /> },
          { path: "becoming-a-member", element: <BecomingMember /> },
          { path: "chairmen", element: <PastChairmen /> },
          {
            path: "senior-vice-chairman-election",
            element: <SeniorViceChairman />,
          },
          { path: "working-committee", element: <WorkingCommittee /> },
          {
            path: "working-committee-election",
            element: <WorkingCommitteeElection />,
          },
          {
            path: "committee-of-administration",
            element: <CommitteeAdministration />,
          },
          { path: "committees", element: <Committees /> },
          {
            path: "deputy-regional-chairmen",
            element: <DeputyRegionalChairmen />,
          },
          { path: "chapters", element: <Chapters /> },
          { path: "annual-general-meeting", element: <AGM /> },
          { path: "award-scheme", element: <AwardScheme /> },
          { path: "award-scheme/:id", element: <AwardSchemeDetails /> },
        ],
      },
      {
        path: "/",
        element: <PolicyLayout />,
        children: [
          { path: "rodtep", element: <Rodtep /> },
          { path: "india-uk-ceta-faq", element: <IndiaUKFAQ /> },

          { path: "export-parity-price", element: <ExportParityPrice /> },
          {
            path: "foreign-trade-policy",
            element: <ForeignTradePolicy />,
          },
          { path: "circulars", element: <Circulars /> },
          { path: "depb-rates", element: <DepbRates /> },
          { path: "hs-codes/:hs_code?", element: <HsCodes /> },
          { path: "certificate-of-origin", element: <CertificateOfOrigin /> },
          { path: "exim-bank-loc", element: <EXIMBankLoC /> },
          { path: "customs-exchange-rate", element: <CustomsExchangeRate /> },
        ],
      },
      {
        path: "/",
        element: <ResourceLayout />,
        children: [
          { path: "mai-assistance", element: <Mai /> },
          { path: "logistics", element: <Logistics /> },
          {
            path: "trade-associations",
            element: <TradeAssociations />,
          },
          {
            path: "trade-associations/:slug",
            element: <TradeAssociationsDetails />,
          },
          {
            path: "eepc-india-conference-hall",
            element: <EepcConferenceHall />,
          },
          {
            path: "cbam-consultants",
            element: <CbamConsultants />,
          },
          { path: "sexual-harassment", element: <SexualHarassment /> },
          { path: "useful-web-links", element: <UsefulWebLinks /> },
          { path: "media-room", element: <MediaRoom /> },
        ],
      },
      {
        path: "/",
        element: <PublicationLayout />,
        children: [
          { path: "publications-of-eepc-india", element: <PublicationsEepc /> },
          {
            path: "strategy-paper",
            element: <StrategyPaper />,
          },
          {
            path: "career",
            element: <Career />,
          },
          {
            path: "preventing-sexual-harassment",
            element: <PreventingSexual />,
          },
          { path: "annual-reports", element: <AnnualReports /> },
        ],
      },
      {
        path: "/",
        element: <EventsLayout />,
        children: [
          { path: "forthcoming-events", element: <ForthcomingEvents /> },
          { path: "past-events", element: <PastEvents /> },
          { path: "indee-exhibitions", element: <Indee /> },
          { path: "iess-exhibitions", element: <Iess /> },
          { path: "award-presentation", element: <AwardPresentation /> },
          {
            path: "award-presentation/:slug",
            element: <AwardPresentationDetails />,
          },
          { path: "award-winner/:slug", element: <AwardWinnerDetails /> },
          {
            path: "55th-eepc-india-national-awards",
            element: <NationalAward55 />,
          },
          {
            path: "40th-eepc-india-western-region-awards",
            element: <WesterRegionAward40 />,
          },

          {
            path: "webinars-seminars",
            element: (
              //  <WebinarsSeminars />
              <WebinarSeminarDashboard />
            ),
          },
          {
            path: "webinars-seminars/:url",

            element: <WebinarSeminarPage />,
          },
          { path: "past-webinars-seminars", element: <PastWebinarsSeminars /> },
          { path: "other-events", element: <OtherEvents /> },
        ],
      },
      {
        path: "/resources",
        children: [{ path: "conference-hall", element: <ConferenceHall /> }],
      },
      {
        path: "/media-room",
        children: [
          { path: "media-coverag" },
          { path: "tv-coverage", element: <TvCoverage /> },
        ],
      },
      {
        path: "/",
        element: <PhotoGalleryLayout />,
        children: [
          { path: "gallery/:category", element: <PhotoGalleryByCategory /> },
          { path: "gallery-view/:id", element: <PhotoGalleryDetails /> },
        ],
      },
      { path: "/contact-us", element: <Contact /> },
      { path: "/unauthorized", element: <Unauthorized /> },
      { path: "/*", element: <PageNotFound /> },
    ],
  },
  { path: "/platinum-jubilee", element: <LandingPagePlatinum /> },
];
export default routes;
