import React from "react";

const CharacterDetail = (props) => {
  const { data } = props;
  const { image, name, species, status, gender, origin, location, episode } = data;

  return (
    <div>
      <img src={image} alt="Character" />
      <div >
        <h2>{name}</h2>
        <span>Status:</span>{status}
        <span>Species:</span>{species}
        <span>Gender:</span>{gender}
        <span>Origin:</span>{origin.name}
        <span>Last Location:</span>{location.name}
        <span>Episodes:</span>{episode.length}

      </div>
    </div>

  )

}

export default CharacterDetail;