function getToken() {
  return JSON.parse(localStorage.getItem("fakeTkn"));
}

export { getToken };
