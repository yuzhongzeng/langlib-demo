<template>
  <div class="fi-layout">
    <div class="fi-layout__container">
      <div class="fi-layout__header">
        <Header />
      </div>
      <div class="fi-layout__body">
        <div class="fi-layout__left">
          <Sidebar />
        </div>
        <div class="fi-layout__right">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
export default {
  components: {
    Header,
    Sidebar
  }
};
</script>

<style lang="scss"></style>
