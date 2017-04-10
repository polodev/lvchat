<template>
<div>
  <p> {{ message.text }} <small> -{{ message.user.name }}</small> </p>
</div>
</template>
<script>
  export default {
    props: ['message']
  }
</script>
