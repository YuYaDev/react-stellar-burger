import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useEffect, useState} from "react";
import styles from './auth.module.css'
import {Link, Navigate} from "react-router-dom";
import {api} from "../utils/api";
import {login} from "../services/actions/auth";
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../services/actions/ingredients";

function LoginPage() {

    const { isAuthenticated } = useSelector(state => state.authentication)
    const [form, setValue] = useState({ email: '', password: '' });

    const onChange = e => {
        setValue({ ...form, [e.target.name]: e.target.value });
    };

    const dispatch = useDispatch();
    const onSubmit = e => {
        e.preventDefault();
        dispatch(login(form));
    }

    return (
        <>
        {isAuthenticated && <Navigate replace to="/" />}
        {
            !isAuthenticated &&
            <div className={styles.container}>
                <form className={styles.formContainer} onSubmit={onSubmit}>
                    <p className="text text_type_main-medium">Вход</p>
                    <EmailInput
                        onChange={onChange}
                        value={form.email}
                        name={'email'}
                        isIcon={false}
                        error={false}
                    />
                    <PasswordInput
                        onChange={onChange}
                        value={form.password}
                        name={'password'}
                        extraClass="mb-2"
                        placeholder={'Пароль'}
                    />
                    <Button htmlType="submit" type="primary" size="medium" extraClass="mb-15">
                        Войти
                    </Button>
                </form>
                <p className="text text_type_main-default text_color_inactive pt-4 mt-1">Вы новый пользователь? <Link
                    className={styles.link} to="/register">Зарегистрироваться</Link></p>
                <p className="text text_type_main-default text_color_inactive pt-4">Забыли пароль? <Link
                    className={styles.link} to="/forgot-password">Восстановить пароль</Link></p>
            </div>
        }
        </>
    );
}
export default LoginPage;
