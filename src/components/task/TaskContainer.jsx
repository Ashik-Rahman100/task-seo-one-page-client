import React from "react";
import '../../App.css';
import TaskCard from "./TaskCard";

export default function TaskContainer() {
  return (
    <div className="mx-4">
      <div className="flex flex-row lg:space-x-2 space-y-4 lg:space-y-0 horizontal-scroll ">
        <TaskCard></TaskCard>
        <TaskCard></TaskCard>
        <TaskCard></TaskCard>
        {/* <TaskCard></TaskCard>
        <TaskCard></TaskCard>
        <TaskCard></TaskCard>
        <TaskCard></TaskCard>
        <TaskCard></TaskCard>
        <TaskCard></TaskCard> */}
      </div>
    </div>
  );
}
