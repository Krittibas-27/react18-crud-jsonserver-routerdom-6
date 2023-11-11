import React from 'react'
import { Button, Modal, Card } from 'react-bootstrap'
const SelectedViewModal = ({
    viewSelectedModal, setViewSelectedModal, deleteAllSelected, selectedEmployList, deleteSelect
}) => {
    return (
        <Modal show={viewSelectedModal} onHide={() => setViewSelectedModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Selected Employ List - <Button variant="danger" onClick={() => deleteAllSelected()}>Delete all</Button>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    selectedEmployList.length === 0 ?
                        <h4 className='text-center text-primary'>Selected employee not avaliable</h4> :
                        selectedEmployList.map((ele) => {
                            return (
                                <Card body key={ele.id} className='mb-2'>
                                    <h6>Name - {ele.employeename}</h6>
                                    <h6>Email : {ele.email}</h6>
                                    <h6>Gender : {ele.gender}</h6>
                                    <h6>Phone : {ele.phone}</h6>
                                    <Button variant="danger" style={{ float: "right", marginTop: "-80px" }} onClick={() => deleteSelect(ele)}>X</Button>
                                </Card>
                            )
                        })
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setViewSelectedModal(false)}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SelectedViewModal