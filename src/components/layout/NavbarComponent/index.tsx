"use client";

import Link from "next/link";
import Image from "next/image";

// Images
import fullLogo from "@/assets/images/fullLogo.svg";

// Hooks
import { useLocale } from "@/hooks";

// Routes
import { Routes } from "@/routes/routes";

// Components
import SettingComponent from "./SettingComponent";
import MobileLayoutComponent from "./MobileLayoutComponent";
import DesktopLayoutComponent from "./DesktopLayoutComponent";

// MUI
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  top: "20px",
  boxShadow: "none",
  zIndex: theme.zIndex.drawer + 1,
  background: theme.palette.background.default,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AppBarComponent = () => {
  const { addLocale } = useLocale();

  return (
    <AppBar component={"header"} color="primary" position="fixed" open={false}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <MobileLayoutComponent />
          <Link href={addLocale(Routes.home)}>
            <Box sx={{ height: { xs: "25px", md: "30px" } }}>
              <Image
                height={30}
                alt="Topera"
                quality={100}
                src={fullLogo}
                style={{ margin: "0px 10px", maxHeight: "100%" }}
              />
            </Box>
          </Link>

          <DesktopLayoutComponent />

          <SettingComponent />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarComponent;
