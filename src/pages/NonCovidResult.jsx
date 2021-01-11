import React from "react";
import { Container, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/header";
import TextWrapper from "../components/textwrapper";
import Diagnose from "../components/diagnose";

const useStyles = makeStyles(() => ({
  paragraph: {
    textAlign: "left",
    fontSize: 12,
    marginTop: 32,
    fontWeight: "bold",
    color: "#000000",
  },
  widthText: {
    width: 230,
    marginBottom: 10,
    padding: 8,
  },
}));

const diagnose = [
  {
    title: "Bercak disertai demam",
    link:
      "https://www.alodokter.com/bercak-merah-pada-kulit-ini-penyebab-dan-cara-mengatasinya",
  },
  {
    title: "Bercak dan bintik",
    link:
      "https://www.alodokter.com/bercak-merah-pada-kulit-ini-penyebab-dan-cara-mengatasinya",
  },
];

function NonCovidResult() {
  const classes = useStyles();
  return (
    <div className="NonCovidResult">
      <Header />
      <Container maxWidth="xs">
        <container>
          <TextWrapper title="Keluhan yang dirasakan" center>
            <TextField
              id="symptoms"
              variant="outlined"
              size="small"
              type="text"
              value="Bercak"
              fullWidth
            />
          </TextWrapper>
        </container>
        <Container>
          <Typography className={`${classes.paragraph} ${classes.widthText}`}>
            2 kemungkinan ditemukan berdasarkan usia, jenis kelamin dan keluhan
            :
          </Typography>
        </Container>
        <Container>
          {diagnose.map((item) => (
            <Diagnose title={item.title} link={item.link} />
          ))}
        </Container>
      </Container>
    </div>
  );
}

export default NonCovidResult;
