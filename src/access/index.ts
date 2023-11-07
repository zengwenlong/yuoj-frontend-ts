import ACCESS_ENUM from "@/access/accessEnum";
import router from "@/router";
import store from "@/store";
import checkAccess from "@/access/checkAccess";

/**
 * 自动登录的功能：访问下一个页面之前
 * 1. 如果没有登录过，那么
 */
router.beforeEach(async (to, from, next) => {
  let loginUser = store.state.user.loginUser;
  //如果之前没有登录过，那么执行自动登录，看是否可以通过
  if (!loginUser || !loginUser.userRole) {
    await store.dispatch("user/getLoginUser");
    loginUser = store.state.user.loginUser;
  }
  //判断下一个页面，当前的账户的权限是否有资格进入
  //判断下一个页面的权限是否为空
  const needAccess = (to.meta.access as string) ?? ACCESS_ENUM.NOT_LOGIN; //获得下一个页面的权限
  //如果下一个页面都是需要登录的
  if (needAccess !== ACCESS_ENUM.NOT_LOGIN) {
    //如果有一个为空的，
    if (
      !loginUser ||
      !loginUser.userRole ||
      loginUser.userRole === ACCESS_ENUM.NOT_LOGIN
    ) {
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    }
    // 如果已经登陆了，但是权限不足，那么跳转到无权限页面
    if (!checkAccess(loginUser, needAccess)) {
      next("/noAuth");
      return;
    }
  }
  next();
});
