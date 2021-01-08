const listQuest = {
  listQuestion: [
    { q: "apakah anda merasa demam?" },
    { q: "apakah anda mengalami sesak nafas?" },
    { q: "apakah anda mengalami flu?" },
  ],
};

const questionReducer = (state = { visible: "Test", listQuest }, action) => {
  switch (action.type) {
    case "TEST":
      return { ...state, visible: action.payload };
    default:
      return state;
  }
};

export default questionReducer;
