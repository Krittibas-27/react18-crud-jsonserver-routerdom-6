import React from 'react'
import {
    Row,
    Col,
    Button,
    Form,
    Modal
} from "react-bootstrap";

const EditUserModal = ({
    editModal, setEditModal, editUser, errEditModal, editHandelSubmit, editHandeler
}) => {
    return (
        <Modal
            size="lg"
            centered
            show={editModal}
            onHide={() => setEditModal()}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Edit {editUser.firstName} Details{" "}
                    <small className="text-danger">
                        {errEditModal ? "- Enter your text here" : ""}
                    </small>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={editHandelSubmit}>
                    <Form.Control
                        className="my-2"
                        type="text"
                        name="image"
                        value={editUser.image}
                        onChange={editHandeler}
                    />
                    <Row>
                        <Col>
                            <Form.Control
                                className="my-3"
                                placeholder="Name"
                                type="text"
                                name="firstName"
                                value={editUser.firstName}
                                onChange={editHandeler}
                            />
                            <Form.Control
                                className="my-3"
                                placeholder="Email"
                                type="text"
                                name="email"
                                value={editUser.email}
                                onChange={editHandeler}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                className="my-3"
                                placeholder="Phone"
                                type="text"
                                name="phone"
                                value={editUser.phone}
                                onChange={editHandeler}
                            />
                            <Form.Control
                                className="my-3"
                                placeholder="Age"
                                type="text"
                                name="age"
                                value={editUser.age}
                                onChange={editHandeler}
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
export default EditUserModal