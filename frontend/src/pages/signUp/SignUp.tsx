import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  InputAdornment,
  Link,
  Modal,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LogoSignUp from "../../assets/sign.png";
import { useForm } from "react-hook-form";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import ChangeLangBtn from "../../components/ChangeLangBtn";

type FormData = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
  termsOfService: boolean;
};

const SignUp: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const [openModal, setOpenModal] = useState(false); // Define state variables for modal visibility
  const onSubmit = (data: FormData) => console.log(data);

  const textFieldStyles = {
    width: isTablet ? "100%" :"100%",
    ml: errors.name ? "1.7em" : "1em",
    borderBottom: "1px solid #00AFBB", 
    mb:
      errors.email || errors.password || errors.repeatPassword
        ? "1.7em"
        : "1em",
    input: {
      color: "#616f8e",
      textAlign: "right",
    },
    label: {
      color: "#616f8e",
      right: 20,
      left: "auto",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "gray" },
      "&:hover fieldset": { borderColor: "#616f8e" },
      "&.Mui-focused fieldset": { borderColor: "#fff" },
    },
    "& .MuiFormHelperText-root": {
      color: "gray",
      position: "absolute",
      bottom: "-25px",
      textAlign: "right",
    },
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
      
        height: "100dvh",
        bgcolor: "#00AFBB",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          width:"90%",
          bgcolor: "#F5FCFF",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-evenly",
          height: "90%",
          /* borderRadius: "1em", */
          boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          overflow: "auto",
          padding: isTablet ? theme.spacing(2) : theme.spacing(0),
        }}
      >
        <ChangeLangBtn />
        <form
          style={{
            backgroundColor: "#F5FCFF",
            width: isTablet ? "100%" : "48%",
            marginTop: isMobile ? "-15rem" : "-100px",

            color: "#fff",
           
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Typography
            sx={{
              fontSize: "3rem",
              textAlign: "center",
              color: "#00AFBB",
              fontWeight: "700",
              mb: "0.5em",
              fontFamily: "Markazi Text",
            }}
          >
            ثبت نام
          </Typography>
          <TextField
            placeholder="نام کاربری"
            variant="filled"
            error={!!errors.name}
            helperText={errors.name ? "وارد کردن نام کاربری الزامیست!" : ""}
            {...register("name", { required: true })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon sx={{ color: "#00AFBB" }} />
                </InputAdornment>
              ),
            }}
            sx={textFieldStyles}
          />
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
          <TextField
            placeholder="تکرار گذرواژه"
            type="password"
            variant="filled"
            error={!!errors.repeatPassword}
            helperText={
              errors.repeatPassword ? errors.repeatPassword.message : ""
            }
            {...register("repeatPassword", {
              validate: (value) =>
                value === watch("password") || "گذرواژه ها همخوانی ندارند!",
            })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon sx={{ color: "#00AFBB" }} />
                </InputAdornment>
              ),
            }}
            sx={textFieldStyles}
          />
          <Box
           sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
            width: isMobile ? "100%" : "96.5%",
          }}
          >
            <FormControlLabel
              sx={{ m: "0", color: "#616f8e",  }}
              control={
                <Checkbox
                  sx={{ color: "#616f8e" }}
                  {...register("termsOfService", { required: true })}
                />
              }
              label={
                <>
                  من با تمام اظهارات در{" "}
                  <Link href="#" onClick={handleOpenModal} color="inherit">
                    شرایط استفاده از خدمات موافقم.
                  </Link>
                </>
              }
            />
            <Link
              href="/login"
              sx={{
                color: "#616f8e",
                textAlign: "center",
              }}
            >
              من قبلا ثبت نام کردم
            </Link>
          </Box>

          {errors.termsOfService && (
            <Typography color="error">
              شما باید با شرایط خدمات موافقت کنید
            </Typography>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              alignItems: "center",
              width: isMobile ? "100%" : "96.5%",
            }}
          >
            <Button
              sx={{
                mt: "1.5em",
                width: isMobile ? "100%" : isTablet ? "30rem" : "15rem",
                p: "1em",
                bgcolor:"#00AFBB", '&:hover': {
                  background: "#00AFBB",
               },
              }}
              type="submit"
              variant="contained"
              
              fullWidth
            >
              ثبت نام
            </Button>
          </Box>
        </form>
        {/*   <Box sx={{ bgcolor: "#181818", display: isTablet ? "none" : "flex", }}>
                    <img src={LogoSignUp} width={460} height={460} alt="image sigup" />
                </Box> */}
      </Box>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
          ></Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* Your terms of service here */}
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
};

export default SignUp;
