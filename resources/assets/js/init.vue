<template>
  <div>
    
  </div>
</template>
<script>
  export default {
    created () {
      axios.get('/get_auth_user').then((response) => {
        this.$store.commit('setAuthUser', response.data);
      })
    }
  }
</script>