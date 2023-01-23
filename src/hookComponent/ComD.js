import React, {useContext} from 'react'
import { CountContext } from '../App'

function ComD() {
  const countContext = useContext(CountContext)
  return (
    <div>
      <h1>Count: {countContext.countC}</h1>
      <button onClick={() => countContext.dispatchC('increament')}>increament</button>
      <button onClick={() => countContext.dispatchC('decreament')}>increament</button>
      <button onClick={() => countContext.dispatchC('reseat')}>increament</button>
    </div>
  )
}

export default ComD
