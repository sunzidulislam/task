import { createRouter, createWebHistory } from "vue-router";
import UserLogin from "@/components/UserLogin.vue";
import AdminDashboard from "@/components/AdminDashboard.vue";
import ProductList from "@/components/ProductList.vue";
import ProductForm from "@/components/ProductForm.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: UserLogin },
  { path: "/admin", component: AdminDashboard },
  { path: "/products", component: ProductList },
  { path: "/products/create", component: ProductForm },
  { path: "/products/edit/:id", component: ProductForm, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
