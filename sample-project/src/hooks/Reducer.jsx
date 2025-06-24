import { useReducer } from "react"


let initialvalue=0
let initialReact={like:0,dislike:0}

const counter = (state,action) => {
    switch(action.type){
        case 'INCREMENT':
            return state+1
        case 'DECREMENT':
            return state-1
        case 'RESET':
            return 0
        default:
            return state
    }
}

const counts = (state,action) => {
    switch(action.type){
        case 'LIKE':
            return {like: state.like+1,dislike: state.dislike}
        case 'DISLIKE':
            return {like: state.like,dislike: state.dislike+1}
        default:
            return state
    }
} 
const Reducer = () => {
    const [count,dispatch] = useReducer(counter,initialvalue)
    const [state,likepatch] = useReducer(counts,initialReact)
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>dispatch({type:"INCREMENT"})}>➕</button>
            <button onClick={()=>dispatch({type:"DECREMENT"})}>➖</button>
            <button onClick={()=>dispatch({type:"RESET"})}>RESET</button>
            <h1>Like and Dislike Button</h1>
            <button onClick={()=>likepatch({type:"LIKE"})}>👍{state.like}</button>
            <button onClick={()=>likepatch({type:"DISLIKE"})}>👎{state.dislike}</button>
        </div>
    )
}
export default Reducer