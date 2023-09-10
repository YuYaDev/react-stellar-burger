import styles from "./auth.module.css";
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Navigate} from "react-router-dom";
import {useState} from "react";
import {api} from "../utils/api";

function ForgotPasswordPage() {
    const [form, setValue] = useState({ email: '', password: '' });
    const [reset, setReset] = useState(false);

    const onChange = e => {
        setValue({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();
        api.restorePassword(form.email)
            .then((res) => setReset(true))
    }
    return (
        <div className={styles.container}>
            {reset && <Navigate to="/reset-password" replace={true} />}

            <form className={styles.formContainer} onSubmit={onSubmit}>
                <p className="text text_type_main-medium">Восстановление пароля</p>
                <EmailInput
                    onChange={onChange}
                    value={form.email}
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
