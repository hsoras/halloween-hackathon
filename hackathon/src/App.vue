<template>
  <div>
    <h1>HALLOWEEN COSTUME RECOMMENDER</h1>
    <InputBox />
  </div>
</template>

<script>
import InputBox from "./components/InputBox";

export default {
  name: "App",
  components: {
    InputBox,
  },
};
</script>
<style>
@font-face {
  font-family: "Halloween Morning";
  src: local("Halloween Morning"), url(./fonts/Halloween-Morning.ttf);
}
html {
  background-color: #16151d;
}
h1 {
  color: #a21622;
  background-color: #ff711f;
  text-align: center;
  padding: 20px;
  font-size: 50px;
  border-color: black;
  font-family: "Halloween Morning";
  margin-top: 0px;
}
</style>
