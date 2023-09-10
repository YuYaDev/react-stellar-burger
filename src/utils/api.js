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

  updatePassword(password) {
    return this._request(`${this._baseUrl}/password-reset/reset`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        password: password,
        //token: token
      }),
    });
  }
}

export const api = new Api({baseUrl, headers});
