export interface ProductType {
    id: string,
    price: number,
    description: string,
    name: string,
    category: string,
    min_unit: number,
    available_variations: Array<string>,
    available_color: Array<{
        name: string,
        hex: string,
    }>,
    delivery_options: Array<{
        id: string,
        name: string,
        price: number,
        deadline: string,
    }>,
    LinkMidiaProduct: Array<{
        id: string,
        type: 'img' | 'document' | 'video', 
        link_midia: string,
        product_id: string,
    }>,
    Tags: Array<string>,
}