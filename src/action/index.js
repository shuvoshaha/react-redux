export const incNumber =(number)=> {
    return {
            type: "INCREMENT",
            payload: number
         }
    
}

export const deCrement = () =>{
    return{
        type: "DECREMENT"
    }
}