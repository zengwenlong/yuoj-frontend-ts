<template>
  <div>
    <template v-if="route.path.startsWith('/user')">
      <router-view />
    </template>
    <template v-else>
      <BasicLayout />
    </template>
  </div>
</template>

<style></style>
<script setup>
import BasicLayout from "@/layouts/BasicLayout";
import { useRoute } from "vue-router";

const route = useRoute();
</script>
