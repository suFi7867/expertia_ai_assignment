import React, { useState } from 'react'
import Link from "next/link";


export default function Login() {

    let initialValue = {
        username : "" ,
        password : ""
    }
    const [userData, setUserData] = useState(initialValue)

    const handleChange = (e) => {

        const { name: key, value, type, checked } = e.target;
        const val = type === "checkbox" ? checked : value;
        setUserData({ ...userData, [key]: val });

    };

    const LoginFunction = ()=> {
        console.log(userData)
        setUserData(initialValue)
    }



  return (
      <div className='flex w overflow-hidden text-left text-base text-black font-poppins justify-center max-w-[1200px] md-w-'>
         
          <div className="flex-1 border rounded-[10px] bg-white shadow-[0px_4px_64px_rgba(0,_0,_0,_0.05)] box-border h-[701px] max-w-[90%] sm:w-[100%] md:max-w-[505px] lg:max-w-[404px] xl:max-w-[505px] border-[0.5px] border-solid border-gray-500 p-5 sm:p-5 md:p-10 lg:p-10">
              <h1 className='text-[25px] font-light' >Welcome !</h1>

              <div className='flex flex-col mt-[50px] font-medium space-y-3' >
                  <h1 className='text-[31px]' >Sign in to </h1>
                  <p>Lorem Ipsum is simply </p>
             </div>


             <div className='mt-[50px]'>
                  <div className="mb-10">
                      <label className="block text-sm font-bold mb-2 text-[16px] font-normal" for="User Name">
                          User Name
                      </label>
                      <input 
                      onChange={handleChange}
                      value={userData.username}
                      name="username"
                          style={{ border: "0.5px solid" }} className="rounded w-full py-4 px-5 text-gray-500 text-[14px] rounded-[6px] focus:outline-none" id="username" type="name" placeholder="Enter your user name"/>
                  </div>

                  <div className="mb-4">
                      <label className="block text-sm font-bold mb-2 text-[16px] font-normal" for="User Name">
                          Password
                      </label>
                      <input
                      onChange={handleChange}
                      value={userData.password}
                      name="password"
                          style={{ border: "0.5px solid" }} className="rounded w-full py-4 px-5 text-gray-500 text-[14px] rounded-[6px] focus:outline-none"  type="text" placeholder="Enter your Password" />
                  </div>


                  <div className='flex justify-between mb-10'>
                      
                      <div className='flex justify-between gap-2'>
                          <input type="checkbox" />  <p className='text-[12px]' > Remember me</p> 
                      </div>
                       <p className='text-[12px] text-[#4D4D4D]' >Forgot Password ?</p>
                  </div>

                  <button onClick={LoginFunction}
                  className='mb-12 bg-black text-white text-[20px] w-[100%] p-5 rounded-[6px]'>
                      Login
                  </button>

                  <div className='flex gap-2 mb-10 justify-center text-[16px]'>
                      <p className='text-gray-500' >Don’y have an Account ?</p>  
                      <Link href="/register"><p className='text-gray-900 font-bold'>Register</p></Link> 
                  </div>

             </div>
             
         </div>


          <img className="bg-cover bg-center hidden lg:block width-[100%] lg:w-[50%]" src='./image.svg' /> 


       </div>
  )
}

 
