import React, { Component } from 'react'

class ClassMouseMove extends Component {
    constructor(){
        super()
        this.state = {x:0, y:0}
    }

    mouseMoveLog = e => {
        this.setState({x: e.clientX, y: e.clientY})
    }
    componentDidMount(){
        console.log("called did mount")
        window.addEventListener('mousemove', this.mouseMoveLog)
    }
  render() {
    return (
      <div>
        <h1>X: {this.state.x}</h1>
        <h1>Y: {this.state.y}</h1>
      </div>
    )
  }
}

export default ClassMouseMove
