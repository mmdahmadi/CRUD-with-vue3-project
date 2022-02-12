<template>
  <div v-if="pageLoading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else class="col-md-6">
    <h3>Edit Post :</h3>
    <PostForm @formData="updatePost" :button-loading="loading" :post="post" button-text="Edit"></PostForm>
  </div>
</template>

<script>
import PostForm from '@/components/posts/Form'
import {ref} from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'
import {useRoute} from "vue-router";

export default {
  components: {
    PostForm
  },
  setup() {
    const loading = ref(false);
    const pageLoading = ref(true);
    const route = useRoute();
    const post = ref({});

    async function getPost() {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        post.value = response.data;
        pageLoading.value = false;
      } catch (error) {
        console.log(error);
      }
    }

    getPost();

    async function updatePost(formData) {
      loading.value = true;
      try {
        await axios.put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
          id: route.params.id,
          title: formData.title,
          body: formData.body,
          userId: 1,
        });
        loading.value = false;
        Swal.fire({
          title: 'Thanks!',
          text: 'Post update successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      } catch (error) {
        console.log(error);
      }

    }

    return {post, updatePost, loading, pageLoading};
  }


}
</script>

<style scoped>

</style>