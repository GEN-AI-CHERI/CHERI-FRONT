import client from "./client";

// 채팅 결과 조회(첫 번째)
export const PostChatroomsStart = async (
  age,
  theme,
  begin_date,
  end_date,
  region_id
) => {
  try {
    const res = await client.post("chatrooms/start", {
      gender: "",
      age: age,
      theme: theme,
      begin_date: begin_date,
      end_date: end_date,
      region_id: region_id,
    });
    console.log(res.data);

    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
