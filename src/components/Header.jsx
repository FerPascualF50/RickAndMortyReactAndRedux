import React from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { setSection } from '../actions';
import Logo from '../assets/Logo.png';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/system/Container';
import styled from '@mui/system/styled';
import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';


const Header = () => {
  const sectionActive = useSelector((state) => state.sectionActive);
  const dispatch = useDispatch();
  const handleSetSection = (section) => {
    dispatch(setSection(section));
  };

  const Item = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    border: '1px solid',
    borderColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(2),
    borderRadius: '5px',
    textAlign: 'center',
  }));

  return (
    <CssBaseline>
      <Container align='center'   >
        <img src={Logo} alt="Rick and Morty Logo" />
      </Container >
      <Box sx={{ width: '100%' }} >
        <Grid columns={2} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }} sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
          '& > :not(style)': {
            m: 1,
            width: 200,
            height: 70,

          },
        }} >
          <Grid xs={2}>
            <Item
              onClick={() => handleSetSection('Character')}
              className={`${sectionActive === 'Character' ? 'active' : ''}`}>
              <Link to="/" font-color="#756951" >Characters</Link>
            </Item>
          </Grid>
          <Grid xs={2}>
            <Item
              onClick={() => handleSetSection()}
              className={`${sectionActive === 'Favorites' ? 'active' : ''}`}>
              <Link to="/favorites">Favorites</Link>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </CssBaseline>
  );
};

export default Header;