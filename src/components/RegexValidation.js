import React, { useState } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import { ValidationRgx } from './ValidationRgx'


const RegexValidation = () => {
    const [value, setValues] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    })
    const [errMsg, setErrMsg] = useState({})
    const handelSubmit = (e) => {
        e.preventDefault()
        setErrMsg(ValidationRgx(value))
    }
    //console.log('errMsg Name-', errMsg)
    //console.log('value-', value)
    return (
        <div className="my-4">
            <Container>
                <h1 className='text-center'>Regex Validation</h1>
                <Form onSubmit={handelSubmit}>
                    <Row>
                        <Col md={{ span: 4, offset: 4 }}>
                            <Form.Control className='my-3' name="employeename" value={value.name} placeholder="Name" onChange={(e) => setValues({ ...value, name: e.target.value })} />
                            {errMsg.name && <span className='text-danger'>{errMsg.name}</span>}
                            <Form.Control className='my-3' name="email" value={value.email} placeholder="Email" onChange={(e) => setValues({ ...value, email: e.target.value })} />
                            {errMsg.email && <span className='text-danger'>{errMsg.email}</span>}
                            <Form.Control className='my-3' name="phone" value={value.phone} placeholder="Phone" onChange={(e) => setValues({ ...value, phone: e.target.value })} />
                            {errMsg.phone && <span className='text-danger'>{errMsg.phone}</span>}
                            <Form.Control className='my-3' name="password" value={value.password} placeholder="Password" onChange={(e) => setValues({ ...value, password: e.target.value })} />
                            {errMsg.password && <span className='text-danger'>{errMsg.password}</span>}<br/>
                            <Button type='submit' className='mt-4' variant="primary">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}

export default RegexValidation