import {TBurgerConstructorActions} from "../actions/burger-constructor";
import {TIngredientMenuActions} from "../actions/ingredient";
import {rootReducer} from "../reducers/rootReducer";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook
} from 'react-redux';
import {TAuthActions} from "../actions/auth";
import {TOrderActions} from "../actions/order";
import {TWSAllOrders} from "../actions/ws-all-orders";
import {TIngredientsActions} from "../actions/ingredients";
import {Action, ActionCreator} from "redux";
import { store } from '../../utils/store';

export type TAppState = ReturnType<typeof rootReducer>;

type TAppActions =
    | TBurgerConstructorActions
    | TIngredientMenuActions
    | TAuthActions
    | TOrderActions
    | TIngredientsActions
    | TWSAllOrders;



export type TAppThunk<TReturn = void> = ActionCreator<
    ThunkAction<TReturn, Action, TAppState, TAppActions>
    >;

export type TAppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<TAppState> = selectorHook;

export const useAppDispatch = () => dispatchHook<TAppDispatch | TAppThunk>();
