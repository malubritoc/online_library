export interface ProductType {
    id: string,
    price: number,
    description: string,
    name: string,
    category: string,
    product_type: string,
    min_unit: number,
    available_variations: Array<string>,
    available_colors: Array<{
        name: string,
        hex: string,
    }>,
    delivery_options: Array<{
        name: string,
        price: number,
        deadline: number,
    }>,
    links_media: Array<string>,
    tags: Array<string>,
    offer: boolean,
}