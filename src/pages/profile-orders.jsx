import OrderFeed from "../components/order-feed/order-feed";
import {useDispatch, useSelector} from "react-redux";
import {getAuthenticationInfo, getUserOrdersInfo} from "../services/selectors/selectors";
import {useEffect} from "react";
import {WS_USERORDERS_CONNECTION_START, WS_USERORDERS_CONNECTION_CLOSED} from "../services/actions/ws-user-orders";

function ProfileOrders() {
    const { accessToken } = useSelector(getAuthenticationInfo);
    const { orders } = useSelector(getUserOrdersInfo);
    const dispatch = useDispatch();
    useEffect(
        () => {
            if (accessToken) {
                dispatch({ type: WS_USERORDERS_CONNECTION_START });
            }
            return () => dispatch({ type: WS_USERORDERS_CONNECTION_CLOSED });
        },
        [accessToken, dispatch]
    );

    return(
        <>
        {
            orders &&
            <OrderFeed orders={orders} link={'profile/orders'} showStatus={true}/>
        }
        </>
    )
}

export default ProfileOrders;
