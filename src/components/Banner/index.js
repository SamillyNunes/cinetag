import styles from './Banner.module.css';

export default function Banner({bannerUrl}){
    return (
        <div className={styles.cover} 
            style={{backgroundImage: `url('/images/banner-${bannerUrl}.png')`}}
        >

        </div>
    );
}