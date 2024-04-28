import axios from "axios";

const BACKEND_URL = "http://192.168.12.118:8080/self-help/action/";

export async function validateWrite(encodedImage) {
  let success = {
    percentageAccuracy: 0.64,
  };
  return Promise.resolve(success);

  const path = "/chat";
  const url = BACKEND_URL + path;

  // console.log(encodedImage);

  let response = await axios.post(url, {
    drawnImage: encodedImage,
  });

  console.log(response.data, response.status);
  success = {
    percentageAccuracy: response.percentageAccuracy,
  };
  console.log(response.percentageAccuracy);
  // return response.data;

  if (response.status === 200) {
    // return {
    //   data: response.data,
    // };
  } else {
    throw new Error(response.error);
  }
  // console.log("response ", response);
  // console.log(response.data, response.status);
  // return response;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(success);
    }, 2000);
  });
}

export async function validateAudio(encodedAudio, language) {
  let success = {
    percentageAccuracy: 0.64,
  };
  return Promise.resolve(success);

  const path = "/speak";
  const url = BACKEND_URL + path;

  // console.log(encodedImage);

  let response = await axios.post(url, {
    encodedAudio: encodedAudio,
    language,
  });

  console.log(response.data, response.status);

  return response.data;

  if (response.status === 200) {
    return {
      data: response.data,
    };
  } else {
    throw new Error(response.error);
  }
  // console.log("response ", response);
  // console.log(response.data, response.status);
  // return response;

  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve("success");
  //   }, 2000);r
  // });
}
