import React, { Component } from 'react';

class EventComponent extends Component {
    constructor(props){
        super(props);
        this.state = {isToggle: false};
        this.statusChange = this.statusChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    statusChange(){
        this.setState(prevState =>({
            isToggle : !prevState.isToggle
        }))
        
    }
    handleClick(id,name){
        console.log("Id is "+id+" Name is "+name);
    }
    render() {
        return (
            <>
            <div>
                <h2>Event Handling Example</h2>
                <button onClick={this.statusChange}>{ this.state.isToggle ? 'ON' : 'OFF'}</button>
            </div>
            <div>
            <button onClick = {() => this.handleClick(161,"Rinkal")}>Delete</button>
            </div>
            </>
        );
    }
}
export default EventComponent;