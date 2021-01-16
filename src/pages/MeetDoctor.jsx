import React from "react";
import { Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/header";
import DiagnoseBox from "../components/diagnosebox";

const useStyles = makeStyles(() => ({
  diagnose: {
    marginTop: 24,
    textAlign: "center",
    color: "#0F657C",
    fontWeight: "500",
  },
  titleCenter: {
    marginTop: 24,
    fontSize: 12,
    textAlign: "center",
  },
  textButton: {
    fontSize: 16,
    fontWeight: 400,
    textTransform: "capitalize",
  },
  buttonPadding: {
    paddingLeft: 55,
    paddingRight: 55,
    marginTop: 24,
  },
}));

function MeetDoctor() {
  const classes = useStyles();
  return (
    <div className="MeetDoctor">
      <Header />
      <Container maxWidth="xs">
        <Container>
          <Typography variant="h6" className={classes.titleCenter}>
            Diagnosa penyakit berdasarkan analisa :
          </Typography>
        </Container>
        <Container>
          <Typography variant="h5" className={classes.diagnose}>
            Penyakit akibat obat-obatan tertentu
          </Typography>
        </Container>
        <Container>
          <Typography variant="h6" className={classes.titleCenter}>
            Rencana Tindakan yang perlu dilakukan :
          </Typography>
        </Container>
        <Container>
          <DiagnoseBox title="Pasien dengan hasil diagnosa serupa biasanya tidak memerlukan pemeriksaan langsung oleh dokter (dapat ditangani sendiri)." />
          <Button
            size="large"
            className={`buttonPrimary ${classes.buttonPadding}`}
          >
            <span className={classes.textButton}>Selesai</span>
          </Button>
        </Container>
      </Container>
    </div>
  );
}

export default MeetDoctor;
