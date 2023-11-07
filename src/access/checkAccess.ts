import ACCESS_ENUM from "@/access/accessEnum";

const checkAccess = (loginUser: any, needAccess = ACCESS_ENUM.NOT_LOGIN) => {
  /*
     1. 首先看看这个权限是否是需要权限
     2. 首先看看这个账户的权限是否和需要的一致，如果一致，则直接true，否则返回false
    */
  //请注意，??是空值合并运算符，如果左侧表达式的结果是null或undefined，则返回右侧的值。?.是可选链运算符，用于避免在对象不存在的情况下出现错误。
  //如果loginUser不存在或者userRole为空，那么loginUserAccess将被赋值为ACCESS_ENUM.NOT_LOGIN。反之，则被赋值为loginUser.userRole的值。
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
  console.log(needAccess);
  if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
    return true;
  }
  //如果所需权限是用户权限，也就是需要登录
  if (needAccess === ACCESS_ENUM.USER) {
    if (loginUserAccess === ACCESS_ENUM.NOT_LOGIN) {
      return false;
    }
  }
  //如果所需权限是admin权限，也就是需要admin
  if (needAccess === ACCESS_ENUM.ADMIN) {
    if (loginUserAccess !== ACCESS_ENUM.ADMIN) {
      return false;
    }
  }
  return true;
};

export default checkAccess;
