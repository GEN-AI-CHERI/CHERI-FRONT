import client from "./client";

// 여행지 추천 요청
export const PostRecommend = async (
  with_who,
  age,
  theme,
  begin_date,
  end_date
) => {
  try {
    const res = await client.post("recommend", {
      with_who: with_who,
      age: age,
      theme: theme,
      begin_date: begin_date,
      end_date: end_date,
    });

    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

//본인 정보 조회
export const GetRecommend = async (recommend_id) => {
  try {
    const res = await client.get(`recommend/${recommend_id}`);

    return res.data;
  } catch (err) {
    throw err;
  }
};
