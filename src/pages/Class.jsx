import React from 'react'
import DataTable from '../components/DataTable/DataTable'

const Class = () => {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '100px' }}>
      <h2 style={{ color: 'white'}}>Class Dashboard</h2>
      <section >
        <DataTable type={'class'} data={[]} />
      </section>
    </div>
  )
}

export default Class
