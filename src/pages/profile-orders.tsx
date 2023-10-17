import OrderFeed from "../components/order-feed/order-feed";
import {getAuthenticationInfo, getUserOrdersInfo} from "../services/selectors/selectors";
import {useEffect} from "react";
import {wsConnectionClosed, wsConnectionStart} from "../services/actions/ws-all-orders";
import {useAppDispatch, useAppSelector} from "../services/types";

function ProfileOrders() {
    const { accessToken } = useAppSelector(getAuthenticationInfo);
    const { orders } = useAppSelector(getUserOrdersInfo);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (accessToken) {
            dispatch(wsConnectionStart);
        }
        return (() => {
            dispatch(wsConnectionClosed)

        })
    }, [accessToken, dispatch])

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
