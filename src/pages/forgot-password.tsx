import styles from "./auth.module.css";
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Navigate, useLocation} from "react-router-dom";
import React, {useState} from "react";
import {api} from "../utils/api";
import {useForm} from "../hooks/useForm";

function ForgotPasswordPage() {
    const {values, handleChange} = useForm({email: ''});
    const [reset, setReset] = useState(false);
    const location = useLocation();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        api.restorePassword(values.email)
            .then(() => setReset(true))
    }
    return (
        <div className={styles.container}>
            {reset && <Navigate to="/reset-password" replace={true} state={ { from: location } }/>}

            <form className={styles.formContainer} onSubmit={onSubmit}>
                <p className="text text_type_main-medium">Восстановление пароля</p>
                <EmailInput
                    onChange={handleChange}
                    value={values.email}
                    name={'email'}
                    placeholder="Укажите E-mail"
                    isIcon={false}
                />
                <Button htmlType="submit" type="primary" size="medium" extraClass="mb-15">
                    Восстановить
                </Button>
            </form>
            <p className="text text_type_main-default text_color_inactive pt-4 mt-1">Вспомнили пароль? <Link className={styles.link} to="/login">Войти</Link></p>
        </div>
    );
}
export default ForgotPasswordPage;
