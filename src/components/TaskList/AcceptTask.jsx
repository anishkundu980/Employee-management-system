import React from 'react'

const AcceptTask = ({data}) => {
  
  console.log()
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl pt-5 pl-3 pr-3">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">{data.category}</h3>
          <h4>{data.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">{data.taskTitle}</h2>
        <p className="text-sm mt-2">{data.taskDescription}
        </p>
        <div className='flex justify-between mt-6'>
            <button className='bg-green-500 rounded font-medium py-1 px-2 text-xs'>Mark as Completed</button>
                <button className='bg-red-500 rounded font-medium py-1 px-2 text-xs'>Mark as Failed</button>

        </div>
      </div>
  )
}

export default AcceptTask