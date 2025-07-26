import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import HomePage from "./pages/HomePage.tsx";
import LoadingSpinner from "./components/LoadingSpinner.tsx";

// Lazy load pages with explicit naming for better debugging
const HomeLabPage = lazy(() => import("./pages/HomeLab.tsx"));
const SurfaceAndroidPage = lazy(() => import("./pages/SurfaceAndriod.tsx"));
const JaydenBrianWeb = lazy(() => import("./pages/JaydenBrianWeb.tsx"));
const N8nPage = lazy(() => import("./pages/N8nPage.tsx"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/homelabserver"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <HomeLabPage />
            </Suspense>
          }
        />
        <Route
          path="/surfacetablet"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <SurfaceAndroidPage />
            </Suspense>
          }
        />
        <Route
          path="/jaydenbrianbakery"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <JaydenBrianWeb />
            </Suspense>
          }
        />
        <Route
          path="/n8nautomation"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <N8nPage />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
