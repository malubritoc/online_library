import { getAllCategories, getAllProducts, getAllUsers, getProduct } from "./firebase";

export async function getCategories() {
    const categories = await getAllCategories();
    return categories;
}

export async function getProducts() {
    const products = await getAllProducts();
    return products;
}

export async function getProductById(id: string) {
    const product = await getProduct(id);
    return product;
}

export async function getUsers() {
    const users = await getAllUsers();
    return users;
}

export async function validateUser(email: string, password: string) {
    const users = await getUsers();
    const user = users.find((user: any) => user.email === email && user.password === password);
    return user;
}