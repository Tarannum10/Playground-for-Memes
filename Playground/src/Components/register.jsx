import '../styles/register.css'
import '../styles/background.css'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth,db} from '../authentication/firebase.js'
import { useNavigate } from 'react-router-dom';
import {setDoc,doc} from "firebase/firestore"
import { toast } from 'react-toastify'
import { useLogged } from '../context/loginContext.jsx'

const Register=()=>{

    let {username,setUsername}=useLogged()
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")

    const navigate = useNavigate();

    const handleRegister= async(e)=>{
        e.preventDefault()
        if(!username || !email || !password){
            alert("fill all the inputs properly")
            return
        }
        try{
            await createUserWithEmailAndPassword(auth,email,password)
            const user=auth.currentUser
            console.log(user)
            if(user){
                await setDoc(doc(db,"Users",user.uid),{
                    email: user.email,
                    user_name: username
                })
            }
            console.log("user registered successfully!")
            toast.success("User registered successfully!",{
                position:"top-center"
            })
            setUsername("");
            setEmail("");
            setPassword("");
            navigate('/login');
        }catch(err){
            console.error(err)
            toast.success(err.message,{
                position:"bottom-center"
            })
        }
    }

    useEffect(() => {
        document.body.classList.add("auth-body-background");
        return () => {
            document.body.classList.remove("auth-body-background");
        };
    }, []);

    return (
        <form onSubmit={handleRegister}>
            <div className="registerbox">   
                <h1 className="registerhead">Register</h1>
                <h3>Kindly fill the form to register.</h3>

                <div >
                    <label>
                        <input className="registerinputname" type="text" name='username' value={username} placeholder='Enter username' onChange={(e)=>setUsername(e.target.value)}/>
                    </label>
                    <br/>
                    <label>
                        <input className="registerinputname" type="text" name='email' value={email} placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)}/>
                    </label>
                    <br/>
                    <label>
                        <input className="registerinputname" type="password" name='password' value={password} placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)}/>
                    </label>
                    <br/>

                    <button className="registerbutton">Register</button>

                    <h3 className="log_in">Already have an account? <NavLink className="log_in1" to="/login" >Log in.</NavLink></h3>
                </div>
            </div>
        </form>
    )
}

export default Register