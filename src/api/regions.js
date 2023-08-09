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

export const getEachRegion = async (id) => {
  try {
    const res = await client.get(`regions/${id}`);

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const postRegion = async (region_id) => {
  try {
    const res = await client.post(`/scrap`, {
      region_id: region_id,
    });
  } catch (err) {
    console.log(err);
  }
};
