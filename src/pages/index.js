
import Link from "next/link"


export default function Home() {

  const data = [
    "Take the dog for a walk",
    "Cook breakfast",
    "Finish pending tasks for the project"
  ]


  return (
    <div className='relative flex w overflow-hidden text-left text-base text-black font-poppins justify-center max-w-[1200px] md-w-'>

      <div className="relative flex-1 border rounded-[10px] bg-white shadow-[0px_4px_64px_rgba(0,_0,_0,_0.05)] box-border h-[650px] max-w-[90%] sm:w-[100%] md:max-w-[505px] lg:max-w-[404px] xl:max-w-[505px] border-[0.5px] border-solid border-gray-500 p-5 sm:p-5 md:p-10 lg:p-10">
        <h1 className='text-[22px] font-light' >Hello !</h1>

        <div className='flex flex-col mt-[20px] font-medium' >
          <h1 className='text-[30px] mb-[20px]' >John Doe </h1>
          <p className='text-[16px]'>Good to see you again! </p>
        </div>


        <p className='text-[16px] mt-[20px] font-bold'>Tasks for 24th Dec, 2022 :</p>

        <div className='p-5'>
          <ul className='list-disc'>
            {
              data.map((el) => (
                <li className='text-[16px]'>{el}</li>
              ))
            }
          </ul>
        </div>


  {/* position absolute  */}

        <div className='absolute mt-[50px] bottom-0 w-[85%] justifycontent-center text-center'>
            <input
            style={{ border: "0.5px solid" }} className="rounded w-full py-4 px-5 text-gray-500 text-[14px] mb-3 rounded-[6px] focus:outline-none" id="username" type="name" placeholder="Eg. Need to finish my assignment . . ." />
      
          <button 
            className='mb-4 bg-black text-white text-[18px] w-[100%] p-5 rounded-[6px] hover:bg-gray-500'>
            Add New Task
          </button>

          <Link href="/register"> <button
            className='mb-8 w-[100px]  text-[18px] w-[100%] rounded-[6px] justify-self-center hover:scale-125'>
            Logout
          </button>
          </Link> 
        

        </div>

      </div>


     


    </div>
  )
}



// [ ( All NPM Installation )]

// npm install - D tailwindcss postcss autoprefixer
// npx tailwindcss init - p
// npm i axios

