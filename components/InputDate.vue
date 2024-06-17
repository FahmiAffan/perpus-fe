<template>
  <div
    class="cursor-pointer relative flex p-2 w-full border-[1px] h-[39px] rounded-lg text-[#64748b] border-[#bfbfbf]"
    @click="openDialog"
  >
    <div class="flex grow-0 w-full">
      <Icon name="ic:baseline-calendar-month" class="mr-2"></Icon>
      <p class="cursor-pointer">{{ label }}</p>
    </div>
    <div class="grow-1 w-full flex justify-end">
      <Icon name="mdi:chevron-down" class="mr-2"></Icon>
    </div>
    <slot name="body" />
  </div>
  <Calendar
    inline
    dateFormat="dd/mm/yy"
    showWeek
    v-if="dialog"
    class="absolute w-full"
    v-model="values"
    @date-select="handleInput"
  >
    <template #footer>
      <div class="flex justify-end">
        <Button size="small" @click="dialog = !dialog">Selesai</Button>
      </div>
    </template>
  </Calendar>

  <!-- <input type="date" id="date" :value="props.value" v-on:input="handleInput" />
  <label
    for="date"
    @click="openDialog"
    class="p-2 w-full border-[1px] h-[39px] rounded-lg text-[#64748b] border-[#bfbfbf]"
    >Date</label
  >
  {{ dialog }}
  <Calendar v-if="dialog" inline dateFormat="dd/mm/yy" showWeek></Calendar> -->
</template>

<script setup>
const props = defineProps({
  value: {
    type: String,
  },
  label: {
    type: String,
    default: "Tanggal",
  },
});

let values = ref();

let dialog = ref(true);

let openDialog = () => {
  // dialog = !dialog;
  console.log("wawdea");
};

// const handleClick = () => {
//   const datePickerInput = document.getElementById("date");
//   datePickerInput.click();
// };

const emit = defineEmits(["update:modelValue"]);
const handleInput = (event) => {
  // emit("update:modelValue", event.target.value);
  console.log(event.target);
};
</script>

<style scoped></style>
