import React ,{Component} from 'react';
//class based component - stateless component
//to access parent class use extends keyword
//To access parent class constructor & all properties - super keyword
class Thirdcomponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            name:"Rinkal"
        }
    }
    render() {        
        const counterAdd = ()=>{
            this.setState({count:this.state.count+1})
        }
        const counterMinus = ()=> {
            this.setState({count:this.state.count-1})
        }
        return (
            <div>
               <center>
                    counter is : {this.state.count} <br />
                    <button type="button" onClick={counterAdd}>Click</button><br />
                    <button type="button" onClick={counterMinus}>Minus</button>
                    <br />
                    <input type="text" name="txt" id="txt" value={this.state.name} onChange={ (e)=>this.setState({name:e.target.value})}/>
                    <br />
                    Name is : {this.state.name} <br />
               </center>

            </div>
        );
    }
}

export default Thirdcomponent;