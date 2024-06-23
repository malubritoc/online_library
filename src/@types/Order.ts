export interface OrderType {
    id: string,
    user_id: string,
    products: Array<OrderProductType>,
    quantity: number,
    delivery_price: number,
    total_price: number,
}

export interface OrderProductType {
    product_id: string,
    product_name: string,
    product_price: number,
    product_quantity: number,
    product_link_media: string,
    product_additional_info: Array<{
        key: string,
        value: string,
    }>
}