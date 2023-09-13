import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {getAuthenticationInfo} from "../../utils/store";

export function ProtectedRouteElement({ element }) {
    const { isAuthenticated } = useSelector(getAuthenticationInfo)

    return isAuthenticated ? element : <Navigate to="/login" replace/>;
}
