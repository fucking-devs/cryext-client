<script setup lang="ts">
import { RouterView } from 'vue-router'
import ProfileIcon from './components/ProfileIcon.vue'
import SideBar from './components/SideBar.vue';
</script>

<template>
  <header>
    <div class="logotype">Cryext</div>
    <ProfileIcon :size="64" />
  </header>

  <SideBar />

  <RouterView />
</template>

<style>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;

  height: 90px;
  background-color: #333;

  .logotype {
    font-size: 32px;
    font-weight: bold;
    color: white;
  }
}
</style>
