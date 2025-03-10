import { useFavoriteContext } from 'hooks/useFavoriteContext';
import styles from './Card.module.css';
import liked from './images/favorite.png';
import unliked from './images/favorite_outline.png';

export default function Card({id, title, cover}){
    const { checkFavorite, addFavorite } = useFavoriteContext();

    const icon = checkFavorite(id) ? liked : unliked;

    return (
        <div className={styles.container}>
            <img src={cover} alt={title} className={styles.cover} />
            <h2>{title}</h2>
            <img
                src={icon}
                onClick={()=> addFavorite({id, title, cover})}
                alt='Ícone de favoritar filme'
                className={styles.favorite}
            />

        </div>
    );
}