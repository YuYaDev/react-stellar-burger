const PATH = 'https://norma.nomoreparties.space/api'

export default class Api {

    getIngredients() {
        return fetch(`${PATH}/ingredients`)
                .then(res => res.ok ? res.json() : res.json().then((err) => Promise.reject(err)))
                .then((actualData) => {
                    return actualData.data
                })
    }
    createOrder(ingredientsIds) {
        return fetch(`${PATH}/orders`, {
            method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                ingredients: ingredientsIds,
                })
            })
            .then(res => res.ok ? res.json() : res.json().then((err) => Promise.reject(err)))
            .then((actualData) => {
                return actualData;
            })
    }
}