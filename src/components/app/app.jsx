import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import Home from "../../pages/home";
import LoginPage from "../../pages/login";
import ProfilePage from "../../pages/profile";
import ResetPasswordPage from "../../pages/reset-password";
import ForgotPasswordPage from "../../pages/forgot-password";
import RegisterPage from "../../pages/register";
import {ProtectedRouteElement} from "../protected-route-element/protected-route-element";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {useEffect} from "react";
import {getCookie} from "../../utils/cookie";
import {getUserInfo} from "../../services/actions/auth";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch();
    useEffect(()=>{
        const token = getCookie('accessToken');
        if(token){
            dispatch(getUserInfo(token))
        }
    }, [dispatch])

    return (
        <div className={styles.app}>
            <BrowserRouter>
                <AppHeader />
                <Pages />
            </BrowserRouter>
        </div>
    );
}

function Pages() {
    let location = useLocation();
    let background = location.state && location.state.background;

    return (
        <div>
            <Routes location={background || location}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/reset-password" element={<ResetPasswordPage />} />
                <Route path="/profile" element={<ProtectedRouteElement element={<ProfilePage />}/>} />
                <Route path="/ingredients/:id" element={<IngredientDetails />} />
            </Routes>
        </div>
    );
}

export default App;
