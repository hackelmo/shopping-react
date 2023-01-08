let initialState = {
  id: "",
  password: "",
  authenticate: false,
};

const authenticateReducer = (state = initialState, action) => {
  let { payload, type } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        id: payload.id,
        passowrd: payload.password,
        authenticate: true,
      };
    case "LOGOUT":
      return {
        ...state,
        authenticate: false,
      };
    default:
      return state;
  }
};

export default authenticateReducer;
