import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useState} from "react";
import styles from './auth.module.css'
import {Link} from "react-router-dom";

function RegisterPage() {

    const [form, setValue] = useState({ email: '', password: '' });

    const onChange = e => {
        setValue({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className={styles.container}>
            <form className={styles.formContainer}>
                <p className="text text_type_main-medium">Регистрация</p>
                <Input
                    type={'text'}
                    placeholder={'Имя'}
                    onChange={onChange}
                    icon={'CurrencyIcon'}
                    value={form.name}
                    name={'name'}
                    size={'default'}
                    extraClass="ml-1"
                />
                <EmailInput
                    onChange={onChange}
                    value={form.email}
                    name={'email'}
                    isIcon={false}
                />
                <PasswordInput
                    onChange={onChange}
                    value={form.password}
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
