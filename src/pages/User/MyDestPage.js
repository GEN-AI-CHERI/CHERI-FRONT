import Header from "../../components/Result/Header";
import Content from "../../components/Result/Content";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetRecommend } from "../../api/recommend";

const MyDestPage = () => {
  const { recommend_id } = useParams();
  const [recommend, setRecommend] = useState({});

  const getSavedDest = async () => {
    const data = await GetRecommend(recommend_id);

    setRecommend(data);
  };

  const strToArr = (tagStr) => {
    if (tagStr) {
      const arr = tagStr.split(", ");

      return arr;
    } else return [];
  };

  useEffect(() => {
    getSavedDest();
  }, []);

  return (
    <>
      <Header
        isSaved={true}
        photo={recommend.region && recommend.region.photo}
      />
      <Content
        title={recommend.region && recommend.region.title}
        description={recommend.region && recommend.region.description}
        themes={strToArr(recommend.tag)}
        detail={recommend.region && recommend.region.detail}
      />
    </>
  );
};

export default MyDestPage;
