import React,{useState,useRef}from 'react'
import {useAuth} from '../context/AuthContext'
import { Link ,useNavigate } from 'react-router-dom'
import {Alert} from 'react-bootstrap'



export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error,setError] = useState('')
    const [loading, setLoading] =useState(false)
    const Navigate = useNavigate()
  
    async function handleSubmit(e){
        e.preventDefault()
        
  
        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value,passwordRef.current.value) 
            Navigate("/")
        }catch{
            setError('Failed to Login')
        }
        setLoading(false)
        
    }
    return (
        
        <div className="h-screen bg-center bg-no-repeat bg-cover flex bg-[url('https://cdn.discordapp.com/attachments/810493382480494632/978243051573104680/Background_doodle.png')] w-screen h-screen">
            <div className='w-full bg-cover bg-center flex-center flex-row bg-transparent max-w-md m-auto backdrop-blur-md bg-white/20 rounded-lg drop-shadow-2xl py-10 px-16'>
            <div className="flex flex-wrap justify-center">
                <div className="w-73  px-1">
                    <img src="https://cdn.discordapp.com/attachments/810493382480494632/1002987555114987653/WhatsApp_Image_2022-07-30_at_10.06.26_PM-removebg-preview.png" alt="LOGO"/>
                </div>
            </div>
            <h1 className='text-2xl text-white  font-medium mt-5 mb-6 text-center'>
                    LOGIN
            </h1>
            {error && <h2 className='text-red-700 text-center'>{error}</h2>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='email' className='text-white'>Email</label>
                        <input
                            type='email'
                            className={'w-full p-2 text-primary rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4'}
                            id='email'
                            placeholder='example@sairamtap.edu.in' ref={emailRef} required
                        />
                    </div>
                    <div>
                        <label htmlFor='password' className='text-white'>Password</label>
                        <input
                            type='password'
                            className={'w-full p-2 text-primary rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4'}
                            id='password'
                            placeholder='Password' ref={passwordRef} required
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button disabled={loading}
                            className={`bg-blue cursor-pointer py-2 px-16 text-l text-white rounded focus:outline-none `}
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div className="w-100 text-white text-sm text-center mt-3">
                <Link to="/forgotpassword">Forgot Password?</Link>
            </div>
            <br/>
            <hr width="100%"></hr>
            <h2 className="w-100 text-white text-sm text-center mt-3">Create a new account?<br></br><Link to="/signup">Sign Up</Link></h2>

            </div>
        </div>
    );
};