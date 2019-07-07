import getIngredientPrices, {BASE_PRICE} from "./ingredientsPrice";

const orderCalculator = (ingredients) => {
    const prices = getIngredientPrices();
    const total = Object.keys(ingredients).reduce((total, type) => (total + ingredients[type] * prices[type]), BASE_PRICE);
    return total.toFixed(2);
};

export default orderCalculator;