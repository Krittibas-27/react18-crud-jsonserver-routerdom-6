import React from 'react'
import {
    Button,
    Image,
    Table,
    Modal
} from "react-bootstrap";

const SelectDataModal = ({
    selectedViewModal,setSelectedViewModal,selectedUser,selectAllUserRemove,selectUserRemove
}) => {
    return (
        <Modal
            size="lg"
            centered
            show={selectedViewModal}
            onHide={() => setSelectedViewModal()}
        >
            <Modal.Header closeButton>
                <Modal.Title className="text-primary">
                    Selected users details - {selectedUser.length}
                    <Button className="mx-2" variant="danger" onClick={() => selectAllUserRemove()}>Remove All</Button>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    selectedUser.length === 0 ?
                        <h4 className="text-center">No data found</h4> :
                        <Table responsive bordered variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Employee Image</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedUser &&
                                    selectedUser.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <Image
                                                        src={item.image}
                                                        thumbnail
                                                        style={{ width: "50px" }}
                                                    />
                                                </td>
                                                <td>{item.firstName}</td>
                                                <td>{item.age}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>
                                                    <Button className="mx-1" variant="danger" onClick={() => selectUserRemove(item)}>x</Button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </Table>
                }

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setSelectedViewModal()}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SelectDataModal