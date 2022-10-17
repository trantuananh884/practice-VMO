import { initialState } from "../user/user.reducer";

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "cart": {
      return { ...state, cartItem: payload };
    }
    default:
      return state;
  }
};
export default cartReducer;
