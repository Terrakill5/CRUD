<template>
    <ul class="list-group">
      <li
        class="list-group-item list-group-item-action"
        v-for="(task, index) in tasks"
        :key="index"
        style="cursor: pointer"
        @click="$router.push(`/tasks/${task._id}`)"
      > {{index + 1}}.
        {{ task.title }}
      </li>
    </ul>
</template>

<script lang="ts">
import { Task } from "../interfaces/Task";
import { defineComponent } from "vue";
import { getTasks } from "../API/TaskService";

export default defineComponent({
  data() {
    return {
      tasks: [] as Task[],
    };
  },
  methods: {
    async loadTasks() {
      const res = await getTasks();
      this.tasks =
        res.data; /* Los datos que estan en el arreglo se guardan en tasks*/
    },
  },
  mounted() {
    this.loadTasks(); //esto para que cargue la pagina con las tareas
  },
});
</script>
