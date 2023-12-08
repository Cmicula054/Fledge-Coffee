import React from "react";
import {
  Dialog,
  DialogContent,
  Grid,
  Typography,
  Button,
  IconButton,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CoffeeCardModal = ({ open, handleClose, title }) => {
  // Sample state for size selection, you would implement the logic to handle changes
  const [size, setSize] = React.useState("1kg");

  const handleSizeChange = (event, newSize) => {
    if (newSize !== null) {
      setSize(newSize);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          overflowY: "visible",
          borderColor: "black", // Set the border color here
          borderStyle: "solid",
          borderWidth: "4px", // Set the border width here
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
          color: "grey.600",
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent sx={{ textAlign: "center" }}>
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
              La Mina Honey - Colombia
            </Typography>
            <Typography variant="h6" color="textSecondary">
              $24.00 USD
            </Typography>
            <ToggleButtonGroup
              color="primary"
              value={size}
              exclusive
              onChange={handleSizeChange}
              aria-label="Size"
              sx={{
                ".MuiToggleButton-root": {
                  border: "1px solid black",
                  borderRadius: "16px",
                  margin: "0.5rem",
                  "&.Mui-selected, &.Mui-selected:hover": {
                    bgcolor: "primary.main",
                    color: "white",
                    borderColor: "primary.main",
                  },
                  "&:not(.Mui-selected)": {
                    bgcolor: "white",
                    color: "black",
                  },
                },
                marginBottom: "1rem",
              }}
            >
              <ToggleButton value="250g" aria-label="250 grams">
                250 grams
              </ToggleButton>
              <ToggleButton value="1kg" aria-label="1 kg">
                1 kg
              </ToggleButton>
              <ToggleButton value="2.5kg" aria-label="2.5 kilo">
                2.5 kilo
              </ToggleButton>
            </ToggleButtonGroup>
            <Grid
              container
              spacing={1}
              alignItems="center"
              justifyContent="center"
              sx={{ my: 2 }}
            >
              <Button>-</Button>
              <TextField
                id="quantity"
                type="number"
                variant="outlined"
                size="small"
                InputProps={{ inputProps: { min: 0 } }}
                sx={{ width: "60px" }}
              />
              <Button>+</Button>
            </Grid>
            <Button variant="contained" sx={{ mb: 1, width: "100%" }}>
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