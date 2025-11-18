import { createBrowserRouter } from "react-router"
import App from "../main/Layout"
import ProductView from "@/components/ProductView"
import Home from "@/main/components/Home"

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "products/:id",
                Component: ProductView
            }
        ]
    },
])


