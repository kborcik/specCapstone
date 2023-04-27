import React, { useState } from "react"
import axios from 'axios'

const Login = (props) => {
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [register, setRegister] = useState(true)

    const url = `http://localhost:4000`
    
    const loginHandler = (event) => {
        event.preventDefault()

        
    
        const body = {
            username,
            password
        }

        axios.post(`${url}/login`, body)
        .then(({data})=> {

         

        }).catch((err) => {
          console.log(`Login function: `err);
        })
    }


  return (
    <main>
        <h1>Escape the Tempest!</h1>
      <form onSubmit={loginHandler}>
        <input type="text" placeholder="username/ email" onChange={e => setUsername(e.target.value)} value={username}></input>
        <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} value={password}></input>
        <button >Login</button>
      </form>
      <button>Sign-up</button>
    </main>
  )
};

export default Login;
