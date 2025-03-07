import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from './images/logo.png';
import HeaderLink from './HeaderLink';

export default function Header(){
    return (
        <header className={styles.header}>
            <Link to="/">
                <img src={logo} alt='Logo da aplicação' />
            </Link>

            <nav>
                <HeaderLink url="/">
                    Home
                </HeaderLink>
                <HeaderLink url="/favoritos">
                    Favoritos
                </HeaderLink>
            </nav>
        </header>
    );
}