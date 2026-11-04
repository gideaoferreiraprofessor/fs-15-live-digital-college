import { createBrowserRouter } from "react-router";
import App from "../App";
import Dashboard from "../pages/dashboard/Dashboard";
import ProductsList from "../pages/products/ProductsList";
import ProductDetails from "../pages/products/ProductDetails";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: '/products',
                element: <ProductsList />
            },
            {
                path: '/product/details/:productId',
                element: <ProductDetails />
            }
        ]
    }
])

export default routes