import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListItemText,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import theme from "../../../routes/theme";
import Portfolio from "../../../assets/profile.jpg"

const Imgpograph = () => {
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ mt: "1rem", width: isTablet ? "100%" : "50%" }}>
      <Box sx={{ bgcolor: "",   border: "1px solid red", display:"flex",  justifyContent: "center"}}>
        <img src={Portfolio} width={400} height={400} alt="image login" style={{borderRadius: "50%"}} />
      </Box>
    </Box>
  );
};

export default Imgpograph;
