const intialState = {
  // user: {
  //   username: "Khan",
  //   loggedDate: new Date().toLocaleString(),
  //   password: "123",
  // },
  user: null,
};

const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case "SAVE_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "CLEAR_USER":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
