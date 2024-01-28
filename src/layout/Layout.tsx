import { Box, useMediaQuery } from '@mui/material';
import React, { ReactNode } from 'react';

import Header from './Header';
import Footer from './Footer';
import theme from '../routes/theme';


interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const isTablet = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box sx={{ bgcolor: "#212529", display: "flex", flexWrap: "wrap", justifyContent: "space-between", px: isTablet ? "0rem": "2rem" }}>
        
              <Header/>
            {children}
            <Footer/>
        </Box>
    );
};

export default Layout;
