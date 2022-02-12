<template>

      <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else v-for="user in users" :key="user.id" class="col-md-3">
          <UserCardView :user="user"/>
      </div>

</template>

<script>
import axios from 'axios'
import {ref} from 'vue'
import UserCardView from "@/components/users/cardView"
export default {
  components : {
    UserCardView
  },
  setup(){
    const users = ref([]);
    const loading = ref(true);
    async function getUsers (){
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        users.value = response.data;
        loading.value = false;
      }catch (error){
        console.log(error);
      }
    }
    getUsers()
    return {users, loading};
  }
}
</script>

<style scoped>

</style>