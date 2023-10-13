// reducer.js
import { LOGIN_USER, REGISTER_USER, SET_USER_DATA } from "../actions/userAction";
// Retrieve userData from local storage\

 // Retrieve userData from local storage
let savedUserData = null;

if (typeof window !== "undefined") {
  const userDataString = localStorage.getItem("userData");

  if (userDataString !== null) {
    savedUserData = JSON.parse(userDataString);
  }
}

const initialState = {
  loggedIn: false,
  user: savedUserData || null,
};




const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
    case REGISTER_USER:
    case SET_USER_DATA:
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
