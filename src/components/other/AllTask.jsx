import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="mt-5 rounded bg-[#1c1c1c] p-5">
      <div className="overflow-x-auto">
        <div className="mb-2 grid min-w-[34rem] grid-cols-[minmax(10rem,2fr)_repeat(4,minmax(6rem,1fr))] rounded bg-red-400 px-4 py-2">
          <h2 className="text-lg font-medium">Employee Name</h2>
          <h3 className="text-center text-lg font-medium">New Tasks</h3>
          <h5 className="text-center text-lg font-medium">Active Task</h5>
          <h5 className="text-center text-lg font-medium">Completed</h5>
          <h5 className="text-center text-lg font-medium">Failed</h5>
        </div>
        {userData.map(function(elem,idx) {
          return (
            <div key={elem.id ?? idx} className="mb-2 grid min-w-[34rem] grid-cols-[minmax(10rem,2fr)_repeat(4,minmax(6rem,1fr))] items-center rounded border-2 border-emerald-400 px-4 py-2">
              <h2 className="text-lg font-medium">{elem.firstName}</h2>
              <h3 className="text-center text-lg font-medium text-blue-400">{elem.taskCounts.newTask}</h3>
              <h5 className="text-center text-lg font-medium text-yellow-400">{elem.taskCounts.active}</h5>
              <h5 className="text-center text-lg font-medium text-white">{elem.taskCounts.completed}</h5>
              <h5 className="text-center text-lg font-medium text-red-600">{elem.taskCounts.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
