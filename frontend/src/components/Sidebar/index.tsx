import { Outlet, useNavigate } from "react-router-dom";
import { StyledBar } from "./style";
import { Button } from "../Button";
import { ROUTES } from "../../routes/constants";

export const SideBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyledBar>
        <img
          src="https://ibbx.tech/wp-content/themes/ibbx/dist/images/logo.svg"
          alt="IBBX logo"
        />

        <Button onClick={() => navigate(ROUTES.home.list.path)}>Home</Button>
      </StyledBar>
      <Outlet />
    </>
  );
};
