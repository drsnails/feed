<template>
  <form @submit.prevent="onSubmit" class="add-form" action="">
    <input v-model="comment.email" class="email-input" type="email" />
    <textarea v-model="comment.msg" class="msg-input" name="" id="" cols="30" rows="10"></textarea>
    <section class="submit-section">
        <button>Submit</button>
    </section>
  </form>
</template>

<script>
export default {
  data() {
    return {
      comment: {
        email: '',
        msg: ''
      }
    };
  },

  methods: {
    onSubmit() {
      console.log("onSubmit -> this.comment", this.comment)
      this.$emit('add', this.comment)
    }
  },
};
</script>