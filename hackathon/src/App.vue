<template>
  <div>
    <CostumeBox name="baf" :review="42" />
    <CostumeBox name="hi" :review="96" />
  </div>
</template>

<script>
import CostumeBox from "./components/CostumeBox";

export default {
  name: "App",
  components: {
    CostumeBox,
  },
};
</script>
<style>
html {
  background-color: #16151d;
}
</style>
