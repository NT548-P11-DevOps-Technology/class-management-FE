import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import React, { useState } from 'react'

const FormDialog = ({ title, type, action, selectedId, open, onClose }) => {
    const [formData, setFormData] = useState({});
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = () => {
        if (action === 'add') {
            handleAdd();
        } else if (action === 'edit') {
            handleEdit(selectedId);
        }
        onClose();
    };

    const handleAdd = (e) => {
        if (e) e.preventDefault();
        const student = {
            fullName: formData.fullName,
            yearOfBirth: formData.yearOfBirth,
            course: formData.course,
            classCode: formData.classCode,
            phoneNumber: formData.phoneNumber,
            email: formData.email
         }
        console.log(student)
        fetch("http://localhost:8080/student/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        })
        .then(() => {
            alert("Student added successfully")
        })
        .catch((err) => {
            alert(err)
        })
    }
    
    const handleEdit = (id) => {
        const student = { 
            id: id,
            fullName: formData.fullName,
            yearOfBirth: formData.yearOfBirth,
            course: formData.course,
            classCode: formData.classCode,
            phoneNumber: formData.phoneNumber,
            email: formData.email
         }
        fetch("http://localhost:8080/student/"+id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        })
        .then(() => {
            alert("Student updated successfully")
        })
        .catch((err) => {
            alert(err)
        })
    }

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
