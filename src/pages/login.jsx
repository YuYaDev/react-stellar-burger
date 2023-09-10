import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useState} from "react";
import styles from './auth.module.css'
import {Link} from "react-router-dom";

function LoginPage() {
    //let history = useHistory();

    // Используем хук, в котором доступны все нужные методы и данные о пользователе
    //let auth = useAuth();

    const [form, setValue] = useState({ email: '', password: '' });

    const onChange = e => {
        setValue({ ...form, [e.target.name]: e.target.value });
    };

    // let login = useCallback(
    //     e => {
    //         e.preventDefault();
    //         auth.signIn(() => {
    //             history.replace({ pathname: '/list' });
    //         });
    //     },
    //     [auth, history]
    // );
    //
    // if (auth.user) {
    //     return (
    //         <Redirect
    //             to={{
    //                 pathname: '/list'
    //             }}
    //         />
    //     );
    // }

    return (
        <div className={styles.container}>
            <form className={styles.formContainer}>
                <p className="text text_type_main-medium">Вход</p>
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
                    placeholder={'Пароль'}
                />
                <Button htmlType="submit" type="primary" size="medium" extraClass="mb-15">
                    Войти
                </Button>
            </form>
            <p className="text text_type_main-default text_color_inactive pt-4 mt-1">Вы новый пользователь? <Link className={styles.link} to="/register">Зарегистрироваться</Link></p>
            <p className="text text_type_main-default text_color_inactive pt-4">Забыли пароль?  <Link className={styles.link} to="/forgot-password">Восстановить пароль</Link></p>
        </div>
    );
}
export default LoginPage;
