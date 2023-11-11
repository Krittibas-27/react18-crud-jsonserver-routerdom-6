import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const EditEmployee = () => {
    const { eid } = useParams()
    const navigate = useNavigate()

    const [editEmployDetails, setEditEmployDetails] = useState({
        employeename: "",
        email: "",
        phone: "",
        gender: ""
    })
    const editSingleEmployee = () => {
        axios.get(`${process.env.REACT_APP_JSON_SERVER_BASE_URL}/employee/${eid}`)
            .then((res) => {
                setEditEmployDetails(res.data)
            })
            .catch((err) => {
                console.log('err=>', err);
            });
    };

    const handelSubmit = (e) => {
        e.preventDefault()
        axios.put(`${process.env.REACT_APP_JSON_SERVER_BASE_URL}/employee/${eid}`, editEmployDetails)
            .then((res) => {
                if (res.status === 200) {
                    setEditEmployDetails(res.data)
                    alert('Employee Details edit successful!!')
                    navigate('/jsonserver/dbemploy/')
                }
            })
            .catch((err) => console.log('err-', err))
    }

    useEffect(() => {
        editSingleEmployee()
        return () => {
            editSingleEmployee()
        }
    }, [])

    //console.log('editEmployDetails-', editEmployDetails)
    return (
        <div className="my-4">
            <Container>
                <h1 className='text-center'>DB Employ Edit - <Button className='mx-1' variant="info" onClick={()=>navigate('/jsonserver/dbemploy/')}>Go Back</Button></h1>
                <div className="my-4">
                    <Form onSubmit={handelSubmit}>
                        <div className='bg-dark p-4'>
                            <Row>
                                <Col md={{ span: 4, offset: 2 }}>
                                    <Form.Control className='my-3' name="employeename" placeholder="Employee Name" value={editEmployDetails.employeename} onChange={(e) => setEditEmployDetails({ ...editEmployDetails, employeename: e.target.value })} />
                                    <Form.Control className='my-3' name="email" placeholder="Email" value={editEmployDetails.email} onChange={(e) => setEditEmployDetails({ ...editEmployDetails, email: e.target.value })} />
                                </Col>
                                <Col md={4}>
                                    <Form.Control className='my-3' name="phone" placeholder="Phone" value={editEmployDetails.phone} onChange={(e) => setEditEmployDetails({ ...editEmployDetails, phone: e.target.value })} />
                                    <Form.Control className='my-3' name="gender" placeholder="Gender" value={editEmployDetails.gender} onChange={(e) => setEditEmployDetails({ ...editEmployDetails, gender: e.target.value })} />

                                </Col>
                            </Row>
                            <div className='text-center'> <Button type='submit' className='mx-1' variant="primary">Submit Edit</Button> </div>
                        </div>
                    </Form>
                </div>

            </Container>
        </div>
    )
}

export default EditEmployee