import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions';
import { ReactComponent as SVGStar } from './../assets/star.svg';
import CharacterDetails from './CharacterDetails';
import Modal from './Modal';

const Character = (props) => {
  const [modal, setModal] = useState(false);
  const [favorite, setFavorite] = useState(false);

  // props
  const { data, favoriteCharacters } = props;
  const { id, image, name, status, species, gender } = data;

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleSetFavorite = () => {
    props.setFavorite({ data });
    setFavorite(true)
  };

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
    setFavorite(false);
  };

  const isFavorite = () => {

    const result = favoriteCharacters.filter(
      (favoriteCharacter) => favoriteCharacter.data.id === id
    );
    if (result.length) {
      setFavorite(true);
    }
  };
  useEffect(() => {
    isFavorite([]);
  });

  return (
    <Fragment>
      <img src={image} alt='Character' />
      <Fragment>
        <h2>{name}
        {favorite ?
          <SVGStar onClick={() => handleDeleteFavorite(id)} cursor='pointer'/> :
          <SVGStar onClick={handleSetFavorite} cursor='pointer' />
        }
        </h2>
        <p
        >
          <span>Status:</span>
          {' '}
          {status}
        </p>
        <p
        >
          <span>Species:</span>
          {' '}
          {species}
        </p>
        <p
        >
          <span>Gender:</span>
          {' '}
          {gender}
        </p>
        <p onClick={handleOpenModal}  >
          More Details...
        </p>
      </Fragment>
      <Modal isOpen={modal} onClose={handleCloseModal}>
        <CharacterDetails data={data} />
      </Modal>
    </Fragment>
  )
}

// prototype: components documentation
Character.propTypes = {
  data: propTypes.object,
}

// Native functions react redux (HOC)

const mapStateToProps = (state) => {
  return {
    favoriteCharacters: state.favoriteCharacters,
  };
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);