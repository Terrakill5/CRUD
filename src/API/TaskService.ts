import axios from "./axios";
import { Task } from "../interfaces/Task";
import {AxiosResponse} from "axios";

export const getTasks = async():Promise<AxiosResponse<Task[]>> => await axios.get("/tasks"); //nos devuelve todas las tareas, y para typescript defino que devuelve una respuesta de axios

export const getTask = async (id: string): Promise<AxiosResponse<Task>> => await axios.get("/tasks/" + id); //nos devuelve una unica tarea con su respectivo id

export const createTask = async (task: Task) => //crea una tarea 
  await axios.post("/tasks", task);

export const updateTask = async (id: string, task: Task) => await axios.put("/tasks/" + id, task); //esto actualiza la tarea, recibe el id y los datos de la tarea para poder actualizarlo 

export const deleteTask = async (id: string): Promise<AxiosResponse<Task>> => await axios.delete("/tasks/" + id); //Borra la tarea con la que se le haya pasado el id