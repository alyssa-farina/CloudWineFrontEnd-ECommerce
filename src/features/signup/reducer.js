const initialState = {
  currentUser: {},
  cart: {}
};

export default function signupReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return { ...state, currentUser: action.payload };
    case 'LOGOUT_USER':
      return { initialState, currentUser: {} };
    default:
      return state;
  }
}
