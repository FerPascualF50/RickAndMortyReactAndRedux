import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/system/Container';
import Footer from './Footer';
import Header from './Header'

const Layout = ({ children }) => (
  <React.Fragment>
    <CssBaseline />
    <Container sx={{bgcolor: '#fb646799'}}>
      <Header />
      {children}
      <Footer />
    </Container>
  </React.Fragment>
);

export default Layout;