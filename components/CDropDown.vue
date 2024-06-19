<template>
  <Field type="string" :name="props.name" :id="props.name">
    <Dropdown
      v-model="model"
      :options="props.opsi"
      :optionLabel="props.optionLabel"
      :placeholder="props.placeholder"
      class="w-full md:w-14rem h-[39px] flex items-center border-[#bfbfbf] drop-shadow-none"
    />
  </Field>
</template>

<script setup>
const props = defineProps({
  name: String,
  label: String,
  optionLabel: String,
  opsi: Array,
  placeholder: String,
});

const model = defineModel();
const components = defineComponent(model);
</script>
