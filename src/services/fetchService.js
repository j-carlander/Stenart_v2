import sessionService from "./sessionService";

/* Helper function */
function fetchHelper(url, method, body) {
  const fetchOptions = {
    method,
    headers: { "Content-Type": "application/json" },
  };

  if (method.toUpperCase() !== "GET") {
    fetchOptions.body = JSON.stringify(body);
  }

  const token = sessionService.getToken();

  if (token !== null) {
    fetchOptions.headers.authorization = `Bearer ${token}`;
  }

  return fetch("/api" + url, fetchOptions);
}

/* GET */

async function getExhibitions() {
  const res = await fetchHelper("/exhibitions", "GET");
  return await res.json();
}

/* Admin, POST */

async function postExhibit(exhibit) {
  const response = await fetchHelper("/admin/exhibit", "POST", exhibit);
  return await response.json();
}

async function postImage(image) {
  const response = await fetchHelper("/admin/image", "POST", image);
  return response;
}

async function login(credentials) {
  const response = await fetchHelper("/admin/login", "POST", credentials);
  return await response.json();
}

/* Export services */
const fetchService = {
  postExhibit,
  getExhibitions,
  postImage,
  login,
};

export default fetchService;
