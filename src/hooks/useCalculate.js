import { useSelector } from "react-redux";

export const calculateDiscount = (price, discountedPrice) => {
    return discountedPrice ? Math.round(((price - discountedPrice) / price) * 100) : null;
};

export function useCalculate() {

    const products = useSelector(state => state.product);
    const { status, list } = products;

    if (status !== 'ready') {
        return []
    }

    const result = list.map(product => {
        const discount = calculateDiscount(product.price, product.discont_price);
        return { ...product, discount }
    });

    return result;
}