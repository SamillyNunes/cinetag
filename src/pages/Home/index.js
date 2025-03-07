import Banner from "components/Banner";
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
      </main>
      <Footer />
    </>
  );
}
