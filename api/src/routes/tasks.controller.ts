import { RequestHandler } from "express";
import Task from "./Task";

export const createTask: RequestHandler = async (req, res) => {
  const task = new Task(req.body);
  const savedTask = await task.save();

  res.json(savedTask);
};

export const getTasks: RequestHandler = async (req, res) => {
  try {
    const tasks = await Task.find();
    return res.json(tasks);
  } catch (error) {
    res.json(error);
  }
};

export const getTask: RequestHandler = async (req, res) => {
  const taskFound = await Task.findById(req.params.id);

  if (!taskFound) {
    return res.status(204).json();
  }

  return res.json(taskFound);
};

export const deleteTask: RequestHandler = async (req, res) => {
  const taskFound = await Task.findByIdAndDelete(req.params.id);

  if (!taskFound) {
    return res.status(204).json();
  }

  return res.json(taskFound);
};

export const updateTask: RequestHandler = async (req, res) => {
  const taskUpdate = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!taskUpdate) {
    return res.status(204).json();
  }

  res.json(taskUpdate);
};
