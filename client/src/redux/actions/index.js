export const save_user = (user) => {
  user;
  return {
    type: "SAVE_USER",
    payload: user,
  };
};

export const clear_user = () => {
  return {
    type: "CLEAR_USER",
  };
};
