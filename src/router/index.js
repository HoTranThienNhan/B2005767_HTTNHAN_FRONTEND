import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
import ContactAdd from "@/views/ContactAdd.vue";
import ContactHomePage from "@/views/ContactHomePage.vue";

const routes = [
    {
        path: "/",
        name: "contact.homepage",
        component: ContactHomePage,
    },
    {
        path: "/contact",
        name: "contactbook",
        component: ContactBook,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/signin",
        name: "contact.signin",
        component: () => import("@/views/SignIn.vue"),
    },
    {
        path: "/signup",
        name: "contact.signup",
        component: () => import("@/views/SignUp.vue"),
    },
    {
        path: "/contacts/:id",
        name: "contact.edit",
        component: () => import("@/views/ContactEdit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/contacts/add",
        name: "contact.add",
        component: ContactAdd,
    },
];

export const router = createRouter({
    history: createWebHistory(!import.meta.env.BASE_URL),
    routes,
});

export default router;