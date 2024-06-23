import { getAllCategories, getAllProducts, getAllUsers, getProduct } from "./firebase";

export async function getUsers() {
    const users = await getAllUsers();
    console.log(users);
    return users;
}

export async function getCategories() {
    const categories = await getAllCategories();
    console.log(categories);
    return categories;
}

export async function getProducts() {
    const products = await getAllProducts();
    console.log(products);
    return products;
}

export async function getProductById(id: string) {
    console.log('acessou' + id)
    const product = await getProduct(id);
    console.log('aquii '+ product);
    return product;
}