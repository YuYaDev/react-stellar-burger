import {baseUrl, headers} from "./constants";
import {deleteCookie, getCookie, setCookie} from "./cookie";
import {IUserCredentials, IUserInfo} from "../services/types/data";


interface IApi {
  _baseUrl: string,
  _headers: HeadersInit
}
interface IApiConstructor {
  baseUrl: string,
  headers: HeadersInit
}


export default class Api implements IApi{
  public _baseUrl: string;
  public _headers: HeadersInit;

  constructor({baseUrl, headers} : IApiConstructor) {
    this._baseUrl = baseUrl
    this._headers = headers
  }
  _checkResponse(res: Response) {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  }

  _request(url: string, options?: RequestInit) {
    return fetch(url, options).then(this._checkResponse);
  }
  _requestWithRefresh = async (url: string, options: RequestInit) => {
    const headersInit: HeadersInit = {};
    options.headers = headersInit;

    try {
      const res = await fetch(url, options);
      return await this._checkResponse(res);
    } catch (err: any) {
      if (err.message === "jwt expired") {
        const refreshData = await this.updateToken(getCookie('refreshToken'));
        setCookie('refreshToken', refreshData.refreshToken,  { path: '/' });
        deleteCookie('accessToken');
        setCookie('accessToken', refreshData.accessToken,  { path: '/' });
        options.headers.authorization = refreshData.accessToken;
        const res = await fetch(url, options); //вызываем перезапрос данных
        return await this._checkResponse(res);
      } else {
        return Promise.reject(err);
      }
    }
  }

  getIngredients() {
    return this._request(`${this._baseUrl}/ingredients`);
  }

  createOrder(ingredientsIds: string[], token: string) {
    let authHeaders = JSON.parse(JSON.stringify(this._headers))
    authHeaders.authorization = token;
    return this._request(`${this._baseUrl}/orders`, {
      method: "POST",
      headers: authHeaders,
      body: JSON.stringify({
        ingredients: ingredientsIds,
      }),
    });
  }

  restorePassword(email: string) {
    return this._request(`${this._baseUrl}/password-reset`,{
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: email,
      }),
    });
  }

  updatePassword(data : {password: string, token: string}) {
    return this._request(`${this._baseUrl}/password-reset/reset`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        password: data.password,
        token: data.token
      }),
    });
  }
  register(userData: IUserCredentials){
    return this._request(`${this._baseUrl}/auth/register`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
        name: userData.name,
      }),
    });
  }
  login(userData: IUserCredentials){
    return this._request(`${this._baseUrl}/auth/login`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
      }),
    });
  }
  logout(token: string){
    return this._request(`${this._baseUrl}/auth/logout`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        token: token
      }),
    });
  }
  updateToken(token: string){
    return this._request(`${this._baseUrl}/auth/token`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        token: token,
      }),
    });
  }
  getUserInfo(token: string){
    let authHeaders = JSON.parse(JSON.stringify(this._headers))
    authHeaders.authorization = token;
    return this._requestWithRefresh(`${this._baseUrl}/auth/user`, {
      method: "GET",
      headers: authHeaders
    });
  }
  updateUserInfo(data: IUserCredentials, token: string){
    let authHeaders = JSON.parse(JSON.stringify(this._headers))
    authHeaders.authorization = token;
    return this._requestWithRefresh(`${this._baseUrl}/auth/user`, {
      method: "PATCH",
      headers: authHeaders,
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        name: data.name,
      }),
    });
  }
}

export const api = new Api({baseUrl, headers});
