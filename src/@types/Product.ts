export interface ProductType {
    id: string,
    price: number,
    description: string,
    name: string,
    author: string,
    category: string,
    min_unit: number,
    available_variations: Array<string>,
    available_colors: Array<{
        name: string,
        hex: string,
    }>,
    delivery_options: Array<{
        id: string,
        name: string,
        price: number,
        deadline: string,
    }>,
    links_media: Array<string>,
    tags: Array<string>,
}