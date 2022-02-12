<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </p>
        <router-link class="btn btn-dark" :to="{ name : 'users' }">Users</router-link>
        <router-link class="btn btn-light ms-2" :to="{ name : 'posts' }">Posts</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : 'Home'
}
</script>

<style scoped>

</style>