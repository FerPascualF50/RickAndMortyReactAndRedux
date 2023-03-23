import React from "react";
import { connect } from "react-redux";
import Character from "./Character";
import Empty from './Empty'


const FavoriteList = (props) => {
  const { favoriteCharacters } = props;
  return (
    <div>
      {!favoriteCharacters.length ? (
        <Empty />
      ) : (
        favoriteCharacters.map((character) => (
          <Character key={character.data.id} data={character.data} />
        ))
      )}
    </div>
  )
};

const mapStateTOProps = (state) => {
  return {
    favoriteCharacters: state.favoriteCharacters,
  }
}

export default connect(mapStateTOProps, null)(FavoriteList);