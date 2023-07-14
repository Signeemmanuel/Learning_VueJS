<template>
  <div class="flex flex-col w-full">
    <h1 class="w-full text-center text-3xl my-4">Markdown</h1>
    <section class="flex m-auto w-10/12 h-screen">
      <article class="w-1/2 border">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          class="h-full w-full p-4"
          @input="update"
        ></textarea>
      </article>
      <article
        class="w-1/2 p-4 bg-gray-100 border"
        v-html="markdownToHtml"
      ></article>
    </section>
  </div>
</template>

<script>
import { marked } from "marked";
import debounce from "../utilities/mixins/debounce";
export default {
  name: "MarkdownApp",
  mixins: [debounce],
  data() {
    return {
      markdown: "",
    };
  },
  computed: {
    markdownToHtml() {
      return marked(this.markdown);
    },
  },
  methods: {
    update(e) {
      let task = () => {
        this.markdown = e.target.value;
      };
      this.debounce(task, 500);
    },
  },
};
</script>

<style></style>
