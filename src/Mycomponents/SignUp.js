import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"


export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const Navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords does not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      Navigate("/")
    } catch {
      setError("Failed to create an account")
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
                    SIGN IN
            </h1>
            {error && <h2 className='text-red-700 text-center'>{error}</h2>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='email' className='text-white'>Email</label>
                        <input
                            type='email'
                            className={'w-full p-2 text-primary rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4'}
                            id='email'
                            placeholder='example@gmail.com' ref={emailRef} required
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
                    <div>
                        <label htmlFor='password-confirm' className='text-white'>Confirmation Password</label>
                        <input
                            type='password'
                            className={'w-full p-2 text-primary rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4'}
                            id='password-confirm'
                            placeholder='Password' ref={passwordConfirmRef} required
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button disabled={loading}
                            className={`bg-blue cursor-pointer py-2 px-16 text-l text-white rounded focus:outline-none `}
                        >
                            SIGN IN
                        </button>
                    </div>
                </form>
                <br></br>
                <hr></hr>
            <h2 className="w-100 text-white text-sm text-center mt-3">Already have an Account?<br></br><Link to="/login" className="underline">Login</Link></h2>

            </div>
        </div>
  )
}