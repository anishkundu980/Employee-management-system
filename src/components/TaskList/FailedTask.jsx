import React from 'react'

const FailedTask = ({data}) => {
  return (
   <div className="flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl pt-5 pl-3 pr-3">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">{data.category}</h3>
          <h4>{data.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">{data.taskTitle}</h2>
        <p className="text-sm mt-2"> {data.taskDescription}</p>
          <div className='mt-6'>
                <button className='w-full bg-red-500 rounded font-medium py-1 px-2 text-xs'>Failed</button>
            </div>
      </div>
  )
}

export default FailedTask