<template>
  <div class="feed">
    <!-- <h1>This is an about page</h1> -->
    <add-form @add="addComment" />
    <section class="comments">
      <filter-feed @change="onChange" />
      <feed-list :comments="comments" />
    </section>
  </div>
</template>

<script>
import FilterFeed from "../components/FilterFeed.vue";
import FeedList from "../components/FeedList.vue";
import AddForm from "../components/AddForm.vue";
import { commentService } from "../services/commentService.js";
export default {
  data() {
    return {
      comments: [],
    };
  },

  components: { AddForm, FeedList, FilterFeed },
  created() {
    this.loadComments();
  },

  methods: {
    async loadComments(filter='') {
      const comments = await commentService.query(filter);
      this.comments = comments
    },

    async addComment(comment) {
      await commentService.save(comment)
    this.loadComments()
    },

    async onChange(filter) {
      this.loadComments(filter)
    }
  },
};
</script>
