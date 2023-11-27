import { useSelector } from "react-redux";

export function useCart() {
    
    const cart = useSelector(state => state.cart);
    const product = useSelector(state => state.product);
    const { status, list } = product;

    if (status !== 'ready') {
        return [];
    }

    const result = cart.list.map(item => {
        const product = list.find(({ id }) => id === item.id);
        return { ...item, ...product };
    });

    return result;
}