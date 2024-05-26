<template>
  <div>
    <input
      type="file"
      name="file"
      id="file"
      class="inputfile"
      accept=".png , .jpg , .jpeg"
      @change="handleFileInputChange"
    />
    <label for="file" class="flex border-[1px] rounded-lg border-[#bfbfbf]">
      <div class="grow-0 w-full  p-2">
        <div v-if="file != null" class="text-black">
          {{ file.name }}
        </div>

        <div v-else class="text-black text-[#64748b]">{{ label }}</div>
      </div>

      <div class="grow-1 flex justify-end w-full">
        <div style="border-left: 1px solid #e1e7ec"></div>
        <Icon name="mdi:tray-arrow-up" class="m-2 text-[#64748b]"></Icon>
      </div>
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  value: File, // or whatever type you need
  label: String,
});

const emit = defineEmits(["input"]);

const inputValue = ref(props.value);

const handleFileInputChange = (event) => {
  inputValue.value = event.target.value;
  console.log(event.target.value)
  emit("input", inputValue.value);
};
</script>

<style module lang="css">
.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.label {
  border: 1px solid #e1e7ec;
  border-radius: 8px;
  /* padding: 10px; */
  height: 40px;
  display: flex;
  width: 100% !important;
}
.error-label {
  border: 2px solid red;
  border-radius: 8px;
  /* padding: 10px; */
  height: 40px;
  display: flex;
  width: 100% !important;
}

.error-text {
  border: 2px solid red;
  border-radius: 4px;
  /* padding: 10px; */
  height: 40px;
  display: flex;
  padding-left: 10px;
  width: 100% !important;
  color: #64748b;
}

.input-text {
  border: 1px solid #e1e7ec;
  border-radius: 8px;
  /* padding: 10px; */
  height: 40px;
  display: flex;
  padding-left: 10px;
  width: 100% !important;
  color: #64748b;
}
</style>
