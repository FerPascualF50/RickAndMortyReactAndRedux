import React from "react";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';


const Footer = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar align='center' position="static" sx={{bgcolor: '#756951'}}>
      <Toolbar  >
        <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
          &copy; {new Date().getFullYear()}
          - Powered By Fer Pascual  -  Phone +54 351 3414403  -   pascualefernando@gmail.com  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://www.linkedin.com/in/fernando-pascual-full-stack-developer/"
            rel="noopener noreferrer"
            target="_blank"
          >LinkedIn
          </a>
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>




  // <footer>
  //   <div>
  //     Powered by Fer Pascual
  //     {' '}
  //     <span role='img' aria-label="heart"></span>
  //     {' '}
  //     <a
  //       href="https://www.linkedin.com/in/fernando-pascual-full-stack-developer/"
  //       rel="noopener noreferrer"
  //       target="_blank"
  //     >
  //       {' '}
  //       <span> Fer Pascual</span>
  //     </a>
  //   </div>
  // </footer>


)

export default Footer;