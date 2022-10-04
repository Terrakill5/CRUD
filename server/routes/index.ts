import { Router } from "express";
import Task from "../modefs/task";

const router = Router();

router.get("/tasks", async (req, res) => {
  const tasks =
    await Task.find();
  res.send(tasks);
});

router.post("/tasks", async (req, res) => {
  const { title, description } = req.body;

  const task = new Task({ title, description }); 

  await task.save(); 

  res.json(task); 
});

router.get("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
     /*Esto va a obtener solo el Id que
      se paso por parametro y lo encontrara
       en la base de datos*/
    if (!task) return res.status(404).json({ message: "task not found" }); 
    res.send(task);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id); 
    /*devuelve la tarea eliminada de la base de datos*/
    if (!task) return res.status(404).json({ message: "Task not found" });
     /*sino encuentra la tarea lo avisa, el error 404 se usa en HTTP que
      significa que el archivo no se encuentra en la base de datos*/
    return res.json(task);
  } catch (error) {
    return res.status(500).send(error);
     /*500 es una respuesta de error generica,
      basicamente significa que las condiciones
    no son suficientes para cumplir con el request*/
  }
});

router.put("/tasks/:id", async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }); /*el new: true hace que se devuelva la tarea ya actualizada, 
  caso contrario devolveria la tarea sin actualizar. Lo que dice el
   metodo es que si encuentra la tarea por el id del primer parametro,
    lo actualizara con el segundo parametro*/
  res.json(updatedTask);
});

export default router;
