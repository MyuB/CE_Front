import axios from "axios";

export const ImgUploadReq = async (
  accessToken,
  refreshToken,
  userName,
  image
) => {
  try {
    const response = await axios.post(
      "/user_auth",
      {
        user_name: userName,
        img: image,
      },
      {
        headers: {
          access_token: accessToken,
          refresh_token: refreshToken,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
