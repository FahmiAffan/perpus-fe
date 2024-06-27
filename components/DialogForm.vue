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

      <Form
        ref="formRef"
        :validation-schema="validationSchema"
        @submit="submit"
      >
        <slot name="body"></slot>
        <div class="flex justify-end">
          <Button
            type="submit"
            label="Tambah"
            class="w-[83px] h-[39px] flex justify-center"
            >{{ props.tipe == "tambah" ? "Tambah" : "Simpan" }}</Button
          >
        </div>
      </Form>
    </Dialog>
  </div>
</template>

<script setup>
let self = useNuxtApp();
import * as zod from "zod";

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
  tipe: {
    type: String,
    // default: "tambah",
  },
  containImage: {
    type: Boolean,
    default: false,
  },
  schema: Object,
});

let emits = defineEmits(["update:dialog", "refresh-data"]);

const formRef = ref(null);

let isOpen = ref(props.dialog);

async function refreshData() {
  emits("refresh-data");
}

function increment() {
  emits("update:dialog", isOpen.value);
}

// let datas = watchForm.value.map((x) => {
//   return x;
// });

async function submit(value) {
  if (props.tipe == "edit") {
    if (props.containImage == false) {
      const idName = Object.keys(state().selectedData)[0];
      updateData(`/${props.api}/`, state().selectedData[idName], value).then(
        async (res) => {
          await formRef.value.resetForm();
          increment();
          refreshData();
        }
      );
    }

    if (props.containImage == true) {
      const promise = new Promise((resolve, reject) => {
        Object.keys(value).forEach(async (key, index) => {
          if (value["image"]) {
            const files = value["image"];
            const reader = new FileReader();
            reader.onload = (events) => {
              resolve(events.target.result);
            };
            reader.readAsDataURL(files);
          }
        });
      });

      await promise.then(async (res) => {
        value["image"] = await res;
      });

      const idName = Object.keys(state().selectedData)[0];
      updateData(`/${props.api}/`, state().selectedData[idName], value).then(
        async (res) => {
          console.log(res);
          await formRef.value.resetForm();
          increment();
          refreshData();
        }
      );
    }
  }
  if (props.tipe == "tambah") {
    if (props.containImage == false) {
      postData(`/${props.api}`, value).then(async (res) => {
        console.log(res);
        await formRef.value.resetForm();
        increment();
        refreshData();
      });
    }
    if (props.containImage == true) {
      const promise = new Promise((resolve, reject) => {
        Object.keys(value).forEach(async (key, index) => {
          if (value["image"]) {
            const files = value["image"];
            const reader = new FileReader();
            reader.onload = (events) => {
              // const file = events.target.result.split(",")[1];
              resolve(events.target.result);
            };
            reader.readAsDataURL(files);
          }
        });
      });

      await promise.then(async (res) => {
        value["image"] = await res;
      });

      postData(`/${props.api}`, value).then(async (res) => {
        console.log(res);
        await formRef.value.resetForm();
        increment();
        refreshData();
      });
    }
  }
}

const validationSchema = toTypedSchema(zod.object(props.schema));
</script>
