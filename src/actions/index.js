const increment = () => {
  return {
    type: "INCREMENT"
  };
};

const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

const signIn = () => {
  return {
    type: "SIGNIN"
  };
};

const signOut = () => {
  return {
    type: "SIGNOUT"
  };
};

export { increment, decrement, signIn, signOut };
