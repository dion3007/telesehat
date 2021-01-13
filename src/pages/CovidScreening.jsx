import React from "react";
import { Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Header from "../components/header";
import BottomDrawer from "../components/bottomdrawer";
import ScreeningVector from "../assets/illustration/screening-illus.png";

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

function CovidScreening() {
  const classes = useStyles();
  const [openDrawer, setDrawerStat] = React.useState(false);
  const [positiveCase, setPositiveCase] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerStat(open);
  };
  return (
    <div className="CovidScreening">
      <Header />
      <img src={ScreeningVector} alt={ScreeningVector} width="320" />
      <Container maxWidth="xs">
        <Container>
          <Typography className={`${classes.paragraph} ${classes.widthText}`}>
            {!positiveCase
              ? " Apakah keluhan utama yang Anda rasakan saat ini seperti gejala awal COVID-19?"
              : "Apakah Anda sudah melakukan SWAB/PCR Test dan terkonfirmasi bahwa Anda terinfeksi COVID-19?"}
          </Typography>
        </Container>
        {!positiveCase && (
          <Container style={{ textAlign: "left" }}>
            <Button onClick={toggleDrawer(true)}>
              <Typography
                style={{
                  fontStyle: "italic",
                  color: "#0F657C",
                  textTransform: "capitalize",
                  fontSize: 12,
                  alignItems: "center",
                }}
              >
                Pelajari gejala awal COVID-19 disini
              </Typography>
              <ArrowForwardIosIcon
                style={{ color: "#0F657C", fontSize: 12, marginLeft: 5 }}
              />
            </Button>
          </Container>
        )}
        <Container className={classes.buttonWrapper}>
          {!positiveCase ? (
            <Button
              size="large"
              className={`buttonPrimary ${classes.buttonPadding}`}
              onClick={() => setPositiveCase(true)}
            >
              <span className={classes.textButton}>Ya</span>
            </Button>
          ) : (
            <Link to="/questionnaire">
              <Button
                size="large"
                className={`buttonPrimary ${classes.buttonPadding}`}
              >
                <span className={classes.textButton}>Ya</span>
              </Button>
            </Link>
          )}
          <Link to={!positiveCase ? "/screening/non-covid" : "/questionnaire"}>
            <Button
              size="large"
              className={`buttonPrimary ${classes.buttonPadding}`}
            >
              <span className={classes.textButton}>Tidak</span>
            </Button>
          </Link>
        </Container>
        <BottomDrawer toggleDrawer={toggleDrawer} openDrawer={openDrawer} />
      </Container>
    </div>
  );
}

export default CovidScreening;
