import React, { useState } from "react";
import { Container, TextField, MenuItem } from "@material-ui/core";
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
  icon: {
    color: "white",
  },
  root: {
    textAlign: "left",
  },
}));

const address = [
  {
    value: "Dummy1",
    label: "London",
  },
  {
    value: "Dummy2",
    label: "Perth",
  },
  {
    value: "Dummy3",
    label: "Jakarta",
  },
  {
    value: "Dummy4",
    label: "Bekasi",
  },
];

function FormDataAddress() {
  const classes = useStyles();
  const [addressState, setAddressState] = useState("Dummy1");

  const handleChange = (event) => {
    setAddressState(event.target.value);
  };
  return (
    <>
      <Container className={classes.paddingHorizontal40}>
        <TextWrapper title="Provinsi Anda Tinggal">
          <TextField
            id="province"
            select
            variant="outlined"
            value={addressState}
            className={`${classes.icon} ${classes.root}`}
            onChange={handleChange}
            fullWidth
          >
            {address.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </TextWrapper>
      </Container>
      <Container className={classes.paddingHorizontal40}>
        <TextWrapper title="Kota/Kabupaten Anda Tinggal">
          <TextField
            id="city"
            select
            variant="outlined"
            value={addressState}
            className={`${classes.icon} ${classes.root}`}
            onChange={handleChange}
            fullWidth
          >
            {address.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </TextWrapper>
      </Container>
      <Container className={classes.paddingHorizontal40}>
        <TextWrapper title="Kecamatan Anda Tinggal">
          <TextField
            id="district"
            select
            variant="outlined"
            value={addressState}
            className={`${classes.icon} ${classes.root}`}
            onChange={handleChange}
            fullWidth
          >
            {address.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </TextWrapper>
      </Container>
      <Container className={classes.paddingHorizontal40}>
        <TextWrapper title="Kelurahan Anda Tinggal">
          <TextField
            id="state"
            select
            variant="outlined"
            value={addressState}
            className={`${classes.icon} ${classes.root}`}
            onChange={handleChange}
            fullWidth
          >
            {address.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </TextWrapper>
      </Container>
    </>
  );
}

export default FormDataAddress;
