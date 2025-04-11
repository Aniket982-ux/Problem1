// src/pages/UserDashboard.jsx
import { useState } from "react";
import { Home, ImagePlus, History, Gift, User, LogOut, Save } from "lucide-react";
import ScanPlant from "../../components/Scanplant";
import UserObservationHistory from "../../components/Plantobservation";
import { SaveEnv } from "../../components/SaveEnv";

const menuItems = [
  { label: "Home", icon: <Home />, key: "home" },
  { label: "Scan Plant", icon: <ImagePlus />, key: "scan" },
  { label: "History", icon: <History />, key: "history" },
  { label: "Rewards", icon: <Gift />, key: "rewards" },
  { label: "Profile", icon: <User />, key: "profile" },
];

export default function UserDashboard() {
  const [active, setActive] = useState("home");
 
  const renderContent = () => {
    switch (active) {
      case "home":
        return <div>🌿 Welcome to GreenGuard! Scan a plant to begin.
          <SaveEnv/>
        </div>;
      case "scan":
        return <div><ScanPlant/></div>
        ;
      case "history":
        return <div><UserObservationHistory/></div>;
      case "rewards":
        return <div>🏆 Your earned tokens and rewards.</div>;
      case "profile":
        return <div>👤 Profile settings and account info.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-green-50">
      {/* Sidebar */}
      <aside className="w-60 bg-green-700 text-white p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center mb-8">GreenGuard 🌱</h1>

        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setActive(item.key)}
            className={`flex items-center gap-3 px-4 py-2 rounded-xl w-full text-left ${
              active === item.key ? "bg-green-600" : "hover:bg-green-600/70"
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}

        <button className="flex items-center gap-3 px-4 py-2 rounded-xl w-full text-left hover:bg-red-600/70 mt-10">
          <LogOut />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-xl font-bold text-green-700 mb-4 capitalize">
          {active.replace("-", " ")}
        </h2>
        <div className="bg-white shadow-md rounded-xl p-6">{renderContent()}</div>
      </main>
    </div>
  );
}
