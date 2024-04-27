import { createContext, useState } from "react";

const defaultState = {
  isAuthenticated: false,
  userDetails: null,
};

export const AuthContext = createContext({
  authState: defaultState,
  validateCredentials: (userDetails) => {},
  resetState: () => {},
});

function AuthContextProvider({ children }) {
  const [authState, setAuthState] = useState(defaultState);

  function validateCredentials(userDetails) {
    const { userName, password } = userDetails;
    if (
      userName.toLowerCase() === "admin" &&
      password.toLowerCase() === "admin"
    ) {
      setAuthState((currentState) => {
        return {
          ...currentState,
          isAuthenticated: true,
          userDetails: { ...userDetails },
        };
      });
      return;
    }
  }

  function resetState() {
    setAuthState((currentState) => {
      return {
        ...currentState,
        isAuthenticated: true,
        userDetails: null,
      };
    });
  }

  const value = {
    authState,
    resetState: resetState,
    validateCredentials: validateCredentials,
  };

  console.log("value", value);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
