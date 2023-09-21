import PropTypes from "prop-types";

export const ingredientPropType = PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
});

export const orderPropType = PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
    number: PropTypes.number,
    ingredients: PropTypes.arrayOf(PropTypes.string),
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
});

export const wsOrdersPropType = PropTypes.shape({
    orders: PropTypes.arrayOf(orderPropType),
    total: PropTypes.number,
    totalToday: PropTypes.number,
});

