import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DoItems } from "../../../../constants/doItems";
import animation from "../../../../assets/animation.gif";
import theme from "../../../../routes/theme";
const WHDoComp: React.FC = () => {
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [expandedIndex, setExpandedIndex] = useState<number | false>(false);

  const handleChange =
    (index: number) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpandedIndex(isExpanded ? index : false);
    };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <Typography
        sx={{
          fontFamily: "Oleo Script",
          color: "#bbc2ce",
          transition: "color 0.3s",
          fontSize: "2.5rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          width: "100%",
          my: "1rem"
        }}
      >
        WHAT I DO?
        <Box
          sx={{
            display: "flex",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            width: "150px",
            height: "3px",
            background: "#2FBF71",
            "&::before": {
              content: "''",
              position: "absolute",
              display: "flex",
              width: "10px",
              height: "10px",
              background: "#2FBF71",
              borderRadius: "50%",
              top: "50%",
              right: "0",
              transform: "translate(-0%, -50%)",
            },
          }}
        ></Box>
      </Typography>
      <Box sx={{ width: isMobile ? "100%" : "50%" }}>
        {DoItems.map((item, index) => (
          <Accordion
            key={index}
            expanded={expandedIndex === index}
            onChange={handleChange(index)}
            style={{ background: "#08182F", color: "#bbc2ce" }}
          >
            <AccordionSummary style={{display: "flex"}}
              expandIcon={<ExpandMoreIcon style={{ color: "#bbc2ce" }} />} // Adjust the icon as needed
              aria-controls={`panel-${index}-content`}
              id={`panel-${index}-header`}
            >
              <img src={item.imgs} style={{width: "30px", objectFit: "cover"}} alt="" />
              <Typography sx={{ml: "12px"}} variant="h6">{item.title}</Typography>
              
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Box
        sx={{
          width: isMobile ? "100%" : "50%",
          display: isTablet ? "none" : "flex",
        }}
      >
        <img
          src={animation}
          style={{ width: "100%" }}
          height={350}
          alt="animation"
        />
      </Box>
    </Box>
  );
};

export default WHDoComp;
