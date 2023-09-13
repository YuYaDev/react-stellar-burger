import { EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useEffect} from "react";
import styles from './profile.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout, updateUserInfo} from "../services/actions/auth";
import {getCookie} from "../utils/cookie";
import {getAuthenticationInfo} from "../utils/store";
import {useForm} from "../hooks/useForm";

function ProfilePage() {
    const {values, handleChange} = useForm({});
    const { userName, userEmail } = useSelector(getAuthenticationInfo)

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(updateUserInfo({name: values.name || userName, email: values.email || userEmail, password: values.password}, getCookie('accessToken')));
    }, [values, dispatch, userName, userEmail]);

    const onClick = () => {
        dispatch(logout(getCookie('refreshToken')));
    };

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <ul className={`${styles.list} mb-15`}>
                    <li className="pt-4 pb-4"><NavLink className={({ isActive }) =>
                       isActive ? `${styles.activeLink} text text_type_main-medium` : `${styles.link} text text_type_main-medium text_color_inactive`} to="/profile">Профиль</NavLink></li>
                    <li className="pt-4 pb-4"><NavLink className={({ isActive }) =>
                        isActive ? `${styles.activeLink} text text_type_main-medium` : `${styles.link} text text_type_main-medium text_color_inactive`} to="//profile/orders">История заказов</NavLink></li>
                    <li className="pt-4 pb-4"><NavLink className={({ isActive }) =>
                        isActive ? `${styles.activeLink} text text_type_main-medium` : `${styles.link} text text_type_main-medium text_color_inactive`} to="/login" onClick={onClick}>Выход</NavLink></li>
                </ul>
                <p className="text text_type_main-small text_color_inactive"> В этом разделе вы можете < br/> изменить свои персональные данные</p>
            </div>
            <form className={styles.form}>
                <Input
                    type={'text'}
                    placeholder={'Имя'}
                    onChange={handleChange}
                    icon={'EditIcon'}
                    value={values.name || userName}
                    name={'name'}
                    size={'default'}
                />
                <EmailInput
                    onChange={handleChange}
                    value={values.email || userEmail}
                    name={'email'}
                    placeholder="Логин"
                    isIcon={true}
                />
                <PasswordInput
                    onChange={handleChange}
                    value={values.password}
                    name={'password'}
                    icon="EditIcon"
                />
            </form>
        </div>
    );
}
export default ProfilePage;
