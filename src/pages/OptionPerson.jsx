import React from "react";
import { Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Header from "../components/header";

const useStyles = makeStyles(() => ({
  paragraph: {
    textAlign: "left",
    fontSize: 18,
    marginTop: 320,
    marginBottom: 10,
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
    marginBottom: 24,
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

function OptionPerson() {
  const classes = useStyles();
  return (
    <div className="OptionPerson">
      <Header />
      <Container maxWidth="xs">
        <Container>
          <Typography
            className={`${classes.paragraph} ${classes.paddingHorizontal40}`}
          >
            Untuk siapa konsultasi ini dilakukan?
          </Typography>
        </Container>

        <Container className={classes.buttonWrapper}>
          <Link to="/profile">
            <Button
              size="large"
              className={`buttonPrimary ${classes.buttonPadding}`}
            >
              <span className={classes.textButton}>Diri sendiri</span>
            </Button>
          </Link>
          <Link to="/profile">
            <Button
              size="large"
              className={`buttonPrimary ${classes.buttonPadding}`}
            >
              <span className={classes.textButton}>Orang lain</span>
            </Button>
          </Link>
        </Container>
      </Container>
    </div>
  );
}

export default OptionPerson;
