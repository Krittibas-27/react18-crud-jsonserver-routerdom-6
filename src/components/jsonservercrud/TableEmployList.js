import React from 'react'
import { Table, Button } from 'react-bootstrap'

const TableEmployList = ({
    allEmployList, viewEmployee, editEmployee, deleteEmploy, selectedEmploy,searchEmploy
}) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Employee Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    allEmployList.length === 0 ?
                        <h1>Employee list not found</h1> :
                        searchEmploy(allEmployList).map((emp, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{emp.employeename}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.phone}</td>
                                    <td>{emp.gender}</td>
                                    <td>
                                        <Button className='mx-1' variant="success" onClick={() => viewEmployee(emp)}>View</Button>
                                        <Button className='mx-1' variant="warning" onClick={() => editEmployee(emp)}>Edit</Button>
                                        <Button className='mx-1' variant="danger" onClick={() => deleteEmploy(emp)}>Delete</Button>
                                        <Button className='mx-1' variant="secondary" onClick={() => selectedEmploy(emp)}>Select Employee </Button>
                                    </td>
                                </tr>
                            )
                        })
                }
            </tbody>
        </Table>
    )
}

export default TableEmployList