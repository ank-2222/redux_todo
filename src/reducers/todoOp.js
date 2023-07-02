

const initialState={
    list:[]
}

export const todoReducer=(state=initialState,action)=>{

    switch(action.type){
        case "ADD_TODO":
            const {id,data}=action.payload;
            return{
                ...state,     //this is giving initial data, as it is pure function it should take same input everytime
                list:[
                    ...state.list,{    //this is adding previously added data
                        id:id,          
                        data:data
                    }
                ]
            }

            case "DELETE_TODO":
                const newList = state.list.filter((elem)=>elem.id !== action.payload.id)
                return{
                   ...state,
                   list: newList

                }
            default: return state;
    }
}