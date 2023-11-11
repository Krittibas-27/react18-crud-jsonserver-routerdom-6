import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserTodo from './components/UserTodo';
import Menubar from './components/Menubar';
import Dbemploy from './components/Dbemploy';
import DbEmployDetails from './components/jsonservercrud/DbEmployDetails';
import EditEmployee from './components/jsonservercrud/EditEmployee';
import AddEmployee from './components/jsonservercrud/AddEmployee';

const App =()=>{
  return (
    <>
    <Menubar/>
    <Routes>
      <Route exac path='/usertodo' element={<UserTodo/>} />
      <Route exac path='/jsonserver/dbemploy' element={<Dbemploy/>} />
      <Route exac path='/jsonserver/dbemploy/:eid' element={<DbEmployDetails />} />
      <Route exac path='/jsonserver/dbemploy/create' element={<AddEmployee/>} />
      <Route exac path='/jsonserver/dbemploy/edit/:eid' element={<EditEmployee/>} />
    </Routes>
    </>
  )
}

export default App;
