import { Button } from '@mui/material'
import React, { useState } from 'react'
import DataTable from '../components/DataTable/DataTable'
import FormDialog from '../components/FormDialog/FormDialog';

const Lecture = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleSubmit = (data) => {
    setOpen(false);
  }

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '100px' }}>
      <section style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h2 style={{ color: 'white'}}>Lecturer Dashboard</h2>
        <Button variant='contained' style={{ width: '200px',backgroundColor: '#3CB371' }} onClick={handleOpen}>Add new Lecturer</Button>
        <FormDialog title='Add new Lecturer' type="lecturer" open={open} onClose={handleClose} onSubmit={handleSubmit}/>
      </section>
      <section >
        <DataTable type={'lecturer'} data={[]} />
      </section>
    </div>
  )
}

export default Lecture
