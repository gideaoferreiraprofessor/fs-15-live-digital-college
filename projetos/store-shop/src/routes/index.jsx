import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import ProductDetails from "../pages/product-details/ProductDetails";
import Cart from "../pages/cart/Cart";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/produtos',
                element: <Products />
            },
            {
                path: '/produto-detalhes',
                element: <ProductDetails />
            },
            {
                path: '/carrinho',
                element: <Cart />
            }
        ]
    }
])