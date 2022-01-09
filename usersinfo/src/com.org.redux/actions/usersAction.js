export const usersAction=()=>{
    return{
        type : "GET_ALL_USERS"
    };
};

export const addUserContact=(userInfo)=>{
    console.log("in action" + userInfo.toString());
    return{
        type : "ADD_EDIT_USER",payload:userInfo
    };
};
export const deleteUser=(index)=>{
    return{
        type : "DELETE_USER",index
    };
};
export const singleUserInfo=(index)=>{
    return{
        type : "SINGLE_USER_INFO",index
    };
};

export const editUserContact=(user,id)=>{
    console.log("in action" + user.toString() +"/" +id);
    return{
        type : "EDIT_USER_INFO",payload:user,id
    };
};