<script lang="ts" setup>
</script>

<template>
    <div class="sidebar">
        <div class="sidebar-item">Profile</div>
        <div class="sidebar-item">Settings</div>
        <div class="sidebar-item">Logout</div>
    </div>
</template>

<style scoped lang="scss">
.sidebar {
    width: 300px;
    height: 100vh;
    background-color: var(--sidebar-color);

    position: fixed;
    top: 0;
    bottom: 0;

    z-index: 3;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    .sidebar-item {
        cursor: pointer;
        color: var(--link-mute);

        font-size: 30px;

        transition: all 0.3s;

        &:hover {
            color: var(--vt-c-white);
            text-shadow: 0 0 6px #c5aeae;
        }
    }
}
</style>