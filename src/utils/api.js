const PATH = 'https://norma.nomoreparties.space/api'

export default class Api {

    getIngredients() {
        return fetch(`${PATH}/ingredients`)
                .then(res => res.ok ? res.json() : res.json().then((err) => Promise.reject(err)))
                .then((actualData) => {
                    return actualData.data
                })
    }
}