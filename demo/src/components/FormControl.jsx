import React, {useState} from 'react'

const FormControl = ()=> {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const saveData = ()=>{
            console.log("Name is "+name)
            console.log("Pwd is "+password)
            console.log("Email is "+email)
       
    }
    
  return (
    
    <div>
        <center><h3>Registration Form</h3></center>
        <form name="frm" onSubmit={saveData}>
            Name: <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} required/><br /><br />
            Email: <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} /><br /><br />
            Password: <input type="password" name="password"  value={password} onChange={(e)=>setPassword(e.target.value)} /><br /><br />
            <input type="submit" value="Save Data" />
        </form>
    </div>
  )
}

export default FormControl;
