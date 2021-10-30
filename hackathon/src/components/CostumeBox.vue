<template>
  <div class="box">
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "CostumeBox",
  props: {
    name: String,
    description: String,
  },
};
</script>

<style scoped>
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
