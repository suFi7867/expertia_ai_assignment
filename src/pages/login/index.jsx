import React from 'react'

export default function Login() {
  return (
      <div className='border-2 border-gray-500 w-full overflow-hidden text-left text-base text-black font-poppins'>
         
          <div className="rounded-[10px] bg-white shadow-[0px_4px_64px_rgba(0,_0,_0,_0.05)] box-border h-[701px] sm:w-[100%] md:w-[505px] xl:w-[505px] border-[0.5px] border-solid border-gray-100 p-5 sm:p-5 md:p-10 lg:p-10">
              <h1 className='text-[25px] font-light' >Welcome !</h1>

              <div className='flex flex-col mt-[50px] font-medium space-y-3' >
                  <h1 className='text-[31px]' >Sign in to </h1>
                  <p>Lorem Ipsum is simply </p>
             </div>


             <form className='mt-[50px]'>
                  <div className="mb-4">
                      <label className="block text-sm font-bold mb-2 text-[16px] font-normal" for="User Name">
                          User Name
                      </label>
                      <input className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none" id="username" type="text" placeholder="Username"/>
                  </div>

                  <div>
                      <label htmlFor="">User Name</label>
                      <input type="text" placeholder='Enter Your user name' />
                  </div>
             </form>
             
         </div>


         <img src='' /> 


       </div>
  )
}

 
