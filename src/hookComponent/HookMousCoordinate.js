import React, {useState, useEffect} from 'react'

function HookMousCoordinate() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const moutMoveLogListeger = e => {
        console.log("moutMoveLogListeger")
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log("useEffect called")
        window.addEventListener('mousemove', moutMoveLogListeger)

        return () => {
            console.log("unmouted event listegner")
            window.removeEventListener('mousemove', moutMoveLogListeger)
        }
    }, [])

  return (
    <div>
      <h1>X: {x}</h1>
      <h1>Y: {y}</h1>
    </div>
  )
}

export default HookMousCoordinate
