import {Navigate} from "react-router-dom";
import {getAuthenticationInfo} from "../../services/selectors/selectors";
import {getCookie} from "../../utils/cookie";
import {FC} from "react";
import {useAppSelector} from "../../services/types";

interface IProtectedRouteElement {
    element: JSX.Element,
    onlyForAuth: boolean
}
export const ProtectedRouteElement: FC<IProtectedRouteElement> = ({ element, onlyForAuth }) => {
    const { isAuthenticated } = useAppSelector(getAuthenticationInfo)
    const token = getCookie('accessToken');

    if (!onlyForAuth && isAuthenticated) {
        return <Navigate to="/" />
    }
    if (onlyForAuth && !isAuthenticated && !token) {
        return <Navigate to="/login" />
    }
    return element;
}
