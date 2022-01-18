import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUserContact } from '../redux/actions/usersAction';

const AddUser = ({ addUserContact }) => {
    const [user, setUser] = useState({ Name: "", Age: "", PhoneNumber: "", Email: "" });

    const addEditUserInfo = (name, value) => {
        const oldUserInfo = { ...user };
        oldUserInfo[name] = value;
        setUser(oldUserInfo);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(user) + "in AddUser")
        addUserContact(user);
        setUser({ Name: "", Age: "", PhoneNumber: "", Email: "" });
        alert("User Added");
        // closeRef.current.click();
    };
    return (
        <form style={{
            margin: 'auto',
            textAlign: 'center',
            width: '50%',
            border: '3px solid green',
            padding: '10px',
            marginTop: '2%'
        }}>
            <div className="row mb-3">
                <label htmlFor="name" style={{ textAlign: 'end' }} className="col-sm-4">Name</label>
                <div className="col-sm-8">
                    <input type="text" id="name1" value={user.Name} onChange={(e) => addEditUserInfo("Name", e.target.value)} />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="age" style={{ textAlign: 'end' }} className="col-sm-4 col-form-label">Age</label>
                <div className="col-sm-8">
                    <input type="number" id="age" value={user.Age} onChange={(e) => addEditUserInfo("Age", e.target.value)} />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="ph1" style={{ textAlign: 'end' }} className="col-sm-4 col-form-label">Phone Number</label>
                <div className="col-sm-8">
                    <input type="text" id="ph" value={user.PhoneNumber} onChange={(e) => addEditUserInfo("PhoneNumber", e.target.value)} />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="email1" style={{ textAlign: 'end' }} className="col-sm-4 col-form-label">Email</label>
                <div className="col-sm-8">
                    <input type="text" id="email" value={user.Email} onChange={(e) => addEditUserInfo("Email", e.target.value)} />
                </div>
            </div>
            <button type="submit" onClick={(e) => onSubmit(e)} className="btn btn-primary">Submit</button>
        </form>);
}
const mapStateToProps = (state) => {
    return {
        usersInformation: state.usersInformation
    };

};

const mapDispatchToProps = (dispatch) => {
    return {
        addUserContact: (user) => dispatch(addUserContact(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
