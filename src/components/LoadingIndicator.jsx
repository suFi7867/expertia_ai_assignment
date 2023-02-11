import React from 'react'

export default function LoadingIndicator() {
  return (
    <div className='flex overflow-hidden text-left text-base text-black font-poppins justify-center max-w-[1200px] '>

      <div className='flex flex-col justify-center align-center border rounded-[10px] bg-white shadow-[0px_4px_64px_rgba(0,_0,_0,_0.05)]  h-[701px] max-w-[90%] sm:w-[100%] md:max-w-[505px] lg:max-w-[505px] xl:max-w-[505px] border-[0.5px] border-solid border-gray-500 p-5 sm:p-5 md:p-10 lg:p-10 '>

        <div className='ml-0 md:ml-[100px] lg:ml-[100px]  max-h-[200px] max-w-[200px]'>
          <img className='max-w-[200px] max-h-[200px]' src='https://dltqhkoxgn1gx.cloudfront.net/img/posts/6-vue-loader-animation-libraries-to-reduce-your-bounce-rate-2.png' />
        </div>

      </div>

    </div>
  )
}


