import React from "react";
import { Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Header from "../components/header";
import DisagreeVector from "../assets/illustration/disagree-illus.png";

const useStyles = makeStyles(() => ({
  paragraph: {
    textAlign: "left",
    fontSize: 18,
    marginTop: 24,
    fontWeight: "bold",
    color: "#0F657C",
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
  paddingHorizontal40: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  buttonWrapper: {
    width: 300,
    textAlign: "right",
    marginTop: 80,
  },
}));

function Disagree() {
  const classes = useStyles();
  return (
    <div className="Disagree">
      <Header />
      <Container maxWidth="xs">
        <img src={DisagreeVector} alt={DisagreeVector} width="310" />
        <Container>
          <Typography
            className={`${classes.paragraph} ${classes.paddingHorizontal40}`}
          >
            Mohon maaf, tim TELESEHAT tidak dapat melanjutkan proses sesi
            konsultasi ini tanpa persetujuan Anda.
          </Typography>
        </Container>
        <Container className={classes.buttonWrapper}>
          <Link to="/agreement">
            <Button
              size="large"
              className={`buttonPrimary ${classes.buttonPadding}`}
            >
              <span className={classes.textButton}>Ulangi</span>
            </Button>
          </Link>
        </Container>
      </Container>
    </div>
  );
}

export default Disagree;
