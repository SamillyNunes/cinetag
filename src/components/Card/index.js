import { useFavoriteContext } from 'hooks/useFavoriteContext';
import styles from './Card.module.css';
import liked from './images/favorite.png';
import unliked from './images/favorite_outline.png';

export default function Card({id, title, cover}){
    const { favorites, addFavorite } = useFavoriteContext();

    return (
        <div className={styles.container}>
            <img src={cover} alt={title} className={styles.cover} />
            <h2>{title}</h2>
            <img
                src={liked}
                onClick={()=> addFavorite({id, title, cover})}
                alt='Ícone de favoritar filme'
                className={styles.favorite}
            />

        </div>
    );
}