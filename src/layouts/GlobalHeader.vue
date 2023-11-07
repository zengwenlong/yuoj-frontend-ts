<template>
  <!-- :selected-keys对应到：key，然后进行高亮设置 比如，key为home的-->
  <!-- default-selected-keys表示默认选择的key，这里写1不是很贴切 -->
  <a-row id="globalHeader" align="center" :wrap="false">
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKeys"
        @menu-item-click="doMenuClick"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-bar">
            <img class="logo" src="../assets/logo.png" />
            <div class="title">鱼 OJ</div>
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in visibleRoutes" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div>
        {{ store.state.user.loginUser.userName ?? "未登录" }}
      </div>
    </a-col>
  </a-row>
</template>
<script setup lang="ts">
import { routes } from "@/router/routes";

import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import checkAccess from "@/access/checkAccess";

const selectedKeys = ref(["/"]);
const router = useRouter();
const store = useStore();

const visibleRoutes = computed(() => {
  return routes.filter((item) => {
    //如果要求隐藏的，直接隐藏
    if (item.meta?.hideInMenu) {
      return false;
    }
    //如果没有权限的，也不要现实
    // 根据权限过滤菜单
    if (!checkAccess(store.state?.user?.loginUser, item?.meta?.access)) {
      return false;
    }
    return true;
  });
});

router.beforeEach((to) => {
  selectedKeys.value = [to.path];
});

const doMenuClick = (key) => {
  router.push({
    path: key,
  });
};
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: #4444;
  margin-left: 16px;
}

.logo {
  width: 40px;
  height: 40px;
}

.menu-demo {
  box-sizing: border-box;
  width: 100%;
  padding: 40px;
  background-color: var(--color-neutral-2);
}
</style>
