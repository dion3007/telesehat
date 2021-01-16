import React from "react";
import { Button, Container, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import TextWrapper from "../components/textwrapper";
import Header from "../components/header";

const useStyles = makeStyles(() => ({
  buttonPadding: {
    paddingLeft: 39,
    paddingRight: 39,
    marginBottom: 24,
  },
  buttonPaddingForm: {
    paddingLeft: 22,
    paddingRight: 22,
  },
  paddingHorizontal40: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  ageForm: {
    width: 64,
    marginRight: 8,
  },
  childGrid: {
    display: "flex",
    alignItems: "center",
  },
  paragraph: {
    textAlign: "left",
    fontSize: 18,
    marginTop: 55,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#0F657C",
  },
  cautionText: {
    fontSize: 12,
    fontStyle: "italic",
    textAlign: "left",
  },
  buttonWrapper: {
    width: 300,
    textAlign: "right",
    marginTop: 40,
  },
}));

function ProfileFull() {
  const classes = useStyles();
  return (
    <>
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
            Informasi ini untuk membantu tim
            <span style={{ fontWeight: 700 }}> Satgas COVID-19 </span>
            melakukan pendataan dan melakukan contact tracing dalam upaya
            memutus rantai penyebaran COVID-19.
          </Typography>
        </Container>
        <Container className={classes.paddingHorizontal40}>
          <TextWrapper title="Nama Lengkap">
            <TextField
              id="name"
              variant="outlined"
              size="small"
              type="text"
              placeholder="Masukkan nama lengkap..."
              fullWidth
            />
          </TextWrapper>
        </Container>
        <Container className={classes.paddingHorizontal40}>
          <TextWrapper title="Tempat Lahir">
            <TextField
              id="birthplace"
              variant="outlined"
              size="small"
              type="text"
              placeholder="Masukkan tempat lahir..."
              fullWidth
            />
          </TextWrapper>
        </Container>
        <Container className={classes.paddingHorizontal40}>
          <TextWrapper title="Tanggal Lahir">
            <TextField
              id="birthday"
              variant="outlined"
              size="small"
              type="text"
              placeholder="Contoh : 17/08/1990"
              fullWidth
            />
          </TextWrapper>
        </Container>
        <Container className={classes.paddingHorizontal40}>
          <TextWrapper title="Nomor KTP">
            <TextField
              id="idcard"
              variant="outlined"
              size="small"
              type="number"
              placeholder="Masukkan nomor KTP..."
              fullWidth
            />
          </TextWrapper>
        </Container>
        <Container className={classes.paddingHorizontal40}>
          <TextWrapper title="Nomor Kartu Keluarga">
            <TextField
              id="familyidcard"
              variant="outlined"
              size="small"
              type="number"
              placeholder="Masukkan nomor kartu keluarga..."
              fullWidth
            />
          </TextWrapper>
        </Container>
        <Container className={classes.buttonWrapper}>
          <Link to="/">
            <Button
              size="large"
              className={`buttonPrimary ${classes.buttonPadding}`}
            >
              <span className={classes.textButton}>Lanjut</span>
            </Button>
          </Link>
        </Container>
      </Container>
    </>
  );
}

export default ProfileFull;
