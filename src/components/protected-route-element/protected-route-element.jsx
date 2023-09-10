import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

export function ProtectedRouteElement({ element }) {
    const { isAuthenticated } = useSelector(state => state.authentication)

    return isAuthenticated ? element : <Navigate to="/login" replace/>;
}
