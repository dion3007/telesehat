import React from "react";
import {
  Container,
  Typography,
  SwipeableDrawer,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SlideIcon from "../../assets/top-border.png";

const useStyles = makeStyles(() => ({
  paragraph: {
    textAlign: "left",
    fontSize: 18,
    marginTop: 24,
    fontWeight: "bold",
    color: "#0F657C",
  },
}));

function BottomDrawer({ toggleDrawer, openDrawer }) {
  const classes = useStyles();
  return (
    <div className="BottomDrawer">
      <SwipeableDrawer
        anchor="bottom"
        open={openDrawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={10}
      >
        <Container style={{ textAlign: "center" }}>
          <img src={SlideIcon} width="40" alt={SlideIcon} />
          <Divider style={{ marginTop: 20, marginBottom: 20 }} />
          <Typography
            className={`${classes.paragraph}`}
            style={{ marginBottom: 8 }}
            variant="subtitle2"
          >
            Gejala awal COVID-19
          </Typography>
          <Typography variant="subtitle2" style={{ textAlign: "left" }}>
            Gejala yang paling umum:
            <ul>
              <li>demam</li>
              <li>batuk kering</li>
              <li>kelelahan</li>
            </ul>
            Gejala yang sedikit tidak umum:
            <ul>
              <li>rasa tidak nyaman dan nyeri</li>
              <li>nyeri tenggorokan</li>
              <li>diare</li>
              <li>konjungtivitis (mata merah)</li>
              <li>sakit kepala</li>
              <li>hilangnya indera perasa atau penciuman</li>
              <li>
                ruam pada kulit, atau perubahan warna pada jari tangan atau kaki
              </li>
            </ul>
            Gejala serius:
            <ul>
              <li>kesulitan bernafas atau sesak nafas</li>
              <li>nyeri dada atau rasa tertekan pada dada</li>
              <li>hilangnya kemampuan berbicara atau bergerak</li>
            </ul>
          </Typography>
        </Container>
      </SwipeableDrawer>
    </div>
  );
}

export default BottomDrawer;
