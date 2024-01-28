import { Box } from "@mui/material";
import Homepage from "../../components/homepage/Homepage";
import AboutPage from "../../components/aboutPage/AboutPage";

import ScrollProgressBar from "../../components/servi/servicesPage";

import ScrollEffect from "../../components/servicesPage/servicesPage";
//import Sidebar from '../../layout/Sidebar'

const Home = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center",  mt:"70px" }}>
      <Homepage />
      <AboutPage />
       <ScrollProgressBar/>
        <ScrollEffect/>
    </Box>
  );
};

export default Home;
