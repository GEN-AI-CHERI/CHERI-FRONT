import Header from "../../components/Result/Header";
import Content from "../../components/Result/Content";

const ResultPage = () => {
  const storedData = JSON.parse(localStorage.getItem("desRes"));

  const title = storedData.title;
  const description = storedData.description;
  const photo = storedData.photo;

  return (
    <>
      <Header photo={photo} />
      <Content title={title} description={description} />
    </>
  );
};

export default ResultPage;
