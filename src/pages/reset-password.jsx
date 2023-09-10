import styles from "./auth.module.css";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {useState} from "react";
import {api} from "../utils/api";

function ResetPasswordPage() {
    const [form, setValue] = useState({ email: '', password: '' });

    const onChange = e => {
        setValue({ ...form, [e.target.name]: e.target.value });
    };
    const onSubmit = e => {
        e.preventDefault();
        api.updatePassword(form.password)
            .then((res) => console.log(res))
    }

    return (
        <div className={styles.container}>
            <form className={styles.formContainer} onSubmit={onSubmit}>
                <p className="text text_type_main-medium">Восстановление пароля</p>
                <PasswordInput
                    onChange={onChange}
                    value={form.password}
                    name={'password'}
                    extraClass="mb-2"
                    placeholder={'Введите новый пароль'}
                />
                <Input
                    type={'text'}
                    placeholder={'Введите код из письма'}
                    onChange={onChange}
                    icon={'CurrencyIcon'}
                    value={form.code}
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
    );
}
export default ResetPasswordPage;
