<template>
  <label :for="props.label" class="text-[14px] font-semibold">{{
    props.label
  }}</label>
  <div
    :class="`${
      props.disabled == true ? 'cursor-pointer' : 'cursor-default'
    } relative flex p-2 w-full border-[1px] h-[39px] rounded-lg text-[#64748b] border-[#bfbfbf]`"
    @click="props.disabled != true ? (dialog = !dialog) : null"
  >
    <div class="flex grow-0 w-full">
      <Icon name="ic:baseline-calendar-month" class="mr-2"></Icon>
      <!-- <p>
        {{
          values == null
            ? props.placeholder
            : new Intl.DateTimeFormat("id-ID").format(values)
        }}
      </p> -->
      <Field :name="props.name" class="hidden" v-model="values">
        <p>
          {{
            values == null
              ? props.placeholder
              : new Intl.DateTimeFormat("id-ID").format(values)
          }}
        </p>
      </Field>
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
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
  },
  label: {
    type: String,
    default: "Text",
  },
  placeholder: {
    type: String,
    default: "Input Tanggal",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

let dialog = ref(false);

const values = defineModel();
const components = defineComponent(values);

const emit = defineEmits(["update:modelValue"]);
const handleInput = (event) => {
  // emit("update:modelValue", event.target.value);
  console.log(event.target);
};
</script>

<style scoped></style>
