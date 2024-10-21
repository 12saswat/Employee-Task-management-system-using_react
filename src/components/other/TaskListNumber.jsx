import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div className="flex mt-10   justify-evenly gap-2 w-screen ">
      <div className=" rounded-xl  py-6 px-9 bg-red-400 ">
        <h2 className="text-3xl font-semibold ">{data.taskNumber.newTask}</h2>
        <h3 className="text-xl font-medium">New task</h3>
      </div>
      <div className=" rounded-xl  py-6 px-9 bg-blue-400 ">
        <h2 className="text-3xl font-semibold ">{data.taskNumber.complete}</h2>
        <h3 className="text-xl font-medium">Completed task</h3>
      </div>
      <div className=" rounded-xl  py-6 px-9 bg-green-400 ">
        <h2 className="text-3xl font-semibold ">{data.taskNumber.failed}</h2>
        <h3 className="text-xl font-medium">Accepted task</h3>
      </div>
      <div className=" rounded-xl  py-6 px-9 bg-yellow-400 ">
        <h2 className="text-3xl font-semibold ">{data.taskNumber.active}</h2>
        <h3 className="text-xl font-medium">failed task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
