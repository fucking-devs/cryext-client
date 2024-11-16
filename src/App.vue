<script setup lang="ts">
import { RouterView } from 'vue-router'
import ProfileIcon from './components/ProfileIcon.vue'
import SideBar from './components/SideBar.vue';
import { useSidebarStore } from '@/stores/sidebarStore'
import HomeView from './views/HomeView.vue';


const sidebarStore = useSidebarStore()
</script>

<template>
  <header>
    <div class="burger" @click="sidebarStore.isOpen = !sidebarStore.isOpen"></div>
    <div class="logotype">Cryext</div>
    <ProfileIcon :size="64" />
  </header>
 <HomeView></HomeView>
  <SideBar :class="{ isOpen: sidebarStore.isOpen }"/>
  
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
  padding: 0 120px;

  height: 90px;
  background-color: #333;

  .burger {
    width: 52px;
    height: 52px;

    background-image: url('./assets/burger.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 60%;

    border-radius: 6px;
    box-shadow: 0 0 10px #fff;

    position: absolute;
    left: 30px;

    cursor: pointer;

    &:active {
      box-shadow: 0 0 2px #fff;
    }
  }

  .logotype {
    font-size: 32px;
    font-weight: bold;
    color: white;
  }
} 

.sidebar {
  position: fixed;
  top: 0;
  left: -300px;
  bottom: 0;
  z-index: 3;
  
  transition: 0.5s all;
}

.isOpen {
  left: 0;
}
</style>