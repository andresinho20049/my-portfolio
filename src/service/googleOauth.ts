"use server";

import * as google from "googleapis";
const OAuth2 = google.Auth.OAuth2Client;

export const getGoogleAccessToken = async () => {
  const oauth2Client = new OAuth2(
    process.env.GCP_CLIENT_ID,
    process.env.GCP_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    access_token: process.env.GCP_ACCESS_TOKEN,
    refresh_token: process.env.GCP_REFRESH_TOKEN,
    scope: "https://mail.google.com/",
  });

  //   const accessToken = (await oauth2Client.getAccessToken()).token;

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        console.error("*ERR: ", err);
        console.error("*ERR_MESSAGE: ", err?.message);
        if (
          err?.message === "invalid_grant"
        ) {
          console.log("Refresh Access Token");

          const res = oauth2Client.refreshAccessToken();
          res.then(refreshRes => {
            oauth2Client.setCredentials(refreshRes.credentials);
            // return refreshRes.credentials.access_token;
            resolve(refreshRes.credentials.access_token)
          })
        }
        reject(err);
      }
      resolve(token);
    });
  });

  if (typeof accessToken === "string") {
    return accessToken;
  } else {
    throw new Error("Google getAcessToken failed!");
  }
};
