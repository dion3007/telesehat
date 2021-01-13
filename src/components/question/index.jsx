import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Button,
  Typography,
  MobileStepper,
  Zoom,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  progress: {
    width: "100%",
  },
  root: {
    padding: 0,
  },
  paragraph: {
    textAlign: "left",
    fontSize: 18,
    marginTop: 320,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#0F657C",
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
  buttonPadding: {
    paddingLeft: 50,
    paddingRight: 50,
    marginBottom: 24,
  },
}));

export default function Question({ data }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = data.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="progress"
        activeStep={activeStep}
        classes={{ progress: classes.progress, root: classes.root }}
      />
      <Container maxWidth="xs">
        <Zoom in style={{ transitionDelay: "400ms" }}>
          <Typography
            className={`${classes.paragraph} ${classes.paddingHorizontal40}`}
          >
            {data[activeStep].label}
          </Typography>
        </Zoom>
        <Container className={classes.buttonWrapper}>
          {activeStep === maxSteps - 1 ? (
            <Link to="/finish">
              <Button
                size="large"
                className={`buttonPrimary ${classes.buttonPadding}`}
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Ya
              </Button>
              <Button
                size="large"
                className={`buttonPrimary ${classes.buttonPadding}`}
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Tidak
              </Button>
            </Link>
          ) : (
            <>
              <Button
                size="large"
                className={`buttonPrimary ${classes.buttonPadding}`}
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Ya
              </Button>
              <Button
                size="large"
                className={`buttonPrimary ${classes.buttonPadding}`}
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Tidak
              </Button>
            </>
          )}
        </Container>
      </Container>
    </>
  );
}
