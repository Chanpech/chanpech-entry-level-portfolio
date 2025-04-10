import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import HomePage from "./pages/HomePage.tsx";
import LoadingSpinner from "./components/LoadingSpinner.tsx"

// Lazy load pages with explicit naming for better debugging
const HomeLabPage = lazy(() => import('./pages/HomeLab.tsx'));
const SurfaceAndroidPage = lazy(() => import('./pages/SurfaceAndriod.tsx'));

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
      </Routes>
    </Router>
  );
}

export default App;