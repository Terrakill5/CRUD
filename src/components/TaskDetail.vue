<template>
  <div class="col-md-4 offset-md-4">
    <h1 class="text-center">Task Detail</h1>

    <form @submit.prevent="handleUpdate()" class="card card-body">
      <input
      autofocus
        class="form-control mb-3"
        type="text"
        v-model="currentTask.title"
      />

      <textarea
        class="form-control mb-3"
        rows="3"
        v-model="currentTask.description"
      ></textarea>
      <button class="btn btn-primary">Update</button>
    </form>
    <div class="text-center">
      <button class="btn btn-danger text-center" @click="handleDelete()">
        Delete
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { deleteTask, getTask, updateTask } from "../API/TaskService";
import { Task } from "../interfaces/Task";

export default defineComponent({
  data() {
    return {
      currentTask: {} as Task,
    };
  },
  methods: {
    async loadTask(id: string) {
      const res = await getTask(id);
      this.currentTask = res.data;
    },
    async handleUpdate() {
      if (typeof this.$route.params.id === "string") {
        await updateTask(this.$route.params.id, this.currentTask);
        this.$router.push("/");
      }
    },
    async handleDelete() {
      if (typeof this.$route.params.id === "string") {
        await deleteTask(this.$route.params.id);
        this.$router.push("/");
      }
    },
  },
  mounted() {
    if (typeof this.$route.params.id === "string") {
      this.loadTask(this.$route.params.id);
    }
  },
});
</script>
