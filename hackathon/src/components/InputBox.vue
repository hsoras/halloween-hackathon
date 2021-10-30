<template>
  <div>
    <h2 id="title">Describe your ideal costume :)</h2>
    <div id="input-stuff">
      <form @submit="submitHandler">
        <input
          type="text"
          id="input"
          v-model="inputText"
          placeholder="Put comma-separated adjectives Ex: blue, scary"
        />
        <button id="button" type="submit">Enter</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputBox",
  data() {
    return {
      inputText: "",
    };
  },
  methods: {
    submitHandler(e) {
      e.preventDefault();
      console.log(this.inputText);
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
</style>