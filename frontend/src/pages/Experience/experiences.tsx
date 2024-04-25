import { Box } from "@mui/material";
import Experience from "../../components/Experience/experience";
import Expr from "../../components/Experience/expr";

const ExperiencePage= () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        mt: "70px",
        
      }}
    >
     <Expr/>
    </Box>
  );
};


export default ExperiencePage