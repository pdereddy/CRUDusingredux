import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { usersAction ,singleUserInfo,deleteUser} from '../redux/actions/usersAction';
import '../App.css';
import AddEditUser from './AddEditUser';
import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route
  } from 'react-router-dom'

function Users({usersAction,usersInformation,singleUserInfo,user,deleteUser}) {
    useEffect (() =>{
            usersAction()
    },[])

    // const [editUser,setEditUser]=useState({Name:"",Age:0,PhoneNumber:"",Email:""});
    // const [id,setId] = useState();
    // const userEdit= (index)=>{
    //     setEditUser(usersInformation[index]);
    //     setId(index);
    // }
    // const addUser =()=>{
    //     setId("");
    //     setEditUser("");
    // }
    const onDelete = (index)=>{
        const confirm = window.confirm("Are you sure you want to delete?")
        if(confirm){
            deleteUser(index);
        }
    }
    const lists = usersInformation.length > 0 && usersInformation.map((item,index) =>
    <tr key={item.Name}>
        <td>{index+1}</td>
       <td>{item.Name}</td>
       <td>{item.Age}</td>
       <td>{item.PhoneNumber}</td>
       <td>{item.Email}</td>
       <td><button id="edit" data-toggle="modal" data-target="#exampleModalCenter" onClick={()=>singleUserInfo(index)}>UPDATE</button><button id="del" onClick={()=>onDelete(index)}>DELETE</button></td>
    </tr>
 );
    return (
        <div>
            <div>
                <button id="adduser"  data-toggle="modal" data-target="#exampleModalCenter">Add User</button>
            </div>
            <div>
                <table id="user">
                    <thead>
                        <tr>
                            <th>SNO</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Phone Number </th>
                            <th>Email</th>
                            <th>Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        {lists}
                    </tbody>
                </table>

<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
      <AddEditUser userData={user}/>
  </div>
</div>
            </div>
        </div>
    );
}

const mapStateToProps = (state)=>{
    return{
        usersInformation : state.usersInformation,
        user:state.user
    }

}

const mapDispatchToProps = (dispatch) =>{
    return{
        usersAction:()=> dispatch(usersAction()),
        singleUserInfo:(index)=> dispatch(singleUserInfo(index)),
        deleteUser:(index)=> dispatch(deleteUser(index))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);