import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../pages/NotFound";
import { ROUTES } from "./constants";
import { HomePage } from "../pages/Home";
import { AssetPage } from "../pages/Assets";
import { SensorPage } from "../pages/sensors";
import { SideBar } from "../components/Sidebar";

export const RouteProvider = () => {
  return (
    <Routes>
      <Route element={<SideBar/>}>
        <Route index path={ROUTES.home.list.path} element={<HomePage />} />
        <Route path={ROUTES.asset.list.path} element={<AssetPage />} />
        <Route path={ROUTES.sensor.list.path} element={<SensorPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
