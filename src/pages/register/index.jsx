import React, { useState } from 'react'
import Link from "next/link";


export default function Register() {

    let initialValue = {
        email: "",
        username: "",
        password: "",
        confirmPass: ""
    }
    const [userData, setUserData] = useState(initialValue)

    const handleChange = (e) => {

        const { name: key, value, type, checked } = e.target;
        const val = type === "checkbox" ? checked : value;
        setUserData({ ...userData, [key]: val });

    };

    const RefisterFunction = () => {
        console.log(userData)
        setUserData(initialValue)
    }



    return (
        <div className='flex w overflow-hidden text-left text-base text-black font-poppins justify-center max-w-[1200px] md-w-'>

            <div className="flex-1 border rounded-[10px] bg-white shadow-[0px_4px_64px_rgba(0,_0,_0,_0.05)] box-border h-[757px] max-w-[90%] sm:w-[100%] md:max-w-[505px] lg:max-w-[404px] xl:max-w-[505px] border-[0.5px] border-solid border-gray-500 p-5 sm:p-5 md:p-10 lg:p-10">
                <h1 className='text-[25px] font-light' >Welcome !</h1>

                <div className='flex flex-col mt-[30px] font-medium space-y-3' >
                    <h1 className='text-[31px]' >Sign up to  </h1>
                    <p>Lorem Ipsum is simply </p>
                </div>


                <div className='mt-[30px]'>

                    <div className="mb-5">
                        <label className="block text-sm font-bold mb-2 text-[16px] font-normal" >
                            Email
                        </label>
                        <input
                            onChange={handleChange}
                            value={userData.email}
                            name="email"
                            style={{ border: "0.5px solid" }} className="rounded w-full py-4 px-5 text-gray-500 text-[14px] rounded-[6px] focus:outline-none"  type="email" placeholder="Enter Your Email" />
                    </div>

                    <div className="mb-5">
                        <label className="block text-sm font-bold mb-2 text-[16px] font-normal" >
                            User Name
                        </label>
                        <input
                            onChange={handleChange}
                            value={userData.username}
                            name="username"
                            style={{ border: "0.5px solid" }} className="rounded w-full py-4 px-5 text-gray-500 text-[14px] rounded-[6px] focus:outline-none"  type="name" placeholder=" Enter Your Username" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2 text-[16px] font-normal" >
                            Password
                        </label>
                        <input
                            onChange={handleChange}
                            value={userData.password}
                            name="password"
                            style={{ border: "0.5px solid" }} className="rounded w-full py-4 px-5 text-gray-500 text-[14px] rounded-[6px] focus:outline-none" type="password" placeholder="Enter Your Password" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2 text-[16px] font-normal" for="User Name">
                           Confirm Password
                        </label>
                        <input
                            onChange={handleChange}
                            value={userData.confirmPass}
                            name="confirmPass"
                            style={{ border: "0.5px solid" }} className="rounded w-full py-4 px-5 text-gray-500 text-[14px] rounded-[6px] focus:outline-none"  type="password" placeholder="Confirm your password" />
                    </div>



                    <button onClick={RefisterFunction}
                        className='mt-5 mb-6 bg-black text-white text-[20px] w-[100%] p-5 rounded-[6px]'>
                        Register
                    </button>

                    <div className='flex gap-2 mb-5 justify-center text-[16px]'>
                        <p className='text-gray-500' >Already have an Account ?  </p>
                        <Link href="/login"><p className='text-gray-900 font-bold'>Login</p></Link>
                    </div>

                </div>

            </div>



            <img className="bg-cover bg-center hidden lg:block w-[100%] scale-125 lg:w-[50%]" src='./image.svg' /> 


        </div>
    )
}


