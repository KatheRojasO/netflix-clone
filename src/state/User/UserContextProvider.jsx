// Node modules
import { createContext, useContext, useReducer } from "react";
import { getUserSession } from "../../scripts/userSessionHandler";

//Project Files
import UserReducer from "./UserReducer";

//Properties
const UserContext = createContext();

export function UserContextProvider({ children }) {
  //User from Cache.
  const cachedUser = getUserSession();

  //State
  const [user, dispatch] = useReducer(UserReducer, cachedUser);

  //Properties
  const values = { user, dispatch };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context)
    throw new Error(
      "useUser only works if the parent component is wrapped in <UserContext>"
    );

  return context;
}

export default UserContextProvider;