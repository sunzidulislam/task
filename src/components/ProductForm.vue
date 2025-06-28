<template>
  <div>
    <h1>{{ isEdit ? 'Edit Product' : 'Add New Product' }}</h1>
    <form @submit.prevent="submitForm" enctype="multipart/form-data">

      <div>
        <label>Name:</label>
        <input v-model="product.name" type="text" required />
      </div>

      <div>
        <label>Description:</label>
        <textarea v-model="product.description" required></textarea>
      </div>

      <div>
        <label>Price:</label>
        <input v-model.number="product.price" type="number" step="0.01" required />
      </div>

      <div>
        <label>Image:</label>
        <input type="file" @change="handleFileUpload" />
        <div v-if="previewImage">
          <img :src="previewImage" alt="Preview" width="120" />
        </div>
        <div v-else-if="product.image">
          <img :src="imageUrl(product.image)" alt="Current Image" width="120" />
        </div>
      </div>

      <button type="submit">{{ isEdit ? 'Update' : 'Create' }}</button>
      <router-link to="/products"><button type="button">Cancel</button></router-link>

    </form>
  </div>
</template>

<script>
import axios from '@/axios'

export default {
  name: 'ProductForm',
  props: ['id'],
  data() {
    return {
      product: {
        name: '',
        description: '',
        price: null,
        image: null,
      },
      selectedFile: null,
      previewImage: null,
    }
  },
  computed: {
    isEdit() {
      return !!this.id
    }
  },
  mounted() {
    if (this.isEdit) {
      this.fetchProduct()
    }
  },
  methods: {
    fetchProduct() {
      axios.get(`/products/${this.id}`)
        .then(res => {
          this.product = res.data
        })
        .catch(err => {
          alert('Failed to load product: ' + err.message)
        })
    },
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0]
      this.previewImage = URL.createObjectURL(this.selectedFile)
    },
    submitForm() {
      const formData = new FormData()
      formData.append('name', this.product.name)
      formData.append('description', this.product.description)
      formData.append('price', this.product.price)
      if (this.selectedFile) {
        formData.append('image', this.selectedFile)
      }

      if (this.isEdit) {
        axios.post(`/products/${this.id}?_method=PUT`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
          .then(() => {
            alert('Product updated')
            this.$router.push('/products')
          })
          .catch(err => {
            alert('Update failed: ' + err.message)
          })
      } else {
        axios.post('/products', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
          .then(() => {
            alert('Product created')
            this.$router.push('/products')
          })
          .catch(err => {
            alert('Create failed: ' + err.message)
          })
      }
    },
    imageUrl(path) {
      return `http://localhost:8000/storage/${path}`
    }
  }
}
</script>
