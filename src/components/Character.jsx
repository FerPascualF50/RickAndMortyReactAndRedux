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

    // <ImageList sx={{ width: 500, height: 600 }}>
    //   <ImageListItem key="Subheader" cols={4}>
    //   </ImageListItem>
    //   <ImageListItem key={image}>
    //     <img
    //       src={`${image}?w=248&fit=crop&auto=format`}
    //       srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
    //       alt='Morty'
    //       loading="lazy"
    //     />
    //     <ImageListItemBar
    //       title={name}
    //       status={status}
    //       specie={species}
    //       gender={gender}
    //       actionIcon={
    //         <IconButton
    //           sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
    //           aria-label={`info about ${name}`}
    //         >
    //           <InfoIcon onClick={handleOpenModal} />
    //           {favorite ?
    //             <HeartBrokenIcon onClick={() => handleDeleteFavorite(id)} /> :
    //             <FavoriteIcon onClick={handleSetFavorite} />}
    //         </IconButton>
    //       }
    //     />
    //     <Modal isOpen={modal} onClose={handleCloseModal}>
    //       <CharacterDetails data={data} />
    //     </Modal>
    //   </ImageListItem>

    // </ImageList>





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






    // <div >
    //   <img src={image} alt='Character' />
    //   <div>
    //     <h2>{name}
    //       {favorite ?
    //         <SVGStar onClick={() => handleDeleteFavorite(id)} cursor='pointer' /> :
    //         <SVGStar onClick={handleSetFavorite} cursor='pointer' />}
    //     </h2>
    //     <p
    //     >
    //       <span>Status:</span>
    //       {' '}
    //       {status}
    //     </p>

    //     <p
    //     >
    //       <span>Species:</span>
    //       {' '}
    //       {species}
    //     </p>
    //     <p
    //     >
    //       <span>Gender:</span>
    //       {' '}
    //       {gender}
    //     </p>

    //     <p onClick={handleOpenModal}  >
    //       More Details...
    //     </p>
    //   </div>
    //   <Modal isOpen={modal} onClose={handleCloseModal}>
    //     <CharacterDetails data={data} />
    //   </Modal>
    // </div>
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