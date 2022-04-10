import styled from "@emotion/styled";
import { FormFilters } from "@models/FormFilters.model";
import { IProduct } from "@models/Product.model";
import { Pagination } from "@mui/material";
import { getAll } from "@services/products.service";
import { ChangeEvent, useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { ProductCatalogFilters } from "./ProductCatalogFilters";

export const ProductsCatalog = () => {
    const [products, setProducts] = useState<IProduct[]>([
        {
            id: 1,
            name: "Producto 1",
            image: "https://via.placeholder.com/150",
            category: "test",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus hic perferendis adipisci odio cumque voluptatem tempore molestias odit, perspiciatis ratione incidunt vitae eveniet similique obcaecati doloribus quos dolores eos porro! Laborum eveniet quod id dolore dolor maiores doloribus commodi! Sed optio tempora exercitationem aspernatur aliquid. Minima impedit id voluptatibus.",
        },
        {
            id: 2,
            name: "Producto 1",
            image: "https://via.placeholder.com/150",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus hic perferendis adipisci odio cumque voluptatem tempore molestias odit, perspiciatis ratione incidunt vitae eveniet similique obcaecati doloribus quos dolores eos porro! Laborum eveniet quod id dolore dolor maiores doloribus commodi! Sed optio tempora exercitationem aspernatur aliquid. Minima impedit id voluptatibus.",
            category: 'Celulares'
        },
        {
            id: 3,
            name: "Producto 1",
            image: "https://via.placeholder.com/150",
            category: "test",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus hic perferendis adipisci odio cumque voluptatem tempore molestias odit, perspiciatis ratione incidunt vitae eveniet similique obcaecati doloribus quos dolores eos porro! Laborum eveniet quod id dolore dolor maiores doloribus commodi! Sed optio tempora exercitationem aspernatur aliquid. Minima impedit id voluptatibus.",
        },
        {
            id: 4,
            name: "Producto 1",
            image: "https://via.placeholder.com/150",
            category: "test",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus hic perferendis adipisci odio cumque voluptatem tempore molestias odit, perspiciatis ratione incidunt vitae eveniet similique obcaecati doloribus quos dolores eos porro! Laborum eveniet quod id dolore dolor maiores doloribus commodi! Sed optio tempora exercitationem aspernatur aliquid. Minima impedit id voluptatibus.",
        },
        {
            id: 5,
            name: "Producto 1",
            image: "https://via.placeholder.com/150",
            category: "test",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus hic perferendis adipisci odio cumque voluptatem tempore molestias odit, perspiciatis ratione incidunt vitae eveniet similique obcaecati doloribus quos dolores eos porro! Laborum eveniet quod id dolore dolor maiores doloribus commodi! Sed optio tempora exercitationem aspernatur aliquid. Minima impedit id voluptatibus.",
        },
        {
            id: 6,
            name: "Producto 1",
            image: "https://via.placeholder.com/150",
            category: "test",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus hic perferendis adipisci odio cumque voluptatem tempore molestias odit, perspiciatis ratione incidunt vitae eveniet similique obcaecati doloribus quos dolores eos porro! Laborum eveniet quod id dolore dolor maiores doloribus commodi! Sed optio tempora exercitationem aspernatur aliquid. Minima impedit id voluptatibus.",
        },
    ]);

    const getTotalPages = () => {
        return Math.ceil(products.length / 5);
    }

    const handleChangePage = (e: ChangeEvent<unknown>, page: number) => {
        console.log(page);
    }

    const handleFilters = async (filters: FormFilters) => {
        console.log(filters);
        const result = await getAll(filters);

    }



    return (
        <div>
            <ProductCatalogFilters handleFilters={handleFilters} />
            <GridProducts>
                {products.map(product => <ProductCard key={product.id} data={product} />)}
            </GridProducts>
            <ContainerPagination>
                <Pagination count={getTotalPages()} onChange={handleChangePage} variant="outlined" shape="rounded" />
            </ContainerPagination>

        </div>


    )
}



const GridProducts = styled.div`
    display: grid;
    grid-template-columns: 1;
    margin: 2rem 0;
    border: 0.1rem solid #ccc;
    border-radius: 0.5rem;
    padding: 0.5rem;
`;

const ContainerPagination = styled.div`
    display: flex;
    justify-content: center;
`;