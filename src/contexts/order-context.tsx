"use client";

import { OrderProductType } from "@/@types/Order";
import { orderReducer } from "@/reducers/order/reducer";
import { useReducer, useState } from "react";
import { createContext } from "use-context-selector";

interface OrderContextType {
  id: string;
  products: Array<OrderProductType>;
  quantity: number;
  delivery_price: number;
  total_price: number;
}

export const OrderContext = createContext({} as OrderContextType);

export function OrderContextProvider({ children }: any) {
  const [orderState, dispatch] = useReducer(orderReducer, {
    id: "",
    products: [],
    quantity: 0,
    delivery_price: 0,
    total_price: 0,
  });

  const { id, products, quantity, delivery_price, total_price } = orderState;

  return (
    <OrderContext.Provider
      value={{
        id: orderState.id,
        products: orderState.products,
        quantity: orderState.quantity,
        delivery_price: orderState.delivery_price,
        total_price: orderState.total_price,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
