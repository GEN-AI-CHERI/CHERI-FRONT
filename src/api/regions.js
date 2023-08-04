import client from "./client";

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
