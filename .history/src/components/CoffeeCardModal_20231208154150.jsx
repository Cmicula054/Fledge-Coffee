import React from "react";
import { Dialog, DialogContent, Grid, Typography } from "@mui/material";

const CoffeeCardModal = ({ open, handleClose, title }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        style: {
          border: "3px solid black",
          borderRadius: "8px",
        },
      }}
    >
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <img
              src="https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png"
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h2">{title}</Typography>
          </Grid>
          Typography
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default CoffeeCardModal;
