<template>
  <div class="hello">
    <!-- value是设置值的意思，mdvalue的值，是有onMdChange进行修改。   -->
    <!-- 而 onMdChange则是有MdEditor里面的改变而调用。  -->
    <CodeEditor :value="codeValue" :handle-change="onCodeChange" />
    <MdEditor :value="mdValue" :handle-change="onMdChange" />
  </div>
</template>

<script setup lang="ts">
import MdEditor from "@/components/MdEditor.vue";
import CodeEditor from "@/components/CodeEditor.vue";

import { ref } from "vue";

const mdValue = ref();
const codeValue = ref();

const onMdChange = (v: string) => {
  mdValue.value = v;
  console.log("onMdChange,", v);
};

const onCodeChange = (v: string) => {
  codeValue.value = v;
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
