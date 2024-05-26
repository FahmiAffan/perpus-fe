<template>
  <div>
    <Icon
      name="mdi:dots-vertical"
      class="text-black rounded-full p-1 bg-white hover:bg-gray-200"
      size="30"
      @click="increment()"
    ></Icon>
    <div
      class="rounded-lg bg-white border-gray-200 w-[164px] drop-shadow"
      v-if="menu"
    >
      <div
        class="flex items-center p-3 hover:bg-gray-100 cursor-pointer"
        v-for="i in items"
        :key="i"
        @click="i.function"
      >
        <Icon :name="i.iconName" class="mr-5 text-[#64748B]" size="24px"></Icon>
        <p class="text-[16px] font-semibold text-[#64748B]">{{ i.label }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  //   label: {
  //     type: String,
  //     default: "label",
  //   },
  //   iconName: {
  //     type: String,
  //     default: "mdi:eye-outline",
  //   },
  menu: {
    type: Boolean,
    default: false,
  },
  items: {
    type: Array,
  },
});

let emits = defineEmits(["update:menu"]);

let isOpen = ref(props.menu);

function increment() {
  emits("update:menu", isOpen.value);
}
</script>
