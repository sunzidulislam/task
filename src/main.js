import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// Us or '@/axios' if using aliases


createApp(App).use(router).mount("#app");
