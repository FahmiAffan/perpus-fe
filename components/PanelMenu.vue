<template>
  <div
    class="rounded-lg bg-white border-gray-200 w-[164px] drop-shadow"
    v-if="menu"
  >
    <slot name="body" />
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "label",
  },
  iconName: {
    type: String,
    default: "mdi:eye-outline",
  },
  menu: {
    type: Boolean,
    default: false,
  },
});

let emits = defineEmits(["update:menu"]);

let isOpen = ref(props.menu);

function increment() {
  emits("update:menu", isOpen.value);
}
</script>
