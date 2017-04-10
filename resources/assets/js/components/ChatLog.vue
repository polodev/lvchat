<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <h2>User inside chatroom {{users.length}}</h2>
        <div v-for="message in messages" class="message">
          <chat-message :message="message"></chat-message>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    props: ['messages', 'users']
  }
</script>
<style>
  .message:nth-child(even) {
    background-color: #DAE4F0;
  }
</style>