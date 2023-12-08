// CoffeeCard.js

import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import CoffeeCardModal from "./CoffeeCardModal";

const CoffeeCard = () => {
  const [open, setOpen] = useState(false);
  const coffees = useSelector((state) => state.coffee.coffee);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const title = "Frank Torres Geisha - Colombia, Geisha";

  return (
    <>
      <Card style={{ maxWidth: 245, margin: "auto" }}>
        <CardMedia
          component="img"
          height="190"
          image="https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png"
          alt="No Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A wonderful coffee with notes of red fruit, floral honey, and
            tropical fruit. This Geisha coffee from Frank Torres is a taste
            sensation not to be missed.
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            variant="outlined"
            color="primary"
            sx={{ color: "black", borderColor: "black" }}
            onClick={handleClickOpen}
          >
            Choose Options
          </Button>
        </CardActions>
      </Card>

      <CoffeeCardModal open={open} handleClose={handleClose} title={title} />
    </>
  );
};

export default CoffeeCard;
 PaperProps={{
        sx: {
          overflowY: "visible",
          borderColor: "black", // Set the border color here
          borderStyle: "solid",
          borderWidth: "4px", // Set the border width here
          borderRadius: "16px", // Optional: if you want rounded corners
        },
      }}