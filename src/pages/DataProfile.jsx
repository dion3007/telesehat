import React, { useState } from "react";
import { Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Header from "../components/header";
import FormDataProfile from "../components/formdataprofile";
import FormDataAddress from "../components/formdataaddress";

const useStyles = makeStyles(() => ({
  paragraph: {
    textAlign: "left",
    fontSize: 18,
    marginTop: 55,
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
  cautionText: {
    fontSize: 12,
    fontStyle: "italic",
    textAlign: "left",
  },
  paddingHorizontal40: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  buttonWrapper: {
    width: 300,
    textAlign: "right",
    marginTop: 40,
  },
}));

function DataProfile() {
  const classes = useStyles();
  const [initialPage, setInitialPage] = useState(true);
  return (
    <div className="DataProfile">
      <Header />
      <Container maxWidth="xs">
        <Container>
          <Typography
            className={`${classes.paragraph} ${classes.paddingHorizontal40}`}
            variant="h4"
          >
            Silakan lengkapi informasi berikut ini :
          </Typography>
        </Container>
        <Container>
          <Typography
            className={`${classes.cautionText} ${classes.paddingHorizontal40}`}
            variant="h4"
          >
            Informasi ini akan membantu tim TELESEHAT memberikan pertanyaan dan
            rekomendasi faskes (jika dibutuhkan) yang sesuai bagi Anda.
          </Typography>
        </Container>
        {initialPage ? <FormDataProfile /> : <FormDataAddress />}
        <Container className={classes.buttonWrapper}>
          {initialPage ? (
            <Button
              size="large"
              className={`buttonPrimary ${classes.buttonPadding}`}
              onClick={() => setInitialPage(false)}
            >
              <span className={classes.textButton}>Lanjut</span>
            </Button>
          ) : (
            <Link to="/agreement/agreed">
              <Button
                size="large"
                className={`buttonPrimary ${classes.buttonPadding}`}
              >
                <span className={classes.textButton}>Lanjut</span>
              </Button>
            </Link>
          )}
        </Container>
      </Container>
    </div>
  );
}

export default DataProfile;
