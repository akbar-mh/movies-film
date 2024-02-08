import { Box } from "@mui/material";
import Homepage from "../../components/homepage/Homepage";
import AboutPage from "../../components/aboutPage/AboutPage";
import ScrollEffect from "../../components/servicesPage/skillsPage";
import SharedTap from "../../components/serapTap/SharedTap";





//import Sidebar from '../../layout/Sidebar'

const Home = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center",  mt:"70px", px: "3rem"}}>
      <Homepage />
      <AboutPage />
      
     <ScrollEffect/>
     {/* <SharedTap/> */}
    </Box>
  );
};

export default Home;
