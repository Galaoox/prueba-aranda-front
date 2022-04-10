import { Products } from "@pages/Products"
import { Route, Routes } from "react-router-dom"

export const Navigator = () => {
    return (
        <Routes>
            <Route path="/" element={<Products />} />
        </Routes>
    )
}
