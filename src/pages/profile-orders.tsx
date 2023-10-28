import OrderFeed from "../components/order-feed/order-feed";
import {getAuthenticationInfo, getUserOrdersInfo} from "../services/selectors/selectors";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../services/types";
import {wsUserConnectionClosed, wsUserConnectionStart} from "../services/actions/ws-user-orders";

function ProfileOrders() {
    const { accessToken } = useAppSelector(getAuthenticationInfo);
    const { orders } = useAppSelector(getUserOrdersInfo);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (accessToken) {
            dispatch(wsUserConnectionStart());
        }
        return (() => {
            dispatch(wsUserConnectionClosed())

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
