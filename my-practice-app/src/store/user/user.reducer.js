export const initialState = { userName: null, cartItem: null };

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "user": {
      return { ...state, userName: payload };
    }
    default:
      return state;
  }
};
export default userReducer;
