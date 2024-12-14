import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import { useTranslation } from "react-i18next";

function Layout() {
  const { i18n } = useTranslation();
  return (
    <>
      <div
        className="parent-container"
        style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}>
        <NavBar />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
