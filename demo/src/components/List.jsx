import React from 'react'
import ListItem from './ListItem';
import List2 from './List2';
export default function List(props) {
    const no = props.number;
    const result = no.map((i)=>{
       return <List2 nodata={i}/>
    })
  return (
    <>
        <div>List Example</div>
        <ul>
            {result}
        </ul>
    </>
  )
}
