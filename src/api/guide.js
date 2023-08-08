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

// 가이드 상세 페이지
export const GetGuideDetail = async (guide_id) => {
  try {
    const res = await client.get(`guides/${guide_id}`, {
      guide_id: guide_id,
    });
    console.log(res.data);

    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// 지역별 가이드 조회
export const GetGuidesByRegion = async (region_id) => {
  try {
    const res = await client.get(`guides/${region_id}`, {
      region_id: region_id,
    });
    console.log(res.data);

    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
