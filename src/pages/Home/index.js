import styles from "./Home.module.css";

import Banner from "components/Banner";
import Card from "components/Card";
import Title from "components/Title";
import movies from "json/db.json";

export default function Home() {
  return (
    <>
      <main>
        <Banner bannerUrl="home" />
        <Title>
          <h1>Um lugar para guardar seus vídeos e filmes!</h1>
        </Title>
        <section className={styles.container}>
          {movies.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              title={movie.titulo}
              cover={movie.capa}
            />
          ))}
        </section>
      </main>
    </>
  );
}
