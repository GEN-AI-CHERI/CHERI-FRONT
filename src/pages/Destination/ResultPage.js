import Header from "../../components/Result/Header";
import Content from "../../components/Result/Content";

const ResultPage = () => {
  const storedData = JSON.parse(localStorage.getItem("desRes"));

  console.log(storedData);

  const region_id = storedData.region.region_id;
  const title = storedData.region.title;
  const description = storedData.region.description;
  const photo = storedData.region.photo;
  const begin_date = storedData.begin_date;
  const end_date = storedData.end_date;
  const themes = storedData.themes;
  const detail = storedData.region.detail;

  return (
    <>
      <Header photo={photo} />
      <Content
        key={region_id}
        title={title}
        description={description}
        begin_date={begin_date}
        end_date={end_date}
        themes={themes}
        detail={detail}
      />
    </>
  );
};

export default ResultPage;
