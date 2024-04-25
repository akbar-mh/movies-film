import React from 'react';
import { Link } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { FaRegCheckCircle } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { GoGoal } from 'react-icons/go';
import { MdEditCalendar } from 'react-icons/md';
import { VscSettings } from 'react-icons/vsc';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { Box, useMediaQuery } from '@mui/material';
import theme from '../routes/theme';

const Sidebar = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box sx={{  bgcolor:"#F5FCFF", flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', width: '3.4rem', display: isMobile ? "none" : isTablet ? " flex" : "flex",  }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', width: '3.5rem', height: '350px' }}>
                <Link to="/home" color='black'>
                    <GoHome fontSize='1.9rem' />
                </Link>
                <Link to="/checklist">
                    <FaRegCheckCircle fontSize='1.6rem' />
                </Link>
                <Link to="/notifications">
                    <IoMdNotificationsOutline fontSize='1.9rem' />
                </Link>
                <Link to="/goal">
                    <GoGoal fontSize='1.8rem' />
                </Link>
                <Link to="/calendar">
                    <MdEditCalendar fontSize='1.8rem' />
                </Link>
                <Link to="/settings">
                    <VscSettings fontSize='1.8rem' />
                </Link>
            </Box>
            <Link to="/logout">
                <RiLogoutCircleRLine fontSize='1.7rem' />
            </Link>
        </Box>
    );
};

export default Sidebar;
