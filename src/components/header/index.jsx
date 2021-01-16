import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-telesehatkonsultasi.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBarStyle: {
    backgroundColor: "#ffffff",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBarStyle} position="static">
        <Toolbar>
          <Link to="/">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="primary"
              aria-label="menu"
            >
              <ArrowBackIosIcon fontSize="small" />
              <Typography style={{ color: "#000", fontSize: 12 }}>
                Kembali
              </Typography>
            </IconButton>
          </Link>
          <div className={classes.title}>
            <img src={Logo} alt={Logo} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
