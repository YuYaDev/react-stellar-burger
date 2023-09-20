import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {getAuthenticationInfo} from "../../services/selectors/selectors";
import {getCookie} from "../../utils/cookie";

export function ProtectedRouteElement({ element, onlyForAuth }) {
    const { isAuthenticated } = useSelector(getAuthenticationInfo)
    const token = getCookie('accessToken');

    if (!onlyForAuth && isAuthenticated) {
        return <Navigate to="/" />
    }
    if (onlyForAuth && !isAuthenticated && !token) {
        return <Navigate to="/login" />
    }
    return element;
}
