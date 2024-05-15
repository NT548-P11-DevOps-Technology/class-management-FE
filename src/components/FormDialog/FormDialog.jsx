import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import React, { useState } from 'react'

const FormDialog = ({ title, type, open, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({});
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = () => {
        onSubmit(formData);
        onClose();
    };

    const getFields = () => {
        switch (type) {
            case 'student':
                return (
                    <>
                        <TextField
                            margin="dense"
                            name="fullName"
                            label="Full Name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            margin="dense"
                            name="yearOfBirth"
                            label="Year of Birth"
                            type="number"
                            fullWidth
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            margin="dense"
                            name="course"
                            label="Course"
                            type="text"
                            fullWidth
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            margin="dense"
                            name="classCode"
                            label="Class Code"
                            type="text"
                            fullWidth
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            margin="dense"
                            name="phoneNumber"
                            label="Phone Number"
                            type="text"
                            fullWidth
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            margin="dense"
                            name="email"
                            label="Email"
                            type="email"
                            fullWidth
                            variant="outlined"
                            onChange={handleChange}
                        />
                    </>
                );
            case 'lecturer':
                return (
                    <>
                        <TextField
                            margin="dense"
                            name="fullName"
                            label="Full Name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            margin="dense"
                            name="degree"
                            label="Degree"
                            type="text"
                            fullWidth
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            margin="dense"
                            name="classCode"
                            label="Class Code"
                            type="text"
                            fullWidth
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            margin="dense"
                            name="phoneNumber"
                            label="Phone Number"
                            type="text"
                            fullWidth
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            margin="dense"
                            name="email"
                            label="Email"
                            type="email"
                            fullWidth
                            variant="outlined"
                            onChange={handleChange}
                        />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <DialogTitle style={{ fontWeight: 'bold' }}>{title}</DialogTitle>
            <DialogContent>{getFields()}</DialogContent>
            <DialogActions>
                <Button variant='outlined' onClick={onClose} color="secondary">
                    Cancel
                </Button>
                <Button variant='contained' onClick={handleSubmit} color="primary">
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default FormDialog
