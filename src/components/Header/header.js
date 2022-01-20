import * as React from "react";

import {
  AppBar,
  Box,
  Badge,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";

import LocalMallIcon from "@mui/icons-material/LocalMall";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="secondary"
        style={{
          boxShadow: "none",
          borderBottom: "3px solid #19381F  ",
        }}
      >
        <Toolbar>
          <Typography
            color="primary"
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{
              fontFamily: "Staatliches",
            }}
          >
            hortifruti
          </Typography>
          <Link to={`/bag`}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="primary"
            >
              <Badge badgeContent={4} color="error">
                <LocalMallIcon />
              </Badge>
            </IconButton>
          </Link>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="primary"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
