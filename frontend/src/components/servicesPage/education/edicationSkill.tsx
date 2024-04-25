

import React from "react";
import { motion } from "framer-motion";
import { Box, Link, Typography, useMediaQuery } from "@mui/material";
import theme from "../../../routes/theme";

interface ListItemProps {
  item: {
    textContent: string;
    title: string;
    date: string;
    link: string;
    name: string;
  
  };
  onClick: () => void;
  selectedItem: boolean
}


 
const ListItem: React.FC<ListItemProps> = ({ item,selectedItem, onClick ,  }) => {
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      style={{ background: "#08182F",  }}
    >
      <Box sx={{ my: "1rem" , p: "8px", py: "10px" }}>
        <Typography
          variant="body2"
          sx={{
            bgcolor: "#198754",
            p:"2px",
            color: "white" ,
            maxWidth: "max-content",
            position: "relative",
            fontSize: "10px",
            "::before": {
              content: "''",
              position:" absolute",
              bottom: "-5px",
              left:" 0",
              borderLeft:" 5px solid transparent",
              borderTop: " 5px solid #165934",
              
            },
          }}
        >
          {item.date}
        </Typography>
        <Typography sx={{ textAlign: "start", mt: "8px", color: "white", fontWeight: "500" }}>{item.title}</Typography>
        <Link
          sx={{
            textAlign: "start",
            display: "flex",
            justifyContent: "start",
            textDecoration: "none",
            color: "#bbc2ce",
            fontSize: "13px", 
            mt: "15px",   maxWidth: "max-content",
          }}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.name}
        </Link>
        
     
      </Box>
      { selectedItem? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
    </motion.div>
  );
};

export default ListItem;
