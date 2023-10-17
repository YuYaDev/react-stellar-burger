import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './auth.module.css'
import {Link} from "react-router-dom";
import {login} from "../services/actions/auth";
import {useDispatch} from "react-redux";
import {useForm} from "../hooks/useForm";
import React from "react";

function LoginPage() {
    const {values, handleChange} = useForm({name: '', email: '', password: ''});

    const dispatch = useDispatch();
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(login(values));
    }

    return (
        <div className={styles.container}>
            <form className={styles.formContainer} onSubmit={onSubmit}>
                <p className="text text_type_main-medium">Вход</p>
                <EmailInput
                    onChange={handleChange}
                    value={values.email}
                    name={'email'}
                    isIcon={false}
                />
                <PasswordInput
                    onChange={handleChange}
                    value={values.password}
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
    );
}
export default LoginPage;
