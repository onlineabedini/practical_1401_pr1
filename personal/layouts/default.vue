<template>
    <div>
        <app_header></app_header>
        <Nuxt />
    </div>
</template>

<script>
import app_header from '@/components/header/header.vue'

export default {
components: {
    app_header
  }
};
</script>

<style scoped>

</style>
