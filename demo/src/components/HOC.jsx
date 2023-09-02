import React,{Component} from 'react';
const HOC = (HocComponent)=>{

    class MyComponent extends Component{
        state = {
            name:"Testomg"
        }
        constructor(props){
            super(props);
            console.log("Constructor called"+props.name);
            console.log("Constructor called state"+this.state.name);
        }
        componentDidMount(){
            console.log("Component mounted");
        }
        render(){
            console.log("render calling..")
            return(
                <HocComponent 
                    name={this.state.name}
                />
            )
        }
    }

    return MyComponent;
}
const MyNewComponent = ({name})=>{
    <div>
        <p><b>Your name is {name}</b></p>
    </div>
}

const FinalComponent = HOC(MyNewComponent)
export default FinalComponent;