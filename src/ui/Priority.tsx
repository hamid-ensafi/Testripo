import React from "react";
import lowImage from "@/assets/img/low.svg";
import midImage from "@/assets/img/midd.svg";
import highImage from "@/assets/img/high.svg";
import { IPriorityMap } from "@/types/ui/Priority.interface";

const priority: IPriorityMap = {
  LOW: {
    name: "کم",
    image: lowImage,
  },
  MEDIUM: {
    name: "متوسط",
    image: midImage,
  },
  HIGH: {
    name: "زیاد",
    image: highImage,
  },
};

function Priority({
  priorityLevel,
}: {
  priorityLevel: keyof typeof priority;
}): React.JSX.Element {
  return (
    <div className="flex-col flex gap-1 ">
      <p className="text-start">{priority[priorityLevel].name}</p>
      <figure>
        <img
          src={priority[priorityLevel].image}
          alt={priority[priorityLevel].name}
        />
      </figure>
    </div>
  );
}

export default Priority;
