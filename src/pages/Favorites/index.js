import Banner from 'components/Banner';
import styles from './Favorites.module.css';
import Title from 'components/Title';

export default function Favorites(){
    return (
        <>
            <Banner
                bannerUrl='favoritos'
            />
            <Title>
                <h1>Meus Favoritos</h1>
            </Title>

            <section className={styles.container}>
                {/* aqui vao os cards... */}
            </section>
        </>
    );
}