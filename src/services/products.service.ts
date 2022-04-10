import { API } from "@utilities/env";
import axios, { AxiosResponse } from "axios";
import { IProduct } from '@models/Product.model';
import { FormFilters } from "@models/FormFilters.model";


export async function getAll(filters: FormFilters) {
    const result: AxiosResponse<IProduct[]> = await axios({
        method: "GET",
        baseURL: API,
        url: "/products",
        params: {
            ...filters
        }
    });
    return result.data;

}