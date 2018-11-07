// import { push } from "react-router-redux";
// import axios from "axios";
// import store from "store";
// import { signInSuccess } from "ducks/auth";
// import { baseURL } from "config";

// export const fetchUserAuth = async () => {
//   const token = await localStorage.getItem("tktoken");

//   if (token) {
//     try {
//       const { data } = await axios({
//         method: "get",
//         url: "/api/check-token",
//         baseURL,
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: token
//         }
//       });

//       store.dispatch(signInSuccess(data));

//       return true;
//     } catch (error) {
//       // console.log(error);
//       // localStorage.removeItem("tktoken");

//       return false;
//     }
//   } else {
//     return false;
//   }
// };
