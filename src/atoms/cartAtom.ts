import { atom } from 'jotai';

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

export interface OrderType {
    products: Array<OrderProductType>,
    quantity: number,
    delivery_price: number,
    total_price: number,
}

export const cartAtomDefault = {
        products: [],
        quantity: 0,
        delivery_price: 0,
        total_price: 0
    };

export const cartAtom = atom<OrderType>(cartAtomDefault);

export const formFieldsCartItem = atom((get) => get(cartAtom), (get, set, update: OrderType) => set(cartAtom, {...get(cartAtom), ...update}))

export const productCartAtomDefault = {
    product_id: '',
    product_name: '',
    product_price: 0,
    product_quantity: 0,
    product_link_media: '',
    product_additional_info: []
}

export const productCartAtom = atom<OrderProductType>(productCartAtomDefault);

export const formFieldsProductCartItem = atom((get) => get(productCartAtom), (get, set, update: Partial<OrderProductType>) => set(productCartAtom, {...get(productCartAtom), ...update}))




