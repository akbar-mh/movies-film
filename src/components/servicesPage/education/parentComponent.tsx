// ParentComponent.tsx
import React, { useState } from "react";
import ListItem from "./edicationSkill";
import { items } from "../../../constants/itemsData";
import { Box, Typography, useMediaQuery } from "@mui/material";
import theme from "../../../routes/theme";
import { AnimatePresence, motion } from "framer-motion";
import { slideInFromRight } from "../../../utils/motion";

const ParentComponent: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  

  return (
    <motion.div variants={slideInFromRight(1)}
      style={{
        display: "flex",
        justifyContent: "start",
        marginTop: "6px",
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ width: isTablet ? "100%" : "35%" }}>
        {items.map((item, ) => (
          <ListItem
            key={item.textContent}
            item={item}
           
            onClick={() => setSelectedItem(item)}
          
          />
        ))}
      
      </Box>

      {selectedItem && (
        <Box
          sx={{
            width: isTablet ? "100%" : "60%",
            p: isTablet ? "0rem" : "0.8rem",
            mt: isTablet ? "0.8rem" : "0rem",
          }}
        >
          <AnimatePresence  mode="wait">
            <motion.div variants={slideInFromRight(0.5)}
              style={{ textAlign: "start", color: "#bbc2ce" }}
              key={selectedItem ? selectedItem.textContent : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedItem ? selectedItem.textContent : "😋"}
            </motion.div>
          </AnimatePresence>
        </Box>
      )}
    </motion.div>
  );
};

export default ParentComponent;
