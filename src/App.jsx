import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Dashboard from "./pages/Dashboard";
import Spin from "./pages/Spin";
import NotFound from "./pages/NotFound";
import NavBottom from "./components/NavBottom";
import Wallet from "./pages/Wallet";
import Referral from "./pages/Referral";
import Settings from "./pages/Settings";

function App() {
  const location = useLocation();
  const hideNav = ["/", "/signup"].includes(location.pathname);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/spin" element={<Spin />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/referral" element={<Referral />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!hideNav && <NavBottom />}
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
