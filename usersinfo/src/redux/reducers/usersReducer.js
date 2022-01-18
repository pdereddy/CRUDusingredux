const usersState = {
    usersInformation: [{ Name: "Pavan", Age: 24, PhoneNumber: "9704410203", Email: "pdy@gmail.com" }, { Name: "dereddy", Age: 29, PhoneNumber: "97876540203", Email: "dereddy@gmail.com" },
    { Name: "kumar", Age: 54, PhoneNumber: "9650010203", Email: "kumar@gmail.com" }, { Name: "ravi", Age: 22, PhoneNumber: "9793450203", Email: "ravi@gmail.com" },
    { Name: "kiran", Age: 26, PhoneNumber: "9778650203", Email: "kiran@gmail.com" }],
    user: {}
};

export const usersReducer = (state = usersState, action) => {
    switch (action.type) {
        case "GET_ALL_USERS": return { ...state };
        case "ADD_EDIT_USER": {
            console.log("in reducer" + action.payload + "/");
            let usersInformation = [...state.usersInformation];
            console.log(usersInformation);
            usersInformation.push(action.payload);
            console.log(usersInformation);
            return {
                ...state, usersInformation
            };
        };
        case "SINGLE_USER_INFO":
            console.log(action.index + "singleuserinfo" + action.payload + "in reducer");
            return { ...state, user: { ...state.usersInformation[action.index], id: action.index } };
        case "EDIT_USER_INFO": {
            console.log("in reducer" + action.payload + "/" + action.id);
            let usersInformation = [...state.usersInformation];
            console.log(usersInformation);
            usersInformation[action.id] = action.payload;
            console.log(usersInformation);
            return {
                ...state, usersInformation
            };
        };
        case "DELETE_USER":

            let usersInformation = [...state.usersInformation];
            usersInformation.splice(action.index, 1);
            return {
                ...state, usersInformation
            };

        default: return state;
    }
};
