import "./Child.css";
import {Component} from "react";

class Child extends Component{
    render(){
        const name = "React";
        return <div className="react">{name}</div>;
    }
}

export default Child;