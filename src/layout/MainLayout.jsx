// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import ButtonGroup from "../components/ButtonGroup";

function MainLayout() {
  return (
    <div className="min-h-screen pb-20 bg-[#F9F9FF] "> {/* space for bottom nav */}
      
      <main className="">
        <Outlet />
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full bg-white rounded-t-3xl shadow-[0px_-4px_24px_rgba(52,0,117,0.06)] backdrop-blur-md p-4">
        <ButtonGroup />
      </nav>

    </div>
  );
}

export default MainLayout;