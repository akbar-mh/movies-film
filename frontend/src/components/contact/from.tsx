// FormComponent.tsx

import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import theme from "../../routes/theme";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}



const FormComponent: React.FC = () => {
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Data successfully sent to the server");
        // Handle success on the client side if needed
      } else {
        console.error("Error sending data to the server");
        // Handle error on the client side if needed
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form style={{}}>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ width: isTablet ? "100%" : "49%" }}>
          <TextField
            type="text"
            label="Name"
            variant="outlined"
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleChange}
            InputLabelProps={{
              sx: {
                color: "#bbc2ce", // Set the label color
              },
            }}
            inputProps={{
              style: {
                color: "#bbc2ce", // Set the text color
              },
            }}
            sx={{
              mt: "20px",
            }}
          />
        </Box>
        <Box sx={{ width: isTablet ? "100%" : "49%" }}>
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
            InputLabelProps={{
              sx: {
                color: "#bbc2ce", // Set the label color
              },
            }}
            inputProps={{
              style: {
                color: "#bbc2ce", // Set the text color
              },
            }}
            sx={{
              mt: "20px",
              rounded: "lg",
              focus: "outline-none focus:ring focus:border-blue-500",
            }}
          />
        </Box>
        <Box sx={{ width: "100%" }}>
          <TextField
            type="text"
            label="Subject"
            variant="outlined"
            fullWidth
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            InputLabelProps={{
              sx: {
                color: "#bbc2ce", // Set the label color
              },
            }}
            inputProps={{
              style: {
                color: "#bbc2ce", // Set the text color
              },
            }}
            sx={{
              mt: "20px",
              rounded: "lg",
              focus: "outline-none focus:ring focus:border-blue-500",
            }}
          />
        </Box>
        <Box sx={{ width: "100%" }}>
          <TextField
            multiline
            rows={4}
            label="Your Message"
            variant="outlined"
            fullWidth
            name="message"
            value={formData.message}
            onChange={handleChange}
            InputLabelProps={{
              sx: {
                color: "#bbc2ce", // Set the label color
              },
            }}
            inputProps={{
              style: {
                color: "#bbc2ce", // Set the text color
              },
            }}
            sx={{
              mt: "20px",
              border: "",
              rounded: "lg",
              focus: "outline-none focus:ring focus:border-blue-500",
            }}
          />
        </Box>
      </Grid>
      <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            mx: "1.3rem",
            width: "150px",
            height: "50px",
            position: "relative",
            transition: "0.4s",
            background: "#2EBF70",
            outline: "none",
            border: "none",
            color: "#FFF",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#2EBF70",
            },
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRight: " 6px solid white",
              borderBottom: " 6px solid white",
              bottom: " -5px",
              right: " -5px",
              transition: "0.4s",
              "&:hover": {
                borderColor: "#2FBF71",
              },
            }}
          >
            <Button sx={{}} type="submit"  onClick={handleSubmit}>
              Send Message
            </Button>
          </Typography>
        </Box>
      </Box>
    </form>
  );
};

export default FormComponent;
