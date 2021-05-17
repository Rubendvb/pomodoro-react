import React, { useEffect, useState } from "react";
import { Task } from "./Task";
import * as taskService from "./TaskService";
import TaskItem from "./TaskItem";

const TaskLists = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = async () => {
    const res = await taskService.getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      {tasks.map((task) => {
        return <TaskItem task={task} />;
      })}
    </div>
  );
};

export default TaskLists;
