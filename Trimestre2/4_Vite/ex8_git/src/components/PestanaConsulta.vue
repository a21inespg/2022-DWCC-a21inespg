<script>
export default {
  data() {
    return {
      picked: "main",
      threeLast: [],
    };
  },
  methods: {
    async consultarCommits() {
      try {
        let response = await fetch(
          "https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=" +
            this.picked
        );
        this.threeLast = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.consultarCommits();
  },

  watch: {
    picked() {
      this.consultarCommits();
    },
  },
};
</script>

<template>
  <div style="float: left">
    <div>
      <input type="radio" id="main" value="main" v-model="picked" />
      <label for="main">Main</label>

      <input type="radio" id="3.2" value="3.2" v-model="picked" />
      <label for="3.2">3.2</label>
    </div>
    <div>
      <div v-for="(commit, index) in threeLast">
        <h2>Commit {{ index + 1 }}</h2>
        <ul>
          <li>
            {{ commit.commit.author.name }} - {{ commit.commit.author.email }}
          </li>
          <li>Date: {{ commit.commit.author.date }}</li>
          <li>Message: {{ commit.commit.message }}</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Nome, data e mensaxe -->
</template>
