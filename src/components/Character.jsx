import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite'
import HeartBrokenIcon from '@mui/icons-material/HeartBroken'
import Modal from './Modal';
import CharacterDetails from './CharacterDetails';
import useModal from '../custom-hooks/useModal';


const Character = (props) => {
  const {modal, handleCloseModal, handleOpenModal } = useModal();
  const [favorite, setFavorite] = useState(false);

  // props
  const { data, favoriteCharacters } = props;
  const { id, image, name, status, species, gender } = data;

  

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
    <Card sx={{ maxWidth: 270 }} >
      <CardMedia
        sx={{ height: 350 }}
        image={image}
        title={name}
        align='center'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          - Status: <b>{status}<br></br></b>
          - Species: <b>{species}<br></br></b>
          - Gender: <b>{gender} </b>
        </Typography>
      </CardContent>
      <CardActions>
        {favorite ?
          <HeartBrokenIcon onClick={() => handleDeleteFavorite(id)} cursor='pointer' 
          /> :
          <FavoriteIcon onClick={handleSetFavorite} cursor='pointer' />}
        <Button onClick={handleOpenModal} size="small">Details...</Button>
        <Modal isOpen={modal} onClose={handleCloseModal}>
          <CharacterDetails data={data} />
        </Modal>
      </CardActions>
    </Card>
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