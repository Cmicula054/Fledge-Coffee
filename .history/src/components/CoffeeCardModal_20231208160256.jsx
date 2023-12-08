import React from "react";
import {
  Dialog,
  DialogContent,
  Grid,
  Typography,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CoffeeCardModal = ({ open, handleClose, title }) => {
  const [size, setSize] = React.useState("1kg"); // Default size
  const [quantity, setQuantity] = React.useState(1); // Default quantity

  const handleSizeChange = (newSize) => {
    setSize(newSize);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          width: 'calc(600px + 35%)'
          overflowY: "visible",
          borderColor: "black", // Set the border color here
          borderStyle: "solid",
          borderWidth: "2px", // Set the border width here
          borderRadius: "16px", // Optional: if you want rounded corners
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
          <Grid item xs={12} sm={5}>
            <img
              src="https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png"
              alt={title}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h6">$24.00 USD</Typography>

            {/* Size Buttons */}
            <Grid container spacing={1}>
              {["250 grams", "1 kg", "2.5 kilo"].map((option) => (
                <Grid item key={option}>
                  <Button
                    variant={size === option ? "contained" : "outlined"}
                    onClick={() => handleSizeChange(option)}
                  >
                    {option}
                  </Button>
                </Grid>
              ))}
            </Grid>

            {/* Quantity Input */}
            <Grid container spacing={1} alignItems="center" sx={{ my: 2 }}>
              <Grid item>
                <Button onClick={decrementQuantity}>-</Button>
              </Grid>
              <Grid item>
                <TextField
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  size="small"
                  inputProps={{ min: 1 }}
                />
              </Grid>
              <Grid item>
                <Button onClick={incrementQuantity}>+</Button>
              </Grid>
            </Grid>

            <Button variant="contained" sx={{ width: "100%", mb: 2 }}>
              Add to cart
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: "100%" }}
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
