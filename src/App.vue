<template>
  <v-app>
    <app-camera />
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({}),
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  outline: none;
  scroll-margin: none;
  box-sizing: border-box;
  background-color: transparent !important;
}
*::-webkit-scrollbar {
  display: none;
}
</style>