import React from 'react'
import cl from './img/cl.png'
import ci from './img/ice.png'
import up from './img/up.png'
import uc from './img/mt.png'
import { Link } from 'react-router-dom'


export default function Cards() {
  return (
    <section className="text-gray-600 body-font">
    <div className="container pl-72 pt-44 mx-auto " bis_skin_checked="1">
      <div className="flex flex-wrap -m-4  " bis_skin_checked="1">
        <div className="p-4 lg:w-1/2 shadow-2" bis_skin_checked="1">
          <div className=" shadow-2xl bg-white/20 rounded h-full flex sm:flex-row w-3/4 flex-col items-center sm:justify-start justify-center text-center sm:text-left cursor-pointer" bis_skin_checked="1">
            <img alt="team" className="flex-shrink-0 my-5 rounded-lg w-40 h-40 object-cover object-center sm:mb-0 mb-4" src={uc}/>
            <div className="flex-grow sm:pl-8" bis_skin_checked="1">
              <h2 className="title-font font-bold text-3xl text-gray-900">Interactive Customer Evaluator</h2>
              
            </div>
          </div>
        </div>
        
        <div className="p-4 lg:w-1/2" bis_skin_checked="1">
          <Link to="/CompanyDetails">
          <div className="shadow-2xl bg-white/10 h-full flex sm:flex-row w-3/4 flex-col items-center sm:justify-start justify-center text-center sm:text-left cursor-pointer" bis_skin_checked="1">
            <img alt="team" className="flex-shrink-0 my-5 rounded-lg w-40 h-40 object-cover object-center sm:mb-0 mb-4" src={cl}/>
            <div className="flex-grow sm:pl-8" bis_skin_checked="1">
              <h2 className="title-font font-bold text-3xl text-gray-900">Company List</h2>  
            </div> 
            
          </div>
          </Link>

        </div>

        <div className="p-4 lg:w-1/2" bis_skin_checked="1">
          <div className="shadow-2xl w-3/4 bg-white/10 h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left cursor-pointer" bis_skin_checked="1">
            <img alt="team" className="flex-shrink-0  my-5 rounded-lg py-5 w-40 h-40 object-cover object-center sm:mb-0 mb-4" src={ci}/>
            <div className="flex-grow sm:pl-8" bis_skin_checked="1">
              <h2 className="title-font font-bold text-3xl text-gray-900">Monthly Trends</h2>
              
            </div>
          </div>
        </div>
        <div className="p-4 lg:w-1/2" bis_skin_checked="1">
          <div className="shadow-2xl w-3/4 bg-white/10 h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left cursor-pointer" bis_skin_checked="1">
            <img alt="team" className="flex-shrink-0  mx-5  my-1 rounded-lg w-32 h-32 object-cover object-center sm:mb-0 mb-4" src={up}/>
            <div className="flex-grow sm:pl-10" bis_skin_checked="1">
              <h2 className="title-font font-bold text-3xl text-gray-900">Update Customer Details </h2>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        
  )
}
