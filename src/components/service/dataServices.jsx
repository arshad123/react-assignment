//Get
export function getUser() {
  const userData = localStorage.getItem("user");
  if (userData) {
    return JSON.parse(userData);
  } else {
    return {
      name: "",
      mobile: "",
      email: "",
      password: "",
      username: "",
    };
  }
}

//Set
export function setUser(data) {
  localStorage.setItem("user", JSON.stringify(data));
  return true;
}

export function logOut() {
  const userData = getUser();
  userData.isLogedIn = false;
  localStorage.setItem("user", JSON.stringify(userData));
  return true;
}

//Set
export function loginCheck(data) {
  const userData = getUser();
  if (
    userData.password === data.password &&
    userData.username === data.username
  ) {
    return true;
  } else {
    return false;
  }
}
