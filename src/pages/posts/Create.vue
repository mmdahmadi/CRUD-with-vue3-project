<template>
  <h3>Create Post :</h3>
  <div class="col-md-6">
    <PostForm @formData="createPost" :button-loading="loading" button-text="Create"></PostForm>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import {ref} from 'vue'
import PostForm from '@/components/posts/Form'

export default {
  components: {
    PostForm
  },
  setup() {
    const loading = ref(false);

    async function createPost(formData) {
      loading.value = true;
      try {
        await axios.post('https://jsonplaceholder.typicode.com/posts', {
          title: formData.title,
          body: formData.body,
          userId: 1,
        });

        loading.value = false;

        Swal.fire({
          title: 'Thanks!',
          text: 'Post created successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      } catch (error) {
        console.log(error);
      }

    }

    return {createPost, loading};
  }


}
</script>

<style scoped>

</style>