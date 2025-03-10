import Banner from 'components/Banner';
import styles from './Favorites.module.css';
import Title from 'components/Title';
import { useFavoriteContext } from 'hooks/useFavoriteContext';
import Card from 'components/Card';

export default function Favorites(){
    const { favorites } = useFavoriteContext();

    return (
        <>
            <Banner
                bannerUrl='favoritos'
            />
            <Title>
                <h1>Meus Favoritos</h1>
            </Title>

            <section className={styles.container}>
                {favorites.map(f => <Card
                    key={f.id}
                    id={f.id}
                    title={f.title}
                    cover={f.cover}
                />)}
            </section>
        </>
    );
}