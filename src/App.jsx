import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages/Home"));
const Categories = lazy(() => import("./pages/Categories"));
const Profile = lazy(() => import("./pages/Profile"));
const SideNav = lazy(() => import("./components/SideNav"));
const TopNav = lazy(() => import("./components/TopNav"));
const Favorites = lazy(() => import("./pages/Favorites"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <SideNav />
          <div className="flex flex-col flex-1">
            <TopNav />
            <main className="flex-1 overflow-y-auto p-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/favorites" element={<Favorites />} />

                <Route path="*" element={<div>404 Not Found</div>} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
