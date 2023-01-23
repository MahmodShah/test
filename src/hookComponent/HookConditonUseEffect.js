import React, {useState, useEffect} from 'react'

function HookConditonUseEffect() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    useEffect(() => {
        document.title = `count ${count}`
    }, [count])
    
  return (
    <div>
      <h1>Count: {count}</h1>
      <div>
        <label>Name</label>
        <input type={'text'} value={name} onChange={e => setName(e.target.value)}/>
      </div>
      <button onClick={() => setCount(preCount => preCount + 1)}>click to Count</button>
    </div>
  )
}

export default HookConditonUseEffect
