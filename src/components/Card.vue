<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
  </div>

</template>

<script>
export default {
  props: {
    title: String,
    content: String,
  }
}
</script>

<style>
.card {
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  text-align:center;
  color: green;
}

</style>