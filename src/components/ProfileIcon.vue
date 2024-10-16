<script lang="ts" setup>
defineProps({
    size: {
        type: Number,
        default: 32
    },
    url: {
        type: String,
        default: 'http://localhost:5173/base-avatar.png'
    }
})
</script>

<template>
    <div class="avatar">
        <div class="image" :style="{
            width: size + 'px',
            height: size + 'px',
            backgroundImage: `url(${url})`
        }"></div>
    </div>
</template>

<style scoped lang="scss">
.avatar {
    display: flex;
    cursor: pointer;

    .image {
        background-size: cover;
        background-position: center;
        border-radius: 50%;
    }
}
</style>