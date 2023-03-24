import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Paper } from "@mui/material";

const CharacterDetail = (props) => {
  const { data } = props;
  const { image, name, species, status, gender, origin, location, episode } = data;

  return (

    <Paper align='center' >

      <Card sx={{ maxWidth: 270 }} >
        <CardMedia
          sx={{ height: 350 }}
          image={image}
          title={name}
          align='center'

        />
        <CardContent align='center'>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            .|. Status: {status} .|. &nbsp;
            .|. Species: {species} .|. &nbsp;
            .|. Gender: {gender} .|. &nbsp;
            .|. Origin: {origin.name} .|. &nbsp;
            .|. Location: {location.name} .|. &nbsp;
            .|. Episodies: {episode.length} .|. &nbsp;

          </Typography>
        </CardContent>
      </Card>
    </Paper>



    // <div>
    //   <img src={image} alt="Character" />
    //   <div >
    //     <h2>{name}</h2>
    //     <span>Status:</span>{status}
    //     <span>Species:</span>{species}
    //     <span>Gender:</span>{gender}
    //     <span>Origin:</span>{origin.name}
    //     <span>Last Location:</span>{location.name}
    //     <span>Episodes:</span>{episode.length}

    //   </div>
    // </div>

  )

}

export default CharacterDetail;