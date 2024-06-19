<template>
  <div>
    <Field
      type="file"
      :name="props.name"
      :id="props.name"
      class="inputfile"
      accept=".png , .jpg , .jpeg"
      @change="handleFileInputChange"
      v-model="model"
    />
    <p class="text-[14px] mb-1 font-semibold">{{ props.label }}</p>
    <label
      :for="props.name"
      class="flex border-[1px] rounded-lg border-[#bfbfbf] cursor-pointer"
    >
      <div class="grow-0 w-full pl-3 p-2">
        <p class="text-black text-[#64748b]">{{ props.placeholder }}</p>
        <p>{{ model }}</p>
      </div>

      <div class="grow-1 flex justify-end w-full">
        <div style="border-left: 1px solid #e1e7ec"></div>
        <Icon name="mdi:tray-arrow-up" class="m-2 text-[#64748b]"></Icon>
      </div>
    </label>
    <ErrorMessage :name="props.name" v-slot="{ message }">
      <p class="text-red-600">
        {{ message }}
      </p>
    </ErrorMessage>
  </div>
</template>

<script setup>
const props = defineProps({
  // value: File, // or whatever type you need
  label: String,
  placeholder: String,
  name: String,
});

// const emit = defineEmits(["input"]);

let model = defineModel();
const components = defineComponent(model);

// const inputValue = ref(props.value);

const handleFileInputChange = (event) => {
  // inputValue.value = event.target.value;
  console.log(event.target.value);
  model = event.target.value;
  // emit("input", inputValue.value);
};
</script>

<style lang="css">
.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
  display: none;
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
