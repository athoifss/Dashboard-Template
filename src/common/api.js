import axios from "axios";
const baseUrl = "https://testing.workre.co";

function getTokens() {
  return new Promise(async (resolve, reject) => {
    let authToken = localStorage.getItem("authToken");
    // If no token found in storage , redirect to login page
    if (!authToken) {
      window.location.href = "/login";
      reject();
    } else {
      // Write logic to check for token expiry
      resolve({ authToken });
    }
  });
}

export const getRequest = async (path) => {
  let tokens = await getTokens();
  return axios.get(`${baseUrl}/${path}`, {
    headers: {
      Authorization: `Bearer ${tokens.authToken}`,
    },
  });
};

export const putRequest = async (path, putData) => {
  let tokens = await getTokens();
  return axios({
    method: "PUT",
    url: `${baseUrl}/${path}`,
    data: putData,
    headers: {
      Authorization: `Bearer ${tokens.authToken}`,
    },
  });
};
export const deleteRequest = async (path, delData) => {
  let tokens = await getTokens();
  return axios({
    method: "DELETE",
    url: `${baseUrl}/${path}`,
    data: delData,
    headers: {
      Authorization: `Bearer ${tokens.authToken}`,
    },
  });
};
export const postRequest = async (path, postData) => {
  let headers;
  //Exclude token for certain requests
  if (path !== "login" && path !== "logout") {
    let tokens = await getTokens();
    headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokens.authToken}`,
    };
  } else {
    headers = {
      "Content-Type": "application/json",
    };
  }
  return axios({
    method: "POST",
    url: `${baseUrl}/${path}`,
    data: postData,
    headers: headers,
  });
};

// Get request for when response is file(image)
export const getImage = async (path) => {
  let tokens = await getTokens();
  return axios.get(`${baseUrl}/${path}`, {
    responseType: "arraybuffer",
    headers: {
      Authorization: `Bearer ${tokens.authToken}`,
    },
  });
};

// For multiple requests at the same time
export const multiGetRequest = async (arrayUrl) => {
  let arr = [];
  let tokens = await getTokens();

  arrayUrl.forEach((item) => {
    arr.push(
      axios.get(`${baseUrl}/${item}`, {
        headers: {
          Authorization: `Bearer ${tokens.authToken}`,
        },
      })
    );
  });
  return axios.all(arr);
};
