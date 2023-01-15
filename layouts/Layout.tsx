import { ReactNode, useState } from "react";
import { styled } from "@mui/material/styles";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import { APPBAR_DESKTOP, APPBAR_MOBILE } from "./constant";

interface LayoutProps {
  children: ReactNode;
}

const RootStyled = styled("div")({
  display: "flex",
  height: "100vh",
  overflow: "hidden",
});

const MainStyled = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APPBAR_MOBILE,
  [theme.breakpoints.up("lg")]: {
    paddingTop: APPBAR_DESKTOP,
  },
}));

function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <RootStyled>
      <Navbar toggleDrawer={toggleDrawer} />
      <Sidebar isOpen={isOpen} />
      <MainStyled>{children}</MainStyled>
    </RootStyled>
  );
}

export default Layout;
