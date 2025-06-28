

<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from '@/axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'UserLogin',
  setup() {
    const email = ref('')
    const password = ref('')
    const router = useRouter()

    const handleLogin = async () => {
      try {
        const response = await axios.post('/login', {
          email: email.value,
          password: password.value
        })
        localStorage.setItem('token', response.data.token)
        router.push('/admin')
      } catch (error) {
        alert('Login failed: ' + (error.response?.data?.error || error.message))
      }
    }

    return {
      email,
      password,
      handleLogin
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 2rem auto;
  padding: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

input {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
}

button {
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  cursor: pointer;
}
</style>
