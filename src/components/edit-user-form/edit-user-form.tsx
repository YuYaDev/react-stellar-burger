import styles from "./edit-user-form.module.css";
import {EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useForm} from "../../hooks/useForm";
import {getAuthenticationInfo} from "../../services/selectors/selectors";
import {useEffect} from "react";
import {updateUserInfo} from "../../services/actions/auth";
import {getCookie} from "../../utils/cookie";
import {useAppDispatch, useAppSelector} from "../../services/types";

function EditUserForm (){
    const {values, handleChange} = useForm({name: '', email: '', password: ''});
    const { userName, userEmail } = useAppSelector(getAuthenticationInfo)

    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(updateUserInfo({name: values.name || userName, email: values.email || userEmail, password: values.password}, getCookie('accessToken')));
    }, [values, dispatch, userName, userEmail]);

    return (
        <form className={styles.form}>
            <Input
                type={'text'}
                placeholder={'Имя'}
                onChange={handleChange}
                icon={'EditIcon'}
                value={values.name || userName}
                name={'name'}
                size={'default'}
            />
            <EmailInput
                onChange={handleChange}
                value={values.email || userEmail}
                name={'email'}
                placeholder="Логин"
                isIcon={true}
            />
            <PasswordInput
                onChange={handleChange}
                value={values.password }
                name={'password'}
                icon="EditIcon"
            />
        </form>
    );

}

export default EditUserForm;
