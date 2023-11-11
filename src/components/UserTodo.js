import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  Badge,
} from "react-bootstrap";
import LoadingSpinner from "./LoadingSpinner";
import AddUserModal from "./modal/AddUserModal";
import ViewUserModal from "./modal/ViewUserModal";
import EditUserModal from "./modal/EditUserModal";
import SelectDataModal from "./modal/SelectDataModal";
import TableUserList from "./TableUserList";

const UserTodo = () => {
  const [userAllData, setUserAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [query, setQuery] = useState("");

  const [addModal, setAddModal] = useState(false);
  const [errAddModal, setErrAddModal] = useState(false);
  const [addUser, setAddUser] = useState({
    image: "",
    firstName: "",
    age: "",
    email: "",
    phone: "",
    id: "",
  });

  const [viewModal, setViewModal] = useState(false);
  const [viewModalItem, setViewModalItem] = useState({});

  const [editModal, setEditModal] = useState(false);
  const [errEditModal, setErrEditModal] = useState("");
  const [getEditData, setGetEditData] = useState(null);
  const [editUser, setEditUser] = useState({
    image: "",
    firstName: "",
    age: "",
    email: "",
    phone: "",
    id: "",
  });
  const [selectedUser, setSelectedUser] = useState([]);

  const [selectedViewModal, setSelectedViewModal] = useState(false);

  const getAllUsers = () => {
    setIsLoading(true);
    axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        if (res.status === 200) {
          setUserAllData(res.data.users.reverse());
          setIsLoading(false);
          setIsError(false);
        }
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  };
  const searchElement = (user) => {
    return user.filter((data) => {
      return (
        data.firstName.toLowerCase().includes(query) ||
        data.email.toLowerCase().includes(query) ||
        data.phone.toLowerCase().includes(query)
      );
    });
  };
  const resetSearch = () => {
    setQuery("");
  };
  const addUserData = () => {
    setAddModal(true);
  };

  const handelChange = (e) => {
    const { name, value } = e.target;
    setAddUser({ ...addUser, [name]: value });
  };
  const addHandelSubmit = (e) => {
    e.preventDefault();
    const { image, firstName, age, email, phone } = addUser;
    if (
      image === "" ||
      firstName === "" ||
      age === "" ||
      email === "" ||
      phone === ""
    ) {
      setErrAddModal(true);
      setTimeout(() => {
        setErrAddModal(false);
      }, 2000);
      return;
    }
    setUserAllData([
      ...userAllData,
      {
        id: Date.now(),
        image,
        firstName,
        age,
        email,
        phone,
      },
    ]);
    setAddUser({
      image: "",
      firstName: "",
      age: "",
      email: "",
      phone: "",
      id: "",
    });
    setTimeout(() => {
      setAddModal(false);
    }, 1000);
  };

  const viewUserData = (item) => {
    setViewModal(true);
    setViewModalItem(item);
    console.log("item - ", item);
  };

  const deleteUser = (ele) => {
    if (window.confirm("Do you want to delete?")) {
      const updatedData = userAllData.filter((item) => {
        return item.id !== ele.id;
      });
      setUserAllData(updatedData);
    }
  };

  const editUserData = (data) => {
    setEditModal(true);
    setGetEditData(data.id);
    const { image, firstName, age, email, phone } = data;
    if (
      image === "" ||
      firstName === "" ||
      age === "" ||
      email === "" ||
      phone === ""
    ) {
      setErrEditModal(true);
      setTimeout(() => {
        setErrEditModal(false);
      }, 2000);
      return;
    }
    setEditUser({ image, firstName, age, email, phone });
  };
  const editHandeler = (e) => {
    const { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
  };

  const editHandelSubmit = (e) => {
    e.preventDefault();
    const { image, firstName, age, email, phone } = editUser;

    const allUdtatedUser = userAllData.map((item) => {
      if (item.id === getEditData) {
        return {
          ...editUser,
          image,
          firstName,
          age,
          email,
          phone,
        };
      }
      return item;
    });
    setUserAllData(allUdtatedUser);
    setEditUser({
      image: "",
      firstName: "",
      age: "",
      email: "",
      phone: "",
      id: "",
    });
    setTimeout(() => {
      setEditModal(false);
    }, 500);
  };
  const dataStorArray = (ele) => {
    if (selectedUser.indexOf(ele)) return;
    setSelectedUser([...selectedUser, ele]);
  };
  const selectedUserView = () => {
    if (selectedUser.length === 0) {
      return;
    }
    setSelectedViewModal(true);
  };

  const selectUserRemove=(data)=>{
    if(window.confirm('Do you want to remove item')){
        const updateUser = selectedUser.filter((user)=>user.id !==data.id)
    setSelectedUser(updateUser)
    }
  }
const selectAllUserRemove=()=>{
    if(window.confirm('Do you want to remove all item')){
        setSelectedUser([])
    }
}
  //console.log('selectedUser-', selectedUser)
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="my-4">
      <Container>
        <h1 className="text-center pb-4">User Todo</h1>
        <Row>
          <Col className="text-center mb-4">
            <h3>
              Employee List{" "}
              <Button variant="info" onClick={() => addUserData()}>
                + Add User{" "}
              </Button>
            </h3>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 6, offset: 2 }}>
            <Form>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Username"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Button variant="primary" onClick={() => resetSearch()}>
                  Reset
                </Button>
              </InputGroup>
            </Form>
          </Col>
          <Col>
            <Button
              variant="secondary"
              disabled={selectedUser.length === 0}
              onClick={() => selectedUserView()}
            >
              Selected User <Badge bg="dark">{selectedUser.length}</Badge>
            </Button>
          </Col>
        </Row>

        {isLoading ? (
          <LoadingSpinner />
        ) : isError ? (
          <h4 className="text-center text-danger">Something went wrong</h4>
        ) : (
            <TableUserList  userAllData={userAllData} searchElement={searchElement} viewUserData={viewUserData} editUserData={editUserData} deleteUser={deleteUser} dataStorArray={dataStorArray} selectedUser={selectedUser} />
        )}
        <AddUserModal addModal={addModal} setAddModal={setAddModal} errAddModal={errAddModal} addHandelSubmit={addHandelSubmit} addUser={addUser} handelChange={handelChange}  />
        <ViewUserModal viewModal={viewModal} setViewModal={setViewModal} viewModalItem={viewModalItem} />
        <EditUserModal editModal={editModal} setEditModal={setEditModal} editUser={editUser} errEditModal={errEditModal} editHandelSubmit={editHandelSubmit} editHandeler={editHandeler}/>
        <SelectDataModal selectedViewModal={selectedViewModal} setSelectedViewModal={setSelectedViewModal} selectedUser={selectedUser} selectAllUserRemove={selectAllUserRemove} selectUserRemove={selectUserRemove} />
      </Container>
    </div>
  );
};

export default UserTodo;