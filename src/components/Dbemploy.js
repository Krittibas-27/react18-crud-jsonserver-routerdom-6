import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Button, Badge, Row, Col, Form, InputGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import LoadingSpinner from './LoadingSpinner'
import SelectedViewModal from './jsonservercrud/SelectedViewModal'
import TableEmployList from './jsonservercrud/TableEmployList'

const Dbemploy = () => {
    const navigate = useNavigate()
    const [allEmployList, setAllEmployList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [selectedEmployList, setSelectedEmployList] = useState([])
    const [viewSelectedModal, setViewSelectedModal] = useState(false)
    const [query, setQuery]=useState("")

    const getAllEmployee = () => {
        setIsLoading(true)
        axios.get(`${process.env.REACT_APP_JSON_SERVER_BASE_URL}/employee`)
            .then((res) => {
                //console.log('res-', res)
                if (res.status === 200) {
                    setAllEmployList(res.data.reverse())
                    setIsLoading(false)
                }
            })
            .catch((err) => {
                setIsError(true)
                setIsLoading(false)
            })
    }
    const viewEmployee = (item) => {
        //console.log('item-', item)
        navigate(`/jsonserver/dbemploy/${item.id}`, {
            state: { singleEmployee: item }
        })
    }
    const deleteEmploy = (item) => {
        if (window.confirm('Do you want to delete')) {
            axios.delete(`${process.env.REACT_APP_JSON_SERVER_BASE_URL}/employee/${item.id}`)
                .then((res) => {
                    // console.log('res-', res)
                    if (res.status === 200) {
                        getAllEmployee()
                        setIsLoading(false)
                    }
                })
                .catch((err) => {
                    //console.log('err-', err)
                    setIsError(true)
                    setIsLoading(false)
                })
        }

    }
    const editEmployee = (data) => {
        navigate(`/jsonserver/dbemploy/edit/${data.id}`, {
            state: { singleEmployEdit: data }
        })
    }
    const addEmployee = () => {
        navigate('/jsonserver/dbemploy/create')
    }
    const selectedEmploy = (data) => {
        if (selectedEmployList.indexOf(data) !== -1) return
        setSelectedEmployList([...selectedEmployList, data])
    }
    const viewListEmploy = () => {
        setViewSelectedModal(true)
    }
    const deleteSelect = (data) => {
        if (window.confirm('Want to delete this employee')) {
            const updateList = selectedEmployList.filter((ele) => ele.id !== data.id)
            setSelectedEmployList(updateList)
        }
    }
    const deleteAllSelected = () => {
        setSelectedEmployList([])
        setTimeout(() => {
            setViewSelectedModal(false)
        }, 1000);
    }
    const searchEmploy=(item)=>{
        return allEmployList.filter((ele)=>{
            return ele.employeename.toLowerCase().includes(query) || ele.email.toLowerCase().includes(query) || ele.gender.toLowerCase().includes(query) ||ele.phone.toLowerCase().includes(query)
        })
    }
    const resetSearch=()=>{
        setQuery("")
    }

    useEffect(() => {
        getAllEmployee()
    }, [])

    return (
        <div className="my-4">
            <Container>
                <h1 className="text-center pb-4">Json Server Employee Todo</h1>
                <div className='text-center my-4'>
                    <span>
                        <Button className='mx-1' variant="primary" onClick={() => addEmployee()}>Add Employee +</Button>
                        <Button className='mx-1' variant="dark" onClick={() => viewListEmploy()} disabled={selectedEmployList.length === 0}>Selected Employee <Badge bg="light" text="dark"> {selectedEmployList.length} </Badge></Button>
                    </span>
                    <Row  className='mt-4'>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="Search here"
                                        type="text"
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                    />
                                    <Button variant="primary" onClick={()=>resetSearch()}>
                                        Reset
                                    </Button>
                                </InputGroup>
                            </Form>
                        </Col>
                    </Row>
                </div>
                {
                    isLoading ?
                        <LoadingSpinner /> :
                        isError ? <h3 className='text-danger text-center border'>Data not found</h3> :
                        <TableEmployList allEmployList={allEmployList} viewEmployee={viewEmployee} editEmployee={editEmployee} deleteEmploy={deleteEmploy} selectedEmploy={selectedEmploy} searchEmploy={searchEmploy} />            
                }
                <SelectedViewModal viewSelectedModal={viewSelectedModal} setViewSelectedModal={setViewSelectedModal} deleteAllSelected={deleteAllSelected} selectedEmployList={selectedEmployList} deleteSelect={deleteSelect} />
            </Container>
        </div>
    )
}

export default Dbemploy