<template>
  <!--mode是模式的意思。有一个默认的模式。value是内容。-->
  <Editor
    :value="value"
    :mode="mode"
    :plugins="plugins"
    @change="handleChange"
  />
</template>

<script setup lang="ts">
import { Editor, Viewer } from "@bytemd/vue-next";
import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight";
import { ref, withDefaults, defineProps } from "vue";

//定义和父组件沟通的变量。
/**
 * 定义组件属性类型
 *
 */
interface Props {
  value: string;
  mode?: string;
  handleChange: (v: string) => void;
}

/**
 * 给组件属性制定初始值
 */
/*默认值 todo 为什么叫props？其实叫啥无所谓。这里只是定义了默认值。*/
const propss = withDefaults(defineProps<Props>(), {
  value: () => "123",
  mode: () => "split",
  handleChange: (v: string) => {
    console.log("v:", v);
  },
});

const plugins = [
  gfm(),
  highlight(),
  // Add more plugins here
];
</script>

<style>
.bytemd-toolbar-icon.bytemd-tippy.bytemd-tippy-right:last-child {
  display: none;
}
</style>
