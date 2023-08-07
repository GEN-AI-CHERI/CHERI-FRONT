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
    console.log(res);

    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
