<template>
    <div class="main">
      <v-breadcrumb :style="{ margin: '12px 0' }">
        <v-breadcrumb-item>SUPERIDX</v-breadcrumb-item>
        <v-breadcrumb-item href="">主页</v-breadcrumb-item>
      </v-breadcrumb>
      <div style="padding: 24px; background: #fff; height: calc(100% - 45px);">
        {{msg}}
      </div>
    </div>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style scoped>

</style>
