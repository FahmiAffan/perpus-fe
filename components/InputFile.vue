<template>
  <div>
    <Field
      type="file"
      :name="props.name"
      class="inputfile"
      accept=".png , .jpg , .jpeg"
      v-model="model"
      :id="props.name"
    />
    <label :for="props.name" class="text-[14px] mb-1 font-semibold">{{
      props.label
    }}</label>
    <label
      :for="props.name"
      class="flex border-[1px] rounded-lg border-[#bfbfbf] cursor-pointer"
    >
      <div class="grow-0 w-full pl-3 p-2">
        <p class="text-black text-[#64748b]">
          {{ model == null ? props.placeholder : filenameOnChange }}
        </p>
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

let model = defineModel();
const components = defineComponent(model);

let handleFileInputChange = async (event) => {
  const files = event.target.files[0];
  const promise = new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (events) => {
      const file = events.target.result.split(",")[1];
      resolve(JSON.stringify(file));
    };
    reader.readAsDataURL(files);
  });

  await promise.then((res) => {
    model = res;
  });
};

const filenameOnChange = computed(() => {
  return model.value.name;
});
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
