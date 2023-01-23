import React, { Component } from 'react'
import axios from 'axios'

class GetLists extends Component {

    constructor(){
        super()
        this.state = {posts:[], error:''}
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({error: error.message})
        })
    }
  render() {
    const {posts, error} = this.state
    return (
      <div>
        <h1>all posts</h1>
        {posts.length ? posts.map(post => <h1 key={post.id}>{post.title} {post.body}</h1>) : null}
       {error ? error : ''}
      </div>
    )
  }
}

export default GetLists
