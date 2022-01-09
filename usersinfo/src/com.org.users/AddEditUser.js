import React,{useEffect, useRef, useState} from 'react';
import { connect } from 'react-redux';
import { addUserContact,editUserContact } from '../com.org.redux/actions/usersAction';

function AddEditUser({addUserContact,editUserContact,userData}) {
  console.log(userData);
  
    const [user,setUser] = useState({Name:"",Age:"",PhoneNumber:"",Email:""});
    
    const addEditUserInfo = (name,value)=>{
        const oldUserInfo = {...user};
        oldUserInfo[name] = value;
        setUser(oldUserInfo); 
    };
    const onSubmit = ()=>{
        if(user.id!=null && user.id!=undefined){
            editUserContact(user,user.id)
             let oldEditUser = {...user};
             oldEditUser.id = null;
        }else{
        addUserContact(user);
        }
        setUser({Name:"",Age:"",PhoneNumber:"",Email:""});
        closeRef.current.click();
    };
    const onClose = ()=>{
      setUser({Name:"",Age:"",PhoneNumber:"",Email:""});
    }
        useEffect(()=>{ if(userData.id!=null && userData.id!=undefined){setUser(userData)}else{setUser({Name:"",Age:"",PhoneNumber:"",Email:""});}},[userData]);

    const closeRef = useRef();
    return (
        
             <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Add/Edit User</h5>
        <button type="button" ref={closeRef} onClick={()=>onClose()} className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput">Name</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name" value={user.Name} onChange={(e)=>addEditUserInfo("Name",e.target.value)}/>
  </div>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput2">Age</label>
    <input type="Number" className="form-control" id="formGroupExampleInput2" placeholder="Age" value={user.Age} onChange={(e)=>addEditUserInfo("Age",e.target.value)}/>
  </div>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput2">Phone Number</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="PhoneNumber" value={user.PhoneNumber} onChange={(e)=>addEditUserInfo("PhoneNumber",e.target.value)}/>
  </div>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput2">Email</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Email" value={user.Email} onChange={(e)=>addEditUserInfo("Email",e.target.value)}/>
  </div>
</form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>onClose()}>Close</button>
        <button type="button" className="btn btn-primary" onClick={()=>onSubmit()}>Submit</button>
      </div>
    </div>
        
    );
}

const mapStateToProps = (state)=>{
    return{
        usersInformation : state.usersInformation
    };

};

const mapDispatchToProps = (dispatch) =>{
    return{
        addUserContact:(user)=>dispatch(addUserContact(user)),
        editUserContact:(user,id)=>dispatch(editUserContact(user,id)),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(AddEditUser);