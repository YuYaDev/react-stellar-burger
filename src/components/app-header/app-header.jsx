import {Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css';
import {NavLink} from "react-router-dom";

function AppHeader() {
    return (
        <header className={styles.header}>
            <ul className={`${styles.navbar} p-4 m-4`}>
                <li className={styles.flexRow}>
                    <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
                        {({ isActive }) => (
                            <div className={`${styles.flexRow} p-4`}>
                                <BurgerIcon type={isActive ? "primary" : "secondary"} />
                                <p className={isActive ? "text text_type_main-default p-2" :
                                "text text_type_main-default text_color_inactive p-2"}>Конструктор</p>
                            </div>
                        )}
                    </NavLink>
                    <NavLink to="/profile/orders" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
                        {({ isActive }) => (
                            <div className={`${styles.flexRow} p-4`}>
                                <ListIcon type={isActive ? "primary" : "secondary"} />
                                <p className={isActive ? "text text_type_main-default p-2" :
                                    "text text_type_main-default text_color_inactive p-2"}>Лента заказов</p>
                            </div>
                        )}
                    </NavLink>
                </li>
                <li><Logo /></li>
                <li>
                    <NavLink to="/profile" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
                    {({ isActive }) => (
                        <div className={`${styles.flexRow} p-4`}>
                            <ProfileIcon type={isActive ? "primary" : "secondary"} />
                            <p className={isActive ? "text text_type_main-default p-2" :
                                "text text_type_main-default text_color_inactive p-2"}>Личный кабинет</p>
                        </div>
                    )}
                    </NavLink>
                </li>
            </ul>
        </header>
    );
}

export default AppHeader;
