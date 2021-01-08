import React, { useState } from "react";
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
    marginTop: 80,
  },
}));

function ConsentAgreement() {
  const classes = useStyles();
  const [disagreeDisplay, setDisagreeDisplay] = useState(true);
  return (
    <div className="ConsentAgreement">
      <Header />
      <Container maxWidth="xs">
        <Container>
          <Typography
            className={`${classes.paragraph} ${classes.paddingHorizontal40}`}
          >
            {disagreeDisplay
              ? "Data yang Anda masukkan akan direkam dan dipelajari oleh tim TELESEHAT untuk meningkatkan akurasi hasil prediksi diagnosa."
              : "Tim TELESEHAT memerlukan persetujuan Anda untuk dapat memberikan hasil prediksi diagnosa berdasarkan keluhan yang Anda berikan."}
          </Typography>
        </Container>
        {disagreeDisplay && (
          <Container>
            <Typography
              className={`${classes.cautionText} ${classes.paddingHorizontal40}`}
            >
              Kami menjamin kerahasiaan data pribadi Anda dan tidak akan
              menggunakannya untuk keperluan lain.
            </Typography>
          </Container>
        )}

        <Container className={classes.buttonWrapper}>
          <Link to="/agreement/agreed">
            <Button
              size="large"
              className={`buttonPrimary ${classes.buttonPadding}`}
            >
              <span className={classes.textButton}>Setuju</span>
            </Button>
          </Link>
          {disagreeDisplay ? (
            <Button
              size="large"
              className={`buttonPrimary ${classes.buttonPadding}`}
              onClick={() => setDisagreeDisplay(false)}
            >
              <span className={classes.textButton}>Tidak Setuju</span>
            </Button>
          ) : (
            <Link to="/agreement/disagree">
              <Button
                size="large"
                className={`buttonPrimary ${classes.buttonPadding}`}
              >
                <span className={classes.textButton}>Tidak Setuju</span>
              </Button>
            </Link>
          )}
        </Container>
      </Container>
    </div>
  );
}

export default ConsentAgreement;
