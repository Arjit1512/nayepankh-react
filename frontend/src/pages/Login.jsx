import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    axios.defaults.withCredentials = true;
    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:3001/auth/login",{//,"https://nayepankh-react-arjit.vercel.app/auth/login"],{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home")
                }
                else if(res.data=="notexist"){
                    alert("Wrong password entered.")
                }
            })
            .catch(e=>{
                alert("User have not signed up!")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <>
            <meta charSet="utf-8" />
            <title>Nayepankh Foundation</title>
            <link
                rel="stylesheet"
                href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
            />
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                crossOrigin="anonymous"
            />
            <link rel="stylesheet" href="styles.css" />
            {/* Font Awesome */}

            <div className="wdiv">
            <div className="wrapper">
                <div className="form-box login">
                    <h2>Login</h2>
                    <form action="POST">
                        <div className="input-box">
                            <input placeholder="Email" type="email" pattern="[a-zA-Z0-9._%+-]+@gmail.com" required="" onChange={(e) => { setEmail(e.target.value) }} />
                            {/* <label>Email</label> */}
                        </div>
                        <div className="input-box">
                            <input placeholder="Password" type="password" required="" onChange={(e) => { setPassword(e.target.value) }} />
                            {/* <label>Password</label> */}
                        </div>
                        <div className="div-bt">
                            <button onClick={submit} className="bt" type="submit">
                                Login
                            </button>
                        </div>
                        <p style={{ marginTop: "5%" }}>
                            Don't have an account?
                            <Link to="/Register.jsx"> 
                            <a>Register</a>
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
            </div>
        </>

    )
}

export default Login
