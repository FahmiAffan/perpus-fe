<template>
  <div>
    <!-- <InputDate></InputDate> -->

    <Form @submit="onSubmitt" :validation-schema="schema" ref="forms">
      <!-- <Field type="text" name="no" /> -->
      {{ form.val }}
      {{ form.val2 }}

      <InputString v-model="form.val" name="no" />
      <InputString v-model="form.val2" name="noo" />
      <InputNomor v-model="form.val3" name="nooo" />
      <!-- <Field type="text" v-model="form.noo"></Field>
      <Field type="text" v-model="form.nooo"></Field> -->
      <button>submit</button>
    </Form>
  </div>
</template>

<script setup>
import * as zod from "zod";

const dialogDate = ref(true);

const forms = ref(null);

const schema = toTypedSchema(
  zod.object({
    no: zod.string().min(1, { message: "required" }),
    noo: zod.string().min(1, { message: "required" }),
    nooo: zod
      .number({ message: "Harus Nomor" })
      .min(1, { message: "required" }),
  })
);

const form = ref({
  val: "",
  val2: "",
  val3: "",
});

const onSubmitt = (value) => {
  // alert(JSON.stringify(value));
  console.log(value);
  console.log(forms.value);
  forms.value.resetForm();
};
</script>
