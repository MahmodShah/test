import React, {useReducer} from 'react'

const initialValue = 0;

const reducer = (state, action) => {

    switch(action){
        case 'increament':
            return state + 1
        case 'decreament':
            return state - 1
        case 'resete':
            return initialValue
        default:
            return state
    }
}
function CounterReducer() {
    const [newState, dispatch] = useReducer(reducer, initialValue)
  return (
    <div>
        <h1>{newState}</h1>
      <button onClick={() => dispatch('increament')}>increament</button>
      <button onClick={() => dispatch('decreament')}>decreament</button>
      <button onClick={() => dispatch('resete')}>reseat</button>
    </div>
  )
}

export default CounterReducer
