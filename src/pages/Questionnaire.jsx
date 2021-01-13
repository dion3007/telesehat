import React from "react";
import Header from "../components/header";
import Question from "../components/question";

const data = [
  {
    label: "Sedang menjalani isolasi mandiri?",
  },
  {
    label: "Apakah mengalami demam?",
  },
  {
    label: "Apakah Sakit Kepala?",
  },
  {
    label: "Penciuman berkurang?",
  },
  {
    label: "Sakit Gigi?",
  },
];

function Questionnaire() {
  return (
    <>
      <Header />
      <Question data={data} />
    </>
  );
}

export default Questionnaire;
