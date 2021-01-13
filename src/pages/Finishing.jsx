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
    paddingLeft: 55,
    paddingRight: 55,
    marginBottom: 24,
  },
  widthText: {
    width: 230,
    marginBottom: 10,
    padding: 8,
  },
  buttonWrapper: {
    width: 300,
    textAlign: "right",
    marginTop: 80,
  },
}));

function Finishing() {
  const classes = useStyles();
  const [positiveCase, setPositiveCase] = React.useState(true);

  return (
    <div className="Finishing">
      <Header />
      <img src={AgreedVector} alt={AgreedVector} width="320" />
      <Container maxWidth="xs">
        <Container>
          <Typography className={`${classes.paragraph} ${classes.widthText}`}>
            Terima kasih untuk kesediaan Anda menjawab pertanyaan kami.
          </Typography>
          <Typography className={`${classes.paragraph} ${classes.widthText}`}>
            {positiveCase
              ? "Kami akan mendampingi Anda dengan melakukan pengecekan rutin setiap hari selama Anda dalam masa isolasi/karantina melalui TELESEHAT-Konsultasi."
              : "Berikut hasil analisis dari tim TELESEHAT berdasarkan keluhan yang Anda sampaikan."}
          </Typography>
        </Container>
        <Container className={classes.buttonWrapper}>
          {positiveCase ? (
            <Button
              size="large"
              className={`buttonPrimary ${classes.buttonPadding}`}
              onClick={() => setPositiveCase(false)}
            >
              <span className={classes.textButton}>Selesai</span>
            </Button>
          ) : (
            <Link to="/">
              <Button
                size="large"
                className={`buttonPrimary ${classes.buttonPadding}`}
              >
                <span className={classes.textButton}>Lihat analisa</span>
              </Button>
            </Link>
          )}
        </Container>
      </Container>
    </div>
  );
}

export default Finishing;
