import React,{useState} from 'react';
//Function based & stateful component
// const FirstFnComponent = ()=> <div><h2>My Function Component</h2>   </div>
const FirstFnComponent = ( ()=>{
    const [Name, setName] = useState('rinkal')
    const [count, setCount] = useState(0)
    function counterAdd(){
        setCount(count + 1)
    }
    function counterMinus(){
        setCount(count - 1)
    }
    return (
        <div>
            Name : <input type="text" className='' value={Name} onChange={ (e)=>{ setName(e.target.value)}}/> <br />

            My Name is : {Name} <br/>
           

            <button type="button" onClick={counterAdd}>Click</button><br />
            <button type="button" onClick={counterMinus}>Minus</button>
           <br />
            Counter value is :{count}            
        </div>
    )
})


export default FirstFnComponent