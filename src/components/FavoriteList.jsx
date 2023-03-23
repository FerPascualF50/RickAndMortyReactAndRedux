import React from "react";
import { connect } from "react-redux";
import Character from "./Character";
import Empty from './Empty'
import { Box } from "@mui/system";

const FavoriteList = (props) => {
  const { favoriteCharacters } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > :not(style)': {
          m: 1,
          width: 300,
          height: 550,
          align: 'center'
        },
      }}
    >
      {!favoriteCharacters.length ? (
        <Empty />
      ) : (
        favoriteCharacters.map((character) => (
          <Character key={character.data.id} data={character.data} />
        ))
      )}
    </Box>
  )
};

const mapStateTOProps = (state) => {
  return {
    favoriteCharacters: state.favoriteCharacters,
  }
}

export default connect(mapStateTOProps, null)(FavoriteList);