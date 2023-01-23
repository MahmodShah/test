import React, {useState, useEffect} from 'react'
import axios from 'axios'
function HookFetchingDataOnClick() {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [buttonId, setButtonId] = useState(id)

    const setButtionIdHandler = () => {
        setButtonId(id)
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonId}`)
        .then(response => {
            setPost(response.data)
        })
        .catch(error => {
            alert(error.message)
        })
    }, [buttonId])

  return (
    <div>
        <button onClick={setButtionIdHandler}>click</button>
        <input type={'number'} value={id} onChange={e => setId(e.target.value)} />
      <h1>{post.title}</h1>
    </div>
  )
}

export default HookFetchingDataOnClick
