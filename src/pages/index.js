
import LoadingIndicator from "@/components/LoadingIndicator"
import authService from "@/services/authServices"
import taskService from "@/services/taskServices"
import Cookies from "js-cookie"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"



export default function Home() {

  const data = [
    "Take the dog for a walk",
    "Cook breakfast",
    "Finish pending tasks for the project"
  ]

  const initialDate = {
    dd : 0 ,
    mm : 0 ,
    yyyy : 0,
    Month : "",
    dateFormat : ""
  }
  

  const [DailyTask, setDailyTask] = useState([])
  const [CurrDate, setCurrDate] = useState(initialDate)
  const [Date, setDate] = useState(initialDate)
  const [username, setUsername] = useState("")
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  

  useEffect(()=>{  
    let { dd, mm, yyyy, Month } = taskService.CurrDate()
    setDate({ dd, mm, yyyy, Month })
    setCurrDate({ dd, mm, yyyy, Month })
    console.log(DailyTask)
  },[])

  useEffect(()=>{
    taskService.getTasks(Cookies.get("jwt"), Cookies.get("id"))
      .then((res) => {

        let data =
          res.tasks.filter((el) => el.dateF == Date.dd + Date.mm + Date.yyyy)
        setDailyTask([...data])
        setUsername(res.username)
        setLoading(false)
      })
  }, [Date])


  


  const LogOut = ()=>{

    setLoading(true)

    authService.logoutUser()
    .then((res)=> {
      if(res == 200){
        setLoading(false)
        router.push("/register");
      } 
    })
    
  }



  

  if (loading) return <LoadingIndicator />

  return (
    <div className='relative flex w overflow-hidden text-left text-base text-black font-poppins justify-center max-w-[1200px] md-w-'>

      <div className="relative flex-1 border rounded-[10px] bg-white shadow-[0px_4px_64px_rgba(0,_0,_0,_0.05)] box-border h-[650px] max-w-[90%] sm:w-[100%] md:max-w-[505px] lg:max-w-[404px] xl:max-w-[505px] border-[0.5px] border-solid border-gray-500 p-5 sm:p-5 md:p-10 lg:p-10">
        <h1 className='text-[22px] font-light' >Hello !</h1>

        <div className='flex flex-col mt-[20px] font-medium' >
          <h1 className='text-[30px] mb-[20px]' > {username && username } </h1>
          <p className='text-[16px]'>Good to see you again! </p>
        </div>


        <div className="">
          <p className='text-[16px] mt-[20px] font-bold'>Tasks for {`${Date.dd}th ${Date.Month}, ${Date.yyyy}`} :</p>

          <div class="inline-flex gap-2 mt-2">
            <button onClick={()=>setDate({...Date, dd : Date.dd-1})} class="bg-gray-300 text-[15px] hover:bg-gray-400 text-gray-800 font-bold h-[25px] px-[20px] rounded-l">
              Prev
            </button>

            <button onClick={() => setDate({ ...CurrDate})} class="bg-gray-300 text-[15px] hover:bg-gray-400 text-gray-800 font-bold h-[25px] px-[20px] rounded-l">
              Reset
            </button>
            <button onClick={()=>setDate({...Date, dd : Date.dd+1})}  class="bg-gray-300 text-[15px] hover:bg-gray-400 text-gray-800 font-bold h-[25px] px-[20px] rounded-r">
              Next
            </button>
          </div>

      </div>

        <div className='p-5'>
          { DailyTask  &&
             <ul className='list-disc'>
               {
                   DailyTask.map((el) => (
                   <li className='text-[16px]'>{el.task}</li>
                 ))
               }
             </ul>         
          }

          {
            DailyTask.length==0 && <div >
             

              <img className="mt-[-20px]" src="https://media.tenor.com/unvXyxtdn3oAAAAC/no-result.gif" alt="" srcset="" />
           
            </div>  
          }
        </div>


  {/* position absolute  */}

        <div className='absolute mt-[50px] bottom-0 w-[85%] justifycontent-center text-center'>
            <input
            style={{ border: "0.5px solid" }} className="rounded w-full py-4 px-5 text-gray-500 text-[14px] mb-3 rounded-[6px] focus:outline-none" id="username" type="name" placeholder="Eg. Need to finish my assignment . . ." />
      
          <button 
            className='mb-4 bg-black text-white text-[18px] w-[100%] p-5 rounded-[6px] hover:bg-gray-500'>
            Add New Task
          </button>

           <button
            onClick={LogOut}
            className='mb-8 w-[100px]  text-[18px] w-[100%] rounded-[6px] justify-self-center hover:scale-125'>
            Logout
          </button>
    
        </div>

      </div>

    </div>
  )
}

// export async function getServerSideProps() {
  
//   try {
//     const result = "await axios.get(`${API_URL}/public_setlists/${id}`);"
//     let setlist = "result.data";
//     taskService.getTasks(Cookies.get("jwt"), Cookies.get("id"))
//     .then((res)=> console.log(res))
//     //setlist.songs?.sort((songA, songB) => songA.position - songB.position);
//     return { props: { setlist } };
//   } catch (error) {
//     return { props: { setlist: null } };
//   }

// }


// this function will call before redering
// export const getServerSideProps = async (context) => {

//   let response = "ss"
//   let flag = false
 
//     taskService.getTasks(Cookies.get("jwt"), Cookies.get("id"))
//     .then((res) => {
//       response = res.tasks
//       return flag = true
//     })
  
//   if (flag){
//     console.log(response)
//     return {
//       props: {
//         user: response
//       }
//     }

//   }

// }


//// [Dynamic All Dates Data ]
// const result = res.tasks.reduce((acc, curr) => {
//   const dateF = curr.dateF;
//   const found = acc.find(item => item[0].dateF === dateF);
//   if (found) {
//     found.push(curr);
//   } else {
//     acc.push([curr]);
//   }
//   return acc;
// }, []);

// sellDayTask([...result])



// [ ( All NPM Installation )]

// npm install - D tailwindcss postcss autoprefixer
// npx tailwindcss init - p
// npm i axios
// npm i js-cookie jsonwebtoken
