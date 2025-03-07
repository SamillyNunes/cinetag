import Banner from "components/Banner";
import Footer from "components/Footer";
import Header from "components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner
          bannerUrl="home"
        />
      </main>
      <Footer />
    </>
  );
}
