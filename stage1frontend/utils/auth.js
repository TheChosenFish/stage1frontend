export const baseUrl = "http://localhost:3000";

export function getToken() {
  return localStorage.getItem("jwt");
}

export function login({ email, password }) {
  //   return fetch(`${baseUrl}/signin`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ email, password }),
  //   })
  //     .catch(console.error)
  //     .then(checkResponse);
  return new Promise((resolve, reject) => {
    resolve({
      token: "fake token",
      user: { name: "John Smith", email: "JSmith@yahoo.com" },
    });
  });
}

export function signUp({ email, name, password }) {
  console.log(email, name, password);
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, name, password }),
  })
    .catch(console.error)
    .then(checkResponse);
}

export function getCurrentUser() {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
  })
    .catch(console.error)
    .then(checkResponse);
}
