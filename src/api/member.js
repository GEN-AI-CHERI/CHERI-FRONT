import client from "./client";

export const postSignUp = async (email, password) => {
  try {
    const res = await client.post("members/signup", {
      email: email,
      password: password,
    });

    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const postSignIn = async (email, password) => {
  try {
    const res = await client.post("members/signin", {
      email: email,
      password: password,
    });

    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
