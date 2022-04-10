import { DataFormDialog } from "@models/DataFormDialog.model";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material"
import { FC } from "react";


interface IProps {
    data: DataFormDialog;
    onClose: (result: boolean) => void;
}

export const ProductForm: FC<IProps> = ({ data: { id, open }, onClose }) => {



    return (
        <Dialog open={open} onClose={() => onClose(false)}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onClose(false)}>Cancel</Button>
                <Button onClick={() => onClose(false)}>Subscribe</Button>
            </DialogActions>
        </Dialog >
    )
}
