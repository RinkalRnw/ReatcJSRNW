import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import EventComponent from './components/EventComponent';
import ConditionalComponent from './components/ConditionalComponent';

function App() {
  return (
    <div className="App">
      <h1>HOC Example</h1>
      <HOC cntdata={Counter}/>
      <EventComponent />
      <ConditionalComponent />
    </div>
  );
}
function HOC(props){ 
  return <div><props.cntdata /></div>
}
function Counter() {
  const [count,setCount] = useState(0);

  return (
    <div style={{backgroundColor:"red",height:'100px',width:'200px'}}>
      <h3>{count}</h3>
      <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
    
  )
}
export default App;
