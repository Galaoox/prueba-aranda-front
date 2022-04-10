import styled from "@emotion/styled";
import useFetchAndLoad from "@hooks/useFetchAndLoad";
import { DataFormDialog } from "@models/DataFormDialog.model";
import { FormFilters } from "@models/FormFilters.model";
import { IProduct } from "@models/Product.model";
import { Button, ButtonGroup, Pagination } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { getProducts } from "@services/products.service";
import { ChangeEvent, useEffect, useState } from "react";
import { ProductForm } from "./ProductForm";

const columns: GridColDef[] = [
    {
        field: 'image',
        headerName: 'Imagen',
        flex: 1,
        sortable: false,
        renderCell: (params) => <ImageProduct src={params.value} alt={params.value} />
    },
    { field: 'name', headerName: 'Nombre', flex: 1 },
    { field: 'description', headerName: 'Descripcion', flex: 1 },
    { field: 'category', headerName: 'Categoria', sortable: false, flex: 1 },
];

const mockData = [
    {
        id: 999,
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
];

export const ProductsCatalog = () => {
    const { loading, callEndpoint } = useFetchAndLoad();
    const [products, setProducts] = useState<IProduct[]>(mockData);
    const [filters, setFilters] = useState<FormFilters>(new FormFilters());
    const [currentPage, setCurrentPage] = useState(1);
    const [idProductSelected, setIdProductSelected] = useState<any>();
    const [dataForm, setDataForm] = useState<DataFormDialog>({ id: null, open: false });

    const getTotalPages = () => {
        return Math.ceil(products.length / 5);
    }

    const handleChangePage = (e: ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
        getData(filters, page);
    }

    const handleFilters = async (filters: FormFilters) => {
        setFilters(filters);
        getData(filters, 1);
    }

    const getData = async (filters: FormFilters, page: number) => {
        try {
            const result = await callEndpoint(getProducts(filters, page));
        } catch (error) {

        }
    }

    const onCloseForm = (result: boolean) => {
        if (result) getData(filters, currentPage);
        setDataForm({
            id: null,
            open: false
        });
    }

    const createProduct = () => onOpenForm();

    const onOpenForm = (id: number | null = null) => {
        setDataForm({
            id,
            open: true
        });
    }

    return (
        <>
            <ButtonsActions variant="contained" aria-label="outlined primary button group">
                <Button color="success" onClick={createProduct}>Crear</Button>
                <Button color="primary" disabled={!idProductSelected}>Editar</Button>
                <Button color="error" disabled={!idProductSelected}>Eliminar</Button>
            </ButtonsActions>
            <ContainerTable>
                <DataGrid
                    rows={products}
                    columns={columns}
                    rowHeight={200}
                    disableColumnMenu
                    onSelectionModelChange={(ids) => {
                        setIdProductSelected(ids[0]);
                    }}

                />
            </ContainerTable>
            <ProductForm data={dataForm} onClose={onCloseForm} />
        </>
    )
}

const ButtonsActions = styled(ButtonGroup)`
    margin-bottom: 10px;
`;

const ImageProduct = styled.img`
    width: 90%;
    height: 90%;
    object-fit: cover;
    margin-left: auto;
    margin: auto;
`;

const ContainerTable = styled.div`
    height: 45rem;
    width: 100%;
`;