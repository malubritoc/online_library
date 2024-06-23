import { OrderProductType } from "@/@types/Order";

export enum OrderActionTypes {
    ADD_PRODUCT = "ADD_PRODUCT",
    REMOVE_PRODUCT = "REMOVE_PRODUCT",
    UPDATE_PRODUCT_QUANTITY = "UPDATE_PRODUCT_QUANTITY",
    SET_DELIVERY_PRICE = "SET_DELIVERY_PRICE",
    SET_TOTAL_PRICE = "SET_TOTAL_PRICE",
}

export function addProductToOrderAction (product: OrderProductType) {
    return {
        type: OrderActionTypes.ADD_PRODUCT,
        payload: product
    }
}

export function removeProductFromOrderAction (product: OrderProductType) {
    return {
        type: OrderActionTypes.REMOVE_PRODUCT,
        payload: product
    }
}

export function updateProductQuantityAction (product: OrderProductType, quantity: number) {
    return {
        type: OrderActionTypes.UPDATE_PRODUCT_QUANTITY,
        payload: { product, quantity }
    }
}

export function setDeliveryPriceAction (delivery_price: number) {
    return {
        type: OrderActionTypes.SET_DELIVERY_PRICE,
        payload: delivery_price
    }
}

export function setTotalPriceAction (price: number) {
    return {
        type: OrderActionTypes.SET_TOTAL_PRICE,
        payload: price
    }
}

