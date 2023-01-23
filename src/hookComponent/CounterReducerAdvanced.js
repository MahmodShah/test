import React, {useReducer} from 'react'

const initialValue = {firstCouner:0, secondCounter:10}
const reducer = (state, action) => {
    switch(action.type){
        case 'inc':
            if(action.dis == 2){
                return {...state, secondCounter: state.secondCounter + action.value}
            }
            return {...state, firstCouner: state.firstCouner + action.value}
        case 'dec':
            if(action.dis == 2){
                return {...state, secondCounter: state.secondCounter - action.value}
            }
            return {...state,firstCouner: state.firstCouner - action.value}
        case 'reseat':
            return initialValue
        default:
            return state
    }
}
export default function CounterReducerAdvanced() {
    const [newState, dispatch] = useReducer(reducer, initialValue)
    const [newState2, dispatch2] = useReducer(reducer, initialValue)

    const reseatFunc = () => {
        dispatch({type:'reseat'})
        dispatch2({type:'reseat'})
    }
  return (
    <div>
        <h1>{newState.firstCouner}</h1>
       
        <button onClick={() => dispatch({type:'inc', value: 1, dis:1})}>increament</button>
        <button onClick={() => dispatch({type:'dec', value: 1, dis:1})}>decreament</button>
        <button onClick={() => dispatch({type:'inc', value: 5, dis:1})}>increament5</button>
        <button onClick={() => dispatch({type:'dec', value: 5, dis:1})}>decreament5</button>
    <hr/>
    <h1>{newState2.secondCounter}</h1>
        <button onClick={() => dispatch2({type:'inc', value: 1, dis:2})}>increament2</button>
        <button onClick={() => dispatch2({type:'dec', value: 1, dis:2})}>decreament2</button>
        <button onClick={reseatFunc}>Reseat</button>
    </div>
  )
}
