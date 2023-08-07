import client from "./client";

// 채팅 결과 요청(첫 번째)
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

// 채팅 결과 요청(이후)
export const PostChats = async (prompt, room_id) => {
  try {
    const res = await client.post("chats", {
      prompt: prompt,
      room_id: room_id,
    });
    console.log(res.data);
    // 리턴 꼭 하기...^^
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

//채팅 내역 get
export const GetMyChat = async (room_id) => {
  try {
    const res = await client.get(`chatrooms/${room_id}`);

    return res.data;
  } catch (err) {
    throw err;
  }
};
