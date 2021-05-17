import React from "react";
import { Task } from "./Task";

interface Props {
  task: Task;
}

function TaskItem({ task }: Props) {
  return (
    <div>
      <h1>{task.title}</h1>
    </div>
  );
}

export default TaskItem;
