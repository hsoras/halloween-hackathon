<template>
  <div>
    <h1>HALLOWEEN COSTUME RECOMMENDER</h1>
    <InputBox />
    <br /><br /><br />
    <CostumeBox
      name="baf"
      description="bafism is baf indeed poggers not poggers"
    />
    <CostumeBox name="hi" description="hello" />
    <CostumeBox name="hi" description="hello" />
    <CostumeBox name="hi" description="hello" />
    <CostumeBox name="hi" description="hello" />
    <CostumeBox name="hi" description="hello" />
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
