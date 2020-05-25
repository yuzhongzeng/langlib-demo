<template>
  <div class="fi-header header">
    <div class="fi-header__left">
      <div class="header-logo"></div>
      <div class="header-name">多语言库管理平台</div>
    </div>
    <div class="fi-header__right">
      <div class="header-user-info">
        <img class="img" src="@/assets/images/temp/user-img.jpg" alt="" />
        <span class="txt">浑水摸鱼</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  .header-logo {
    margin: 0 px2rem(10px) 0 px2rem(20px);
    width: px2rem(100px);
    height: px2rem(40px);
    background-color: #999;
  }
  .header-name {
    font-size: px2rem(22px);
    color: #fff;
  }
  .header-user-info {
    display: flex;
    align-items: center;
    padding: 0 px2rem(20px);
    height: 100%;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    .img {
      margin-right: px2rem(10px);
      width: px2rem(35px);
      height: px2rem(35px);
      border-radius: 50%;
    }
    .txt {
      font-size: px2rem(16px);
      color: #fff;
    }
  }
}
</style>
