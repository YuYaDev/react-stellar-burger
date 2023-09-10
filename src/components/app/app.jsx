import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../../pages/home";
import LoginPage from "../../pages/login";
import IngredientPage from "../../pages/ingredient";
import ProfilePage from "../../pages/profile";
import ResetPasswordPage from "../../pages/reset-password";
import ForgotPasswordPage from "../../pages/forgot-password";
import RegisterPage from "../../pages/register";
import {ProtectedRouteElement} from "../protected-route-element/protected-route-element";

function App() {
    return (
        <div className={styles.app}>
            <BrowserRouter>
                <AppHeader />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                    <Route path="/reset-password" element={<ResetPasswordPage />} />
                    <Route path="/profile" element={<ProtectedRouteElement element={<ProfilePage />}/>} />
                    <Route path="/ingredients/:id" element={<IngredientPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
