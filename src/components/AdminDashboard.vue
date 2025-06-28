<template>
  <div class="admin-dashboard">
    <h1>Admin Dashboard</h1>
    <p>Welcome to the admin panel.</p>
    <button @click="handleLogout">Logout</button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "AdminDashboard", // Multi-word component name for ESLint

  setup() {
    const router = useRouter();

    const handleLogout = () => {
      localStorage.removeItem("token"); // Remove JWT token
      router.push("/login"); // Redirect to login page
    };

    return {
      handleLogout,
    };
  },
};
</script>

<style scoped>
.admin-dashboard {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

button {
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  cursor: pointer;
}
</style>
