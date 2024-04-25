import { Box, useMediaQuery } from "@mui/material";
import Homepage from "../../components/homepage/Homepage";
import AboutPage from "../../components/aboutPage/AboutPage";
import ScrollEffect from "../../components/servicesPage/skillsPage";
import PortPage from "../../components/portfolio/portfolioPage";
import ExperiencePage from "../Experience/experiences";
import theme from "../../routes/theme";
import Blogs from "../../components/blogs/blogs";
import Contact from "../../components/contact/contactPAge";

//import Sidebar from '../../layout/Sidebar'

const Home = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
       
        mt: "70px",
        px:isMobile? "2rem": isTablet? "1.2rem": "0rem"
      }}
    >
      <Homepage />
      <AboutPage />
      <ScrollEffect />
      <ExperiencePage />
      <PortPage />
      <Blogs/>
      <Contact/>
    </Box>
  );
};

export default Home;
