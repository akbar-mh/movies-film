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
         position: "relative", 
       border: "1px solid red",
      
        width: "100%",
        bgcolor: "",
        justifyContent: "space-evenly",
        alignItems: "center",
        display: isMobile ? "inline-block" : isTablet ? "inline-block" : "none",
      }}
    >
      
      <Box
        sx={{
         
          cursor: "pointer",
          color:"#616f8e",
          m: "0.7rem",
        }}
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <RiCloseLine fontSize="2rem"  />
        ) : (
          <RiMenuLine fontSize="2rem" />
        )}
      </Box>
      <Box
        sx={{
          display: isMenuOpen ? "flex" : "none",
          justifyContent: "end",
          bgcolor: "#212529",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          color: "#616f8e",
           px: "2rem",
           position: "absolute",
            top: "50px",
        }}
      >
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
                    color: "#2EBF70",
                  },
                }}
              >
                Home
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
                    color: "#2EBF70",
                  },
                }}
              >
                About
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
                    color: "#2EBF70",
                  },
                }}
              >
                Services
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
                    color: "#2EBF70",
                  },
                }}
              >
                Portfolio
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
                    color: "#2EBF70",
                  },
                }}
              >
                Blogs
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
                    color: "#2EBF70",
                  },
                }}
              >
                Contact
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Link
              to="/checklist"
              style={{
                paddingLeft: 13,
                textDecoration: "none",
                color: "#BBC2CE",
              }}
            >
              <Typography
                sx={{
                  color: "#616f8e",
                  p: "0.5rem",
                  transition: "color 0.3s",
                  fontSize: "1.1rem",
                  "&:hover": {
                    color: "#2EBF70",
                  },
                }}
              >
                Courses
              </Typography>
            </Link>
          </Box>
      </Box>
    </Box>
  );
};

export default NavMobile;
