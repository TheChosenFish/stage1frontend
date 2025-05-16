export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

export const checkResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
};

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
  return new Promise((resolve, reject) => {
    resolve({
      token: "fake token",
      user: {
        name: "John Smith",
        email: "JSmith@yahoo.com",
        password: "booya567",
      },
    });
  });
}
//   return fetch(`${baseUrl}/signup`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email, name, password }),
//   })
//     .catch(console.error)
//     .then(checkResponse);
// }

export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    resolve({
      token: "fake token",
      user: { name: "John Smith", email: "JSmith@yahoo.com" },
    });
  });
}
//   return fetch(`${baseUrl}/users/me`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       authorization: `Bearer ${getToken()}`,
//     },
//   })
//     .catch(console.error)
//     .then(checkResponse);
// }
