const initialState = [
    {
        id:0,
        name:"Vishal",
        number:6565656565,
        email:"vishal@gmail.com"
    },
    {
        id:1,
        name:"Manohar",
        number:8989898989,
        email:"manohar@gmail.com",
    }
];

const contactReducer = (state =initialState,action)=>{
    switch(action.type){
        case "ADD_CONTACT":
            state = [...state ,action.payload];
            console.log("add value..", state)
            return state;
        case "UPDATE_CONTACT":
            const updateState = state.map(contact=> contact.id===action.payload.id ? action.payload:contact);

            state = updateState; 
            return state;
        case "DELECT_CONTACT":
            // const delectState = state.filter(contact=> contact.id !== action.payload && contact);
            const delectState =  state.filter((contact) =>{
                return contact.id !==action.payload
            })
            console.log("delete array",delectState)
            state = delectState;  
            return state;
        default:
            return state;
    }
};
export default contactReducer;