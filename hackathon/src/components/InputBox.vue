<template>
  <div>
    <h2 id="title">Describe your ideal costume :)</h2>
    <div id="input-stuff">
      <form @submit="submitHandler">
        <input
          type="text"
          id="input"
          v-model="inputText"
          placeholder="Put space-separated adjectives Ex: blue scary"
        />
        <button id="button" type="submit">Enter</button>
      </form>
      <br /><br /><br />
      <!-- eslint-disable-next-line -->
      <div v-for="result in results">
        <div class="box">
          <p>{{ result }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import search from "../data/search";
//import data from "../data/data.json";
import search_tfidf from "../data/trialsearch"
// import CostumeBox from "./CostumeBox.vue";

export default {
  name: "InputBox",
  components: {
    // CostumeBox,
  },
  data() {
    return {
      inputText: "",
      results: [],
    };
  },
  methods: {
    submitHandler(e) {
      e.preventDefault();
      this.results = search_tfidf(this.inputText);
    },
  },
};
</script>


<style scoped>
html {
  text-align: center;
}
#title {
  color: #ff711f;
  margin-top: 5px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 35px;
}
#input-stuff {
  text-align: center;
}
#input {
  background-color: #272533;
  border-width: 2px;
  width: 60%;
  height: 50px;
  color: #ff711f;
  border: 3px dashed black;
  font-size: 35px;
  display: inline-block;
}
#prompt {
  display: inline-block;
}
#button {
  margin-left: 20px;
  position: relative;
  bottom: 4px;
  height: 50px;
  width: 100px;
  font-size: 20px;
  background-color: #a21622;
  border: 3px dashed black;
  color: #ff711f;
  transition-duration: 0.4s;
}
#button:hover {
  background-color: #ff711f;
  color: white;
  cursor: pointer;
}
.box {
  background-color: #272533;
  color: #ff9136;
  width: 99%;
  border: 1px solid #ff9136;
  padding-left: 10px;
  margin: 5px;
  font-weight: bold;
}
</style>