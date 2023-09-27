import React from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { grey } from "@mui/material/colors";

import './CardTrata.css'

export default function CardTrata({ tratamientoData }) {
  return (
    <>
    <div className="cardTrata">
    <Card sx={{ maxWidth: 350 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
            {tratamientoData ? tratamientoData.avatar : ''}
          </Avatar>
        }
        title={
          <Typography variant="h5" align="center">
            {tratamientoData ? tratamientoData.name : ''}
          </Typography>
        }
      />
      <CardMedia
        component="img"
        alt={tratamientoData ? tratamientoData.alt : ''}
        height="200"
        image={tratamientoData ? tratamientoData.img : ''}
      />
      <CardContent>
        <Typography
          variant="h6"
          color="text.secondary"
          style={{ width: '100%', fontSize: '15px' }}
          align="center"
        >
          {tratamientoData ? tratamientoData.description : ''}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography
          variant="body2"
          align="center"
          style={{ width: '100%', fontSize: '18px' }}
        >
          <Link to={tratamientoData ? tratamientoData.route : ''}>Leer Más</Link>
        </Typography>
      </CardActions>
    </Card>
    </div>
    </>
  );
}
