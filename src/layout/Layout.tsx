import { Box } from '@mui/material';
import React, { ReactNode } from 'react';

import Header from './Header';
import Footer from './Footer';


interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Box sx={{ bgcolor: "#00AFBB", display: "flex", flexWrap: "wrap", justifyContent: "space-between",  }}>
        
              <Header/>
            {children}
            <Footer/>
        </Box>
    );
};

export default Layout;
