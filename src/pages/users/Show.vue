<template>

      <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="col-md-3">
        <UserCardView :user="user"/>
      </div>

</template>

<script>
import axios from 'axios'
import {ref} from 'vue'
import { useRoute } from 'vue-router'
import UserCardView from "@/components/users/cardView"

export default {
  components : {
    UserCardView
  },
  setup(){
    const user = ref({});
    const loading = ref(true);
    const route = useRoute();
    async function getUser (){
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
        user.value = response.data;
        loading.value = false;
      }catch (error){
        console.log(error);
      }
    }
    getUser()
    return {user, loading};
  }
}
</script>

<style scoped>

</style>