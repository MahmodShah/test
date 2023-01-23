import React, {useState, useEffect} from 'react'
import HookMousCoordinate from '../hookComponent/HookMousCoordinate'

function MouseContianer() {

    const [display, setDisplay] = useState(true)
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>toggle display</button>
      {display && <HookMousCoordinate/>}
    </div>
  )
}

export default MouseContianer
