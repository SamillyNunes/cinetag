import Banner from "components/Banner";
import Card from "components/Card";
import Footer from "components/Footer";
import Header from "components/Header";
import Title from "components/Title";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner
          bannerUrl="home"
        />
        <Title>
          <h1>Um lugar para guardar seus vídeos e filmes!</h1>
        </Title>
        <Card id="1" title="Gato amarelo" cover="https://cdn3.gnarususercontent.com.br/2802-react-praticando/img2.png" />
      </main>
      <Footer />
    </>
  );
}
