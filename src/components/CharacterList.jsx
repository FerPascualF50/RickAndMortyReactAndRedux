import React, { useEffect } from "react";
import Character from './Character';
import Error from './Error';
import Loader from './Loader';
import { Box } from "@mui/system";
import useGetCharacters from "../custom-hooks/useGetCharacter";


const CharacterList = () => {
  const {characters, loading, error, getCharacters} = useGetCharacters();

  useEffect(() => {
    getCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 

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