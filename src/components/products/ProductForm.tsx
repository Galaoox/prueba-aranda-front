import { DataFormDialog } from "@models/DataFormDialog.model";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material"
import { FC, useState } from "react";
import { DataProductForm } from '@models/DataProductForm.model';

interface IProps {
    data: DataFormDialog;
    onClose: (result: boolean) => void;
}

export const ProductForm: FC<IProps> = ({ data: { id, open }, onClose }) => {
    const [form, setForm] = useState(new DataProductForm());


    return (
        <Dialog open={open} onClose={() => onClose(false)}>
            <DialogTitle>{id ? 'Editar' : 'Crear'} producto</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Nombre"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    margin="dense"
                    id="name"
                    label="Descripcion"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    margin="dense"
                    id="name"
                    label="Categoria"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                <Button
                    variant="contained"
                    component="label"
                    fullWidth
                >
                    Imagen
                    <input
                        type="file"
                        hidden
                    />
                </Button>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onClose(false)}>Cancelar</Button>
                <Button onClick={() => onClose(false)}>Guardar</Button>
            </DialogActions>
        </Dialog >
    )
}
