<template>
  <div class="w-full">
    <table class="table-auto w-full bg-white">
      <thead>
        <tr :style="`background-color: ${color} ;`">
          <th class="border-y text-left px-4 py-2" v-for="h in header" :key="h">
            {{ h }}
          </th>
        </tr>
      </thead>
      <slot name="body"> </slot>
    </table>
  </div>
</template>

<script setup>
defineProps({
  header: {
    type: Array,
  },
  color: String,
});
</script>
