import React, { Component } from 'react'
import axios from 'axios'

class PostLists extends Component {

    constructor(){
        super()
        this.state = {userId:'', title:'', body:''}
    }


    onChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
        .then(response => {
            console.log(response)

        })
        .catch(error => {
            console.log(error)
        })
    }
  render() {
    const {userId, title, body} = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <label>Name</label>
                <input type={'text'} name='userId' value={userId} onChange={this.onChangeHandler}/>
            </div>
            <div>
                <label>title</label>
                <input type={'text'} name='title' value={title} onChange={this.onChangeHandler}/>
            </div>
            <div>
                <label>body</label>
                <input type={'text'} name='body' value={body} onChange={this.onChangeHandler}/>
            </div>
            <button type={'submit'}>submit</button>
        </form>
      </div>
    )
  }
}

export default PostLists
