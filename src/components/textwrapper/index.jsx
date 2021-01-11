import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 16,
    flexGrow: 1,
  },
  title: {
    fontSize: 12,
    textAlign: "left",
  },
  titleCenter: {
    fontSize: 12,
    textAlign: "center",
  },
  childMargin: {
    marginTop: 8,
  },
}));

export default function TextWrapper({ title, children, center }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        {center ? (
          <Typography variant="h6" className={classes.titleCenter}>
            {title}
          </Typography>
        ) : (
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        )}
        <div className={classes.childMargin}>{children}</div>
      </Container>
    </div>
  );
}
