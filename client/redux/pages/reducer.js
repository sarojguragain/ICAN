import actionTypes from "./type";

const initialValue={
    hello:"hi",
    page:{}
}
const PageReducer =(state=initialValue,{type,payload})=>{
    let object ={}
   switch (type) {
    case actionTypes.ADD_PAGES:
        object[payload.field]=[payload.value]
        return{
            ...state,
            page:{
                ...state.page,
                ...object
            }
        }
   case actionTypes.INTO_NEPALI:
    object[payload.field]= [payload.value]
    return{
        ...state,
        page:{
            ...state.page,
            ...object
        }
    }
    default:
        return state
   }
}
export default PageReducer;