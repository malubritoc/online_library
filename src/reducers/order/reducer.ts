import { OrderProductType } from "@/@types/Order";

export interface OrderState {
    id: string,
    products: Array<OrderProductType>,
    quantity: number,
    delivery_price: number,
    total_price: number,
}

export function orderReducer(state: OrderState, action: any) {
    return state
}