let pictures = ["/img1.jpg",
    "/img2.jpg"
]

import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            pictureIndex: 0
        }
    }
    componentDidMount = () => {
        this.intervalId = setInterval(this.nextImage, 1000)
    }
    componentWillUnmount = () => {
        clearInterval(this.intervalId)
    }
    nextImage = () => {
        this.setState({ pictureIndex: this.state.pictureIndex + 1 })
    }
    render = () => {
        return (<div className="container">
            <img
                className="scroll-img"
                key={this.state.pictureIndex}
                src={pictures[this.state.pictureIndex % pictures.length]} />
            <img
                className="scroll-img scroll-animated"
                key={this.state.pictureIndex + 1}
                src={pictures[(this.state.pictureIndex + 1) % pictures.length]} />
        </div>)
    }
}
export default App