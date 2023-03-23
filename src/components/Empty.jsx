import React from "react";
import empty from '../assets/empty.png';
import Container from '@mui/system/Container';
import CssBaseline from '@mui/material/CssBaseline';
//import '@fontsource/roboto/700.css';


const Empty = () => (
  <CssBaseline>
    <Container align='center' >
      <img src={empty} alt="Rick" />
      <Container align='center'></Container>
      <h2>
        You haven't favorites. Go to the Characters page and add ones
      </h2>
    </Container>
  </CssBaseline>

);

export default Empty;