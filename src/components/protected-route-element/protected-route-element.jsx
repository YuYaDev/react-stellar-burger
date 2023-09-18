import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {getAuthenticationInfo} from "../../services/selectors/selectors";

export function ProtectedRouteElement({ element, onlyForAuth }) {
    const { isAuthenticated } = useSelector(getAuthenticationInfo)
    // Для неавторизованных пользователей
    if(onlyForAuth)
        return isAuthenticated ? element : <Navigate to="/login" replace/>;
    // Для авторизованных пользователей
    else
        return isAuthenticated ? <Navigate to="/" replace/> : element;
}
