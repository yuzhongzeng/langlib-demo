<template>
  <div class="fi-sidebar">
    <el-menu
      :default-active="defaultActive"
      active-text-color="#ff6f20"
      :router="true"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="icon-menu icon-system"></i>
          <span>项目管理</span>
        </template>
        <el-menu-item index="/project/list">项目列表</el-menu-item>
        <el-menu-item index="/project/pagelist">项目分页列表</el-menu-item>
        <el-menu-item index="/project/pageDetail">项目分页详情</el-menu-item>
        <el-menu-item index="/basic/currencyList">我的项目</el-menu-item>
        <el-menu-item index="/basic/platformKey">平台密钥</el-menu-item>
        <el-menu-item index="/basic/merchantPublicKey">商家公钥</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="icon-menu icon-system"></i>
          <span>多语言管理</span>
        </template>
        <el-menu-item index="/lang">语言列表</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="icon-menu icon-system"></i>
          <span>管理员</span>
        </template>
        <el-menu-item index="/basic/merchantInfo1">用户管理</el-menu-item>
        <el-menu-item index="/basic/currencyList1">角色管理</el-menu-item>
      </el-submenu>

      <!-- <el-menu-item
        index="1"
        @click="openPage('/partnerManage')"
        :class="{ active: defaultActive == 6 }"
      >
        <i class="el-icon-postcard"></i>
        <span slot="title">合伙人申请管理</span>
      </el-menu-item>

      <el-menu-item
        index="7"
        @click="openPage('/adminManage')"
        :class="{ active: defaultActive == 7 }"
      >
        <i class="el-icon-user"></i>
        <span slot="title">账号管理</span>
      </el-menu-item>

      <el-submenu index="8" :class="{ active: defaultActive == 8 }">
        <template slot="title">
          <i class="el-icon-data-analysis"></i>
          <span>微信数据管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            index="8-1"
            @click="openPage('/weixinManage/orderList')"
            :class="{ active: defaultActive == '8-1' }"
          >
            <span slot="title">下单数据管理</span>
          </el-menu-item>
          <el-menu-item
            index="8-2"
            @click="openPage('/weixinManage/engineerList')"
            :class="{ active: defaultActive == '8-2' }"
          >
            <span slot="title">合伙数据管理</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultActive: "/project/list"
    };
  },
  mounted() {},
  methods: {
    openPage(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style></style>
