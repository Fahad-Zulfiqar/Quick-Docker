import "./global.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Provider } from "react-redux";
import store from "@/store/store.ts";
import ProtectedRoute from "@/components/ProtectedRoute.tsx";
import ServicesLayout from "@/layout/ServicesLayout.tsx";
import AddFamilyLayout from "@/layout/AddFamilyLayout.tsx";
// Pages
import Login from "./pages/Auth/Login";
import LoginCode from "./pages/Auth/LoginCode";
import Register from "./pages/Auth/Register";
import RegisterSimple from "./pages/Auth/RegisterSimple";
import VerifyOTP from "./pages/Auth/VerifyOTP";
import RegisterVerifyOTP from "./pages/Auth/RegisterVerifyOTP";
import ServicesPage from "./pages/Patient";
import NotFound from "./pages/NotFound";
import QuickDoctorHomepage from "@/pages/Home";
import HomeHealthCare from "@/pages/Patient/HomeCare/HomeHealthCare.tsx";
import ClinicVisit from "@/pages/Patient/ClinicVisit.tsx";
import Call from "@/pages/Patient/Call.tsx";
import VideoCall from "@/pages/Patient/VideoCall.tsx";
import Chat from "@/pages/Patient/Chat.tsx";
import PatientCondition from "@/components/common/PatientCondition.tsx";
import SelectDateAndTime from "@/pages/Patient/HomeCare/SelectDatenTime.tsx";
import Payment from "@/components/common/Payment.tsx";
import MobileHome from "@/pages/Home/MobileHome.tsx";
import History from "@/pages/History.tsx";
import AboutUs from "@/pages/AboutUs.tsx";
import ClinicDetails from "@/pages/ClinicDetails.tsx";
import Leagal from "@/pages/Leagal.tsx";
import AllCategories from "@/pages/AllCategories.tsx";
import Sos from "@/pages/Sos.tsx";
import Calendar from "@/pages/Calendar.tsx";
import Details from "@/components/history/Details.tsx";
import Detail from "@/components/calendar/Details.tsx";
// user menu
import MyFavorite from "@/pages/user/MyFavorite.tsx";
import Setting from "@/pages/user/Setting.tsx";
import PaymentMethods from "@/pages/user/PaymentMethods.tsx";
import MySubscription from "@/pages/user/MySubscription.tsx";
import AddNewPlan from "@/pages/user/AddNewPlan.tsx";
import AddFamilyMember from "@/pages/user/AddFamilyMember.tsx";
import MyProfile from "@/pages/user/MyProfile.tsx";
import DoctorProfile from "@/pages/doctor/DoctorProfile.tsx";
import DoctorCall from "@/pages/doctor/DoctorCall.tsx";
import DoctorChat from "@/pages/doctor/DoctorChat.tsx";
import DoctorVideoCall from "@/pages/doctor/DoctorVideoCall.tsx";
import MyProfileEdit from "@/pages/user/MyProfileEdit.tsx";
import AddFamilyMemberNoProfile from "@/pages/user/AddFamilyMemberNoProfile.tsx";
import MobileSplash from "@/components/MobileSplash.tsx";
import Test from "@/components/common/NotificationBell.tsx";
import MobileMenu from "@/pages/Mobile/MobileMenu";
import MobileService from "@/components/common/MobileService";
import Services from "@/pages/Mobile/Services";
// import Care from "@/pages/Mobile/common/HomeHealthCare";
// import MobileClinic from "@/pages/Mobile/ClinicVisitCare";
import TermsofUse from "@/pages/TermsofUse.tsx";
import PrivacyPolicy from "@/pages/PrivacyPolicy.tsx";
import Booking from "@/pages/Mobile/Booking.tsx";
// import Patient from "@/pages/Mobile/PatientCondition.tsx";
// import Test from '@/components/common/NotificationBell.tsx'
// import MobileMenu from "@/pages/Mobile/MobileMenu";
import NotificationsPage from "@/pages/Mobile/NotificationsPage.tsx";
import PaymentParent from "@/pages/Payments/PaymentParent.tsx";
import SelectDatenTimeParent from "@/pages/services/SelectDatenTimeParent.tsx";
import AddNewAddress from "@/pages/Payments/mobilePayments/AddNewAddress.tsx";
import PaymentMethod from "@/pages/Payments/mobilePayments/PaymentMethod.tsx";
import BookVia from "@/pages/Mobile/clinicVisit/BookVia.tsx";
import AddFamilyMemberTabs from '@/pages/user/AddFamilyMemberTabs.tsx'
// Layout
import Layout from "@/layout/Layout";
import { useIsMobile } from "@/hooks/use-mobile";
import SelectPlan from "@/pages/Payments/mobilePayments/SelectPlan.tsx";
import PaymentSuccess from "@/pages/Payments/mobilePayments/PaymentSuccess.tsx";

const queryClient = new QueryClient();

const App = () => {
  const isMobile = useIsMobile();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Routes with layout */}
              <Route element={<Layout />}>
                <Route
                  path="/"
                  element={isMobile ? <MobileHome /> : <QuickDoctorHomepage />}
                />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/leagal" element={<Leagal />} />
                <Route path="/categories" element={<AllCategories />} />
                <Route path="/clinic-details" element={<ClinicDetails />} />
                <Route path="/sos" element={<Sos />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/detail/:id" element={<Detail />} />
                {/* User Menu */}
                <Route path="/my-favorite" element={<MyFavorite />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/payment-methods" element={<PaymentMethods />} />
                <Route path="/my-subscription" element={<MySubscription />} />
                <Route path="/add-new-plan" element={<AddNewPlan />} />
                <Route path="/my-profile" element={<MyProfile />} />
                <Route path="/my-profile-edit" element={<MyProfileEdit />} />
                <Route path="/menu" element={<MobileMenu />} />

                {/* <Route element={<AddFamilyLayout />}>

                <Route
        path="/add-family-member/select"
        element={<AddFamilyTypeSelect />}
      />
                  <Route
                    path="/add-family-member" 
                    element={<AddFamilyMember />}
                  />
                  <Route
                    path="/add-family-member/no-profile"
                    element={<AddFamilyMemberNoProfile />}
                  />
                </Route> */}

<Route path="/add-family-member" element={<AddFamilyMemberTabs />} />
    <Route path="/add-family-member/profile" element={<AddFamilyMember />} />
    <Route path="/add-family-member/no-profile" element={<AddFamilyMemberNoProfile />} />
                <Route path="/doctor-profile" element={<DoctorProfile />} />
                <Route path="/doctor-call" element={<DoctorCall />} />
                <Route path="/doctor-chat" element={<DoctorChat />} />
                <Route
                  path="/doctor-video-call"
                  element={<DoctorVideoCall />}
                />
              </Route>
              <Route path="/test" element={<Test />} />

              {/* <Route path="/patient" element={<Patient />} /> */}
              {/* <Route path="/doctors/:slug" element={<Care />} />
              <Route path="/clinics" element={<MobileClinic />} /> */}

              {/* protected Routes with layout */}
              <Route element={<ProtectedRoute />}>
                <Route element={<ServicesLayout />}>
                  {/* Home Health Care */}

                  <Route
                    path="/services/home-health-care"
                    element={<HomeHealthCare serviceType="home-health-care" />}
                  />
                  <Route
                    path="/services/home-health-care/book/:id"
                    element={
                      <SelectDatenTimeParent serviceType="home-health-care" />
                    }
                  />
                  <Route
                    path="/services/home-health-care/book/:id/patient-condition"
                    element={
                      <PatientCondition serviceType="home-health-care" />
                    }
                  />
                  <Route
                    path="/services/home-health-care/book/:id/payment"
                    element={<PaymentParent serviceType="home-health-care" />}
                  />
                  <Route path="/services" element={<Services />} />
                  <Route path="/service" element={<MobileService />} />
                  <Route
                    path="/services/home-health-care/booking/:id"
                    element={<Booking serviceType="home-health-care" />}
                  />
                  <Route path="/add-address" element={<AddNewAddress />} />
                  <Route path="/select-plan" element={<SelectPlan />} />
                  <Route path="/payment" element={<PaymentMethod />} />
                  <Route path="/payment-success" element={<PaymentSuccess />} />

                  {/* Clinic Visit */}
                  <Route
                    path="/services/clinic-visit"
                    element={<ClinicVisit />}
                  />
                  <Route
                    path="/services/clinic-visit/book/:id"
                    element={<SelectDateAndTime serviceType="clinic-visit" />}
                  />
                  <Route
                    path="/services/clinic-visit/book/book-via"
                    element={<BookVia />}
                  />
                  <Route
                    path="/services/clinic-visit/booking/:id"
                    element={<Booking serviceType="clinic-visit" />}
                  />
                  <Route
                    path="/services/clinic-visit/book/:id/patient-condition"
                    element={<PatientCondition serviceType="clinic-visit" />}
                  />
                  <Route
                    path="/services/clinic-visit/book/:id/payment"
                    element={<Payment serviceType="clinic-visit" />}
                  />

                  {/* Call */}
                  <Route
                    path="/services/call"
                    element={<Call serviceType="call" />}
                  />
                  <Route
                    path="/services/call/book/:id"
                    element={<SelectDateAndTime serviceType="call" />}
                  />
                  <Route
                    path="/services/call/booking/:id"
                    element={<Booking serviceType="call" />}
                  />
                  <Route
                    path="/services/call/book/:id/patient-condition"
                    element={<PatientCondition serviceType="call" />}
                  />
                  <Route
                    path="/services/call/book/:id/payment"
                    element={<PaymentParent serviceType="call" />}
                  />

                  {/* Video Call */}
                  <Route
                    path="/services/video-call"
                    element={<VideoCall serviceType="video-call" />}
                  />
                  <Route
                    path="/services/video-call/book/:id"
                    element={<SelectDateAndTime serviceType="video-call" />}
                  />
                  <Route
                    path="/services/video-call/booking/:id"
                    element={<Booking serviceType="video-call" />}
                  />
                  <Route
                    path="/services/video-call/book/:id/patient-condition"
                    element={<PatientCondition serviceType="video-call" />}
                  />
                  <Route
                    path="/services/video-call/book/:id/payment"
                    element={<PaymentParent serviceType="video-call" />}
                  />

                  {/* Chat */}
                  <Route
                    path="/services/chat"
                    element={<Chat serviceType="chat" />}
                  />
                  <Route
                    path="/services/chat/book/:id"
                    element={<SelectDateAndTime serviceType="chat" />}
                  />
                  <Route
                    path="/services/chat/book/:id/patient-condition"
                    element={<PatientCondition serviceType="chat" />}
                  />
                  <Route
                    path="/services/chat/booking/:id"
                    element={<Booking serviceType="chat" />}
                  />
                  <Route
                    path="/services/chat/book/:id/payment"
                    element={<PaymentParent serviceType="chat" />}
                  />

                  {/* History */}
                  <Route path="/history" element={<History />} />
                </Route>

                <Route path="/notifications" element={<NotificationsPage />} />
              </Route>

              {/* Auth Routes (no layout) */}
              <Route path="/terms" element={<TermsofUse />} />
              <Route path="/login" element={<Login />} />
              <Route path="/login-code" element={<LoginCode />} />
              <Route path="/register" element={<Register />} />
              <Route path="/register-simple" element={<RegisterSimple />} />
              <Route path="/verify-otp" element={<VerifyOTP />} />
              <Route
                path="/register-verify-otp"
                element={<RegisterVerifyOTP />}
              />
              <Route path="/splash" element={<MobileSplash />} />
              {/* Not Found */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </Provider>
  );
};

createRoot(document.getElementById("root")).render(<App />);
