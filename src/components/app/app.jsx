import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
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
import Modal from "../modal/modal";
import {hideMenuIngredient} from "../../services/actions/ingredient";
import FeedPage from "../../pages/feed";
import OrderFeedDetails from "../order-feed-details/order-feed-details";
import EditUserForm from "../edit-user-form/edit-user-form";
import ProfileOrders from "../../pages/profile-orders";

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
                <Route path="/login" element={<ProtectedRouteElement element={<LoginPage />} onlyForAuth={false} />} />
                <Route path="/register" element={<ProtectedRouteElement element={<RegisterPage />} onlyForAuth={false} />} />
                <Route path="/forgot-password" element={<ProtectedRouteElement element={<ForgotPasswordPage />} onlyForAuth={false} />} />
                <Route path="/reset-password" element={<ProtectedRouteElement element={<ResetPasswordPage />} onlyForAuth={false} />} />
                <Route path="/profile" element={<ProtectedRouteElement element={<ProfilePage element={<EditUserForm />}/>} onlyForAuth={true} />} />
                <Route path="/ingredients/:id" element={<IngredientDetails />} />
                <Route path="/feed" element={<FeedPage />} />
                <Route path="/feed/:id" element={<OrderFeedDetails />} />
                <Route path="/profile/orders" element={<ProtectedRouteElement element={<ProfilePage element={<ProfileOrders />}/>} onlyForAuth={true} />} />
                <Route path="/profile/orders/:id" element={<ProtectedRouteElement element={<OrderFeedDetails />} onlyForAuth={true} />} />
            </Routes>
            {state?.backgroundLocation && (
                <Routes>
                    <Route path="/ingredients/:id" element={
                        <Modal modalActive={true} closeModal={closeModal}>
                            <IngredientDetails />
                        </Modal>
                    } />
                    <Route path="/feed/:id" element={
                        <Modal modalActive={true} closeModal={closeModal}>
                            <OrderFeedDetails />
                        </Modal>
                    } />
                    <Route path="/profile/orders/:id" element={<ProtectedRouteElement element={
                        <Modal modalActive={true} closeModal={closeModal}>
                            <OrderFeedDetails />
                        </Modal>
                    } onlyForAuth={true} />} />
                </Routes>
            )}
        </div>
    );
}
export default App;
