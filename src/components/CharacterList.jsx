import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from './Character';
import Error from './Error';
import Loader from './Loader';
import { Box } from "@mui/system";


const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getCharacter() {
    try {
      const response = await axios.get(
        'https://rickandmortyapi.com/api/character'
      );
      const result = response.data.results;
      setCharacters(result)
      setLoading(false)
      setError(false)
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }
  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent:'center',
      '& > :not(style)': {
        m: 1,
        width: 300,
        height: 550,
        align: 'center'
      },
    }}
    
    >
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        characters.map((character) => (
          <Character key={character.id} data={character} />)
        )
      )}
    </Box>
  );
};

export default CharacterList;