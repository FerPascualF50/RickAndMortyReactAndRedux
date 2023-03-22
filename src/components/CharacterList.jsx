import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Character from './Character';
import Error from './Error';
import Loader from './Loader';


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
    <Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        characters.map((character) => (
          <Character key={character.id} data={character} />
        ))
      )}
    </Fragment>
  );
};

export default CharacterList;