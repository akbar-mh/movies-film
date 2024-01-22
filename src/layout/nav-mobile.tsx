import { Box, Typography, useMediaQuery } from "@mui/material";
import theme from "../routes/theme";
import { Link } from "react-router-dom";
import { GoGoal, GoHome } from "react-icons/go";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiCloseLine, RiLogoutCircleRLine, RiMenuLine } from "react-icons/ri";
import { VscSettings } from "react-icons/vsc";
import { MdEditCalendar } from "react-icons/md";
import { useState } from "react";

const NavMobile = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#F5FCFF",
        justifyContent: "space-evenly",
        alignItems: "center",
        display: isMobile ? "inline-block" : isTablet ? "inline-block" : "none",
      }}
    >
      
      <Box
        sx={{
          display: isMobile ? "flex" : "none",
          cursor: "pointer",
          m: "0.7rem",
        }}
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <RiCloseLine fontSize="2rem" />
        ) : (
          <RiMenuLine fontSize="2rem" />
        )}
      </Box>
      <Box
        sx={{
          display: isMenuOpen ? "flex" : "none",
          justifyContent: "end",
          bgcolor: "#F5FCFF",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "2rem",
          color: "#616f8e",
        }}
      >
        <Box sx={{ display: "flex", width: "100%" }}>
          <Link
            to="/home"
            style={{
              paddingLeft: 13,
              textDecoration: "none",
              color: "#616f8e",
            }}
          >
            <Typography
              sx={{
                color: "#616f8e",
                p: "0.5rem",
                transition: "color 0.3s",
                fontSize: "1.1rem",
                "&:hover": {
                  color: "red",
                },
              }}
            >
              صفحه اصلی
            </Typography>
          </Link>
        </Box>

        <Box sx={{ display: "flex", width: "100%" }}>
          <Link
            to="/checklist"
            style={{
              paddingLeft: 13,
              textDecoration: "none",
              color: "#616f8e",
            }}
          >
            <Typography
              sx={{
                color: "#616f8e",
                p: "0.5rem",
                transition: "color 0.3s",
                fontSize: "1.1rem",
                "&:hover": {
                  color: "red",
                },
              }}
            >
              چک لیست
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Link
            to="/notifications"
            style={{
              paddingLeft: 13,
              textDecoration: "none",
              color: "#616f8e",
            }}
          >
            <Typography
              sx={{
                color: "#616f8e",
                p: "0.5rem",
                transition: "color 0.3s",
                fontSize: "1.1rem",
                "&:hover": {
                  color: "red",
                },
              }}
            >
              اطلاعیه های
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Link
            to="/goal"
            style={{
              paddingLeft: 13,
              textDecoration: "none",
              color: "#616f8e",
            }}
          >
            <Typography
              sx={{
                color: "#616f8e",
                p: "0.5rem",
                transition: "color 0.3s",
                fontSize: "1.1rem",
                "&:hover": {
                  color: "red",
                },
              }}
            >
              هدف
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Link
            to="/calendar"
            style={{
              paddingLeft: 13,
              textDecoration: "none",
              color: "#616f8e",
            }}
          >
            <Typography
              sx={{
                color: "#616f8e",
                p: "0.5rem",
                transition: "color 0.3s",
                fontSize: "1.1rem",
                "&:hover": {
                  color: "red",
                },
              }}
            >
              تقویم
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Link
            to="/settings"
            style={{
              paddingLeft: 13,
              textDecoration: "none",
              color: "#616f8e",
            }}
          >
            <Typography
              sx={{
                color: "#616f8e",
                p: "0.5rem",
                transition: "color 0.3s",
                fontSize: "1.1rem",
                "&:hover": {
                  color: "red",
                },
              }}
            >
              تنظیمات
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: "flex", width: "100%" }}>
          {" "}
          <Link
            to="/logout"
            style={{
              paddingLeft: 13,
              textDecoration: "none",
              color: "#616f8e",
              transition: "color 0.3s", // Optional: Add a smooth transition for color change
            }}
          >
            <Typography
              sx={{
                color: "#616f8e",
                p: "0.5rem",
                transition: "color 0.3s",
                fontSize: "1.1rem",
                "&:hover": {
                  color: "red",
                },
              }}
            >
              خروج
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default NavMobile;
