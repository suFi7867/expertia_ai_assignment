import React from 'react'

export default function Task({DailyTask}){
  return (
      <ul className='list-disc'>
          {
              DailyTask.map((el) => (
                  <li className='text-[16px]'>{el.task}</li>
              ))
          }
      </ul> 
  )
}


