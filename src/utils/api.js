const PATH = 'https://norma.nomoreparties.space/api'

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

function request(url, options) {
    return fetch(url, options).then(checkResponse)
}

export default class Api {

    getIngredients() {
        return request(`${PATH}/ingredients`)
                .then((actualData) => {
                    return actualData.data
                })
    }
    createOrder(ingredientsIds) {
        return request(`${PATH}/orders`, {
            method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                ingredients: ingredientsIds,
                })
            })
    }
}

