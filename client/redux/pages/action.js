import actionTypes from "./type";


export const addPages=(data)=>{
    return{
        type:actionTypes.ADD_PAGES,
        payload:data
    }
}

export const intoNepali=(data)=>{
    
    
    console.log("DATA",data)

    return {
        type:actionTypes.INTO_NEPALI,
        payload:data
    }
}

