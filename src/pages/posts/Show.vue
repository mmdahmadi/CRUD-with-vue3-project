<template>

  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else class="col-md-6">
    <div class="card">
      <div class="card-header">
        {{ post.title }}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Body : {{ post.body }}</li>
      </ul>
      <div class="card-footer">
        <button @click="deletePost" class="btn btn-sm btn-danger me-3">Delete</button>
        <router-link class="btn btn-sm btn-dark" :to="{ name : 'editPost', params : {id : post.id} }">Edit</router-link>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
import {ref} from 'vue'
import {useRoute} from 'vue-router'
import Swal from "sweetalert2";


export default {
  setup() {
    const post = ref({});
    const loading = ref(true);
    const route = useRoute();

    async function getPost() {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        post.value = response.data;
        loading.value = false;
      } catch (error) {
        console.log(error);
      }
    }

    getPost()

    async function deletePost() {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        Swal.fire({
          title: 'Thanks!',
          text: `Post (${route.params.id}) deleted successfully`,
          icon: 'warning',
          confirmButtonText: 'Cool'
        })
      } catch (error) {
        console.log(error);
      }
    }

    return {post, loading, deletePost};
  }
}
</script>

<style scoped>

</style>