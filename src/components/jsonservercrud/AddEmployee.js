import axios from 'axios'
import React, { useState } from 'react'
import { Col, Container, Row, Button, Card, Form } from 'react-bootstrap'

const AddEmployee = () => {
    const [addEmployList, setAddEmployList] = useState({
        employeename: "",
        email: "",
        phone: "",
        gender: ""
    })
    const [err, setErr] = useState(false)

    const handelChange = (e) => {
        const { name, value } = e.target;
        setAddEmployList({ ...addEmployList, [name]: value })
    }
    const handelSubmit = (e) => {
        e.preventDefault()
        const { employeename, email, phone, gender } = addEmployList
        if (employeename === "" || email === "" || phone === "" || gender === "") {
            setErr(true)
            setTimeout(() => {
                setErr(false)
            }, 1000);
            return
        }
        axios.post(`${process.env.REACT_APP_JSON_SERVER_BASE_URL}/employee`, {
            id: Date.now().toString(), employeename, email, phone, gender
        })
            .then((res) => {
                alert('Employee added successfully!!')
                setAddEmployList({
                    employeename: "",
                    email: "",
                    phone: "",
                    gender: ""
                })
            })
            .catch((err) => console.log(err))
    }
    //console.log('addEmployList', addEmployList)
    return (
        <div className="my-4">
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <h1 className='text-center mb-4'>Create Employee</h1>
                        <p className='text-center text-danger'>{err ? "* Put your text here" : ""}</p>
                        <Card body variant="dark">
                            <Form onSubmit={handelSubmit}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Control className='my-3' name="employeename" placeholder="Employee Name" value={addEmployList.employeename} onChange={handelChange} />
                                        <Form.Control className='my-3' name="email" placeholder="Email" value={addEmployList.email} onChange={handelChange} />
                                    </Col>
                                    <Col md={6}>
                                        <Form.Control className='my-3' name="phone" placeholder="Phone" value={addEmployList.phone} onChange={handelChange} />
                                        <Form.Control className='my-3' name="gender" placeholder="Gender" value={addEmployList.gender} onChange={handelChange} />
                                    </Col>
                                </Row>
                                <div className='text-center'> <Button type='submit' className='mx-1' variant="primary">Add Employee</Button> </div>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AddEmployee