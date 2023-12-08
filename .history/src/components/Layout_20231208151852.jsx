import React from "react";
import { Link } from "react-router-dom";
import { Container, Box, Divider, Typography } from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import Fledge1 from ""
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { selectLink } from "../navSlice";

const styles = {
  link: {
    textDecoration: "none",
    color: "inherit",
  },
};

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Container>
        <Box my={5} display="flex" flexDirection="column" alignItems="center">
          {/* <StoreIcon style={{ fontSize: 90 }} />
          <Typography variant="h2" align="center">
            Our Coffee Shop
          </Typography> */}
          <img
            src={fledge1}
            alt="Coffee Shop Logo"
            style={{ width: 90, height: 90 }}
          />

          <Box display="flex" justifyContent="center" gap={4} mt={4}>
            <Typography variant="h6">
              <Link
                onClick={() => dispatch(selectLink("Roasted Coffee"))}
                to="/roasted-coffee"
                style={styles.link}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.textDecoration = "underline")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.textDecoration = "none")
                }
              >
                Roasted Coffee
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link
                to="/green-beans"
                onClick={() => dispatch(selectLink("Merchandise"))}
                style={styles.link}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.textDecoration = "underline")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.textDecoration = "none")
                }
              >
                Merchandise
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link
                to="/contact"
                style={styles.link}
                onClick={() => dispatch(selectLink("Contact"))}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.textDecoration = "underline")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.textDecoration = "none")
                }
              >
                Contact
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
      <Divider />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
