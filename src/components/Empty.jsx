import React from "react";
import empty from '../assets/empty.png';
import Container from '@mui/system/Container';
import '@fontsource/roboto/700.css';


const Empty = () => (
  <Container align='center' >
    <img src={empty} alt="Rick" />
    <Container align='center'></Container>
    <h2>

    You haven't favorites. Go to the Characters page and add ones
    </h2>
  </Container>

);

export default Empty;