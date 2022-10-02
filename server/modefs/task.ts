import { Schema, model } from "mongoose";
/* Schema define lo que vamos a guardar en la base de datos,
model funciona para hacer consultas desde el codigo*/
const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true /* Trim funciona para quitar espacios al final y principio del string*/,
      unique: true, /* Para que si hay un titulo y se crea uno igual, de error*/
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    done: {
      /* Esto para saber si la tarea fue hecha o no*/ type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false, /* esto para que no salga __v como atributo, que es un atributo para funcionamiento interno de mongodb*/
  }
);

export default model("Task", taskSchema);
