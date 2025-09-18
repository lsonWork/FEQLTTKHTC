import { Loader, Modal, Overlay, Text } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { IconLogout } from "@tabler/icons-react";
import { Outlet, useLocation } from "react-router-dom";
import { loaderStore } from "./store/loader-store";
import Cookies from "js-cookie";
import { userStore } from "./store/user-store";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const { isLoading } = loaderStore();
  const setUser = userStore((s) => s.setUser);
  const logout = () => {
    Cookies.remove("access_token");
    setUser(null);
    navigate("/signin");
  };

  return (
    <div className="w-full bg-gray-100">
      <Notifications position="top-center" />
      {isLoading && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{ zIndex: 100 }}>
          <Overlay color="#000" opacity={0.3} />
          <Loader color="white" size="xl" />
        </div>
      )}
      {pathname !== "/signin" && (
        <div
          onClick={logout}
          className="no-print flex items-center gap-2 absolute top-4 right-4 bg-green-700 py-2 text-sm px-6 cursor-pointer hover:opacity-80 hover:scale-[1.01] duration-300 transition-all text-white rounded-xl">
          <span>Đăng xuất</span>
          <IconLogout />
        </div>
      )}
      <div className={`${pathname === "/signin" ? "pt-0" : "pt-10"}`}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
