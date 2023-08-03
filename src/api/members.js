import client from "./client";

//회원가입
export const postSignUp = async (email, password) => {
  try {
    const res = await client.post("members/signup", {
      email: email,
      password: password,
    });
    console.log(res);

    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

//로그인
export const postSignIn = async (email, password) => {
  try {
    const res = await client.post("members/signin", {
      email: email,
      password: password,
    });

    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

//본인 정보 조회
export const getMyInfo = async () => {
  try {
    const res = await client.get("members/me");
    console.log(res);

    return res.data;
  } catch (err) {
    console.log(err);
  }
};
