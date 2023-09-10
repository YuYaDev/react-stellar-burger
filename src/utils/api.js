import {baseUrl, headers} from "./constants";

export default class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl
    this._headers = headers
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    console.log(res.status)
    return Promise.reject(`Ошибка ${res.status}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  getIngredients() {
    return this._request(`${this._baseUrl}/ingredients`);
  }

  createOrder(ingredientsIds) {
    return this._request(`${this._baseUrl}/orders`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        ingredients: ingredientsIds,
      }),
    });
  }

  restorePassword(email) {
    return this._request(`${this._baseUrl}/password-reset`,{
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: email,
      }),
    });
  }

  updatePassword(data) {
    return this._request(`${this._baseUrl}/password-reset/reset`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        password: data.password,
        token: data.token
      }),
    });
  }
  register(userData){
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
  login(userData){
    return this._request(`${this._baseUrl}/auth/login`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
      }),
    });
  }
  logout(token){
    return this._request(`${this._baseUrl}/auth/logout`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        token: token
      }),
    });
  }
  updateToken(token){
    return this._request(`${this._baseUrl}/auth/token`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        token: token,
      }),
    });
  }
  getUserInfo(token){
    let authHeaders = JSON.parse(JSON.stringify(this._headers))
    authHeaders.Authorization = token;
    return this._request(`${this._baseUrl}/auth/user`);
  }
  updateUserInfo(data, token){
    let authHeaders = JSON.parse(JSON.stringify(this._headers))
    authHeaders.Authorization = token;
    return this._request(`${this._baseUrl}/auth/user`, {
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
