import { createBrowserRouter } from 'react-router'
import AppLayout from '../components/app-layout/AppLayout'
import Home from '../pages/home/Home'
import Products from '../pages/products/Products'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/products",
                element: <Products />
            }
        ]
    }
])