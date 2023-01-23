import React, {useState, useEffect} from 'react'


function HookInterval() {
    const [count, setCount] = useState(0)

    const tick = () => {
        console.log("tick called")
        setCount(preCount => preCount + 1)
    }

    useEffect(() => {
        console.log("useEffect called")
        
    }, [])

  return (
    <div>
      {count}
    </div>
  )
}

export default HookInterval
