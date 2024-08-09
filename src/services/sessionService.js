function getToken() {
  return sessionStorage.getItem("TOKEN");
}

function setToken(token) {
  sessionStorage.setItem("TOKEN", token);
}

function clearSession() {
  sessionStorage.clear();
}

export default { getToken, setToken, clearSession };
