/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Button, Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Vector1 from "../assets/illustration/home-illus.png";
import KemenkesLogo from "../assets/govLogo/kemenkes.png";
import GermasLogo from "../assets/govLogo/germas.png";

const useStyles = makeStyles(() => ({
  paragraph: {
    padding: 25,
    fontSize: 18,
    fontWeight: 600,
  },
  textButton: {
    fontSize: 16,
    fontWeight: 400,
    textTransform: "capitalize",
  },
  buttonPadding: {
    paddingLeft: 39,
    paddingRight: 39,
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <div className="Home">
      <Header />
      <Container maxWidth="xs">
        <img src={Vector1} alt={Vector1} width="310" />
        <Container>
          <Typography className={classes.paragraph}>
            Anda atau anggota keluarga Anda merasa tidak enak
            badan?Konsultasikan keluhannya di
            <span style={{ color: "#0F657C" }}> TELESEHAT-Konsultasi</span>.
            Gratis!
          </Typography>
        </Container>
        <Link to="/agreement">
          <Button
            size="large"
            className={`buttonPrimary ${classes.buttonPadding}`}
          >
            <span className={classes.textButton}>Konsultasi Sekarang</span>
            <ArrowForwardIosIcon style={{ fontSize: 15 }} />
          </Button>
        </Link>
        <Typography style={{ marginTop: 103 }}>Didukung oleh :</Typography>
        <Grid container style={{ marginTop: 12 }} justify="center" spacing={2}>
          <Grid item>
            <img src={GermasLogo} alt={GermasLogo} />
          </Grid>
          <Grid item>
            <img src={KemenkesLogo} alt={KemenkesLogo} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
