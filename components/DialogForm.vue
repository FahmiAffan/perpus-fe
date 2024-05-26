<template>
  <div>
    <Dialog :visible="dialog" :closable="false" style="width: 572px" modal>
      <template #header>
        <div class="flex items-center w-full">
          <div class="flex grow-0">
            <h1 class="text-[32px] text-black font-bold">{{ header }}</h1>
            <h1>{{ subtitle }}</h1>
          </div>
          <div class="grow text-right">
            <Icon
              name="mdi:close"
              class="text-gray-500 bg-[#E5E5E5] p-1 rounded-full hover:bg-[#EEEEEE] transition"
              size="27px"
              @click="increment"
            ></Icon>
          </div>
        </div>
      </template>
      <form id="form" ref="form">
        <slot name="body"></slot>
      </form>
      <div class="flex justify-end">
        <Button
          type="button"
          label="Tambah"
          @click="resetForm"
          class="w-[83px] h-[39px] flex justify-center"
          >Tambah</Button
        >
      </div>
    </Dialog>
  </div>
</template>

<script setup>
let self = useNuxtApp();

let props = defineProps({
  dialog: {
    type: Boolean,
    default: false,
  },
  header: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
  api: {
    type: String,
    default: "",
  },
  formBody: Array,
});

let emits = defineEmits(["update:dialog", "submit:form"]);

let isOpen = ref(props.dialog);
let watchForm = ref(props.formBody);

const form = ref();
async function resetForm() {
  // form.value.reset();
  emits("submit:form")
}

function increment() {
  emits("update:dialog", isOpen.value);
}

let formData = new FormData();

// let datas = watchForm.value.map((x) => {
//   return x;
// });

function submit() {
  self.$axios.post("/", formData);
}
</script>
