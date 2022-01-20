import * as React from "react";
import { useEffect, useState } from "react";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";

import InfoIcon from "@mui/icons-material/Info";

import theme from "../../themes/theme";
import Header from "../../components/Header/header";

function App() {
  const [fruits, setFruits] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      fetch("/api")
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };

    getProducts();
  }, []);
  return (
    <div
      style={{
        background: theme.palette.background.default,
        height: "100%",
      }}
    >
      <Header />

      <Box p={6} pl={10} pr={10}>
        <Typography
          color="primary"
          variant="h5"
          component="div"
          sx={{ flexGrow: 1 }}
          style={{
            fontFamily: "Staatliches",
          }}
        >
          Fruits
        </Typography>
        <Grid container spacing={5}>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box
              p={2}
              style={{
                background: theme.palette.background.paper,
                border: "3px solid #19381F",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography
                  ml={1}
                  color="primary"
                  variant="h5"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  style={{
                    fontFamily: "Staatliches",
                  }}
                >
                  Tomato
                </Typography>
                <IconButton>
                  <InfoIcon color="primary" />
                </IconButton>
              </Box>
              <Typography
                ml={1}
                color="primary"
                variant="subtitle1"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                R$10,00
              </Typography>
              <Button
                color="primary"
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                Add to your bag
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box
              p={2}
              style={{
                background: theme.palette.background.paper,
                border: "3px solid #19381F",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography
                  ml={1}
                  color="primary"
                  variant="h5"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  style={{
                    fontFamily: "Staatliches",
                  }}
                >
                  Tomato
                </Typography>
                <IconButton>
                  <InfoIcon color="primary" />
                </IconButton>
              </Box>
              <Typography
                ml={1}
                color="primary"
                variant="subtitle1"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                R$10,00
              </Typography>
              <Button
                color="primary"
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                Add to your bag
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box
              p={2}
              style={{
                background: theme.palette.background.paper,
                border: "3px solid #19381F",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography
                  ml={1}
                  color="primary"
                  variant="h5"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  style={{
                    fontFamily: "Staatliches",
                  }}
                >
                  Tomato
                </Typography>
                <IconButton>
                  <InfoIcon color="primary" />
                </IconButton>
              </Box>
              <Typography
                ml={1}
                color="primary"
                variant="subtitle1"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                R$10,00
              </Typography>
              <Button
                color="primary"
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                Add to your bag
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box
              p={2}
              style={{
                background: theme.palette.background.paper,
                border: "3px solid #19381F",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography
                  ml={1}
                  color="primary"
                  variant="h5"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  style={{
                    fontFamily: "Staatliches",
                  }}
                >
                  Tomato
                </Typography>
                <IconButton>
                  <InfoIcon color="primary" />
                </IconButton>
              </Box>
              <Typography
                ml={1}
                color="primary"
                variant="subtitle1"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                R$10,00
              </Typography>
              <Button
                color="primary"
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                Add to your bag
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box
              p={2}
              style={{
                background: theme.palette.background.paper,
                border: "3px solid #19381F",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography
                  ml={1}
                  color="primary"
                  variant="h5"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  style={{
                    fontFamily: "Staatliches",
                  }}
                >
                  Tomato
                </Typography>
                <IconButton>
                  <InfoIcon color="primary" />
                </IconButton>
              </Box>
              <Typography
                ml={1}
                color="primary"
                variant="subtitle1"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                R$10,00
              </Typography>
              <Button
                color="primary"
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                Add to your bag
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box
              p={2}
              style={{
                background: theme.palette.background.paper,
                border: "3px solid #19381F",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography
                  ml={1}
                  color="primary"
                  variant="h5"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  style={{
                    fontFamily: "Staatliches",
                  }}
                >
                  Tomato
                </Typography>
                <IconButton>
                  <InfoIcon color="primary" />
                </IconButton>
              </Box>
              <Typography
                ml={1}
                color="primary"
                variant="subtitle1"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                R$10,00
              </Typography>
              <Button
                color="primary"
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                Add to your bag
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box
              p={2}
              style={{
                background: theme.palette.background.paper,
                border: "3px solid #19381F",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography
                  ml={1}
                  color="primary"
                  variant="h5"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  style={{
                    fontFamily: "Staatliches",
                  }}
                >
                  Tomato
                </Typography>
                <IconButton>
                  <InfoIcon color="primary" />
                </IconButton>
              </Box>
              <Typography
                ml={1}
                color="primary"
                variant="subtitle1"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                R$10,00
              </Typography>
              <Button
                color="primary"
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                Add to your bag
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box
              p={2}
              style={{
                background: theme.palette.background.paper,
                border: "3px solid #19381F",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography
                  ml={1}
                  color="primary"
                  variant="h5"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  style={{
                    fontFamily: "Staatliches",
                  }}
                >
                  Tomato
                </Typography>
                <IconButton>
                  <InfoIcon color="primary" />
                </IconButton>
              </Box>
              <Typography
                ml={1}
                color="primary"
                variant="subtitle1"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                R$10,00
              </Typography>
              <Button
                color="primary"
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                Add to your bag
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box
              p={2}
              style={{
                background: theme.palette.background.paper,
                border: "3px solid #19381F",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography
                  ml={1}
                  color="primary"
                  variant="h5"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  style={{
                    fontFamily: "Staatliches",
                  }}
                >
                  Tomato
                </Typography>
                <IconButton>
                  <InfoIcon color="primary" />
                </IconButton>
              </Box>
              <Typography
                ml={1}
                color="primary"
                variant="subtitle1"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                R$10,00
              </Typography>
              <Button
                color="primary"
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                Add to your bag
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box
              p={2}
              style={{
                background: theme.palette.background.paper,
                border: "3px solid #19381F",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography
                  ml={1}
                  color="primary"
                  variant="h5"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  style={{
                    fontFamily: "Staatliches",
                  }}
                >
                  Tomato
                </Typography>
                <IconButton>
                  <InfoIcon color="primary" />
                </IconButton>
              </Box>
              <Typography
                ml={1}
                color="primary"
                variant="subtitle1"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                R$10,00
              </Typography>
              <Button
                color="primary"
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                Add to your bag
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box
              p={2}
              style={{
                background: theme.palette.background.paper,
                border: "3px solid #19381F",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography
                  ml={1}
                  color="primary"
                  variant="h5"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  style={{
                    fontFamily: "Staatliches",
                  }}
                >
                  Tomato
                </Typography>
                <IconButton>
                  <InfoIcon color="primary" />
                </IconButton>
              </Box>
              <Typography
                ml={1}
                color="primary"
                variant="subtitle1"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                R$10,00
              </Typography>
              <Button
                color="primary"
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                Add to your bag
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box
              p={2}
              style={{
                background: theme.palette.background.paper,
                border: "3px solid #19381F",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography
                  ml={1}
                  color="primary"
                  variant="h5"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  style={{
                    fontFamily: "Staatliches",
                  }}
                >
                  Tomato
                </Typography>
                <IconButton>
                  <InfoIcon color="primary" />
                </IconButton>
              </Box>
              <Typography
                ml={1}
                color="primary"
                variant="subtitle1"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                R$10,00
              </Typography>
              <Button
                color="primary"
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                Add to your bag
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box
              p={2}
              style={{
                background: theme.palette.background.paper,
                border: "3px solid #19381F",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography
                  ml={1}
                  color="primary"
                  variant="h5"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  style={{
                    fontFamily: "Staatliches",
                  }}
                >
                  Tomato
                </Typography>
                <IconButton>
                  <InfoIcon color="primary" />
                </IconButton>
              </Box>
              <Typography
                ml={1}
                color="primary"
                variant="subtitle1"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                R$10,00
              </Typography>
              <Button
                color="primary"
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                Add to your bag
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box
              p={2}
              style={{
                background: theme.palette.background.paper,
                border: "3px solid #19381F",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography
                  ml={1}
                  color="primary"
                  variant="h5"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  style={{
                    fontFamily: "Staatliches",
                  }}
                >
                  Tomato
                </Typography>
                <IconButton>
                  <InfoIcon color="primary" />
                </IconButton>
              </Box>
              <Typography
                ml={1}
                color="primary"
                variant="subtitle1"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                R$10,00
              </Typography>
              <Button
                color="primary"
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                Add to your bag
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box
              p={2}
              style={{
                background: theme.palette.background.paper,
                border: "3px solid #19381F",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography
                  ml={1}
                  color="primary"
                  variant="h5"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  style={{
                    fontFamily: "Staatliches",
                  }}
                >
                  Tomato
                </Typography>
                <IconButton>
                  <InfoIcon color="primary" />
                </IconButton>
              </Box>
              <Typography
                ml={1}
                color="primary"
                variant="subtitle1"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                R$10,00
              </Typography>
              <Button
                color="primary"
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                Add to your bag
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box
              p={2}
              style={{
                background: theme.palette.background.paper,
                border: "3px solid #19381F",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography
                  ml={1}
                  color="primary"
                  variant="h5"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  style={{
                    fontFamily: "Staatliches",
                  }}
                >
                  Tomato
                </Typography>
                <IconButton>
                  <InfoIcon color="primary" />
                </IconButton>
              </Box>
              <Typography
                ml={1}
                color="primary"
                variant="subtitle1"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                R$10,00
              </Typography>
              <Button
                color="primary"
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                Add to your bag
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box
              p={2}
              style={{
                background: theme.palette.background.paper,
                border: "3px solid #19381F",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography
                  ml={1}
                  color="primary"
                  variant="h5"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  style={{
                    fontFamily: "Staatliches",
                  }}
                >
                  Tomato
                </Typography>
                <IconButton>
                  <InfoIcon color="primary" />
                </IconButton>
              </Box>
              <Typography
                ml={1}
                color="primary"
                variant="subtitle1"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                R$10,00
              </Typography>
              <Button
                color="primary"
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                Add to your bag
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box
              p={2}
              style={{
                background: theme.palette.background.paper,
                border: "3px solid #19381F",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography
                  ml={1}
                  color="primary"
                  variant="h5"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  style={{
                    fontFamily: "Staatliches",
                  }}
                >
                  Tomato
                </Typography>
                <IconButton>
                  <InfoIcon color="primary" />
                </IconButton>
              </Box>
              <Typography
                ml={1}
                color="primary"
                variant="subtitle1"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                R$10,00
              </Typography>
              <Button
                color="primary"
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                Add to your bag
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box
              p={2}
              style={{
                background: theme.palette.background.paper,
                border: "3px solid #19381F",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography
                  ml={1}
                  color="primary"
                  variant="h5"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  style={{
                    fontFamily: "Staatliches",
                  }}
                >
                  Tomato
                </Typography>
                <IconButton>
                  <InfoIcon color="primary" />
                </IconButton>
              </Box>
              <Typography
                ml={1}
                color="primary"
                variant="subtitle1"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                R$10,00
              </Typography>
              <Button
                color="primary"
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                Add to your bag
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box
              p={2}
              style={{
                background: theme.palette.background.paper,
                border: "3px solid #19381F",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography
                  ml={1}
                  color="primary"
                  variant="h5"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  style={{
                    fontFamily: "Staatliches",
                  }}
                >
                  Tomato
                </Typography>
                <IconButton>
                  <InfoIcon color="primary" />
                </IconButton>
              </Box>
              <Typography
                ml={1}
                color="primary"
                variant="subtitle1"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                R$10,00
              </Typography>
              <Button
                color="primary"
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                Add to your bag
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box
              p={2}
              style={{
                background: theme.palette.background.paper,
                border: "3px solid #19381F",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography
                  ml={1}
                  color="primary"
                  variant="h5"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  style={{
                    fontFamily: "Staatliches",
                  }}
                >
                  Tomato
                </Typography>
                <IconButton>
                  <InfoIcon color="primary" />
                </IconButton>
              </Box>
              <Typography
                ml={1}
                color="primary"
                variant="subtitle1"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                R$10,00
              </Typography>
              <Button
                color="primary"
                style={{
                  fontFamily: "Saira Condensed",
                }}
              >
                Add to your bag
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
export default App;
