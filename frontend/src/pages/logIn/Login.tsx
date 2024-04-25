import React, { useEffect } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  InputAdornment,
  Link,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LogoLogin from "../../assets/login.png";
import { useForm } from "react-hook-form";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ChangeLangBtn from "../../components/ChangeLangBtn";

type FormData = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
  termsOfService: boolean;
};

const Login: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          password: data.password,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        // Depending on how your backend handles sessions,
        // you might get a token back here that you would store in localStorage

        if (data.termsOfService) {
          localStorage.setItem(
            "rememberMe",
            JSON.stringify({ name: data.name })
          );
          // Note: Do NOT store the password or any sensitive data in localStorage
        } else {
          localStorage.removeItem("rememberMe");
        }

        navigate("/home");
      } else {
        // Handle errors
        console.error("Login failed");
        // Show an error message to the user
      }
    } catch (error) {
      // Handle errors
      console.error("There was an error during the login process", error);
      // Show an error message to the user
    }
  };

  const textFieldStyles = {
    width: isTablet ? "100%" : "100%",
    borderBottom: "1px solid #00AFBB", 
    
    ml: errors.name ? "1.7em" : "1em",
    mb:
      errors.email || errors.password || errors.repeatPassword
        ? "1.7em"
        : "1em",
    input: {
      color: "#616f8e",
      textAlign: "right",
   
     
    },
    label: {
      color: "#c3c3c3",
      right: 20,
      left: "auto",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "#00A4B0" },
      "&:hover fieldset": { borderColor: "#00A4B0" },
      "&.Mui-focused fieldset": { borderColor: "#00A4B0" },
    },
    "& .MuiFormHelperText-root": {
      color: "gray",
      position: "absolute",
      bottom: "-25px",
      textAlign: "right",
     
    },
  };

  // Check for stored data when component mounts
  useEffect(() => {
    const rememberedData = localStorage.getItem("rememberMe");
    if (rememberedData) {
      const formData = JSON.parse(rememberedData);
      setValue("name", formData.name);
      setValue("password", formData.password);
      setValue("termsOfService", true);
    }
  }, [setValue]);

  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00AFBB",
        userSelect: "none",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          width: "90%",
          bgcolor: "#F5FCFF",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-evenly",
          height: "90%",
        /*   borderRadius: "1em", */
          boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          overflow: "auto",
          padding: isTablet ? theme.spacing(2) : theme.spacing(0),
        }}
      >
        <ChangeLangBtn />
        <form
          style={{ width: isTablet ? "100%" : "48%", color: "#00AFBB",
          marginTop: isMobile ? "-20rem" : "-40px", }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Typography
            sx={{
              fontSize: "3rem",
              textAlign: "center",
              fontWeight: "700",
              mb: "0.5em",

            }}
          >
            ورود
          </Typography>
          <TextField
            placeholder="ایمیل"
            type="email"
            variant="filled"
            error={!!errors.email}
            helperText={errors.email ? "وارد کردن ایمیل الزامیست!" : ""}
            {...register("email", { required: true })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: "#00AFBB" }} />
                </InputAdornment>
              ),
            }}
            sx={textFieldStyles}
          />
          <TextField
            placeholder="گذرواژه"
            type="password"
            variant="filled"
            error={!!errors.password}
            helperText={
              errors.password
                ? "حداقل تعداد گذروازه می بایست ۶ کارکتر باشد!"
                : ""
            }
            {...register("password", { required: true, minLength: 6 })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon sx={{ color: "#00AFBB" }} />
                </InputAdornment>
              ),
            }}
            sx={textFieldStyles}
          />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: isTablet ? "100%" : "100%",
                
              }}
             >
            <FormControlLabel
              sx={{ 
              display: "flex",
              justifyContent: "center",
               margin:"0",
                color: "#616f8e"
             }}
            control={
              <Checkbox
                sx={{ color: "#c3c3c3" , }}
                {...register("termsOfService", { required: true })}
              />
            }
            label="مرا به خاطر بسپار"
          />
            <Link href="/sign-up" sx={{ color: "#616f8e", ml:"2rem" }}>
              یک حساب کاربری ایجاد کنید
            </Link>
            </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: isTablet ? "100%" : "90%",
            }}
          >
            <Button
              sx={{
                mt: "2.5em",
                width: isMobile ? "100%" : isTablet ? "20rem" : "13rem",
                p: "0.8em", bgcolor:"#00AFBB", '&:hover': {
                  background: "#00AFBB",
               },
              }}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              ورود
            </Button>
           
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: "2em",
              color: "#c3c3c3",
              flexWrap: "wrap",
               
            }}
          >
            <Box
              sx={{
              
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                  width: "100%",
                mt: isMobile ? "1em" : "0",
              }}
            >
              <Typography sx={{ ml:"1em", color: "#616f8e"  }}>یا با</Typography>
              {["#3b5998", "#1da0f2", "#e72734"].map((color, index) => (
                <Link
                  key={index}
                  href="#"
                  sx={{
                    bgcolor: color,
                    color: "#fff",
                    p: "0.2em",
                    height: "2rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "0.3em",
                    "&:hover": {
                      transform: "scale(1.5)",
                      transition: "transform 0.3s",
                    },
                    mx: index === 1 ? "1em" : 0,
                  }}
                >
                  {index === 0 && <FacebookIcon />}
                  {index === 1 && <TwitterIcon />}
                  {index === 2 && <GoogleIcon />}
                </Link>
              ))}
            </Box>
          </Box>
        </form>
     {/*     <Box sx={{ bgcolor: "#181818", display: isTablet ? "none" : "flex", }}>
          <img src={LogoLogin} width={500} height={500} alt="image login" />
        </Box>  */}
      </Box>
    </Container>
  );
};

export default Login;
