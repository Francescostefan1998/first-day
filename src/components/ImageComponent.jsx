import { Component } from "react";

class ImageComponent extends Component {
    render() {
        return <img src={this.props.src} alt="" className={this.props.classimage}/>
    }
}

export default ImageComponent