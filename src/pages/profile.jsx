import { EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useEffect, useState} from "react";
import styles from './profile.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout, updateUserInfo} from "../services/actions/auth";
import {getCookie} from "../utils/cookie";

function ProfilePage() {
    const [form, setValue] = useState({ email: '', password: '' });
    const { userName, userEmail } = useSelector(state => state.authentication)

    const dispatch = useDispatch();
    const onChange = e => {
        setValue({ ...form, [e.target.name]: e.target.value });
    };
    useEffect(()=>{
        dispatch(updateUserInfo({name: form.name || userName, email: form.email || userEmail, password: form.password}, getCookie('accessToken')));
    }, [form, dispatch, userName, userEmail]);

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
                    onChange={onChange}
                    icon={'EditIcon'}
                    value={form.name || userName}
                    name={'name'}
                    size={'default'}
                />
                <EmailInput
                    onChange={onChange}
                    value={form.email || userEmail}
                    name={'email'}
                    placeholder="Логин"
                    isIcon={true}
                />
                <PasswordInput
                    onChange={onChange}
                    value={form.password}
                    name={'password'}
                    icon="EditIcon"
                />
            </form>
        </div>
    );
}
export default ProfilePage;
