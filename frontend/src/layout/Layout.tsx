import { Box, useMediaQuery } from '@mui/material';
import React, { ReactNode } from 'react';

import Header from './Header';

import theme from '../routes/theme';
import Footer from './Footer';


interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const currentYear = new Date().getFullYear();
    const isTablet = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box sx={{ bgcolor: "", display: "flex", flexWrap: "wrap", justifyContent: "center", px:isTablet? "1rem" :"2rem",   width: "100%",  }}>
        
              <Header/>
            {children}
            <Footer year={currentYear} />
        </Box>
    );
};

export default Layout;
