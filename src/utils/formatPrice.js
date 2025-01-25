export const formatPrice = (priceString) => {
    const priceNumber = parseFloat(priceString);
    return priceNumber.toFixed(2);
};
