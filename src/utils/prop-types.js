import PropTypes from "prop-types";

export const ingredientPropType = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
});

export const orderPropType = PropTypes.shape({
    order: PropTypes.arrayOf(PropTypes.shape({
        order: PropTypes.number.isRequired,
    })),
    name: PropTypes.string.isRequired,
    success: PropTypes.bool.isRequired
});




