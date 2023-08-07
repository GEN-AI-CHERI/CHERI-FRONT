import Header from "../../components/Result/Header";
import Content from "../../components/Result/Content";

const MyDestPage = () => {
  const title = "title";
  const description = "description";
  const photo = "photo";

  return (
    <>
      <Header photo={photo} />
      <Content title={title} description={description} />
    </>
  );
};

export default MyDestPage;
