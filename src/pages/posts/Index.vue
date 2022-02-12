<template>
  <div>
    <router-link class="btn btn-dark" :to="{ name : 'createPost' }">Create Post</router-link>
  </div>

      <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else v-for="post in posts" :key="post.id" class="col-md-4">
        <div class="card">
          <div class="card-header">
            <router-link :to="{ name : 'postId', params : { id : post.id } }">{{ post.title }}</router-link>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">UserName : {{ post.body }}</li>
          </ul>
        </div>
      </div>

</template>

<script>

import axios from 'axios'
import {ref} from 'vue'

export default {
  setup(){
    const posts = ref([]);
    const loading = ref(true);
    async function getPosts (){
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        posts.value = response.data;
        loading.value = false;
      }catch (error){
        console.log(error);
      }
    }
    getPosts()
    return {posts, loading};
  }
}
</script>

<style scoped>

</style>