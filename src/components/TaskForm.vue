<template>
  <div class="col-md-4 offset-md-4">
    <h1 class="text-center">Create Task</h1>
    <form @submit.prevent="saveTask()" class="card card-body">
    <input autofocus class="form-control mb-3" type="text" placeholder="Write a title" v-model="task.title" />

    <textarea
    class="form-control mb-3"
      placeholder="Write a description"
      rows="3"
      v-model="task.description"
    ></textarea>

    <button :disabled="!task.title || !task.description" class="btn btn-primary">Save</button>
  </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Task } from "../interfaces/Task";
import { createTask} from "../API/TaskService";

export default defineComponent({
  data() {
    return {
      task: {} as Task,
    };
  },
  methods: {
    async saveTask() {
      const res = await createTask(this.task);
      console.log(res);
      this.$router.push({name: "tasks"});
    },
  },
});
</script>
