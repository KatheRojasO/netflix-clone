export function setUserSession(user) {
  localStorage.setItem("email", user.email);
  localStorage.setItem("id", user.id);
  localStorage.setItem("isInstructor", user.isInstructor);
  localStorage.setItem("name", user.name);
}

export function getUserSession() {
  return localStorage.getItem("id")
    ? {
        email: localStorage.getItem("email"),
        id: localStorage.getItem("id"),
        isInstructor: localStorage.getItem("isInstructor"),
        name: localStorage.getItem("name"),
      }
    : null;
}

export function removeUserSession() {
  localStorage.clear();
}
