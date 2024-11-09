

import TaskCard from "./TaskCard";

export default function TaskContainer() {
  const taskStatus = [
    {id:1,title:"Incomplete", done:0},
    {id:2,title:"Painding", done:12},
    {id:3,title:"Review", done:5},
    {id:4,title:"Review", done:6},
    {id:5,title:"Review", done:4},
    {id:6,title:"Complete", done:1},
    {id:7,title:"Complete", done:2},
  ]
  return (
    <div className="mx-4 ">
      <div className="flex flex-row lg:space-x-2   ">
        {
          taskStatus.map((task, index) => <TaskCard task={task} key={index} ></TaskCard> )
        }
        
        
      </div>
    </div>
  );
}
