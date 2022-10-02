import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"

const routes: RouteRecordRaw[] = [
    {
        path: "/", alias:"/tasks", name: "tasks", component: () => import("@/components/TaskList.vue"),
    },
    {
        path: "/tasks/new", name: "tasks-name", component: () => import("@/components/TaskForm.vue"),
    },
    {
        path: "/tasks/:id", name: "tasks-details", component: () => import("@/components/TaskDetail.vue"),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;