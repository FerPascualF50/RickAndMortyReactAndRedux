import React from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { setSection } from '../actions';
import Logo from '../assets/Logo.png';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/system/Container';

const Header = () => {
  const sectionActive = useSelector((state) => state.sectionActive);
  const dispatch = useDispatch();
  const handleSetSection = (section) => {
    dispatch(setSection(section));
  };

  return (
    <CssBaseline>
      <header>
        <Container align='center'  >
          <img src={Logo} alt="Rick and Morty Logo" />
        </Container>
        <nav>
          <ul>
            <li
              onClick={() => handleSetSection('Character')}
              className={`${sectionActive === 'Character' ? 'active' : ''
                }`}
            >
              <Link to="/" >Characters</Link>
            </li>

            <li
              onClick={() => handleSetSection('Favorites')}
              className={`${sectionActive === 'Favorites' ? 'active' : ''
                }`}
            >
              <Link to="/favorites" >Favorites</Link>
            </li>

          </ul>
        </nav>

      </header>

    </CssBaseline>
  );
};

export default Header;