import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import SellPage from "./pages/SellPage";
import AboutPage from "./pages/AboutPage";
import ThankYouPage from "./pages/ThankYouPage";
import LeadsPage from "./pages/admin/LeadsPage";
import PrivacyPolicyPage from "./pages/support/PrivacyPolicyPage";
import TermsPage from "./pages/support/TermsPage";
import SubmissionErrorPage from "./pages/support/SubmissionErrorPage";
import MaintenancePage from "./pages/support/MaintenancePage";
import NotFoundPage from "./pages/support/NotFoundPage";  

export default function App() {
  console.log("THANK YOU ROUTE REGISTERED");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/sell"
          element={<SellPage />}
        />

        <Route
  path="/about"
  element={<AboutPage />}
/>

<Route
  path="/thank-you"
  element={<ThankYouPage />}
/>

<Route
  path="/privacy-policy"
  element={<PrivacyPolicyPage />}
/>

<Route
  path="/terms-and-conditions"
  element={<TermsPage />}
/>

<Route
  path="/submit-error"
  element={<SubmissionErrorPage />}
/>

<Route
  path="/maintenance"
  element={<MaintenancePage />}
/>

<Route
  path="*"
  element={<NotFoundPage />}
/>

<Route
  path="/admin/leads"
  element={<LeadsPage />}
/>      </Routes>
    </BrowserRouter>
  );
}