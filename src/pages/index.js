
import LoadingIndicator from "@/components/LoadingIndicator"
import Task from "@/components/Task"
import authService from "@/services/authServices"
import taskService from "@/services/taskServices"
import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"



export default function Home({ dailyTask, userName, isloading, dates }) {

  // User Data
  const [DailyTask, setDailyTask] = useState(dailyTask)
  const [username, setUsername] = useState(userName)

  const [inputTask, setinputTask] = useState("")

  const [CurrDate, setCurrDate] = useState({ ...dates })
  const [Date, setDate] = useState({ ...dates })

  // for Loading Indicator
  const [loading, setLoading] = useState(isloading)

  const router = useRouter()

  useEffect(() => {
    fetchData();
  }, [Date])

  const fetchData = () => {
    taskService
      .getTasks(Cookies.get("jwt"), Cookies.get("id"))
      .then((res) => {
        let data =
          res?.tasks?.filter((el) => el.dateF == Date.dd + Date.mm + Date.yyyy)
        if (data) {
          setDailyTask([...data])
          setUsername(res.username)
          setLoading(false)
        }
      })
  }

  const LogOut = () => {
    setLoading(true)

    authService.logoutUser()
      .then((res) => {
        if (res == 200) {
          setLoading(false)
          router.push("/register");
        }
      })
  }

  const AddTasksDynamically = () => {

    if (DailyTask.length >= 5)
      return alert("Daily Tasks limit exceeded, try Diffirent Date")

    const data = {
      username, task: inputTask, dateF: Date.dd + Date.mm + Date.yyyy
    }

    taskService.addTasks(data, Cookies.get("jwt"))
      .then((res) => {
        if (res == 200) {
          alert(`Task Added Successfully for ${Date.dd}th ${Date.Month}, ${Date.yyyy}`)
          fetchData()
        }
      })
    setinputTask("")

  }



  if (loading) return <LoadingIndicator />

  return (



    <div className='relative flex w overflow-hidden text-left text-base text-black font-poppins justify-center max-w-[1200px] md-w-'>

      <div className="relative flex-1 border rounded-[10px] bg-white shadow-[0px_4px_64px_rgba(0,_0,_0,_0.05)] box-border h-[650px] max-w-[90%] sm:w-[100%] md:max-w-[505px] lg:max-w-[404px] xl:max-w-[505px] border-[0.5px] border-solid border-gray-500 p-5 sm:p-5 md:p-10 lg:p-10">
        <h1 className='text-[22px] font-light' >Hello !</h1>

        <div className='flex flex-col mt-[20px] font-medium' >
          <h1 className='text-[30px] mb-[20px]' > {username && username} </h1>
          <p className='text-[16px]'>Good to see you again! </p>
        </div>

        {/* All Buttons  */}
        <div className="">
          <p className='text-[16px] mt-[20px] font-bold'>{Date && `Tasks for ${Date.dd}th ${Date.Month}, ${Date.yyyy}`} </p>

          <div className="inline-flex gap-2 mt-2">
            <button onClick={() => setDate({ ...Date, dd: Date.dd - 1 })} className="bg-gray-300 text-[15px] hover:bg-gray-400 text-gray-800 font-bold h-[25px] px-[20px] rounded-l">
              Prev
            </button>

            <button onClick={() => setDate({ ...CurrDate })} className="bg-gray-300 text-[15px] hover:bg-gray-400 text-gray-800 font-bold h-[25px] px-[20px] rounded-l">
              Reset
            </button>
            <button onClick={() => setDate({ ...Date, dd: Date.dd + 1 })} className="bg-gray-300 text-[15px] hover:bg-gray-400 text-gray-800 font-bold h-[25px] px-[20px] rounded-r">
              Next
            </button>
          </div>

        </div>


        {/* Tasks Div or Error Handeling  */}
        <div className='p-5'>
          {DailyTask && <Task DailyTask={DailyTask} />}

          {
            DailyTask.length == 0 && <img className="mt-[-20px]" src="https://media.tenor.com/unvXyxtdn3oAAAAC/no-result.gif" alt="no data found image" />
          }
        </div>


        {/* Buttons  */}

        <div className='absolute mt-[50px] bottom-0 w-[85%] justifycontent-center text-center'>
          <input
            value={inputTask}
            onChange={(e) => setinputTask(e.target.value)}
            style={{ border: "0.5px solid" }} className="rounded w-full py-4 px-5 text-gray-500 text-[14px] mb-3 rounded-[6px] focus:outline-none" id="username" type="name" placeholder="Add Tasks" />

          <button
            onClick={AddTasksDynamically}
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




export const getServerSideProps = async reqs => {

  const jwt = reqs.req.cookies.jwt;
  const id = reqs.req.cookies.id;
  console.log(reqs.req)


  const res = await taskService.getTasks(jwt, id);
  let dates = taskService.CurrDate()

  
  if (res == 400) { // error handling
    return {
      props: {
        dailyTask: [],
        userName: "",
        isloading: false
      }
    };
  }

  return {
    props: {
      dailyTask: res.tasks,
      userName: res.username,
      isloading: false,
      dates: dates
    }
  };


}


//// [ Dynamic All Dates Data ]
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
