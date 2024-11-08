import React from "react";

import { CustomScroll } from "react-custom-scroll";
import SingleTaskContent from "./singleTaskContent";

export default function TaskCard() {
  return (
    <div className="bg-slate-100 ">
      <div className="flex justify-between p-3 ">
        <p className="font-semibold text-sm">Incomplete</p>
        <p className="border  bg-slate-300">
          <span className="p-2 font-semibold ">0</span>
        </p>
      </div>
      <CustomScroll heightRelativeToParent="calc(100% - 300px)">
        <SingleTaskContent></SingleTaskContent>
        <SingleTaskContent></SingleTaskContent>
        <SingleTaskContent></SingleTaskContent>
        <SingleTaskContent></SingleTaskContent>
        <SingleTaskContent></SingleTaskContent>
        <SingleTaskContent></SingleTaskContent>
        <SingleTaskContent></SingleTaskContent>
        <SingleTaskContent></SingleTaskContent>
      </CustomScroll>
    </div>
  );
}
