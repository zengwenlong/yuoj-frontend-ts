<template>
  <div id="basicLayout">
    <!-- 动态更换 -->
    <a-layout style="min-height: 100vh">
      <!-- 头：导航栏 -->
      <a-layout-header>
        <GlobalHeader />
      </a-layout-header>
      <!-- 体：可变化的 -->
      <a-layout-content>
        <router-view />
      </a-layout-content>
      <!-- 尾 -->
      <a-layout-footer class="footer">
        <a href="https://yupi.icu" target="_blank">
          编程导航知识星球 by 程序员鱼皮
        </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import GlobalHeader from "@/layouts/GlobalHeader";

export default {
  components: { GlobalHeader },
};
</script>

<style scoped>
#basicLayout {
}

#basicLayout .header {
  margin-bottom: 16px;
  box-shadow: #eee 1px 1px 5px;
}

#basicLayout .content {
  background: linear-gradient(to right, #fefefe, #fff);
  margin-bottom: 16px;
  padding: 20px;
}

#basicLayout .footer {
  background: #efefef;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
