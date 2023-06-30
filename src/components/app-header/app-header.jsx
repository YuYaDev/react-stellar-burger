import { Logo, BurgerIcon,ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css';

function AppHeader() {
    return (
        <header className={styles.header}>
            <ul className={`${styles.navbar} p-4`}>
                <li className={styles.flexRow}>
                    <div className={`${styles.flexRow} p-4`}>
                        <BurgerIcon type="primary" />
                        <p className="text text_type_main-default p-2">Конструктор</p>
                    </div>
                    <div className={`${styles.flexRow} p-4`}>
                        <ListIcon type="primary" />
                        <p className="text text_type_main-default p-2">Лента заказов</p>
                    </div>
                </li>
                <li><Logo /></li>
                <li>
                    <div className={`${styles.flexRow} p-4`}>
                        <ProfileIcon type="primary" />
                        <p className="text text_type_main-default p-2">Личный кабинет</p>
                    </div>
                </li>
            </ul>
        </header>
    );
}

export default AppHeader;
