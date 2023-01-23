import React, {useState} from 'react'

function HookArrays() {

    const [numArray, setNumArray] = useState([])
    const [allArrays, setAllArrays] = useState([])
    const addNum = () => {
        setNumArray([...numArray, {id:numArray.length, item: Math.floor(Math.random() * 21) + 10}])
        setAllArrays([...allArrays, {id:allArrays.length, numArray}])
    }
  return (
    <div>
        <button onClick={addNum}>add num</button>
      
      {allArrays.map(numArraObject => <div key={numArraObject.id}>{numArraObject.numArray.map(num => <p key={num.id}>{num.item}</p>)} <hr/></div>)}
    </div>
  )
}

export default HookArrays
