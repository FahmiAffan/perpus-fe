<template>
  <div>
    <input
      type="file"
      name="file"
      id="file"
      class="input-file"
      accept=".png , .jpg , .jpeg"
      @change="changeinput"
    />
    <label for="file">
      <div v-if="file != null" class="ma-2">
        {{ file.name }}
      </div>

      <div v-else class="ma-2" style="color: #64748b">{{ label }}</div>
      <v-spacer></v-spacer>

      <div style="border-left: 1px solid #e1e7ec"></div>
      <v-icon class="px-2">mdi-tray-arrow-up</v-icon>
    </label>
  </div>
</template>

<script setup>
defineProps({
  file: {
    type: Blob,
    dafault: String,
  },
});
</script>

<style scoped>
.input-file {
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

.inputfile + .label {
  font-size: 1.25em;
  font-weight: 700;
  color: white;
  background-color: black;
  display: inline-block;
}

.inputfile:focus + .label,
.inputfile + label:hover {
  background-color: red;
}

.horizontal-shaking {
  animation: horizontal-shaking 0.5s ease-in-out 1;
}

@keyframes horizontal-shaking {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
