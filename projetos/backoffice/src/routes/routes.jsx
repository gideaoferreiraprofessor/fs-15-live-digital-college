import { createBrowserRouter } from "react-router";
import App from "../App";
import Dashboard from "../pages/dashboard/Dashboard";
import ProductsList from "../pages/products/ProductsList";

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
                path: 'products',
                element: <ProductsList />
            }
        ]
    }
])

export default routes