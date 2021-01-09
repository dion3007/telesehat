import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextWrapper from "../textwrapper";

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
}));

function FormDataProfile() {
  const classes = useStyles();
  const [gender, setGender] = useState(0);
  // eslint-disable-next-line no-console
  console.log(gender);
  return (
    <>
      <Container className={classes.paddingHorizontal40}>
        <TextWrapper title="Jenis Kelamin">
          <Grid container spacing={2}>
            <Grid item>
              <Button
                className={`buttonPrimaryOutlined ${classes.buttonPaddingForm}`}
                variant="outlined"
                onClick={() => setGender(0)}
              >
                Laki-Laki
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={`buttonPrimaryOutlined ${classes.buttonPaddingForm}`}
                variant="outlined"
                onClick={() => setGender(1)}
              >
                Perempuan
              </Button>
            </Grid>
          </Grid>
        </TextWrapper>
      </Container>
      <Container className={classes.paddingHorizontal40}>
        <TextWrapper title="Umur">
          <Grid container spacing={2}>
            <Grid className={classes.childGrid} item>
              <TextField
                className={classes.ageForm}
                id="years"
                variant="outlined"
                size="small"
                type="number"
                placeholder="00"
              />
              <Typography>tahun</Typography>
            </Grid>
            <Grid className={classes.childGrid} item>
              <TextField
                className={classes.ageForm}
                id="month"
                variant="outlined"
                size="small"
                type="number"
                placeholder="00"
              />
              <Typography>bulan</Typography>
            </Grid>
          </Grid>
        </TextWrapper>
      </Container>
      <Container className={classes.paddingHorizontal40}>
        <TextWrapper title="Nomor Whatsapp Aktif">
          <TextField
            id="whatsapp"
            variant="outlined"
            size="small"
            type="number"
            placeholder="082377728812"
            fullWidth
          />
        </TextWrapper>
      </Container>
    </>
  );
}

export default FormDataProfile;
