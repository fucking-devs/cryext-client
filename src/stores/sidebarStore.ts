import { defineStore } from "pinia"
import { ref } from "vue"

export const useSidebarStore = defineStore('sidebar', () => {
    const isOpen = ref(false)

    return {
        isOpen
    }
})