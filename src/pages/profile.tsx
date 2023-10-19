
import styles from './profile.module.css'
import {NavLink} from "react-router-dom";
import {logout} from "../services/actions/auth";
import {getCookie} from "../utils/cookie";
import {FC} from "react";
import {useAppDispatch} from "../services/types";

interface IProfilePage {
    element: JSX.Element
}
const ProfilePage: FC<IProfilePage> = ({ element }) => {

    const dispatch = useAppDispatch();
    const onClick = () => {
        dispatch(logout(getCookie('refreshToken')));
    };

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <ul className={`${styles.list} mb-15`}>
                    <li className="pt-4 pb-4">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? `${styles.activeLink} text text_type_main-medium` : `${styles.link} text text_type_main-medium text_color_inactive`}
                            end to="/profile"
                        >
                            Профиль
                        </NavLink>
                    </li>
                    <li className="pt-4 pb-4">
                        <NavLink
                            className={({ isActive }) =>
                        isActive ? `${styles.activeLink} text text_type_main-medium` : `${styles.link} text text_type_main-medium text_color_inactive`}
                            end to="/profile/orders"
                        >
                            История заказов
                        </NavLink>
                    </li>
                    <li className="pt-4 pb-4">
                        <NavLink
                            className={({ isActive }) =>
                        isActive ? `${styles.activeLink} text text_type_main-medium` : `${styles.link} text text_type_main-medium text_color_inactive`}
                            to="/login"
                            onClick={onClick}
                        >
                            Выход
                        </NavLink>
                    </li>
                </ul>
                <p className="text text_type_main-small text_color_inactive"> В этом разделе вы можете < br/> изменить свои персональные данные</p>
            </div>
            <div className={styles.content}>
                {element}
            </div>
        </div>
    );
}
export default ProfilePage;
