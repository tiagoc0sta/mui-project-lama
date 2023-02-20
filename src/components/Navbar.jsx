import { Mail, Notifications, Pets } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
}));

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          TFC
        </Typography>
        <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder='Search...'></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <Mail />
          </Badge>
          <Badge badgeContent={4} color='error'>
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src='https://avatars.githubusercontent.com/u/63982700?v=4'
          />
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src='https://avatars.githubusercontent.com/u/63982700?v=4'
          />
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
