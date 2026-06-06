import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import SellPage from "./pages/SellPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
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
      </Routes>
    </BrowserRouter>
  );
}