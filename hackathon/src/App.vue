<template>
  <div>
    <h1> halloween costume recommender </h1>
    <InputBox />
    <CostumeBox name="baf" :review="42" />
    <CostumeBox name="hi" :review="96" />
  </div>
</template>

<script>
import CostumeBox from "./components/CostumeBox";
import InputBox from "./components/InputBox";

export default {
  name: "App",
  components: {
    CostumeBox,
    InputBox,
  },
};
</script>
<style>
@font-face {
  font-family: "Halloween Morning";
  src: local("Halloween Morning"), 
  url(./fonts/Halloween-Morning.ttf);
}
html {
  background-color: #16151d;
}
h1 {
  color: #A21622;
  background-color: #ff711f;
  text-align: center;
  padding: 20px;
  font-size: 50px;
  border-color: black;
  font-family: "Halloween Morning";
  margin-top: 0px;
}
</style>
