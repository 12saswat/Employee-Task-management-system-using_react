import React from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../taskList/TaskList";

const EmployeDashboard = (props) => {
  return (
    <div className=" bg-[#1c1c1c] h-screen">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumber data={props.data} />
      <TaskList data={props.data} />
      <div></div>
    </div>
  );
};

export default EmployeDashboard;
