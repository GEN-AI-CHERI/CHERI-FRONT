import client from "./client";

// 여행지 데이터 불러오기
export const getRegions = async () => {
  try {
    const res = await client.get("regions");

    return res.data;
  } catch (err) {
    console.log(err);
  }
};
