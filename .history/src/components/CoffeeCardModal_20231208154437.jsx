import React from "react";
import {
  Dialog,
  DialogContent,
  Grid,
  Typography,
  Button,
  IconButton,
  TextField,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CoffeeCardModal = ({ open, handleClose, title }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      PaperProps={{
        sx: {
          bgcolor: "white",
          boxShadow: "none",
          borderRadius: 2,
          p: 2,
          minWidth: "600px",
        },
      }}
    >
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <img
              src="https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png"
              alt="Coffee Bag"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" component="h2" gutterBottom>
              La Mina Honey - Colombia
            </Typography>
            <Typography variant="h6" component="h3" gutterBottom>
              $24.00 USD
            </Typography>
            <FormControl component="fieldset">
              <FormLabel component="legend">Size</FormLabel>
              <RadioGroup row aria-label="size" name="row-radio-buttons-group">
                <FormControlLabel
                  value="250g"
                  control={<Radio />}
                  label="250 grams"
                />
                <FormControlLabel
                  value="1kg"
                  control={<Radio />}
                  label="1 kg"
                />
                <FormControlLabel
                  value="2.5kg"
                  control={<Radio />}
                  label="2.5 kilo"
                />
              </RadioGroup>
            </FormControl>
            <Typography variant="subtitle1" gutterBottom>
              Quantity
            </Typography>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Button>-</Button>
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-number"
                  label="Number"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  defaultValue={1}
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item>
                <Button>+</Button>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2, width: "100%" }}
            >
              Add to cart
            </Button>
            <Button
              variant="contained"
              sx={{ mt: 2, width: "100%", bgcolor: "secondary.main" }}
            >
              Buy with Shop Pay
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default CoffeeCardModal;
