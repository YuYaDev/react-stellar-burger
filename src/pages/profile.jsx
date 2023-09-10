import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useState} from "react";
import styles from './profile.module.css'
import {Link, NavLink} from "react-router-dom";

function ProfilePage() {
    const [form, setValue] = useState({ email: '', password: '' });

    const onChange = e => {
        setValue({ ...form, [e.target.name]: e.target.value });
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
                        isActive ? `${styles.activeLink} text text_type_main-medium` : `${styles.link} text text_type_main-medium text_color_inactive`} to="/">Выход</NavLink></li>
                </ul>
                <p className="text text_type_main-small text_color_inactive"> В этом разделе вы можете < br/> изменить свои персональные данные</p>
            </div>
            <form className={styles.form}>
                <Input
                    type={'text'}
                    placeholder={'Имя'}
                    onChange={onChange}
                    icon={'EditIcon'}
                    value={form.name}
                    name={'name'}
                    size={'default'}
                />
                <EmailInput
                    onChange={onChange}
                    value={form.email}
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
