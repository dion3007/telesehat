import React from "react";
import { Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Header from "../components/header";
import AgreedVector from "../assets/illustration/agreed-illus.png";

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

function Agreed() {
  const classes = useStyles();
  return (
    <div className="Agreed">
      <Header />
      <Container maxWidth="xs">
        <img src={AgreedVector} alt={AgreedVector} width="310" />
        <Container>
          <Typography
            className={`${classes.paragraph} ${classes.paddingHorizontal40}`}
          >
            Terima kasih untuk persetujuannya.
          </Typography>
        </Container>
        <Container>
          <Typography
            className={`${classes.paragraph} ${classes.paddingHorizontal40}`}
          >
            Selanjutnya tim TELESEHAT akan menanyakan informasi terkait data
            diri dan keluhan yang Anda rasakan.
          </Typography>
        </Container>
        <Container className={classes.buttonWrapper}>
          <Link to="/agreement">
            <Button
              size="large"
              className={`buttonPrimary ${classes.buttonPadding}`}
            >
              <span className={classes.textButton}>Lanjut</span>
            </Button>
          </Link>
        </Container>
      </Container>
    </div>
  );
}

export default Agreed;
