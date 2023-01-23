import React, {useState, useEffect} from 'react'

function TitleUseEffect() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

  return (
    <div>
      <button onClick={() => setCount(preCount => preCount + 1)}>Click {count}</button>
    </div>
  )
}

export default TitleUseEffect
