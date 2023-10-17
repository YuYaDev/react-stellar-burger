import styles from "./auth.module.css";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Navigate, useLocation } from "react-router-dom";
import {api} from "../utils/api";
import {useForm} from "../hooks/useForm";
import React from "react";

function ResetPasswordPage() {
    const {values, handleChange} = useForm({});

    const location = useLocation();
    const fromForgotPassword = (location.state?.from?.pathname === '/forgot-password')

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        api.updatePassword({password: values.password, token: values.code})
            .then(() => console.log("Пароль обновлен"))
            .catch(()=>console.log("Ошибка обновления пароля"))
    }

    return (
    <>
        { !fromForgotPassword && <Navigate replace to="/forgot-password" />}
        {
        <div className={styles.container}>
            <form className={styles.formContainer} onSubmit={onSubmit}>
                <p className="text text_type_main-medium">Восстановление пароля</p>
                <PasswordInput
                    onChange={handleChange}
                    value={values.password}
                    name={'password'}
                    extraClass="mb-2"
                    placeholder={'Введите новый пароль'}
                />
                <Input
                    type={'text'}
                    placeholder={'Введите код из письма'}
                    onChange={handleChange}
                    value={values.code}
                    name={'code'}
                    size={'default'}
                    extraClass="ml-1"
                />
                <Button htmlType="submit" type="primary" size="medium" extraClass="mb-15">
                    Сохранить
                </Button>
            </form>
            <p className="text text_type_main-default text_color_inactive pt-4 mt-1">Вспомнили пароль? <Link className={styles.link} to="/login">Войти</Link></p>
        </div>
        }
    </>
    );
}
export default ResetPasswordPage;
