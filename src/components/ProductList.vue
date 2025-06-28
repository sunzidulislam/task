<template>
  <div>
    <h1>Products</h1>
    <router-link to="/products/create">
      <button>Add New Product</button>
    </router-link>

    <table border="1" cellspacing="0" cellpadding="8" style="margin-top:1rem; width:100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>${{ product.price }}</td>
          <td>
            <img v-if="product.image" :src="imageUrl(product.image)" alt="image" width="60" />
            <span v-else>No Image</span>
          </td>
          <td>
            <router-link :to="`/products/edit/${product.id}`">
              <button>Edit</button>
            </router-link>
            <button @click="deleteProduct(product.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import axios from '@/axios'

export default {
  name: 'ProductList',
  data() {
    return {
      products: [],
    }
  },
  mounted() {
    this.fetchProducts()
  },
  methods: {
    fetchProducts() {
      axios.get('/products')
        .then(res => {
          this.products = res.data
        })
        .catch(err => {
          alert('Failed to load products: ' + err.message)
        })
    },
    deleteProduct(id) {
      if (confirm('Are you sure you want to delete this product?')) {
        axios.delete(`/products/${id}`)
          .then(() => {
            alert('Product deleted')
            this.fetchProducts()
          })
          .catch(err => {
            alert('Delete failed: ' + err.message)
          })
      }
    },
    imageUrl(path) {
      return `http://localhost:8000/storage/${path}`
    }
  }
}
</script>
