import { IconLogout } from "@tabler/icons-react";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const pathname = useLocation().pathname;
  console.log(pathname);
  return (
    <div className="w-screen h-screen bg-gray-100 relative">
      {pathname !== "/signin" && (
        <div className="flex items-center gap-2 absolute top-4 right-4 bg-green-700 py-2 text-sm px-6 text-white rounded-xl">
          <span>Đăng xuất</span>
          <IconLogout />
        </div>
      )}
      <div className="pt-10">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
