import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'


const createTask = () => {

  const [userData,setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask,setNewTask] = useState({})

  const submitHandler = (e)=>{
  e.preventDefault()

   setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

   const data = userData
   
   



   data.forEach(function(elem) {
    if(asignTo == elem.firstName){
      elem.tasks.push(newTask)
      elem.taskCounts.newTask = elem.taskCounts.newTask+1
    }
   })
   setUserData(data)
   console.log(data);
   



   console.log(data)
   localStorage.setItem('employees',JSON.stringify(data))

   setTaskTitle('')
   setCategory('')
   setAsignTo('')
   setTaskDate('')
   setTaskDescription('')


  
  }
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}
         className="flex w-full flex-wrap items-start justify-between">
          <div className="w-1/2">
            <div className="pb-3">
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
              value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  border-gray-400 "
                type="text"
                placeholder="Make a UI Design"
              />
            </div>  
            <div className="pb-3">
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
              value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  border-gray-400"
                type="date"
              />
            </div>
            <div className="pb-3">
              <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
              <input
              value={asignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value)
                            }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  border-gray-400"
                type="text"
                placeholder="employee name"
              />
            </div>
            <div className="pb-3">
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
              value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  border-gray-400"
                type="text"
                placeholder="design,dev,etc."
              />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
              Create Task
            </button>
          </div>
        </form>
      </div>
  )
}

export default createTask