import React from 'react'
import {
    Button,
    Image,
    Table
} from "react-bootstrap";

const TableUserList = ({
    userAllData, searchElement, viewUserData, editUserData, deleteUser, dataStorArray, selectedUser
}) => {
    return (
        <Table striped bordered hover variant="dark">
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
                {userAllData.length > 0 &&
                    searchElement(userAllData).map((users, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <Image
                                        src={users.image}
                                        thumbnail
                                        style={{ width: "70px" }}
                                    />
                                </td>
                                <td>{users.firstName}</td>
                                <td>{users.age}</td>
                                <td>{users.email}</td>
                                <td>{users.phone}</td>
                                <td>
                                    <Button
                                        className="mx-1"
                                        variant="success"
                                        onClick={() => viewUserData(users)}
                                    >
                                       View
                                    </Button>
                                    <Button
                                        className="mx-1"
                                        variant="warning"
                                        onClick={() => editUserData(users)}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        className="mx-1"
                                        variant="danger"
                                        onClick={() => deleteUser(users)}
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        className="mx-1"
                                        variant="light"
                                        onClick={() => dataStorArray(users)}
                                        disabled={selectedUser.some(
                                            (item) => item.id === users.id
                                        )}
                                    >
                                        Data Store
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
        </Table>
    )
}

export default TableUserList