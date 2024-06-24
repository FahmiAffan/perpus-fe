<template>
  <label :for="props.name" class="text-[14px] mb-1 font-semibold">{{
    props.label
  }}</label>
  <Field
    type="string"
    :name="props.name"
    :id="props.name"
    v-if="props.type == 'pc'"
  >
    <Dropdown
      v-model="model"
      :options="props.opsi"
      :optionLabel="props.optionLabel"
      :placeholder="props.placeholder"
      :id="props.name"
      class="w-full md:w-14rem h-[39px] flex items-center border-[#bfbfbf] drop-shadow-none"
    />
  </Field>
  <Field
    v-slot="{ value }"
    :name="props.name"
    :id="props.name"
    as="select"
    v-if="props.type == 'single'"
    v-model="model"
    class="input p-2 w-full border-[1px] h-[39px] rounded-lg text-[#64748b] border-[#bfbfbf]"
  >
    <option value="" disabled>{{ props.placeholder }}</option>
    <option
      v-for="(i, index) in props.opsi"
      :key="index"
      :value="i"
      :selected="i == value"
      class="m-[72px]"
    >
      {{ i }}
    </option>
  </Field>
</template>

<script setup>
const props = defineProps({
  name: String,
  label: String,
  optionLabel: String,
  opsi: Array,
  placeholder: String,
  type: {
    type: String,
    default: "many",
  },
});

const model = defineModel();
const components = defineComponent(model);
</script>

<style>
.input:focus {
  outline: none !important;
  border: 1px solid #bfbfbf;
}
</style>
