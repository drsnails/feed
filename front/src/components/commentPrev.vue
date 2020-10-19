<template>
  <section class="comment-prev">
    <section class="img-container">
      <img :src="getMailHash" alt="" />
    </section>
    <section class="titles">
      <p class="email-title">{{ comment.email }}</p>
      <p class="msg-title">{{ comment.msg }}</p>
    </section>
  </section>
</template>

<script>
var md5 = require("md5");

export default {
  data() {
    return {};
  },
  computed: {
    getMailHash() {
      const emailHash = md5(this.comment.email);
      // return `https://www.gravatar.com/avatar/ssss`;
      return `https://www.gravatar.com/avatar/${emailHash}`;
    },
  },

  props: ["comment"],
};
</script>