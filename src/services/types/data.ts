export interface IIngredient {
    readonly _id: string;
    readonly name: string;
    readonly type: string,
    readonly proteins: number,
    readonly fat: number,
    readonly carbohydrates: number,
    readonly calories: number,
    readonly price: number,
    readonly image: string,
    index?: number,
    key?: any,
    dragIndex?: number,
    hoverIndex?: number,
}

export interface IOrder {
    readonly _id: string,
    readonly name: string,
    readonly status: string,
    readonly number: number,
    readonly ingredients: string[],
    readonly createdAt: string,
    readonly updatedAt: string,
}

export interface IUserInfo {
    user: IUserCredentials,
    accessToken?: string,
    refreshToken?: string,
}

export interface IUserCredentials {
    name: string,
    email: string
    password?: string
}
