import produce from "immer";

// const sampleData = {
//   id: "1",
//   email: "abc@clone.com",
//   name: "최초",
//   inCart: [],
// };

export const initialState = {
  isLoggedIn: false,
  logInLoading: false,
  logInError: false,
  logOutLoading: false,
  logOutError: false,
  isSignUpDone: false,
  signUpLoading: false,
  signUpError: false,
  user: null,
  productsInCart: 0,
};

export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILED = "SIGN_UP_FAILED";
export const LOG_IN = "LOG_IN";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILED = "LOG_IN_FAILED";
export const LOG_OUT = "LOG_OUT";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILED = "LOG_OUT_FAILED";

export const signUp = (data) => {
  return {
    type: SIGN_UP,
    data,
  };
};

export const signUpSuccess = () => {
  return {
    type: SIGN_UP_SUCCESS,
  };
};

export const signUpFailed = (error) => {
  return {
    type: SIGN_UP_FAILED,
    error: error,
  };
};

export const logIn = (data) => {
  return {
    type: LOG_IN,
    data,
  };
};

export const logInSuccess = () => {
  return {
    type: LOG_IN_SUCCESS,
  };
};

export const logInFailed = () => {
  return {
    type: LOG_IN_FAILED,
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};

export const logOutSuccess = () => {
  return {
    type: LOG_OUT_SUCCESS,
  };
};

export const logOutFailed = () => {
  return {
    type: LOG_OUT_FAILED,
  };
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    // console.log('-------------------------- action.type: ', action.type);
    switch (action.type) {
      case SIGN_UP: {
        draft.signUpLoading = true;
        draft.signUpData = action.data;
        break;
      }
      case SIGN_UP_SUCCESS: {
        draft.signUpLoading = false;
        draft.isSignUpDone = true;
        break;
      }
      case SIGN_UP_FAILED: {
        draft.signUpLoading = false;
        draft.isSignUpDone = false;
        draft.signUpError = action.error;
        break;
      }
      case LOG_IN: {
        draft.logInLoading = true;
        draft.logInData = action.data;
        draft.logInError = null;
        break;
      }
      case LOG_IN_SUCCESS: {
        draft.user = action.data;
        draft.logInLoading = false;
        draft.isLoggedIn = true;
        break;
      }
      case LOG_IN_FAILED: {
        draft.logInLoading = false;
        draft.isLoggedIn = false;
        draft.logInError = action.error;
        break;
      }
      case LOG_OUT: {
        draft.logOutLoading = true;
        draft.logOutError = null;
        break;
      }
      case LOG_OUT_SUCCESS: {
        draft.user = null;
        draft.logOutLoading = false;
        draft.isLoggedIn = false;
        break;
      }
      case LOG_OUT_FAILED: {
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      }
      default:
        break;
    }
  });
export default reducer;
