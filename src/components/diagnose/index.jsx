import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Button, Link } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 16,
    flexGrow: 1,
    border: 1,
    borderRadius: 8,
    borderColor: "#16B3AC",
    borderStyle: "solid",
    paddingTop: 8,
    paddingBottom: 8,
  },
  title: {
    fontSize: 14,
    textAlign: "left",
  },
}));

export default function Diagnose({ title, link }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
      </Container>
      <Container style={{ textAlign: "center", marginTop: 16 }}>
        <Link href={link}>
          <Button>
            <Typography
              style={{
                color: "#16B3AC",
                textTransform: "capitalize",
                fontSize: 12,
                fontWeight: "bold",
                alignItems: "center",
              }}
            >
              Periksa lebih lanjut
            </Typography>
            <ArrowForwardIosIcon
              style={{ color: "#16B3AC", fontSize: 12, marginLeft: 5 }}
            />
          </Button>
        </Link>
      </Container>
    </div>
  );
}
