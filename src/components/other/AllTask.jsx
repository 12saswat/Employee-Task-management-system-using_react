import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded max-h-full  ">
      <div className="bg-red-400  mb-2 py-2 px-4 flex justify-between rounded">
        <h3 className="w-1/5 text-xl font-bold ">New task</h3>
        <h2 className="w-1/5 text-xl font-bold ">employee name</h2>
        <h5 className="w-1/5 text-xl font-bold ">Active task</h5>
        <h5 className="w-1/5 text-xl font-bold ">completed</h5>
        <h5 className="w-1/5 text-xl font-bold ">failed</h5>
      </div>
      <div className="h-[80%] ">
        {" "}
        {userData.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="border-emerald-500 border-2  mb-2 py-2 px-4 flex justify-between rounded"
            >
              <h2 className="w-1/5 text-xl font-semibold ">{elem.firstName}</h2>
              <h3 className="w-1/5 text-xl font-semibold text-blue-600">
                {elem.taskNumber.active}
              </h3>
              <h5 className="w-1/5 text-xl font-semibold text-yellow-400">
                {elem.taskNumber.newTask}
              </h5>
              <h5 className="w-1/5 text-xl font-semibold text-green-600">
                {elem.taskNumber.complete}
              </h5>
              <h5 className="w-1/5 text-xl font-semibold text-red-600">
                {elem.taskNumber.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
