import axios from "axios";

// actions.js
export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";
export const SET_USER_DATA = "SET_USER_DATA";

export const loginUser = (userData) => {
  return {
    type: LOGIN_USER,
    payload: userData,
  };
};

export const registerUser = (userData) => {
  return {
    type: REGISTER_USER,
    payload: userData,
  };
};


// export const setUserData = (data) => {
//   let userData=data;
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(`${process.env.BASE_URL}/api/auth/me`, {
//         headers: {
//           cookie: cookie, // Pass the cookie in the headers
//         },
//       });

//        userData = response.data; // Assuming the response contains user data
//       dispatch({
//         type: SET_USER_DATA,
//         payload: userData,
//       });
//     } catch (error) {
//       // Handle error, e.g., dispatch an error action
//       console.error("Error fetching user data:", error);
//     }
//   };
// };
export const setUserData = (userData) => {
  localStorage.setItem("userData", JSON.stringify(userData));
  
  return {
    type: SET_USER_DATA,
    payload: userData,
  };
  
};





