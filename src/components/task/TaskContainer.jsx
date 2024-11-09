

import { taskStatus } from "../../utils/task";
import TaskCard from "./TaskCard";

export default function TaskContainer() {
  
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
