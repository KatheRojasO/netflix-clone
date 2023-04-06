export function setUserSession(user) {
  localStorage.setItem("email", user.email);
  localStorage.setItem("id", user.id);
  localStorage.setItem("isAdmin", user.isAdmin);
}

export function getUserSession() {
  return localStorage.getItem("id")
    ? {
        email: localStorage.getItem("email"),
        id: localStorage.getItem("id"),
        isInstructor: localStorage.getItem("isAdmin"),
      }
    : null;
}

export function removeUserSession() {
  localStorage.clear();
}
