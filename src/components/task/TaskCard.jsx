import React from "react";

import { CustomScroll } from "react-custom-scroll";
import { taskData } from "../../utils/task";
import SingleTaskContent from "./singleTaskContent";

export default function TaskCard({task}) {
  
  return (
    <div className="bg-slate-100 ">
      <div className="flex justify-between p-3 ">
        <p className="font-semibold text-sm">{task.title}</p>
        <p className="border  bg-slate-300">
          <span className="p-2 font-semibold ">{task.done}</span>
        </p>
      </div>
      <CustomScroll heightRelativeToParent="calc(100% - 300px)">
        {
          taskData.map((Tdata, index) => <SingleTaskContent Tdata={Tdata} key={index} ></SingleTaskContent> )
        }
        
      </CustomScroll>
    </div>
  );
}
