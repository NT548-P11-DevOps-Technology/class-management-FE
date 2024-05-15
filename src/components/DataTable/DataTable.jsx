import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { student_columns } from '../../constants/student_columns';
import { lecturer_columns } from '../../constants/lecturer_columns';
import { class_columns } from '../../constants/class_columns';
import { Button } from '@mui/material';
import FormDialog from '../FormDialog/FormDialog';

const DataTable = ({ type, data }) => {
    const [selectedRow, setSelectedRow] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    let columns;
    switch (type) {
        case 'student':
            columns = student_columns;
            break;
        case 'lecturer':
            columns = lecturer_columns;
            break;
        case 'class':
            columns = class_columns;
            break;
        default:
            columns = [];
            break;
    }

    const handleEdit = (row) => {
        setSelectedRow(row);
        setOpenDialog(true);
    };

    const handleDelete = (row) => {
        console.log('Delete row', row);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }

    const editDeleteColumns = [
        {
            field: 'edit',
            headerName: 'Edit',
            width: 100,
            renderCell: (params) => (
                <Button
                    variant='contained'
                    style={{ backgroundColor: '#FFD700', color: 'black' }}
                    onClick={() => handleEdit(params.row)}
                >
                    Edit
                </Button>
            ),
        },
        {
            field: 'delete',
            headerName: 'Delete',
            width: 100,
            renderCell: (params) => (
                <Button
                    variant='contained'
                    style={{ backgroundColor: '#DC143C' }}
                    onClick={() => handleDelete(params.row)}
                >
                    Delete
                </Button>
            ),
        },
    ];

    if (type === 'student' || type === 'lecturer') {
        columns = [...columns, ...editDeleteColumns];
    }

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                style={{ backgroundColor: '#0E78F9' }}
            />
            <FormDialog title={type === 'student' ? 'Edit Student' : 'Edit Lecturer'} type={type} open={openDialog} onClose={handleCloseDialog}/>
        </div>
    );
};

export default DataTable;
