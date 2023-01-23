import React, {useState} from 'react'

function HookCount5() {
    let initialState = 0;
    const [count, setCount] = useState(initialState)

    const increamentFive = () => {
        for(let i = 0 ; i < 5 ; i++){
            setCount(precount => precount + 1)
        }
    }
  return (
    <div>
        <h1>Count: {count}</h1>
      <button onClick={() => setCount(initialState)}>reset</button>
      <button onClick={() => setCount(precount => precount + 1)}>Add</button>
      <button onClick={() => setCount(precount => precount - 1)}>Minus</button>
      <button onClick={() => increamentFive()}>Count Five</button>
    </div>
  )
}

export default HookCount5
