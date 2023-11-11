import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table, Button } from 'react-bootstrap'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const DbEmployDetails = () => {
  const { eid } = useParams()
  const navigate = useNavigate()
  const { state } = useLocation()
  console.log('state=>', state);
  const [viewEmployDetails, setViewEmployDetails] = useState({})

  const getSingleEmployee = () => {
    axios.get(`${process.env.REACT_APP_JSON_SERVER_BASE_URL}/employee/${eid}`)
      .then((res) => {
        //console.log('resp=>', res.data);
        setViewEmployDetails(res.data);
      })
      .catch((err) => {
        console.log('err=>', err);
      });
  };

  const goBack = () => {
    navigate(`/jsonserver/dbemploy/`)
  }

  useEffect(() => {
    getSingleEmployee();

    return () => {
      getSingleEmployee();
    }
  }, [])

  return (
    <div className="my-4">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h1>DB Employ Details <Button className='mx-1' variant="primary" onClick={() => goBack()}>Go Back</Button></h1>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>{viewEmployDetails.employeename} Details -</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h4>Name : {viewEmployDetails.employeename}</h4>
                    <h6>Email : {viewEmployDetails.email}</h6>
                    <h6>Gender : {viewEmployDetails.gender}</h6>
                    <h6>Phone : {viewEmployDetails.phone}</h6>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>{state.singleEmployee.employeename} Details -</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h4>Name : {state.singleEmployee.employeename}</h4>
                    <h6>Email : {state.singleEmployee.email}</h6>
                    <h6>Gender : {state.singleEmployee.gender}</h6>
                    <h6>Phone : {state.singleEmployee.phone}</h6>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Button className='mx-1' variant="primary" onClick={() => goBack()}>Go Back</Button>
          </Col>
        </Row>


      </Container>
    </div>
  )
}

export default DbEmployDetails