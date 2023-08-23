import React from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';


class ClassComponent extends React.Component {
    constructor(){
        console.log("constructor calling..")
        super();
        this.state = {
            name:"Rinkal",
            products:[]
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps calling..")
        return {name:"ABCXYZ"}
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({name: "yellow"})
          }, 1000)
        console.log("componentDidMount calling..")     
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))         
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate calling..")
        return true
    }
    componentDidUpdate(){
        console.log("componentDidUpdate calling "+this.state.name);
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Prev value is snapshot "+prevState.name)
    }
    
    componentWillUnmount(){
        console.log("componentWillUnmount calling")
    }
    render(){
        console.log("Render calling....");
        // this.setState({name:"NewTest"})
        return(
            <div>
                <center>
                <h1>Component Life Cycle </h1>               
                My Class Component Calling -- {this.state.name} <br />
                <br />
                </center>

            </div>
        )
    }
}


export default ClassComponent;