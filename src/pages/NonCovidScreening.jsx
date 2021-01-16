import React from "react";
import {
  Container,
  Typography,
  TextField,
  Grid,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import { Link } from "react-router-dom";
import Header from "../components/header";
import ScreeningVector from "../assets/illustration/screening-illus.svg";

const useStyles = makeStyles(() => ({
  paragraph: {
    textAlign: "left",
    fontSize: 18,
    marginTop: 10,
    fontWeight: "bold",
    color: "#0F657C",
  },
  widthText: {
    width: 230,
    marginBottom: 10,
    padding: 8,
  },
  bottomComponent: {
    marginTop: 196,
  },
}));

function NonCovidScreening() {
  const classes = useStyles();
  return (
    <div className="NonCovidScreening">
      <Header />
      <img src={ScreeningVector} alt={ScreeningVector} width="320" />
      <Container maxWidth="xs">
        <Container>
          <Typography className={`${classes.paragraph} ${classes.widthText}`}>
            Apakah keluhan utama yang Anda rasakan saat ini?
          </Typography>
        </Container>
        <Container className={classes.bottomComponent}>
          <Grid container>
            <Grid item xs={10}>
              <TextField
                id="symptoms"
                variant="outlined"
                size="small"
                type="text"
                placeholder="Misal: Sakit tenggorokan"
                fullWidth
              />
            </Grid>
            <Grid item xs={2}>
              <Link to="/result/non-covid">
                <IconButton style={{ backgroundColor: "#16B3AC" }}>
                  <SendIcon fontSize="small" style={{ color: "#fff" }} />
                </IconButton>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}

export default NonCovidScreening;
