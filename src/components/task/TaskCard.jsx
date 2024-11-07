import React from "react";
import SingleTaskContent from "./singleTaskContent";

export default function TaskCard() {
  return (
    <div className="w-80 bg-slate-100">
      <div className="flex justify-between p-3 ">
        <p className="font-semibold text-sm">Incomplete</p>
        <p className="border  bg-slate-300">
          <span className="p-2 font-semibold ">0</span>
        </p>
      </div>
      {/* reuseable card */}
      <SingleTaskContent></SingleTaskContent>
      <SingleTaskContent></SingleTaskContent>
      <SingleTaskContent></SingleTaskContent>
      <SingleTaskContent></SingleTaskContent>
      <SingleTaskContent></SingleTaskContent>
      <SingleTaskContent></SingleTaskContent>
      <SingleTaskContent></SingleTaskContent>
      <SingleTaskContent></SingleTaskContent>
    </div>
  );
}
