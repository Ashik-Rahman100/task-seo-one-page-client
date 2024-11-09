import React from "react";

import { CustomScroll } from "react-custom-scroll";
import SingleTaskContent from "./singleTaskContent";

export default function TaskCard({task}) {
  const taskData = [
    {id:1, clientName:'Adani'},
    {id:2, clientName:'Josef'},
    {id:3, clientName:'Miler'},
    {id:4, clientName:'Jhon'},
    {id:5, clientName:'Faizan'},
    {id:6, clientName:'William'},
    {id:7, clientName:'Smith'},
    {id:7, clientName:'Adani'},
  ]
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
