import { API } from "@utilities/env";
import axios, { AxiosResponse } from "axios";
import { IProduct } from '@models/Product.model';
import { FormFilters } from "@models/FormFilters.model";
import { loadAbort } from "@utilities/load-abort-axios.utility";


// export async function getAll(filters: FormFilters, page: number) {
//     try {
//         const result = await axios.get<IProduct[]>(`${API}/products`, {
//             params: {
//                 ...filters,
//                 page
//             }
//         })
//         return result.data;
//     } catch (error) {
//         return [];
//     }
// }

export function getProducts(filters: FormFilters, page: number) {
    const controller = loadAbort();
    return {
        call: axios.get<IProduct[]>(`${API}/products`, {
            params: {
                ...filters,
                page
            },
            signal: controller.signal
        }),
        controller
    }
}

