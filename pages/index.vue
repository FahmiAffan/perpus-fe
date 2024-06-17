<template>
  <div>
    <NavBar></NavBar>
    {{ data.user }}
    {{ Object.keys(data.user).length == 0 }}
  </div>
</template>

<script setup>
const data = state();

</script>
