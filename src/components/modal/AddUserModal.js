import React from 'react'
import {
    Row,
    Col,
    Form,
    Button,
    Modal
} from "react-bootstrap";

const AddUserModal = ({
    addModal, setAddModal, errAddModal, addHandelSubmit, addUser, handelChange
}) => {
    return (
        <Modal size="lg" centered show={addModal} onHide={() => setAddModal()}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Add User{" "}
                    <small className="text-danger">
                        {errAddModal ? "- Enter valid text here" : ""}
                    </small>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={addHandelSubmit}>
                    <Form.Control
                        className="my-2"
                        placeholder="User Image url"
                        type="text"
                        name="image"
                        value={addUser.image}
                        onChange={handelChange}
                    />
                    <Row>
                        <Col>
                            <Form.Control
                                className="my-3"
                                placeholder="Name"
                                type="text"
                                name="firstName"
                                value={addUser.firstName}
                                onChange={handelChange}
                            />
                            <Form.Control
                                className="my-3"
                                placeholder="Email"
                                type="text"
                                name="email"
                                value={addUser.email}
                                onChange={handelChange}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                className="my-3"
                                placeholder="Phone"
                                type="text"
                                name="phone"
                                value={addUser.phone}
                                onChange={handelChange}
                            />
                            <Form.Control
                                className="my-3"
                                placeholder="Age"
                                type="text"
                                name="age"
                                value={addUser.age}
                                onChange={handelChange}
                            />
                        </Col>
                    </Row>
                    <div className="text-center my-4">
                        <Button type="submit" className="text-center" variant="primary">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default AddUserModal