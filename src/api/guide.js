import client from "./client";

// 가이드 리스트 요청
export const GetGuides = async () => {
  try {
    const res = await client.get("guides");
    console.log(res.data);

    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
