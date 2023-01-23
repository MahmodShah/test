import React, {useState, useEffect} from 'react'
import axios from 'axios'


function HookFetching() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            setPosts(response.data)
        })
        .catch(error => {
            alert("the error: " + error.message)
        })
    })
  return (
    <div>
      {posts.map(post => <li key={post.id}>{post.header} {post.body}</li>)}
    </div>
  )
}

export default HookFetching
