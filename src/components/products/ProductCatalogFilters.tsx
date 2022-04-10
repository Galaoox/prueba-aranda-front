import styled from '@emotion/styled';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { FormFilters } from '@models/FormFilters.model';
import { FC, useState } from 'react';
import { FilterItem } from '../../models/FilterItem';

const sxPropertyInputs = { m: 1, minWidth: 120 };

const listFields: FilterItem[] = [
    {
        label: 'Ninguno',
        value: '',
    },
    {
        label: 'Nombre',
        value: 'name',
    },
    {
        label: 'Categoria',
        value: 'category',
    },
]

const listOrder: FilterItem[] = [
    {
        label: 'Ninguno',
        value: '',
    },
    {
        label: 'Ascendente',
        value: 'asc',
    },
    {
        label: 'Descendente',
        value: 'desc',
    },
]

interface IProps {
    handleFilters: (filters: FormFilters) => void;
}

export const ProductCatalogFilters: FC<IProps> = ({ handleFilters }) => {

    const [form, setForm] = useState<FormFilters>(new FormFilters());

    const handleChangesForm = (field: string, value: string) => {
        const data = { ...form, [field]: value };
        if (field === 'field' && !value) data.order = '';
        setForm(data);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        handleFilters(form);
    }

    return (
        <ContainerFilters onSubmit={handleSubmit}>
            <FormControl sx={sxPropertyInputs} size="small">
                <InputLabel id="Campo">Campo</InputLabel>
                <Select
                    labelId="campoFiltro"
                    id="campoFiltro"
                    value={form.field}
                    label="Campo"
                    onChange={(e) => handleChangesForm('field', e.target.value)}
                >
                    {listFields.map(({ value, label }) => <MenuItem key={value} value={value}>{label}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl sx={sxPropertyInputs} size="small" disabled={!form.field}>
                <InputLabel id="Ordenamiento">Orden</InputLabel>
                <Select
                    labelId="campoFiltro"
                    id="campoFiltro"
                    value={form.order}
                    label="Campo"
                    onChange={(e) => handleChangesForm('order', e.target.value)}
                >
                    {listOrder.map(({ value, label }) => <MenuItem key={value} value={value}>{label}</MenuItem>)}

                </Select>
            </FormControl>
            <TextField sx={sxPropertyInputs} value={form.search} onChange={(e) => handleChangesForm('search', e.target.value)} type="search" size="small" id="search-input" label="Buscar" variant="outlined" />

            <Button sx={sxPropertyInputs} type="submit" size='small' variant="contained">Filtrar</Button>

        </ContainerFilters>
    )
}

const ContainerFilters = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: end;
`;
