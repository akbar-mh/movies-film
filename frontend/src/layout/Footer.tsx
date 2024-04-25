import React from 'react';
import { Container, Typography, IconButton, Box } from '@mui/material';
import { FaLinkedin, FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';

interface FooterProps {
  year: number;
}

const Footer: React.FC<FooterProps> = ({ year }) => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
        padding: (theme) => theme.spacing(2),
        marginTop: 'auto',
         width: "100%"
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="textSecondary" align="center">
          &copy; {year} Akb-MAH. All rights reserved.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: (theme) => theme.spacing(2),
          }}
        >
          <IconButton
            sx={{ margin: (theme) => theme.spacing(0, 1) }}
            href="https://linkedin.com/in/your-linkedin-profile"
            target="_blank"
          >
            <FaLinkedin />
          </IconButton>
          <IconButton
            sx={{ margin: (theme) => theme.spacing(0, 1) }}
            href="https://www.youtube.com/your-channel"
            target="_blank"
          >
            <FaYoutube />
          </IconButton>
          <IconButton
            sx={{ margin: (theme) => theme.spacing(0, 1) }}
            href="https://instagram.com/your-instagram-profile"
            target="_blank"
          >
            <FaInstagram />
          </IconButton>
          <IconButton
            sx={{ margin: (theme) => theme.spacing(0, 1) }}
            href="https://github.com/your-github-profile"
            target="_blank"
          >
            <FaGithub />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
