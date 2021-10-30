<template>
  <div class="box">
    <p>Name: {{ name }}</p>
    <p>Review: {{ review }}</p>
  </div>
</template>

<script>
export default {
  name: "Box",
  props: {
    name: String,
    review: Number,
  },
};
</script>

<style scoped>
.box {
  background-color: #272533;
  color: #ff9136;
}
</style>
