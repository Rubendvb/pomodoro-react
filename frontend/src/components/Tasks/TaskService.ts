import axios from "axios";

export const getTasks = async () => {
  return await axios.get("http://localhost:4000/tasks");
};
