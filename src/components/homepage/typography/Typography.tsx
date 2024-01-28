import {
  Box,
  ListItemText,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import theme from "../../../routes/theme";

const Typographys = () => {
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        mt: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: isTablet ? "100%" : "50%",
        border: "1px solid red",
      }}
    >
      <Box
       sx={{px: "2rem",}}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontFamily: "Oleo Script",
            color: "#bbc2ce",
            p: "0.5rem",
            transition: "color 0.3s",
            fontSize: "2.1rem",
            fontWeight: "bold",
            textTransform: 'uppercase'
          }}
        >
          I am Akbar Mohammadi
        </Typography>

        <Typography>
          A website with good design should not only look good, but it should
          also be functional, providing the user with a positive experience.
        </Typography>
      </Box>
    </Box>
  );
};

export default Typographys;
