import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './auth.module.css'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {register} from "../services/actions/auth";
import {useForm} from "../hooks/useForm";
import React from "react";

function RegisterPage() {
    const {values, handleChange} = useForm({});

    const dispatch = useDispatch();
    const onSubmit = (e: React.FormEvent<HTMLFormElement>)  => {
        e.preventDefault();
        dispatch(register(values));
    }

    return (
        <div className={styles.container}>
            <form className={styles.formContainer} onSubmit={onSubmit}>
                <p className="text text_type_main-medium">Регистрация</p>
                <Input
                    type={'text'}
                    placeholder={'Имя'}
                    onChange={handleChange}
                    value={values.name}
                    name={'name'}
                    size={'default'}
                    extraClass="ml-1"
                />
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
                />
                <Button htmlType="submit" type="primary" size="medium" extraClass="mb-15">
                    Зарегистрироваться
                </Button>
            </form>
            <p className="text text_type_main-default text_color_inactive pt-4 mt-1">Уже зарегистрированы? <Link className={styles.link} to="/login">Войти</Link></p>
        </div>
    );
}
export default RegisterPage;
