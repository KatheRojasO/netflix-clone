export default function UserReducer(state, action) {
    switch (action.type) {
      case "initialise":
        return setUser(action);
      case "remove":
          return removeUser(action);
    default:
      throw new Error("Unhandled action:", action.type);
    }
  }
  
  function setUser(action) {
    const user = action.payload;
    return user;
  }

  function removeUser(action) {
    return null;
  }