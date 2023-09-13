import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import {BrowserRouter, Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Home from "../../pages/home";
import LoginPage from "../../pages/login";
import ProfilePage from "../../pages/profile";
import ResetPasswordPage from "../../pages/reset-password";
import ForgotPasswordPage from "../../pages/forgot-password";
import RegisterPage from "../../pages/register";
import {ProtectedRouteElement} from "../protected-route-element/protected-route-element";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {useEffect, useState} from "react";
import {getCookie} from "../../utils/cookie";
import {getUserInfo} from "../../services/actions/auth";
import {useDispatch} from "react-redux";
import Modal from "../modal/modal";
import {hideMenuIngredient} from "../../services/actions/ingredient";

function App() {
    let location = useLocation();
    const navigate = useNavigate();
    let state = location.state;

    const dispatch = useDispatch();
    useEffect(()=>{
        const token = getCookie('accessToken');
        if(token){
            dispatch(getUserInfo(token))
        }
    }, [dispatch])

    const closeModal = () => {
        setTimeout(() => {
            dispatch(hideMenuIngredient());
        }, 450);
        navigate(-1);
    }

    return (
        <div className={styles.app}>
            <AppHeader />
            <Routes location={state?.backgroundLocation || location}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/reset-password" element={<ResetPasswordPage />} />
                <Route path="/profile" element={<ProtectedRouteElement element={<ProfilePage />}/>} />
                <Route path="/ingredients/:id" element={<IngredientDetails />} />
            </Routes>
            {state?.backgroundLocation && (
                <Routes>
                    <Route path="/ingredients/:id" element={
                        <Modal modalActive={true} closeModal={closeModal}>
                            <IngredientDetails />
                        </Modal>
                    } />
                </Routes>
            )}
        </div>
    );
}
export default App;
