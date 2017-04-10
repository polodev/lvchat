<template>
<div class="container">
  <hr>
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <div class="compose">
        <input @keyup.enter="sendMessage" v-model="chatMessage" type="text" class="form-control">
        <button @click="sendMessage" class="btn btn-primary">Send</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  export default {
    data () {
      return {
        chatMessage: ''
      }
    },
    methods: {
      sendMessage () {
        Event.fire('sendMessage', {
          text: this.chatMessage,
          user: this.$store.getters.getAuthUser
        });
        axios.post('/messages', {
          text: this.chatMessage
        })
        this.chatMessage = '';
      }
    }
  }
</script>
<style>
.compose {
  display: flex;
}
.compose input {
  flex: 1;
  border-radius: 0;
}
.compose button.btn {
  border-radius: 0;
}
</style>