import React from 'react'
import {
    Row,
    Col,
    Button,
    Container,
    Image,
    Modal
} from "react-bootstrap";

const ViewUserModal = ({
    viewModal,setViewModal,viewModalItem
}) => {
  return (
    <Modal
          size="md"
          centered
          show={viewModal}
          onHide={() => setViewModal()}
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-primary">
              View {`${viewModalItem.firstName}`} details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col md={4}>
                  <Image
                    src={viewModalItem.image}
                    thumbnail
                    style={{ width: "150px" }}
                  />
                </Col>
                <Col md={8}>
                  <h6>Name - {viewModalItem.firstName} </h6>
                  <p>Email - {viewModalItem.email}</p>
                  <p>Phone - {viewModalItem.phone}</p>
                  <p>Age - {viewModalItem.age}</p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setViewModal()}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
  )
}

export default ViewUserModal