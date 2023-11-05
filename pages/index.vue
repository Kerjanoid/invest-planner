<template>
  <h1>TITLE</h1>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();

console.log(appConfig.theme.colors);
</script>
