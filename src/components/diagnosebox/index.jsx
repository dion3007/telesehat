import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Divider,
  Grid,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 16,
    flexGrow: 1,
    border: 1,
    borderRadius: 8,
    borderColor: "#E7E7E7",
    borderStyle: "solid",
    paddingTop: 8,
    paddingBottom: 8,
  },
  title: {
    fontSize: 13,
    textAlign: "center",
    color: "#0F657C",
    marginBottom: 16,
  },
  titleCenter: {
    marginTop: 3,
    fontSize: 13,
    textAlign: "center",
  },
  cautionText: {
    marginTop: 16,
    fontSize: 12,
    fontStyle: "italic",
    textAlign: "left",
  },
}));

export default function DiagnoseBox({ title }) {
  const classes = useStyles();

  return (
    <Container style={{ textAlign: "center", marginTop: 16 }}>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Divider />
          <Grid
            container
            justify="center"
            style={{ alignSelf: "center", marginTop: 16 }}
          >
            <Grid item>
              <InfoIcon fontSize="small" style={{ color: "#0F657C" }} />
            </Grid>
            <Grid item>
              <Typography className={classes.title}>
                Informasi penanganan sendiri :
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="h6" className={classes.titleCenter}>
            Obati demam dengan parasetamol, kompres air hangat, dan tetap minum
            paling tidak 1 liter per hari. Jangan menggaruk bercak air karena
            dapat membekas.
          </Typography>
          <Divider />
          <Typography className={classes.cautionText}>
            Jika kondisi kesehatan memburuk atau ada keluhan lain yang dirasakan
            dalam 2-3 hari ke depan, segera konsultasikan dengan dokter pada
            fasilitas kesehatan terdekat.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
