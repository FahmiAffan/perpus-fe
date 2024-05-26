<template>
  <div
    class="flex items-center p-3 hover:bg-gray-100 cursor-pointer"
    @click="increment()"
  >
    <Icon :name="iconName" class="mr-5 text-[#64748B]" size="24px"></Icon>
    <p class="text-[16px] font-semibold text-[#64748B]">{{ label }}</p>
  </div>
</template>

<script setup>
let props = defineProps({
  label: {
    type: String,
    default: "label",
  },
  iconName: {
    type: String,
    default: "mdi:eye-outline",
  },
});

</script>
