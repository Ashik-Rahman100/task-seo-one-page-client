

import TaskCard from "./TaskCard";

export default function TaskContainer() {
  return (
    <div className="mx-4 ">
      <div className="flex flex-row lg:space-x-2   ">
        <TaskCard></TaskCard>
        <TaskCard></TaskCard>
        <TaskCard></TaskCard>
        <TaskCard></TaskCard>
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
